'use client';

import { useState } from 'react';
import Link from 'next/link';

type Status = 'idle' | 'sending' | 'done' | 'error';

const types = ['مشاوره برند', 'همکاری تجاری', 'دعوت به سخنرانی / رویداد', 'همکاری رسانه‌ای', 'سایر موارد'];

export default function ContactForm() {
  const [data, setData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    type: types[0],
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [missing, setMissing] = useState<string[]>([]);

  const set = (key: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData((d) => ({ ...d, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const gaps = (['name', 'phone', 'message'] as const).filter((k) => !data[k].trim());
    setMissing(gaps);
    if (gaps.length) {
      document.getElementById(`c-${gaps[0]}`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'contact' }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="card" style={{ padding: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
        <span className="eyebrow">Message sent</span>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '.85rem' }}>درخواست شما دریافت شد.</h3>
        <p className="muted">
          از اینکه اطلاعاتتان را با ما به اشتراک گذاشتید متشکریم. پیام شما بررسی می‌شود و در صورت نیاز به ادامه گفت‌وگو با شما
          ارتباط گرفته خواهد شد.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="c-type">نوع درخواست</label>
        <select id="c-type" className="select" value={data.type} onChange={set('type')}>
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="form__row">
        <div className={`field ${missing.includes('name') ? 'has-error' : ''}`}>
          <label htmlFor="c-name">
            نام و نام خانوادگی <span className="req">*</span>
          </label>
          <input id="c-name" className="input" value={data.name} onChange={set('name')} autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="c-company">نام مجموعه</label>
          <input id="c-company" className="input" value={data.company} onChange={set('company')} autoComplete="organization" />
        </div>
      </div>

      <div className="form__row">
        <div className={`field ${missing.includes('phone') ? 'has-error' : ''}`}>
          <label htmlFor="c-phone">
            شماره تماس <span className="req">*</span>
          </label>
          <input id="c-phone" className="input" value={data.phone} onChange={set('phone')} inputMode="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="c-email">ایمیل</label>
          <input id="c-email" className="input" type="email" value={data.email} onChange={set('email')} autoComplete="email" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="c-subject">موضوع</label>
        <input id="c-subject" className="input" value={data.subject} onChange={set('subject')} />
      </div>

      <div className={`field ${missing.includes('message') ? 'has-error' : ''}`}>
        <label htmlFor="c-message">
          پیام <span className="req">*</span>
        </label>
        <textarea id="c-message" className="textarea" value={data.message} onChange={set('message')} />
      </div>

      {status === 'error' && <div className="alert alert--err">ارسال پیام انجام نشد. لطفاً دوباره تلاش کنید.</div>}

      <div className="form__foot">
        <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'در حال ارسال…' : 'ارسال پیام'}
        </button>
        <p className="form__note" style={{ margin: 0 }}>
          اطلاعات شما فقط برای پاسخ‌دهی به همین درخواست استفاده می‌شود.{' '}
          <Link href="/privacy" className="tlink mini">
            حریم خصوصی
          </Link>
        </p>
      </div>
    </form>
  );
}
