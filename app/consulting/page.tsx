import type { Metadata } from 'next';
import ConsultForm from '@/components/ConsultForm';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { CtaBand, SectionHead } from '@/components/Sections';

export const metadata: Metadata = {
  title: 'مشاوره استراتژی و مهندسی برند',
  description:
    'مشاوره مهندسی برند برای مدیران، بنیان‌گذاران و کسب‌وکارهایی که به دنبال جایگاه روشن‌تر، تمایز معنادار و مسیر رشد منسجم‌تر هستند.',
  alternates: { canonical: '/consulting' },
};

const suitableFor = [
  'برای بنیان‌گذارانی که در حال ساخت یک برند جدید هستند.',
  'برای کسب‌وکارهایی که رشد کرده‌اند اما برندشان متناسب با این رشد توسعه پیدا نکرده است.',
  'برای برندهایی که میان رقبا تفاوت معناداری ندارند.',
  'برای کسب‌وکارهایی که قصد ورود به بازار یا دسته جدیدی را دارند.',
  'برای مدیرانی که احساس می‌کنند تبلیغات انجام می‌شود، اما برند ساخته نمی‌شود.',
  'برای برندهایی که نیاز به بازتعریف جایگاه یا Repositioning دارند.',
];

const topics = [
  'استراتژی برند',
  'جایگاه‌سازی',
  'مزیت رقابتی',
  'ارزش پیشنهادی',
  'معناسازی برند',
  'تجربه مشتری',
  'استراتژی محصول',
  'معماری برند',
  'استراتژی محتوا',
  'برند شخصی',
  'بازتعریف برند',
  'تحلیل رقبا',
  'استراتژی رشد',
];

const process = [
  {
    step: 'مرحله اول',
    title: 'شناخت مسئله',
    desc: 'قبل از جلسه، اطلاعات اولیه کسب‌وکار از طریق فرم دریافت می‌شود تا مسئله، وضعیت فعلی و هدف همکاری روشن‌تر شود.',
  },
  {
    step: 'مرحله دوم',
    title: 'تحلیل',
    desc: 'کسب‌وکار، برند، رقبا، مخاطب و اطلاعات موجود بررسی می‌شوند.',
  },
  {
    step: 'مرحله سوم',
    title: 'جلسه استراتژی',
    desc: 'مسئله اصلی تحلیل می‌شود و درباره گزینه‌ها، اولویت‌ها و تصمیم‌های استراتژیک گفت‌وگو می‌کنیم.',
  },
  {
    step: 'مرحله چهارم',
    title: 'مسیر اقدام',
    desc: 'در پایان، مسئله باید از یک ابهام کلی به مجموعه‌ای از تصمیم‌ها و اقدامات مشخص تبدیل شده باشد.',
  },
];

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand Consulting"
        title="بعضی مسائل کسب‌وکار با تبلیغات بیشتر حل نمی‌شوند."
        titleMax="26ch"
        lead={
          <>
            گاهی مسئله، محصول نیست؛ جایگاه محصول است. گاهی مسئله، فروش نیست؛ دلیل انتخاب مشتری است. و گاهی مسئله، دیده
            نشدن نیست؛ چیزی است که بعد از دیده شدن درباره شما در ذهن مخاطب باقی می‌ماند. جلسات مشاوره مهندسی برند برای
            پیدا کردن و حل کردن همین مسائل طراحی شده‌اند.
          </>
        }
      >
        <div className="btn-row" style={{ marginTop: '2.4rem' }}>
          <a href="#request" className="btn btn--primary">
            تکمیل فرم درخواست مشاوره
          </a>
          <a href="#process" className="btn btn--ghost">
            فرایند همکاری
          </a>
        </div>
      </PageHero>

      {/* Suitable for */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <SectionHead eyebrow="Who it is for" title="این مشاوره برای چه کسانی مناسب است؟" />
            <Reveal delay={1}>
              <ul className="tick">
                {suitableFor.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="sec sec--bone">
        <div className="wrap">
          <SectionHead
            eyebrow="Scope"
            title="موضوعاتی که می‌توانند در مشاوره بررسی شوند"
            lead="بسته به مسئله کسب‌وکار، تمرکز جلسات روی یکی یا ترکیبی از این موضوعات شکل می‌گیرد."
          />
          <Reveal delay={1} className="chips">
            {topics.map((t) => (
              <span key={t} className="chip" style={{ borderColor: 'rgba(0,0,0,.16)', color: '#2a2a2d', background: 'rgba(0,0,0,.02)' }}>
                {t}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="sec" id="process">
        <div className="wrap">
          <SectionHead eyebrow="Process" title="فرایند همکاری" lead="از دریافت اطلاعات اولیه تا رسیدن به تصمیم‌های قابل اجرا." />
          <Reveal className="rows">
            {process.map((p, i) => (
              <article className="row" key={p.step}>
                <div className="row__n">{String(i + 1).padStart(2, '0')}</div>
                <div className="row__t">
                  <h3>{p.title}</h3>
                  <span className="en">{p.step}</span>
                </div>
                <div className="row__d">
                  <p>{p.desc}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* What you get / don't get */}
      <section className="sec">
        <div className="wrap">
          <div className="cards-2">
            <Reveal className="card">
              <span className="eyebrow">Outcome</span>
              <h3 style={{ marginBottom: '1rem' }}>چه چیزی دریافت می‌کنید؟</h3>
              <p className="muted" style={{ marginBottom: '.85rem' }}>
                هدف جلسه ارائه توصیه‌های عمومی نیست. تمرکز روی مسئله مشخص کسب‌وکار شماست.
              </p>
              <p>
                پس از همکاری باید تصویر روشن‌تری از وضعیت فعلی، مسئله اصلی، فرصت‌ها، اولویت‌ها و اقدام بعدی داشته باشید.
              </p>
            </Reveal>
            <Reveal delay={1} className="card">
              <span className="eyebrow">Not included</span>
              <h3 style={{ marginBottom: '1rem' }}>چه چیزی دریافت نمی‌کنید؟</h3>
              <ul className="bullets">
                <li>راه‌حل جادویی.</li>
                <li>فرمولی که برای تمام کسب‌وکارها یکسان باشد.</li>
                <li>وعده رشد یک‌شبه.</li>
                <li>مجموعه‌ای از اصطلاحات پیچیده بدون ارتباط با واقعیت کسب‌وکار.</li>
              </ul>
              <p className="muted" style={{ marginTop: '1.15rem' }}>
                استراتژی خوب باید در دنیای واقعی قابل استفاده باشد.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="sec" id="request" style={{ scrollMarginTop: '5rem' }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Request a consultation"
            title="درباره کسب‌وکارتان بگویید."
            lead="برای اینکه قبل از گفت‌وگو تصویر بهتری از شرایط داشته باشیم، لطفاً این فرم را با دقت تکمیل کنید. ارسال فرم به معنی تأیید همکاری نیست."
            wide
          />
          <Reveal delay={1}>
            <ConsultForm />
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Still deciding?"
        title="اگر مسئله‌ای وجود دارد که نمی‌خواهید با آزمون و خطای بیشتر حلش کنید، درباره آن گفت‌وگو کنیم."
        text="ارسال فرم به معنی تأیید همکاری نیست. اطلاعات اولیه بررسی می‌شود و در صورت تناسب موضوع با حوزه مشاوره، برای ادامه فرایند با شما ارتباط گرفته خواهد شد."
        primary={{ href: '/consulting#request', label: 'تکمیل فرم درخواست مشاوره' }}
        secondary={{ href: '/insights', label: 'مطالعه بینش‌ها' }}
      />
    </>
  );
}
