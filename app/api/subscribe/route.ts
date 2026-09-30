import { NextResponse } from 'next/server';
import { clean, deliverLead, rateLimited } from '@/lib/leads';

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'too_many_requests' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }

  const value = clean(body.contact || body.email || body.phone, 200);
  if (!value) return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 422 });

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isPhone = /^[+\d][\d\s-]{6,}$/.test(value);
  if (!isEmail && !isPhone) {
    return NextResponse.json({ ok: false, error: 'invalid_contact' }, { status: 422 });
  }

  await deliverLead('subscribe', { email: value, source: clean(body.source) });
  return NextResponse.json({ ok: true });
}
