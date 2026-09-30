import type { Metadata } from 'next';
import InsightsGrid from '@/components/InsightsGrid';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { Newsletter, SectionHead } from '@/components/Sections';
import { categories, categoryLabel, posts, type CategoryId } from '@/content/insights';

export const metadata: Metadata = {
  title: 'تحلیل برند و استراتژی کسب‌وکار',
  description:
    'تحلیل داستان برندها، استراتژی برند، رفتار مشتری، جایگاه‌سازی و رشد کسب‌وکار در Insights پویا خلج.',
  alternates: { canonical: '/insights' },
};

export default function InsightsPage() {
  const labels: Record<string, string> = {};
  posts.forEach((p) => (labels[p.category] = categoryLabel(p.category)));

  const ordered = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="پشت هر برند قدرتمند، تصمیم‌هایی وجود دارد که دیده نمی‌شوند."
        lead="اینجا برندها را نه برای تعریف کردن داستان موفقیتشان، بلکه برای کشف منطق پشت تصمیم‌هایشان بررسی می‌کنیم. استراتژی. روان‌شناسی مشتری. جایگاه‌سازی. تجربه. معنا. و رشد."
      />

      <section className="sec sec--flush">
        <div className="wrap">
          <Reveal>
            <InsightsGrid
              posts={ordered}
              categories={categories}
              labels={labels}
            />
          </Reveal>
        </div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap">
          <SectionHead
            eyebrow="How to use this"
            title="بینش‌ها برای تصمیم‌گیری نوشته می‌شوند، نه برای تحسین کردن."
            lead="در پایان هر تحلیل، سه سؤال برای کاربرد در کسب‌وکار خودتان مطرح می‌شود. گاهی یک سؤال درست بیشتر از ده‌ها تاکتیک می‌تواند مسیر یک برند را تغییر دهد."
          />
        </div>
      </section>

      <Newsletter id="newsletter" />
    </>
  );
}
