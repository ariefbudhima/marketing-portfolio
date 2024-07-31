import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Logging
  console.log('Received GET request');
  return NextResponse.json({ message: 'Hello from Next.js!, this is from hello' });
}