import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="sec nf">
      <div className="wrap">
        <p className="nf__code">404</p>
        <h1 style={{ maxWidth: '24ch' }}>این صفحه جایی در استراتژی ما نداشت.</h1>
        <p className="lead" style={{ marginTop: '1.5rem', maxWidth: '52ch' }}>
          احتمالاً آدرس تغییر کرده یا صفحه موردنظر دیگر وجود ندارد.
        </p>
        <div className="btn-row" style={{ marginTop: '2.25rem' }}>
          <Link href="/" className="btn btn--primary">
            بازگشت به خانه
          </Link>
          <Link href="/insights" className="btn btn--ghost">
            مطالعه Insights
          </Link>
        </div>
      </div>
    </section>
  );
}
