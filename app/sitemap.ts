import type { MetadataRoute } from 'next';
import { courses } from '@/content/courses';
import { posts } from '@/content/insights';
import { site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/brand-engineering', priority: 0.9 },
    { path: '/consulting', priority: 0.9 },
    { path: '/academy', priority: 0.8 },
    { path: '/insights', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
    { path: '/privacy', priority: 0.2 },
    { path: '/terms', priority: 0.2 },
  ];

  return [
    ...pages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: p.priority,
    })),
    ...posts.map((post) => ({
      url: `${site.url}/insights/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    ...courses.map((course) => ({
      url: `${site.url}/academy/${course.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
