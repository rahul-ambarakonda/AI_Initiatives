import { NextRequest, NextResponse } from 'next/server';
import { saveDemoRequest, DemoRequest } from '@/lib/db';
import { z } from 'zod';

const demoRequestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company must be at least 2 characters'),
  phone: z.string().optional(),
  message: z.string().optional(),
  projectOfInterest: z.string().optional(),
  preferredDemoDate: z.string().optional(),
});

type DemoRequestInput = z.infer<typeof demoRequestSchema>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = demoRequestSchema.parse(body);

    // Save to database
    const result = await saveDemoRequest(validatedData as DemoRequest);

    // In a production environment, you would:
    // 1. Send a confirmation email to the user
    // 2. Send a notification email to the admin
    // 3. Integrate with CRM systems
    // 4. Log to analytics

    return NextResponse.json(
      {
        success: true,
        message: 'Demo request submitted successfully',
        data: {
          id: result.id,
          email: result.email,
          name: result.name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    console.error('Error processing demo request:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request',
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // This endpoint would be protected by authentication in production
    // For now, we'll return a 401 Unauthorized to prevent public access
    return NextResponse.json(
      {
        success: false,
        message: 'Unauthorized',
      },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred',
      },
      { status: 500 }
    );
  }
}
