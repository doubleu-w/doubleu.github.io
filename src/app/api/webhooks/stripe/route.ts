import { NextResponse } from 'next/server';

export async function POST() {
  // TODO: Verify signature, update plan in DB.
  return NextResponse.json({ received: true });
}
