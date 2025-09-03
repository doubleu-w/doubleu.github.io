import { NextResponse } from 'next/server';

export async function GET() {
  const items = [
    { id: '1', title: '30-Day Fitness Guide', type: 'ebook' },
    { id: '2', title: 'Aesthetic Planner Template', type: 'template' },
    { id: '3', title: 'Motivational Voiceover', type: 'audio' },
  ];
  return NextResponse.json({ items });
}
