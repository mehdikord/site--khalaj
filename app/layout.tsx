import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterPopup from '@/components/NewsletterPopup';
import { contact, site } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'پویا خلج | متخصص مهندسی برند',
    template: '%s | پویا خلج',
  },
  description: site.description,
  applicationName: 'Pouya Khalaj — Brand Engineering',
  keywords: [
    'مهندسی برند',
    'مشاوره برند',
    'استراتژی برند',
    'جایگاه‌سازی برند',
    'برندسازی',
    'برند شخصی',
    'پویا خلج',
    'brand engineering',
  ],
  authors: [{ name: 'Pouya Khalaj', url: site.url }],
  creator: 'Pouya Khalaj',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: site.url,
    siteName: site.name,
    title: 'پویا خلج | متخصص مهندسی برند',
    description: site.description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Pouya Khalaj — Brand Engineering' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'پویا خلج | متخصص مهندسی برند',
    description: site.description,
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg' },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pouya Khalaj',
  alternateName: 'پویا خلج',
  jobTitle: 'متخصص مهندسی برند',
  url: site.url,
  email: `mailto:${contact.email}`,
  description: site.description,
  knowsAbout: ['Brand Engineering', 'Brand Strategy', 'Positioning', 'Consumer Psychology', 'Business Growth'],
  sameAs: [contact.instagram.href, contact.linkedin.href],
};

const siteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  url: site.url,
  inLanguage: 'fa-IR',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          rel="preload"
          href="/fonts/Vazirmatn-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#08080a" />
        <meta name="color-scheme" content="dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, siteSchema]) }}
        />
      </head>
      <body>
        <a
          href="#main"
          style={{ position: 'absolute', insetInlineStart: -9999, top: 0 }}
          className="btn btn--primary"
        >
          رفتن به محتوای اصلی
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <NewsletterPopup />
      </body>
    </html>
  );
}
