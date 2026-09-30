import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { CtaBand, Newsletter, SectionHead } from '@/components/Sections';
import { categoryLabel, posts } from '@/content/insights';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: { absolute: 'پویا خلج | متخصص مهندسی برند' },
  description: site.description,
  alternates: { canonical: '/' },
};

const pillars = [
  {
    n: '01',
    en: 'Strategy',
    fa: 'استراتژی',
    desc: 'مشخص کردن مسئله اصلی کسب‌وکار، بازار، مخاطب، فرصت رشد و مسیری که برند باید برای رسیدن به موقعیت مطلوب طی کند.',
  },
  {
    n: '02',
    en: 'Positioning',
    fa: 'جایگاه‌سازی',
    desc: 'پیدا کردن پاسخ روشن به این سؤال که برند شما در ذهن مشتری باید نماینده چه چیزی باشد و چرا باید به جای رقبا انتخاب شود.',
  },
  {
    n: '03',
    en: 'Meaning',
    fa: 'معناسازی',
    desc: 'تبدیل محصول یا خدمت از یک پیشنهاد قابل مقایسه به چیزی که برای مشتری معنا، ارزش و احساس مشخصی ایجاد می‌کند.',
  },
  {
    n: '04',
    en: 'Experience',
    fa: 'تجربه',
    desc: 'هماهنگ کردن تمام نقاط تماس برند، از محصول و فروش تا خدمات، محتوا و ارتباطات، با وعده اصلی برند.',
  },
  {
    n: '05',
    en: 'Growth',
    fa: 'رشد',
    desc: 'تبدیل استراتژی برند به تصمیم‌هایی که می‌توانند به جذب مشتری، افزایش ارزش ادراک‌شده، وفاداری و رشد کسب‌وکار کمک کنند.',
  },
];

const problems = [
  'ممکن است تبلیغات انجام دهید اما مشتری دلیل روشنی برای انتخابتان نداشته باشد.',
  'ممکن است محصول خوبی داشته باشید اما برندتان نتواند ارزش واقعی آن را منتقل کند.',
  'ممکن است شناخته شده باشید اما جایگاه مشخصی در ذهن بازار نداشته باشید.',
  'ممکن است فروش داشته باشید اما برای رشد بیشتر، دائماً به تخفیف و تبلیغات وابسته بمانید.',
  'یا ممکن است کسب‌وکارتان رشد کرده باشد، اما برند هنوز برای مرحله قبلی طراحی شده باشد.',
];

const consultingScope = [
  'جایگاه فعلی برند',
  'رفتار مشتری',
  'رقبا',
  'مزیت رقابتی',
  'ارزش پیشنهادی',
  'معنا و ادراک برند',
  'تجربه مشتری',
  'استراتژی رشد',
];

const marquee = [
  'Brands are engineered.',
  'برندها فقط طراحی نمی‌شوند، مهندسی می‌شوند.',
  'Decisions before design.',
  'اگر مشتری نتواند تفاوت شما را توضیح دهد، هنوز جایگاه روشنی ندارید.',
  'Meaning over noise.',
  'بیشتر دیده شدن، جایگزین بهتر دیده شدن نیست.',
];

export default function HomePage() {
  const featured = posts.filter((p) => p.featured).slice(0, 2);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero">
        <div className="wrap wrap-wide">
          <div className="orb" aria-hidden="true">
            <i />
          </div>
          <div className="hero__grid">
            <Reveal>
              <span className="eyebrow">Brand Engineering</span>
              <h1 className="hero__h">
                <span className="line">برندها فقط طراحی نمی‌شوند.</span>
                <span className="line" style={{ color: 'var(--accent)' }}>
                  مهندسی می‌شوند.
                </span>
              </h1>
              <p className="lead hero__lead" style={{ marginTop: '1.9rem' }}>
                برند قدرتمند حاصل یک لوگوی بهتر، تبلیغات بیشتر یا حضور پررنگ‌تر در شبکه‌های اجتماعی نیست. برند زمانی
                ساخته می‌شود که استراتژی، معنا، جایگاه، تجربه و رشد در یک سیستم منسجم کنار هم قرار بگیرند.
              </p>
              <div className="btn-row" style={{ marginTop: '2.4rem' }}>
                <Link href="/consulting#request" className="btn btn--primary">
                  درخواست جلسه مشاوره
                </Link>
                <Link href="/brand-engineering" className="btn btn--ghost">
                  مهندسی برند چیست؟
                </Link>
              </div>
            </Reveal>

            <Reveal delay={2} className="hero__meta">
              <div className="sig">
                <span className="sig__mark">PK</span>
                <span>
                  <b>پویا خلج</b>
                  <span>متخصص مهندسی برند</span>
                </span>
              </div>
              <div className="kw">
                {['Brand Strategy', 'Positioning', 'Meaning', 'Experience', 'Growth'].map((k, i) => (
                  <span key={k} style={{ display: 'inline-flex', gap: '0.85rem' }}>
                    {k}
                    {i < 4 && <i>/</i>}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <SectionHead
              eyebrow="Point of view"
              title="قبل از اینکه برندتان را بیشتر دیده کنید، مشخص کنید چرا باید انتخاب شود."
            />
            <Reveal delay={1} className="stack">
              <p className="lead">
                بسیاری از کسب‌وکارها برای رشد، مستقیماً سراغ تبلیغات، تولید محتوا یا افزایش فروش می‌روند.
              </p>
              <p className="muted">
                اما اگر جایگاه برند روشن نباشد، اگر مشتری تفاوت معناداری میان شما و رقبا نبیند و اگر تجربه برند نتواند وعده
                شما را اثبات کند، بیشتر دیده شدن الزاماً به معنی قوی‌تر شدن نیست.
              </p>
              <p className="muted">مهندسی برند از یک سؤال بنیادی شروع می‌شود:</p>
              <p className="quote" style={{ fontSize: 'clamp(1.15rem, 2vw, 1.6rem)' }}>
                چرا مشتری باید شما را به جای گزینه‌های دیگر انتخاب کند؟
              </p>
              <p className="small muted">پاسخ این سؤال، نقطه شروع ساختن یک برند قدرتمند است.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Brand Engineering ────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Brand Engineering"
            wide
            title="مهندسی برند یعنی ساختن یک سیستم، نه تزئین یک کسب‌وکار."
            lead={
              <>
                برند فقط آن چیزی نیست که درباره خودتان می‌گویید. برند نتیجه تمام برداشت‌ها، تجربه‌ها، انتخاب‌ها و
                معناهایی است که در ذهن مشتری شکل می‌گیرد. در مهندسی برند این عوامل جدا دیده نمی‌شوند؛ به یکدیگر متصل
                می‌شوند تا برند جایگاهی روشن پیدا کند، تجربه‌ای متمایز بسازد و زمینه رشد پایدار را فراهم کند.
              </>
            }
          />

          <Reveal className="rows">
            {pillars.map((p) => (
              <article className="row" key={p.n}>
                <div className="row__n">{p.n}</div>
                <div className="row__t">
                  <h3>{p.fa}</h3>
                  <span className="en">{p.en}</span>
                </div>
                <div className="row__d">
                  <p>{p.desc}</p>
                </div>
              </article>
            ))}
          </Reveal>

          <Reveal style={{ marginTop: '2.75rem' }}>
            <Link href="/brand-engineering" className="tlink">
              بیشتر درباره مهندسی برند <span className="arw">←</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Problem (light section) ──────────────────────────── */}
      <section className="sec sec--bone">
        <div className="wrap">
          <div className="split">
            <SectionHead
              eyebrow="Diagnosis"
              title={
                <>
                  شاید مسئله کسب‌وکار شما،
                  <br />
                  بازاریابی نباشد.
                </>
              }
              lead="پنج نشانه‌ی رایج که نشان می‌دهد مسئله در ساختار برند است، نه در بودجه تبلیغات."
            />
            <Reveal delay={1}>
              <ul className="tick">
                {problems.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="stack" style={{ marginTop: '2.25rem' }}>
                <p className="muted">در چنین شرایطی، اضافه کردن یک کمپین جدید همیشه پاسخ مسئله نیست.</p>
                <p style={{ fontWeight: 550, fontSize: '1.08rem' }}>گاهی باید به خود برند برگردیم.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Consulting ──────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <SectionHead
              eyebrow="Consulting"
              title={
                <>
                  برای کسب‌وکارهایی که نمی‌خواهند فقط بیشتر دیده شوند.
                  <br />
                  <span className="accent">می‌خواهند درست‌تر انتخاب شوند.</span>
                </>
              }
              lead="مشاوره مهندسی برند برای مدیران، بنیان‌گذاران و کسب‌وکارهایی طراحی شده که در یکی از مراحل ساخت، رشد یا بازتعریف برند خود قرار دارند."
            />
            <Reveal delay={1}>
              <p className="muted" style={{ marginBottom: '1.5rem' }}>
                در جلسات مشاوره، مسئله از سطح تبلیغات و محتوا فراتر می‌رود و ساختار اصلی برند بررسی می‌شود:
              </p>
              <ul className="tick">
                {consultingScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="card" style={{ marginTop: '2rem' }}>
                <p className="small muted" style={{ marginBottom: '.5rem' }}>
                  هدف، تولید یک سند پیچیده نیست.
                </p>
                <p style={{ fontWeight: 500 }}>
                  هدف رسیدن به تصمیم‌هایی است که بتوانند مسیر برند و کسب‌وکار را تغییر دهند.
                </p>
              </div>
              <div className="btn-row" style={{ marginTop: '2rem' }}>
                <Link href="/consulting" className="btn btn--ghost">
                  جزئیات مشاوره
                </Link>
                <Link href="/consulting#request" className="btn btn--primary">
                  درخواست مشاوره
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Philosophy ──────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Philosophy"
            title="برند خوب چیزی نمی‌گوید که نتواند ثابت کند."
            lead="ادعای برند، بدون تجربه‌ای که آن را اثبات کند، در بلندمدت به بی‌اعتباری تبدیل می‌شود."
          />
          <div className="cards-3">
            {[
              { t: 'اگر می‌گویید متفاوت هستید،', d: 'مشتری باید تفاوت را تجربه کند.' },
              { t: 'اگر می‌گویید پریمیوم هستید،', d: 'قیمت تنها چیزی نیست که باید پریمیوم باشد.' },
              { t: 'اگر می‌گویید مشتری مهم است،', d: 'این ادعا باید در محصول، فروش، خدمات و جزئیات تجربه مشتری دیده شود.' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={(i + 1) as 1 | 2 | 3} className="card">
                <h3 style={{ fontSize: '1.08rem' }}>{c.t}</h3>
                <p>{c.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <p className="quote">برند از تکرار یک پیام ساخته نمی‌شود. از تکرار یک تجربه منسجم ساخته می‌شود.</p>
          </Reveal>
        </div>
      </section>

      {/* ── Marquee ─────────────────────────────────────────── */}
      <section className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className={`marquee__item ${/[\u0600-\u06FF]/.test(m) ? 'is-fa' : ''}`}>
              {m}
            </span>
          ))}
        </div>
      </section>

      {/* ── Insights ────────────────────────────────────────── */}
      <section className="sec sec--flush">
        <div className="wrap">
          <SectionHead
            eyebrow="Insights"
            title="برندهای بزرگ را فقط تحسین نکنید. آن‌ها را تحلیل کنید."
            lead="پشت بسیاری از برندهایی که امروز قدرتمند به نظر می‌رسند، مجموعه‌ای از تصمیم‌های استراتژیک وجود دارد. در «بینش‌ها» داستان برندها، رفتار مشتری، استراتژی‌های رشد و تصمیم‌هایی را بررسی می‌کنیم که می‌توان از آن‌ها برای ساخت کسب‌وکارهای بهتر یاد گرفت."
          />

          <div className="cards-4" style={{ gap: '1rem' }}>
            {(['story', 'strategy', 'psychology', 'growth'] as const).map((id, i) => {
              const copy: Record<string, string> = {
                story: 'بررسی تصمیم‌هایی که برندهای بزرگ را ساخته‌اند.',
                strategy: 'تحلیل مفاهیم و مدل‌هایی برای تصمیم‌گیری بهتر.',
                psychology: 'چرا مشتری بعضی برندها را انتخاب می‌کند، به خاطر می‌سپارد و توصیه می‌کند؟',
                growth: 'ایده‌ها و استراتژی‌هایی برای ساختن رشد، فراتر از تبلیغات بیشتر.',
              };
              return (
                <Reveal as="article" key={id} delay={(i + 1) as 1 | 2 | 3 | 4} className="card card--link">
                  <h3 style={{ fontSize: '1.05rem' }}>{categoryLabel(id)}</h3>
                  <p>{copy[id]}</p>
                  <Link href={`/insights?cat=${id}`} className="tlink">
                    مطالعه مطالب <span className="arw">←</span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="cards-2" style={{ marginTop: '2.5rem' }}>
            {featured.map((post, i) => (
              <Reveal as="article" key={post.slug} delay={(i + 1) as 1 | 2} className="card art-card">
                <div className="art-card__top">
                  <span className="chip">{categoryLabel(post.category)}</span>
                  <span className="tiny muted">{post.minutes} دقیقه مطالعه</span>
                </div>
                <h3>
                  <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.dek}</p>
                <Link href={`/insights/${post.slug}`} className="tlink" style={{ marginTop: '1.1rem' }}>
                  مطالعه مقاله <span className="arw">←</span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal style={{ marginTop: '2.5rem' }}>
            <Link href="/insights" className="btn btn--ghost">
              مشاهده همه بینش‌ها
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <span className="eyebrow">About</span>
              <h2 className="en" style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', marginBottom: '1.5rem' }}>
                Pouya Khalaj
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <p className="small muted" style={{ marginBottom: '.75rem' }}>
                  جای تصویر پویا
                </p>
                <p className="small">
                  یک پرتره‌ی حرفه‌ای (نسبت ۴:۵) این بخش را کامل می‌کند — فایل را در
                  <span className="en"> /public/images/pouya.jpg </span>
                  قرار دهید و در همین کامپوننت جایگزین کنید.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1} className="stack">
              <p className="lead">من به برند به عنوان یک تصویر، لوگو یا مجموعه‌ای از فعالیت‌های تبلیغاتی نگاه نمی‌کنم.</p>
              <p className="quote">برای من، برند یک سیستم تصمیم‌گیری است.</p>
              <p className="muted">
                سیستمی که مشخص می‌کند چه کسی هستید، برای چه کسی ارزش ایجاد می‌کنید، چرا باید انتخاب شوید و مشتری بعد از
                مواجهه با شما چه چیزی را باید احساس و به خاطر بسپارد.
              </p>
              <p className="muted">
                مهندسی برند تلاشی برای پیدا کردن همین پاسخ‌هاست؛ پاسخ‌هایی که بتوانند استراتژی، تجربه مشتری، ارتباطات و
                رشد کسب‌وکار را در یک مسیر مشترک قرار دهند.
              </p>
              <div className="btn-row" style={{ marginTop: '.75rem' }}>
                <Link href="/about" className="btn btn--ghost">
                  درباره پویا خلج
                </Link>
                <Link href="/academy" className="tlink">
                  آکادمی مهندسی برند <span className="arw">←</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Newsletter id="newsletter" />

      <CtaBand
        eyebrow="Next step"
        title="برند شما قرار است نماینده چه چیزی باشد؟"
        text="اگر کسب‌وکارتان به نقطه‌ای رسیده که نیاز دارید جایگاه، مسیر یا معنای برندتان را دوباره بررسی کنید، نقطه شروع می‌تواند یک گفت‌وگوی دقیق باشد."
        primary={{ href: '/consulting#request', label: 'درخواست جلسه مشاوره' }}
        secondary={{ href: '/insights', label: 'مطالعه بینش‌ها' }}
        note="فرم را تکمیل کنید تا پس از بررسی اطلاعات کسب‌وکار، درباره امکان همکاری با شما تماس گرفته شود."
      />
    </>
  );
}
