'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import type { CategoryId, Post } from '@/content/insights';

type Props = {
  posts: Post[];
  categories: { id: CategoryId | 'all'; label: string }[];
  labels: Record<string, string>;
};

export default function InsightsGrid({ posts, categories, labels }: Props) {
  const [active, setActive] = useState<CategoryId | 'all'>('all');
  const [query, setQuery] = useState('');

  // Supports deep links like /insights?cat=strategy while keeping the page static.
  useEffect(() => {
    const cat = new URLSearchParams(window.location.search).get('cat');
    if (cat && categories.some((c) => c.id === cat)) setActive(cat as CategoryId);
  }, [categories]);

  const visible = useMemo(() => {
    const q = query.trim();
    return posts.filter((p) => {
      const inCat = active === 'all' || p.category === active;
      const inQuery = !q || p.title.includes(q) || p.dek.includes(q);
      return inCat && inQuery;
    });
  }, [posts, active, query]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2.25rem',
        }}
      >
        <div className="chips" role="tablist" aria-label="دسته‌بندی مطالب">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={active === c.id}
              className={`chip ${active === c.id ? 'is-on' : ''}`}
              style={{ cursor: 'pointer' }}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="field" style={{ minWidth: '15rem' }}>
          <label htmlFor="insights-search" className="tiny muted">
            جست‌وجو در بینش‌ها
          </label>
          <input
            id="insights-search"
            className="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="عنوان یا موضوع…"
          />
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="muted">موردی با این عبارت پیدا نشد. عبارت دیگری را امتحان کنید.</p>
      ) : (
        <div className="cards-3">
          {visible.map((post) => (
            <article className="card art-card" key={post.slug}>
              <div className="art-card__top">
                <span className="chip">{labels[post.category]}</span>
                <span className="tiny muted">{post.minutes} دقیقه</span>
              </div>
              <h3>
                <Link href={`/insights/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.dek}</p>
              <Link href={`/insights/${post.slug}`} className="tlink">
                مطالعه مقاله <span className="arw">←</span>
              </Link>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
