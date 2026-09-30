import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'درخواست شما دریافت شد',
  description: 'پیام یا درخواست شما دریافت شد و در صورت نیاز به ادامه گفت‌وگو با شما ارتباط گرفته خواهد شد.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="sec nf">
      <div className="wrap">
        <span className="eyebrow">Received</span>
        <h1 style={{ maxWidth: '22ch' }}>درخواست شما دریافت شد.</h1>
        <p className="lead" style={{ marginTop: '1.5rem', maxWidth: '54ch' }}>
          از اینکه اطلاعاتتان را با ما به اشتراک گذاشتید متشکریم. پیام یا درخواست شما بررسی می‌شود و در صورت نیاز به ادامه
          گفت‌وگو با شما ارتباط گرفته خواهد شد.
        </p>
        <div className="btn-row" style={{ marginTop: '2.25rem' }}>
          <Link href="/" className="btn btn--primary">
            بازگشت به صفحه اصلی
          </Link>
          <Link href="/insights" className="btn btn--ghost">
            مطالعه بینش‌ها
          </Link>
        </div>
      </div>
    </section>
  );
}
