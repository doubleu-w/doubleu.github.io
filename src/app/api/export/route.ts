import { NextResponse } from 'next/server';

export async function POST() {
  // TODO: Render & store file, return signed URL.
  return NextResponse.json({ url: 'https://example.com/download/your-file.pdf' });
}
