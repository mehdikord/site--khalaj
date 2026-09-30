import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleBody from '@/components/ArticleBody';
import Reveal from '@/components/Reveal';
import { Newsletter } from '@/components/Sections';
import { categoryLabel, formatDate, getPost, posts, relatedPosts } from '@/content/insights';
import { site } from '@/content/site';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'بینش' };
  return {
    title: post.title,
    description: post.dek,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: { type: 'article', title: post.title, description: post.dek, url: `${site.url}/insights/${post.slug}` },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = relatedPosts(slug, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.dek,
    datePublished: post.date,
    inLanguage: 'fa-IR',
    author: { '@type': 'Person', name: 'Pouya Khalaj', url: site.url },
    publisher: { '@type': 'Person', name: 'Pouya Khalaj' },
    mainEntityOfPage: `${site.url}/insights/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article>
        <header className="hero hero--page">
          <div className="wrap">
            <Reveal>
              <nav className="tiny muted" style={{ marginBottom: '1.5rem', display: 'flex', gap: '.5rem' }} aria-label="مسیر صفحه">
                <Link href="/insights" className="muted">
                  بینش‌ها
                </Link>
                <span>/</span>
                <span>{categoryLabel(post.category)}</span>
              </nav>
              <h1 style={{ maxWidth: '30ch' }}>{post.title}</h1>
              <p className="lead" style={{ marginTop: '1.5rem', maxWidth: '54ch' }}>
                {post.dek}
              </p>
              <div className="post-meta" style={{ marginTop: '1.75rem' }}>
                <span className="chip">{categoryLabel(post.category)}</span>
                <span>{formatDate(post.date)}</span>
                <span>زمان مطالعه: {post.minutes} دقیقه</span>
              </div>
            </Reveal>
          </div>
        </header>

        <div className="wrap">
          <Reveal>
            <ArticleBody blocks={post.blocks} />
          </Reveal>

          <hr className="rule" style={{ marginBlock: 'clamp(3rem, 6vw, 4.5rem)' }} />

          <Reveal>
            <span className="eyebrow">Related</span>
            <h2 style={{ fontSize: 'clamp(1.35rem, 2.4vw, 1.9rem)', marginBottom: '1.75rem' }}>مطالب مرتبط</h2>
          </Reveal>
          <div className="cards-3">
            {related.map((r) => (
              <Reveal as="article" key={r.slug} className="card art-card">
                <div className="art-card__top">
                  <span className="chip">{categoryLabel(r.category)}</span>
                  <span className="tiny muted">{r.minutes} دقیقه</span>
                </div>
                <h3>
                  <Link href={`/insights/${r.slug}`}>{r.title}</Link>
                </h3>
                <p>{r.dek}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      <div style={{ marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
        <Newsletter id="newsletter" />
      </div>
    </>
  );
}
