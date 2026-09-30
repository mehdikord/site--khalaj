'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Status = 'idle' | 'sending' | 'done' | 'error';

const initial = {
  name: '',
  phone: '',
  email: '',
  business: '',
  url: '',
  industry: '',
  age: 'کمتر از ۱ سال',
  team: '',
  audience: '',
  product: '',
  problem: '',
  brandRelation: '',
  outcome: '',
  history: 'خیر',
  notes: '',
};

const required: (keyof typeof initial)[] = ['name', 'phone', 'business', 'problem'];

export default function ConsultForm() {
  const router = useRouter();
  const [data, setData] = useState(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [missing, setMissing] = useState<string[]>([]);

  const set = (key: keyof typeof initial) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData((d) => ({ ...d, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const gaps = required.filter((k) => !data[k].trim());
    setMissing(gaps);
    if (gaps.length) {
      document.getElementById(gaps[0])?.focus();
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/consult', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'consulting' }),
      });
      if (!res.ok) throw new Error('failed');
      setData(initial);
      setStatus('done');
      // مطابق مستندات سایت: انتقال به صفحه تشکر
      router.push('/thank-you');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="card" style={{ padding: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
        <span className="eyebrow">Request received</span>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '.85rem' }}>درخواست شما ثبت شد.</h3>
        <p className="muted">
          اطلاعات ارسال‌شده بررسی می‌شود و در صورت تناسب موضوع برای ادامه فرایند با شما تماس خواهیم گرفت.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <div className={`field ${missing.includes('name') ? 'has-error' : ''}`}>
          <label htmlFor="name">
            نام و نام خانوادگی <span className="req">*</span>
          </label>
          <input id="name" className="input" value={data.name} onChange={set('name')} autoComplete="name" />
        </div>
        <div className={`field ${missing.includes('phone') ? 'has-error' : ''}`}>
          <label htmlFor="phone">
            شماره تماس <span className="req">*</span>
          </label>
          <input id="phone" className="input" value={data.phone} onChange={set('phone')} inputMode="tel" autoComplete="tel" placeholder="09xxxxxxxxx" />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="email">ایمیل</label>
          <input id="email" className="input" type="email" value={data.email} onChange={set('email')} autoComplete="email" />
        </div>
        <div className={`field ${missing.includes('business') ? 'has-error' : ''}`}>
          <label htmlFor="business">
            نام کسب‌وکار / برند <span className="req">*</span>
          </label>
          <input id="business" className="input" value={data.business} onChange={set('business')} />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="url">وب‌سایت یا صفحه اینستاگرام</label>
          <input id="url" className="input" value={data.url} onChange={set('url')} dir="ltr" placeholder="instagram.com/…" />
        </div>
        <div className="field">
          <label htmlFor="industry">حوزه فعالیت</label>
          <input id="industry" className="input" value={data.industry} onChange={set('industry')} />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="age">مدت فعالیت کسب‌وکار</label>
          <select id="age" className="select" value={data.age} onChange={set('age')}>
            <option>کمتر از ۱ سال</option>
            <option>۱ تا ۳ سال</option>
            <option>۳ تا ۵ سال</option>
            <option>۵ تا ۱۰ سال</option>
            <option>بیش از ۱۰ سال</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="team">تعداد اعضای تیم</label>
          <input id="team" className="input" value={data.team} onChange={set('team')} inputMode="numeric" placeholder="مثلاً ۱۲ نفر" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="audience">مخاطب اصلی شما چه کسانی هستند؟</label>
        <input id="audience" className="input" value={data.audience} onChange={set('audience')} />
      </div>

      <div className="field">
        <label htmlFor="product">محصول یا خدمت اصلی شما چیست؟</label>
        <input id="product" className="input" value={data.product} onChange={set('product')} />
      </div>

      <div className={`field ${missing.includes('problem') ? 'has-error' : ''}`}>
        <label htmlFor="problem">
          مهم‌ترین مسئله‌ای که در حال حاضر با آن روبه‌رو هستید چیست؟ <span className="req">*</span>
        </label>
        <textarea id="problem" className="textarea" value={data.problem} onChange={set('problem')} />
      </div>

      <div className="field">
        <label htmlFor="brandRelation">چرا فکر می‌کنید این مسئله به برند مربوط است؟</label>
        <textarea id="brandRelation" className="textarea" value={data.brandRelation} onChange={set('brandRelation')} />
      </div>

      <div className="field">
        <label htmlFor="outcome">در پایان همکاری دوست دارید چه تغییری اتفاق افتاده باشد؟</label>
        <textarea id="outcome" className="textarea" value={data.outcome} onChange={set('outcome')} />
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="history">آیا قبلاً روی استراتژی برند خود کار کرده‌اید؟</label>
          <select id="history" className="select" value={data.history} onChange={set('history')}>
            <option>خیر</option>
            <option>تا حدی</option>
            <option>بله — درون سازمان</option>
            <option>بله — با مشاور یا آژانس</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="notes">توضیحات تکمیلی</label>
          <input id="notes" className="input" value={data.notes} onChange={set('notes')} />
        </div>
      </div>

      {status === 'error' && (
        <div className="alert alert--err">
          ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید یا مستقیماً ایمیل بزنید.
        </div>
      )}

      <div className="form__foot">
        <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'در حال ارسال…' : 'ارسال درخواست'}
        </button>
        <p className="form__note" style={{ maxWidth: '44ch', margin: 0 }}>
          ارسال این فرم به معنی تأیید همکاری نیست. اطلاعات اولیه بررسی می‌شود و در صورت تناسب موضوع، برای ادامه فرایند تماس گرفته می‌شود.
        </p>
      </div>
    </form>
  );
}
