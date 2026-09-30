import type { ReactNode } from 'react';
import Reveal from './Reveal';

export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
  titleMax = '30ch',
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  titleMax?: string;
}) {
  return (
    <section className="hero hero--page">
      <div className="wrap">
        <div className="orb" aria-hidden="true" style={{ top: '-6rem', opacity: 0.5 }}>
          <i />
        </div>
        <Reveal>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 style={{ maxWidth: titleMax }}>{title}</h1>
          {lead && (
            <p className="lead" style={{ marginTop: '1.6rem', maxWidth: '58ch' }}>
              {lead}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
