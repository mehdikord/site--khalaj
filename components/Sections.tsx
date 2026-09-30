import Link from 'next/link';
import type { ReactNode } from 'react';
import Reveal from './Reveal';
import SubscribeForm from './SubscribeForm';

/* --- Section heading ----------------------------------------------------- */
export function SectionHead({
  eyebrow,
  title,
  lead,
  wide,
  as: Tag = 'h2',
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  wide?: boolean;
  as?: 'h1' | 'h2';
}) {
  return (
    <Reveal className={`sec-head ${wide ? 'sec-head--wide' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag>{title}</Tag>
      {lead && <div className="lead">{lead}</div>}
    </Reveal>
  );
}

/* --- Final CTA band ------------------------------------------------------ */
export function CtaBand({
  eyebrow = 'Next step',
  title,
  text,
  primary = { href: '/consulting#request', label: 'درخواست جلسه مشاوره' },
  secondary,
  note,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  note?: string;
}) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {text && <p className="lead" style={{ marginTop: '1.35rem', maxWidth: '56ch' }}>{text}</p>}
          <div className="btn-row" style={{ marginTop: '2.25rem' }}>
            <Link href={primary.href} className="btn btn--primary">
              {primary.label}
            </Link>
            {secondary && (
              <Link href={secondary.href} className="btn btn--ghost">
                {secondary.label}
              </Link>
            )}
          </div>
          {note && <p className="form__note" style={{ marginTop: '1.35rem', maxWidth: '62ch' }}>{note}</p>}
        </Reveal>
      </div>
    </section>
  );
}

/* --- Newsletter block ---------------------------------------------------- */
export function Newsletter({ id = 'newsletter' }: { id?: string }) {
  return (
    <section className="sec" id={id}>
      <div className="wrap">
        <Reveal className="newsbox">
          <span className="eyebrow">Thinking About Brands</span>
          <h2>برندها را متفاوت ببینید.</h2>
          <p className="lead" style={{ marginTop: '1.1rem' }}>
            تحلیل‌ها، داستان‌ها و ایده‌هایی درباره برند، رفتار مشتری و رشد کسب‌وکار — مستقیم در ایمیل شما.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <SubscribeForm id={`nl-${id}`} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
