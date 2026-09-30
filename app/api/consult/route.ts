import { NextResponse } from 'next/server';
import { clean, deliverLead, rateLimited } from '@/lib/leads';

const TEXT_FIELDS = [
  'name',
  'phone',
  'email',
  'business',
  'url',
  'industry',
  'age',
  'team',
  'audience',
  'product',
  'problem',
  'brandRelation',
  'outcome',
  'history',
  'notes',
  'source',
] as const;

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

  const lead: Record<string, string> = {};
  for (const field of TEXT_FIELDS) lead[field] = clean(body[field]);

  if (!lead.name || !lead.phone || !lead.business || !lead.problem) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 422 });
  }
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 422 });
  }

  await deliverLead('consult', lead);
  return NextResponse.json({ ok: true, redirect: '/thank-you' });
}
