import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Logging
  console.log('Received GET request');
  return NextResponse.json({ message: 'Hello from Next.js!' });
}

export async function POST(request: NextRequest) {
  console.log('Received POST request');
  const body = await request.json();

  const { t, text } = body
  console.log(text)
  return NextResponse.json({ message: `Hello, ${t}!` });
}

