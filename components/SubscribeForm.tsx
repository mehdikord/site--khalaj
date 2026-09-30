'use client';

import { useState } from 'react';

export default function SubscribeForm({ id = 'newsletter' }: { id?: string }) {
  const [value, setValue] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    setState('sending');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ contact: value.trim(), source: 'newsletter' }),
      });
      if (!res.ok) throw new Error('failed');
      setState('done');
      setValue('');
    } catch {
      setState('error');
    }
  }

  if (state === 'done') {
    return (
      <div className="alert alert--ok" style={{ maxWidth: '34rem' }}>
        ثبت شد. از این پس تحلیل‌ها و ایده‌های تازه‌ی برند را برایتان می‌فرستیم.
      </div>
    );
  }

  return (
    <div>
      <form className="inline-form" onSubmit={onSubmit}>
        <label htmlFor={id} className="sr-only" style={{ position: 'absolute', insetInlineStart: -9999 }}>
          ایمیل شما
        </label>
        <input
          id={id}
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="ایمیل شما"
          dir="ltr"
          autoComplete="email"
        />
        <button type="submit" className="btn btn--primary" disabled={state === 'sending'}>
          {state === 'sending' ? '…' : 'عضویت'}
        </button>
      </form>
      {state === 'error' && (
        <p className="form__note" style={{ color: '#e0a58c' }}>
          ارسال انجام نشد؛ لطفاً دوباره تلاش کنید.
        </p>
      )}
      <p className="form__note" style={{ marginTop: '.85rem' }}>
        بدون اسپم. فقط محتوایی که ارزش باز کردن داشته باشد.
      </p>
    </div>
  );
}
