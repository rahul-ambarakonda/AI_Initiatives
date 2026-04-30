import { NextRequest } from 'next/server';
import { handleMethodNotAllowed, handleSubmission } from '../_lib/submission';

export async function POST(request: NextRequest) {
  try {
    return await handleSubmission(request);
  } catch (error) {
    console.error('Error forwarding demo request:', error);
    return handleMethodNotAllowed();
  }
}

export async function GET() {
  return handleMethodNotAllowed();
}
