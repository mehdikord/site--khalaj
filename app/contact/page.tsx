import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { SectionHead } from '@/components/Sections';
import { contact } from '@/content/site';

export const metadata: Metadata = {
  title: 'تماس با پویا خلج | مشاوره برند',
  description:
    'برای درخواست مشاوره برند، همکاری تجاری، دعوت به سخنرانی یا همکاری رسانه‌ای از فرم تماس استفاده کنید.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="یک گفت‌وگوی خوب می‌تواند نقطه شروع یک تصمیم مهم باشد."
        lead="برای درخواست مشاوره، همکاری، دعوت به رویداد یا سایر موضوعات می‌توانید از فرم زیر استفاده کنید."
      />

      <section className="sec">
        <div className="wrap">
          <div className="split">
            <div>
              <SectionHead eyebrow="Write to us" title="فرم تماس" />
              <p className="small muted">
                اگر درخواست شما مربوط به مشاوره مهندسی برند است، تکمیل
                <Link href="/consulting#request" style={{ color: 'var(--accent)' }}>
                  {' '}
                  فرم اختصاصی مشاوره{' '}
                </Link>
                تصویر دقیق‌تری از کسب‌وکار شما ایجاد می‌کند.
              </p>
            </div>
            <Reveal delay={1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap">
          <h2 style={{ marginBottom: '1.75rem' }}>اطلاعات تماس</h2>
          <div className="info-grid">
            <div className="info">
              <b>همکاری و مشاوره</b>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className="info">
              <b>Instagram</b>
              <a href={contact.instagram.href} target="_blank" rel="noopener noreferrer">
                {contact.instagram.label}
              </a>
            </div>
            <div className="info">
              <b>LinkedIn</b>
              <a href={contact.linkedin.href} target="_blank" rel="noopener noreferrer">
                {contact.linkedin.label}
              </a>
            </div>
            <div className="info">
              <b>دفتر</b>
              <span className="muted small">{contact.office}</span>
            </div>
          </div>
          <p className="tiny muted" style={{ marginTop: '1.5rem' }}>
            زمان پاسخ‌دهی معمولاً ۱ تا ۳ روز کاری است. ایمیل رسمی و آدرس دفتر در فایل تنظیمات سایت قابل تغییر است.
          </p>
        </div>
      </section>
    </>
  );
}
