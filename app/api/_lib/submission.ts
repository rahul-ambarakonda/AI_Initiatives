import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'node:fs/promises';
import path from 'node:path';

const demoRequestSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    company: z.string().min(1, 'Company name is required'),
    project: z.string().min(1).optional(),
    projectOfInterest: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    message: z.string().min(1).optional(),
  })
  .superRefine((value, ctx) => {
    if (!value.project && !value.projectOfInterest) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['project'],
        message: 'Please choose a project of interest',
      });
    }

    if (!value.description && !value.message) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['description'],
        message: 'Please add a short description',
      });
    }
  });

const backendBaseUrl = (
  process.env.BACKEND_API_URL ?? 'http://localhost:3001'
).replace(/\/$/, '');

const localSubmissionsFile = path.join(
  process.cwd(),
  'data',
  'demo-submissions.json'
);

async function saveLocalSubmission(data: {
  name: string;
  email: string;
  company: string;
  project: string;
  description: string;
}) {
  await fs.mkdir(path.dirname(localSubmissionsFile), { recursive: true });

  let existing: Array<
    typeof data & {
      id: number;
      created_at: string;
    }
  > = [];

  try {
    const fileContents = await fs.readFile(localSubmissionsFile, 'utf8');
    existing = JSON.parse(fileContents) as typeof existing;
  } catch {
    existing = [];
  }

  const record = {
    id: existing.length + 1,
    created_at: new Date().toISOString(),
    ...data,
  };

  existing.push(record);

  await fs.writeFile(
    localSubmissionsFile,
    JSON.stringify(existing, null, 2),
    'utf8'
  );

  return record;
}

async function loadLocalSubmissions() {
  try {
    const fileContents = await fs.readFile(localSubmissionsFile, 'utf8');
    const parsed = JSON.parse(fileContents);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed as Array<{
      id: number;
      created_at: string;
      name: string;
      email: string;
      company: string;
      project: string;
      description: string;
    }>;
  } catch {
    return [];
  }
}

export async function handleSubmission(request: NextRequest) {
  const body = await request.json();
  const validatedData = demoRequestSchema.parse(body);

  const payload = {
    name: validatedData.name,
    email: validatedData.email,
    company: validatedData.company,
    project: validatedData.project ?? validatedData.projectOfInterest ?? '',
    description: validatedData.description ?? validatedData.message ?? '',
  };

  try {
    const backendResponse = await fetch(`${backendBaseUrl}/api/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (backendResponse.ok) {
      const responseBody = await backendResponse
        .json()
        .catch(() => ({ message: 'Submission received.' }));

      return NextResponse.json(responseBody, {
        status: backendResponse.status,
      });
    }

    if (backendResponse.status >= 400 && backendResponse.status < 500) {
      const responseBody = await backendResponse.json().catch(() => null);

      return NextResponse.json(
        responseBody ?? {
          success: false,
          message: 'Validation failed',
        },
        { status: backendResponse.status }
      );
    }
  } catch (backendError) {
    console.warn('Backend unavailable, using local fallback:', backendError);
  }

  const localRecord = await saveLocalSubmission(payload);

  return NextResponse.json(
    {
      success: true,
      message: 'Submission received.',
      data: {
        id: localRecord.id,
        name: localRecord.name,
        email: localRecord.email,
      },
    },
    { status: 201 }
  );
}

const listQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(30).default(10),
  cursor: z.string().optional(),
  search: z.string().optional(),
});

export async function handleSubmissionList(request: NextRequest) {
  const url = new URL(request.url);
  const parsed = listQuerySchema.safeParse({
    limit: url.searchParams.get('limit') ?? undefined,
    cursor: url.searchParams.get('cursor') ?? undefined,
    search: url.searchParams.get('search') ?? undefined,
  });

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: 'Validation failed',
        errors: parsed.error.issues,
      },
      { status: 400 }
    );
  }

  const params = new URLSearchParams();
  params.set('limit', String(parsed.data.limit));
  if (parsed.data.cursor) {
    params.set('cursor', parsed.data.cursor);
  }
  if (parsed.data.search) {
    params.set('search', parsed.data.search);
  }

  try {
    const backendResponse = await fetch(
      `${backendBaseUrl}/api/submissions?${params.toString()}`,
      {
        method: 'GET',
      }
    );

    if (backendResponse.ok) {
      const responseBody = await backendResponse
        .json()
        .catch(() => ({ items: [], count: 0, next_cursor: null }));

      return NextResponse.json(responseBody, {
        status: backendResponse.status,
      });
    }
  } catch (backendError) {
    console.warn('Backend unavailable, using local submissions list:', backendError);
  }

  const items = await loadLocalSubmissions();
  const search = parsed.data.search?.toLowerCase().trim() ?? '';

  const filtered = search
    ? items.filter((item) =>
        [item.name, item.email, item.company, item.project, item.description]
          .join(' ')
          .toLowerCase()
          .includes(search)
      )
    : items;

  const limited = filtered.slice(0, parsed.data.limit);

  return NextResponse.json({
    items: limited,
    count: limited.length,
    next_cursor: null,
  });
}

export function handleMethodNotAllowed() {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed',
    },
    { status: 405 }
  );
}
