import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { CtaBand, SectionHead } from '@/components/Sections';

export const metadata: Metadata = {
  title: 'درباره پویا خلج | Brand Engineering Specialist',
  description:
    'پویا خلج، متخصص مهندسی برند. رویکرد او برند را به‌عنوان یک سیستم تصمیم‌گیری می‌بیند که استراتژی، تجربه مشتری و رشد کسب‌وکار را به هم متصل می‌کند.',
  alternates: { canonical: '/about' },
};

const questions = [
  'چرا دو کسب‌وکار می‌توانند محصولی مشابه ارائه کنند، اما یکی از آن‌ها در ذهن مشتری ارزشمندتر باشد؟',
  'چرا بعضی برندها وارد فرهنگ می‌شوند و بعضی فقط تبلیغ می‌کنند؟',
  'چرا مشتری حاضر است برای یک انتخاب بیشتر هزینه کند؟',
  'چرا بعضی کسب‌وکارها با وجود محصول خوب نمی‌توانند جایگاهی متناسب با کیفیتشان بسازند؟',
];

const decisions = [
  'چه کسی را هدف می‌گیریم؟',
  'چه چیزی را نمایندگی می‌کنیم؟',
  'با چه چیزی قرار است متفاوت باشیم؟',
  'به چه چیزهایی نه می‌گوییم؟',
  'مشتری باید چه چیزی را تجربه کند؟',
  'و برای اینکه این ادعا معتبر بماند، کسب‌وکار باید چه کاری متفاوت انجام دهد؟',
];

const background = [
  'سوابق تحصیلی',
  'سال‌های فعالیت',
  'برندهایی که با آن‌ها همکاری شده',
  'پروژه‌های شاخص',
  'تجربه تدریس',
  'سخنرانی‌ها، مصاحبه‌ها و رسانه‌ها',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Pouya Khalaj"
        title="من برند را از جایی بررسی می‌کنم که استراتژی، رفتار انسان و کسب‌وکار به هم می‌رسند."
        titleMax="28ch"
      />

      {/* Main text */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <SectionHead eyebrow="Approach" title="برند برای من همیشه بیشتر از ظاهر یک کسب‌وکار بوده است." />
            <Reveal delay={1} className="stack">
              <p className="muted">سؤال جذاب‌تر این است:</p>
              <ul className="bullets">
                {questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
              <p className="muted">
                پاسخ این سؤال‌ها معمولاً در یک نقطه پیدا نمی‌شود. باید استراتژی، بازار، محصول، روان‌شناسی مشتری، ارتباطات
                و تجربه را کنار هم قرار داد.
              </p>
              <p style={{ fontWeight: 550, fontSize: '1.1rem' }}>
                من این نگاه را <span className="accent">مهندسی برند</span> می‌نامم.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="sec sec--bone">
        <div className="wrap">
          <div className="split">
            <SectionHead eyebrow="Philosophy" title="برندینگ قبل از اینکه مسئله طراحی باشد، مسئله تصمیم است." />
            <Reveal delay={1}>
              <ul className="tick">
                {decisions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <p className="muted" style={{ marginTop: '2rem', fontWeight: 550 }}>
                پاسخ این سؤال‌ها برند را می‌سازد. لوگو و تبلیغات بعد از آن می‌آیند.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <SectionHead
              eyebrow="Method"
              title={
                <>
                  پیچیدگی کمتر.
                  <br />
                  <span className="accent">وضوح بیشتر.</span>
                </>
              }
            />
            <Reveal delay={1} className="stack">
              <p className="muted">
                هدف من در تحلیل یا مشاوره این نیست که مسئله را پیچیده‌تر نشان بدهم. یک استراتژی زمانی ارزشمند است که
                بتوان آن را فهمید، درباره آن تصمیم گرفت و اجرا کرد.
              </p>
              <p className="muted">
                به همین دلیل تلاش می‌کنم مسائل پیچیده برند و کسب‌وکار را به سؤال‌های روشن‌تر تبدیل کنم؛ چون اغلب، کیفیت
                پاسخ ما به کیفیت سؤالی بستگی دارد که می‌پرسیم.
              </p>
              <div className="btn-row" style={{ marginTop: '.5rem' }}>
                <Link href="/brand-engineering" className="btn btn--ghost">
                  مهندسی برند چیست؟
                </Link>
                <Link href="/consulting" className="tlink">
                  مشاوره <span className="arw">←</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="sec sec--tight">
        <div className="wrap">
          <Reveal className="card" style={{ padding: 'clamp(1.75rem, 4vw, 3rem)' }}>
            <span className="eyebrow">Experience</span>
            <h2 style={{ marginBottom: '1.15rem' }}>سابقه حرفه‌ای</h2>
            <p className="muted" style={{ maxWidth: '62ch' }}>
              این بخش به‌صورت ساختاریافته برای ثبت سوابق آماده شده است. هیچ عدد یا ادعایی بدون قابلیت اثبات در این صفحه
              منتشر نمی‌شود؛ به همین دلیل تنها اطلاعات تأییدشده در آن قرار می‌گیرد.
            </p>
            <div className="grid grid-2" style={{ gap: '1rem', marginTop: '2rem' }}>
              {background.map((b) => (
                <div
                  key={b}
                  style={{
                    border: '1px dashed rgba(239,235,227,.16)',
                    borderRadius: 'var(--r-md)',
                    padding: '1.1rem 1.25rem',
                    color: 'var(--muted)',
                    fontSize: '.95rem',
                  }}
                >
                  {b}
                  <span className="tiny" style={{ display: 'block', color: 'var(--muted-2)', marginTop: '.35rem' }}>
                    در انتظار اطلاعات تأییدشده
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Let’s talk"
        title="اگر درباره برندتان مسئله‌ای دارید که ارزش یک گفت‌وگوی جدی را دارد، درباره‌اش صحبت کنیم."
        primary={{ href: '/consulting#request', label: 'درخواست مشاوره' }}
        secondary={{ href: '/contact', label: 'راه‌های تماس' }}
      />
    </>
  );
}
