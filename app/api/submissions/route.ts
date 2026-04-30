import { NextRequest } from 'next/server';
import {
  handleMethodNotAllowed,
  handleSubmission,
  handleSubmissionList,
} from '../_lib/submission';

export async function POST(request: NextRequest) {
  try {
    return await handleSubmission(request);
  } catch (error) {
    console.error('Error processing submission:', error);
    return handleMethodNotAllowed();
  }
}

export async function GET(request: NextRequest) {
  try {
    return await handleSubmissionList(request);
  } catch (error) {
    console.error('Error listing submissions:', error);
    return handleMethodNotAllowed();
  }
}
