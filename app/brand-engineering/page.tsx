import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { CtaBand, Newsletter, SectionHead } from '@/components/Sections';

export const metadata: Metadata = {
  title: 'مهندسی برند چیست؟',
  description:
    'مهندسی برند رویکردی برای هماهنگ کردن استراتژی، جایگاه، معنا، تجربه مشتری و رشد کسب‌وکار است. با رویکرد پویا خلج به Brand Engineering آشنا شوید.',
  alternates: { canonical: '/brand-engineering' },
};

const framework = [
  {
    n: '01',
    en: 'Discover',
    fa: 'کشف',
    desc: 'قبل از ارائه پاسخ، باید مسئله درست را پیدا کرد. در این مرحله کسب‌وکار، بازار، مشتری، رقبا، محصول، مدل درآمد و وضعیت فعلی برند بررسی می‌شود.',
    q: 'واقعاً با چه مسئله‌ای روبه‌رو هستیم؟',
  },
  {
    n: '02',
    en: 'Position',
    fa: 'جایگاه',
    desc: 'اگر قرار باشد مشتری فقط یک مفهوم را با نام برند شما مرتبط کند، آن مفهوم چیست؟ جایگاه‌سازی یعنی پیدا کردن فضای ذهنی مشخصی که برند می‌تواند به شکل معتبر و متمایز در آن قرار بگیرد.',
    q: 'چرا شما؟',
  },
  {
    n: '03',
    en: 'Meaning',
    fa: 'معنا',
    desc: 'مشتری همیشه محصول را فقط برای کاربرد فیزیکی آن نمی‌خرد. او ممکن است امنیت، تعلق، اعتبار، آرامش، کنترل، پیشرفت، زیبایی یا احساس متفاوتی را خریداری کند. معناسازی کمک می‌کند بفهمیم ارزش واقعی برند در زندگی مشتری چیست.',
    q: 'محصول شما برای مشتری واقعاً چه معنایی دارد؟',
  },
  {
    n: '04',
    en: 'Design',
    fa: 'طراحی سیستم برند',
    desc: 'استراتژی باید به تجربه تبدیل شود. محصول، قیمت، ارتباطات، محتوا، هویت، فروش، خدمات و سایر نقاط تماس باید با جایگاه برند هماهنگ شوند.',
    q: 'مشتری چگونه باید وعده برند را تجربه کند؟',
  },
  {
    n: '05',
    en: 'Grow',
    fa: 'رشد',
    desc: 'برند قدرتمند باید بتواند به رشد کسب‌وکار کمک کند. در این مرحله فرصت‌های توسعه، وفاداری، افزایش ارزش ادراک‌شده، رشد سهم بازار و توسعه پیشنهادهای جدید بررسی می‌شوند.',
    q: 'چطور می‌توان بدون از دست دادن هویت برند، رشد کرد؟',
  },
];

const whyEngineering = [
  'قیمت‌گذاری می‌تواند جایگاه برند را تغییر دهد.',
  'تجربه فروش می‌تواند ادعای پریمیوم بودن را تقویت یا تخریب کند.',
  'نوع محتوا می‌تواند مخاطب درست یا اشتباه را جذب کند.',
  'بسته‌بندی می‌تواند ارزش ادراک‌شده محصول را تغییر دهد.',
  'مدل خدمات پس از فروش می‌تواند مشتری را به منتقد یا مبلغ برند تبدیل کند.',
];

const brandIs = [
  'آنچه می‌بیند.',
  'آنچه می‌شنود.',
  'آنچه دریافت می‌کند.',
  'آنچه احساس می‌کند.',
  'و آنچه بعداً درباره شما تعریف می‌کند.',
];

export default function BrandEngineeringPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand Engineering"
        title="وقتی برند را به‌عنوان یک سیستم ببینیم، تصمیم‌های بهتری می‌گیریم."
        lead="مهندسی برند رویکردی برای طراحی و هماهنگ کردن اجزایی است که در کنار یکدیگر ادراک مشتری از کسب‌وکار شما را شکل می‌دهند. از استراتژی و جایگاه‌سازی تا تجربه، ارتباطات و رشد."
      >
        <div className="btn-row" style={{ marginTop: '2.4rem' }}>
          <Link href="/consulting#request" className="btn btn--primary">
            درخواست مشاوره مهندسی برند
          </Link>
          <Link href="/insights" className="btn btn--ghost">
            مطالعه بینش‌ها
          </Link>
        </div>
      </PageHero>

      {/* Brand is not owned */}
      <section className="sec sec--tight">
        <div className="wrap">
          <div className="split">
            <SectionHead
              eyebrow="Definition"
              title={
                <>
                  برند چیزی نیست که کسب‌وکار مالک آن باشد.
                  <br />
                  <span className="accent">برند چیزی است که در ذهن مشتری شکل می‌گیرد.</span>
                </>
              }
            />
            <Reveal delay={1} className="stack">
              <p className="muted">
                شما می‌توانید نام، هویت بصری، محصول و پیام برند را طراحی کنید. اما در نهایت مشتری تصمیم می‌گیرد که برند
                شما برای او چه معنایی داشته باشد. این معنا از مجموعه‌ای از تجربه‌ها شکل می‌گیرد:
              </p>
              <ul className="bullets">
                {brandIs.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="muted">
                به همین دلیل، ساخت برند فقط یک پروژه طراحی یا بازاریابی نیست. یک مسئله سیستمی است.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why engineering */}
      <section className="sec sec--bone">
        <div className="wrap">
          <div className="split">
            <SectionHead eyebrow="Why engineering" title="چون تغییر یک قسمت از برند، روی قسمت‌های دیگر اثر می‌گذارد." />
            <Reveal delay={1}>
              <ul className="tick">
                {whyEngineering.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              <p className="muted" style={{ marginTop: '2rem', fontWeight: 550 }}>
                در مهندسی برند، هیچ‌کدام از این تصمیم‌ها مستقل دیده نمی‌شوند.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Framework"
            title="چارچوب مهندسی برند"
            lead="پنج گام که از تشخیص مسئله شروع می‌شود و به تصمیم‌های قابل اجرا می‌رسد."
          />
          <Reveal className="rows">
            {framework.map((f) => (
              <article className="row" key={f.n}>
                <div className="row__n">{f.n}</div>
                <div className="row__t">
                  <h3>{f.fa}</h3>
                  <span className="en">{f.en}</span>
                </div>
                <div className="row__d">
                  <p>{f.desc}</p>
                  <p className="row__q">{f.q}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Result */}
      <section className="sec">
        <div className="wrap">
          <SectionHead title="یک برند مهندسی‌شده باید سه ویژگی داشته باشد:" />
          <div className="cards-3">
            {[
              { t: 'واضح باشد.', d: 'مشتری بفهمد شما چه کسی هستید.' },
              { t: 'متمایز باشد.', d: 'دلیلی برای انتخاب شما وجود داشته باشد.' },
              { t: 'منسجم باشد.', d: 'آنچه می‌گویید با آنچه مشتری تجربه می‌کند هماهنگ باشد.' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={(i + 1) as 1 | 2 | 3} className="card">
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Newsletter id="newsletter" />

      <CtaBand
        eyebrow="Decision point"
        title="برند شما امروز در ذهن مشتری کجا ایستاده است؟"
        text="اگر پاسخ این سؤال روشن نیست، نقطه شروع می‌تواند یک گفت‌وگوی دقیق درباره ساختار برند شما باشد."
        primary={{ href: '/consulting#request', label: 'درخواست مشاوره مهندسی برند' }}
        secondary={{ href: '/consulting', label: 'فرایند همکاری' }}
      />
    </>
  );
}
