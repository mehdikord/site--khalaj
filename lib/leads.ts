import fs from 'node:fs/promises';
import path from 'node:path';

export type LeadKind = 'consult' | 'contact' | 'subscribe';

export type Lead = Record<string, string | undefined> & { kind?: LeadKind };

const DATA_DIR = path.join(process.cwd(), 'data');

/** Very small in-memory rate limiter — enough for a marketing site, no DB needed. */
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 10;

export function rateLimited(ip: string): boolean {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > MAX_PER_WINDOW;
}

export function clean(value: unknown, max = 4000): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

/** Persist every submission on disk so nothing is ever lost. */
async function saveToDisk(kind: LeadKind, lead: Lead) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const file = path.join(DATA_DIR, `${kind}.jsonl`);
  await fs.appendFile(file, JSON.stringify({ at: new Date().toISOString(), ...lead }) + '\n', 'utf8');
}

const LABELS: Record<string, string> = {
  name: 'نام و نام خانوادگی',
  phone: 'شماره تماس',
  email: 'ایمیل',
  business: 'کسب‌وکار / برند',
  url: 'وب‌سایت یا اینستاگرام',
  industry: 'حوزه فعالیت',
  age: 'مدت فعالیت',
  team: 'تعداد اعضای تیم',
  audience: 'مخاطب اصلی',
  product: 'محصول یا خدمت اصلی',
  problem: 'مسئله اصلی',
  brandRelation: 'چرا مسئله برندی است؟',
  outcome: 'نتیجه مورد انتظار',
  history: 'سابقه کار روی استراتژی برند',
  notes: 'توضیحات تکمیلی',
  company: 'نام مجموعه',
  type: 'نوع درخواست',
  subject: 'موضوع',
  message: 'پیام',
  contact: 'ایمیل / شماره موبایل',
  source: 'صفحه',
};

function toPlainText(lead: Lead): string {
  return Object.entries(lead)
    .filter(([k, v]) => v && k !== 'kind')
    .map(([k, v]) => `${LABELS[k] ?? k}: ${v}`)
    .join('\n');
}

async function sendEmail(kind: LeadKind, lead: Lead): Promise<boolean> {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_FROM, LEAD_TO_EMAIL } = process.env;
  if (!SMTP_HOST || !LEAD_TO_EMAIL) return false;

  try {
    const nodemailer = (await import('nodemailer')).default;
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 587),
      secure: SMTP_SECURE === 'true',
      auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    });

    const titles: Record<LeadKind, string> = {
      consult: 'درخواست مشاوره جدید',
      contact: 'پیام جدید از فرم تماس',
      subscribe: 'عضویت جدید در خبرنامه',
    };

    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: LEAD_TO_EMAIL,
      replyTo: lead.email || undefined,
      subject: `[${titles[kind]}] — pouyakhalaj.ir`,
      text: toPlainText(lead),
    });
    return true;
  } catch (error) {
    console.error('[leads] SMTP failed:', error);
    return false;
  }
}

async function sendWebhook(kind: LeadKind, lead: Lead): Promise<boolean> {
  const { LEAD_WEBHOOK_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

  try {
    if (LEAD_WEBHOOK_URL) {
      await fetch(LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ kind, lead }),
      });
      return true;
    }
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: `pouyakhalaj.ir — ${kind}\n\n${toPlainText(lead)}` }),
      });
      return true;
    }
  } catch (error) {
    console.error('[leads] webhook failed:', error);
  }
  return false;
}

/**
 * Delivery pipeline: always store on disk, then try to notify.
 * No database, no third-party service required for the site to work.
 */
export async function deliverLead(kind: LeadKind, lead: Lead) {
  const payload = { ...lead, kind };
  const [emailed, webhooked] = await Promise.all([sendEmail(kind, payload), sendWebhook(kind, payload)]);
  await saveToDisk(kind, payload);
  console.log(`[leads] ${kind} stored (email: ${emailed}, webhook: ${webhooked})`);
  return { ok: true };
}
