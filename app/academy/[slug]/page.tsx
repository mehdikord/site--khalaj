import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SubscribeForm from '@/components/SubscribeForm';
import { courses, getCourse } from '@/content/courses';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: 'دوره' };
  return {
    title: course.title,
    description: course.dek,
    alternates: { canonical: `/academy/${course.slug}` },
  };
}

export default async function CoursePage({ params }: Params) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <>
      <PageHero
        eyebrow={course.en}
        title={course.promise}
        lead={course.dek}
        titleMax="26ch"
      >
        <div className="btn-row" style={{ marginTop: '2.4rem' }}>
          <Link href={course.status === 'open' ? '/consulting#request' : '/academy#newsletter'} className="btn btn--primary">
            {course.status === 'open' ? 'ثبت‌نام در دوره' : 'خبرم کنید'}
          </Link>
          <a href="#syllabus" className="btn btn--ghost">
            سرفصل‌ها
          </a>
        </div>
        <Reveal delay={1} className="stats" style={{ marginTop: '3rem' }}>
          {course.meta.map((m) => (
            <div className="stat" key={m.label}>
              <span className="tiny muted" style={{ display: 'block', marginBottom: '.35rem' }}>
                {m.label}
              </span>
              <b style={{ fontFamily: 'var(--font-fa)', fontSize: '1.02rem', color: 'var(--fg)' }}>{m.value}</b>
            </div>
          ))}
        </Reveal>
      </PageHero>

      {/* Audience */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <h2>این دوره برای چه کسی است؟</h2>
            <Reveal delay={1}>
              <ul className="tick">
                {course.audience.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What you learn */}
      <section className="sec sec--bone">
        <div className="wrap">
          <div className="split">
            <h2>قرار است چه چیزی یاد بگیرید؟</h2>
            <Reveal delay={1}>
              <ul className="tick">
                {course.learn.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="sec" id="syllabus">
        <div className="wrap">
          <h2 style={{ marginBottom: 'clamp(1.75rem, 3vw, 2.75rem)' }}>سرفصل‌ها</h2>
          <Reveal className="chapters">
            {course.chapters.map((ch, i) => (
              <article className="chapter" key={ch.title}>
                <div className="chapter__n">فصل {String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3>{ch.title}</h3>
                  <p>{ch.desc}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Outcome */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <h2>در پایان دوره</h2>
            <Reveal delay={1} className="stack">
              <p className="muted">
                قرار نیست فقط اصطلاحات بیشتری درباره برند بدانید. هدف این است که بتوانید:
              </p>
              <ul className="tick">
                {course.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="sec sec--tight">
        <div className="wrap">
          <Reveal className="card" style={{ padding: 'clamp(1.75rem, 4vw, 3rem)' }}>
            <span className="eyebrow">Instructor</span>
            <h3 style={{ fontSize: '1.5rem' }}>پویا خلج</h3>
            <p className="small muted">متخصص مهندسی برند</p>
            <p className="muted" style={{ marginTop: '1.15rem' }}>
              در این بخش بیوگرافی، سوابق آموزشی، تجربه‌های حرفه‌ای و اطلاعات قابل استناد مدرس قرار می‌گیرد. هیچ عدد یا
              ادعایی بدون قابلیت اثبات در این قسمت منتشر نمی‌شود.
            </p>
            <Link href="/about" className="tlink" style={{ marginTop: '.5rem' }}>
              درباره پویا خلج <span className="arw">←</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec">
        <div className="wrap">
          <h2 style={{ marginBottom: '1.75rem' }}>سوال‌های متداول</h2>
          <Reveal className="faq">
            {course.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="faq__a">{f.a}</div>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Next step</span>
            <h2>{course.status === 'open' ? 'اگر این دوره برای شما مناسب است، جای خود را رزرو کنید.' : 'خبر شروع این برنامه را دریافت کنید.'}</h2>
            <p className="lead" style={{ marginTop: '1.35rem', maxWidth: '56ch' }}>
              {course.status === 'open'
                ? 'برای ثبت‌نام، فرم درخواست مشاوره را تکمیل کنید تا شرایط و جزئیات دوره برای شما ارسال شود.'
                : 'تقویم و شرایط این برنامه پس از نهایی شدن، ابتدا به اعضای خبرنامه اطلاع داده می‌شود.'}
            </p>
            {course.status === 'open' ? (
              <div className="btn-row" style={{ marginTop: '2.25rem' }}>
                <Link href="/consulting#request" className="btn btn--primary">
                  ثبت‌نام در دوره
                </Link>
                <Link href="/academy" className="btn btn--ghost">
                  سایر برنامه‌ها
                </Link>
              </div>
            ) : (
              <div style={{ marginTop: '2.25rem' }}>
                <SubscribeForm id={`course-${course.slug}`} />
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
