import { createHash, randomUUID } from 'crypto';
import { NextResponse } from 'next/server';

export async function GET() {
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  if (!privateKey) {
    return NextResponse.json({ error: 'IMAGEKIT_PRIVATE_KEY is not configured yet.' }, { status: 503 });
  }

  const token = randomUUID().replace(/-/g, '');
  const expire = String(Math.floor(Date.now() / 1000) + 60 * 10);
  const signature = createHash('sha1').update(token + expire + privateKey).digest('hex');

  return NextResponse.json({ token, expire, signature });
}
