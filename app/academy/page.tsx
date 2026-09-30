import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SubscribeForm from '@/components/SubscribeForm';
import { CtaBand, SectionHead } from '@/components/Sections';
import { courses } from '@/content/courses';

export const metadata: Metadata = {
  title: 'آکادمی مهندسی برند',
  description:
    'آموزش کاربردی استراتژی برند، روان‌شناسی مشتری، برند شخصی و رشد کسب‌وکار در آکادمی پویا خلج.',
  alternates: { canonical: '/academy' },
};

const tracks = [
  {
    en: 'Brand Strategy',
    fa: 'استراتژی برند',
    desc: 'برای درک عمیق‌تر جایگاه‌سازی، مزیت رقابتی، ارزش پیشنهادی و ساختار تصمیم‌گیری برند.',
  },
  {
    en: 'Business Growth',
    fa: 'رشد کسب‌وکار',
    desc: 'برای یادگیری مدل‌هایی که به پیدا کردن فرصت‌های رشد، توسعه بازار و ساخت ارزش بیشتر کمک می‌کنند.',
  },
  {
    en: 'Customer Psychology',
    fa: 'روان‌شناسی مشتری',
    desc: 'برای فهم بهتر دلایلی که باعث می‌شوند مشتری توجه کند، انتخاب کند، خرید کند و یک برند را به خاطر بسپارد.',
  },
  {
    en: 'Personal Branding',
    fa: 'برند شخصی',
    desc: 'برای متخصصانی که می‌خواهند دانش، تجربه و توانایی خود را به یک دارایی حرفه‌ای قابل تشخیص تبدیل کنند.',
  },
];

const approach = [
  'چرا یک برند موفق شد؟',
  'چرا برند دیگری جایگاه خود را از دست داد؟',
  'چرا مشتری حاضر است برای یک محصول بیشتر پرداخت کند؟',
  'چرا بعضی تجربه‌ها تبدیل به بخشی از هویت برند می‌شوند؟',
];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Pouya Khalaj Academy"
        title="برند را یاد نگیرید که درباره‌اش صحبت کنید. یاد بگیرید که با آن تصمیم بگیرید."
        titleMax="28ch"
        lead="آکادمی پویا خلج برای مدیران، کارآفرینان، متخصصان مارکتینگ و افرادی ساخته شده که می‌خواهند برند را فراتر از تعریف‌ها و اصطلاحات تئوری درک کنند. اینجا قرار است یاد بگیریم چطور مفاهیم برند را در تصمیم‌های واقعی کسب‌وکار به کار ببریم."
      />

      {/* Approach */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <SectionHead
              eyebrow="Approach"
              title={
                <>
                  از مثال واقعی به مفهوم.
                  <br />
                  <span className="accent">از مفهوم به تصمیم.</span>
                </>
              }
            />
            <Reveal delay={1} className="stack">
              <p className="muted">
                به جای شروع کردن با تعریف‌های پیچیده، برندها و اتفاقات واقعی را بررسی می‌کنیم.
              </p>
              <ul className="bullets">
                {approach.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p style={{ fontWeight: 550, fontSize: '1.08rem' }}>
                مهم‌تر از همه: چطور می‌توان این منطق را در کسب‌وکار خودمان به کار برد؟
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="sec sec--bone">
        <div className="wrap">
          <SectionHead eyebrow="Tracks" title="مسیرهای آموزشی" />
          <div className="grid grid-2" style={{ gap: '1rem' }}>
            {tracks.map((t, i) => (
              <Reveal
                key={t.en}
                delay={((i % 2) + 1) as 1 | 2}
                className="card"
                style={{ background: 'rgba(255,255,255,.55)', borderColor: 'rgba(0,0,0,.1)' }}
              >
                <span className="en" style={{ color: '#a1802f', fontSize: '.8rem', letterSpacing: '.18em', textTransform: 'uppercase' }}>
                  {t.en}
                </span>
                <h3 style={{ marginTop: '.85rem' }}>{t.fa}</h3>
                <p style={{ color: '#5f5a51' }}>{t.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Programs"
            title="محصولات آموزشی"
            lead="دوره‌ها و کارگاه‌هایی که برای تصمیم‌گیری واقعی طراحی شده‌اند."
          />

          <div className="cards-2">
            {courses.map((course, i) => (
              <Reveal as="article" key={course.slug} delay={(i + 1) as 1 | 2} className="card course-card">
                <div className="course-card__head">
                  <span className={`badge ${course.status === 'open' ? '' : 'badge--mute'}`}>
                    {course.status === 'open' ? 'در حال ثبت‌نام' : 'به‌زودی'}
                  </span>
                  <span className="tiny muted">{course.en}</span>
                </div>
                <h3 style={{ margin: 0 }}>{course.title}</h3>
                <p style={{ color: 'var(--muted)' }}>{course.promise}</p>
                <ul className="tiny muted" style={{ padding: 0, margin: 0, display: 'grid', gap: '.35rem' }}>
                  {course.meta.slice(0, 3).map((m) => (
                    <li key={m.label} style={{ listStyle: 'none', display: 'flex', gap: '.5rem' }}>
                      <span style={{ color: 'var(--muted-2)', minWidth: '4rem' }}>{m.label}</span>
                      <span>{m.value}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/academy/${course.slug}`} className={`btn ${course.status === 'open' ? 'btn--primary' : 'btn--ghost'}`} style={{ alignSelf: 'flex-start' }}>
                  {course.status === 'open' ? 'مشاهده دوره' : 'جزئیات بیشتر'}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notify me */}
      <section className="sec sec--tight" id="newsletter" style={{ scrollMarginTop: '5rem' }}>
        <div className="wrap">
          <Reveal className="newsbox">
            <span className="eyebrow">Next program</span>
            <h2>آموزش بعدی در راه است.</h2>
            <p className="lead" style={{ marginTop: '1.1rem' }}>
              اگر می‌خواهید از دوره‌ها، ورکشاپ‌ها و برنامه‌های آموزشی جدید باخبر شوید، اطلاعاتتان را ثبت کنید.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <SubscribeForm id="academy-notify" />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="For teams"
        title="اگر به دنبال آموزش اختصاصی برای تیم خودتان هستید، درباره‌اش صحبت کنیم."
        text="برنامه‌های آموزشی سازمانی بر اساس مسئله واقعی تیم شما طراحی می‌شوند؛ نه بر اساس سرفصل‌های عمومی."
        primary={{ href: '/contact', label: 'درخواست آموزش سازمانی' }}
        secondary={{ href: '/consulting', label: 'مشاوره مهندسی برند' }}
      />
    </>
  );
}
