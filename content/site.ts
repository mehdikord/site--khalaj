/**
 * Single source of truth for site-wide settings.
 * Anything marked EDIT REQUIRED must be replaced with the client's real data
 * before going live (see README.md → "چه چیزهایی باید جایگزین شود").
 */

export const site = {
  name: 'پویا خلج',
  nameEn: 'Pouya Khalaj',
  role: 'متخصص مهندسی برند',
  tagline: 'Brands are engineered.',
  description:
    'وب‌سایت رسمی پویا خلج، متخصص مهندسی برند. آموزش و مشاوره در حوزه استراتژی برند، جایگاه‌سازی، تجربه مشتری و رشد کسب‌وکار.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://pouyakhalaj.ir',
};

// EDIT REQUIRED: real email address
export const contact = {
  email: 'hello@pouyakhalaj.ir',
  instagram: { label: '@pouyakhalaj.ir', href: 'https://instagram.com/pouyakhalaj.ir' },
  linkedin: { label: 'Pouya Khalaj', href: 'https://www.linkedin.com/in/pouyakhalaj' },
  office: 'تهران، ایران', // EDIT REQUIRED: only if an official address exists
};

export const nav = [
  { label: 'خانه', href: '/' },
  { label: 'مهندسی برند', href: '/brand-engineering' },
  { label: 'مشاوره', href: '/consulting' },
  { label: 'آکادمی', href: '/academy' },
  { label: 'بینش‌ها', href: '/insights' },
  { label: 'درباره پویا', href: '/about' },
  { label: 'تماس', href: '/contact' },
];

export const footerLinks = [
  ...nav,
  { label: 'سیاست حفظ حریم خصوصی', href: '/privacy' },
  { label: 'شرایط استفاده', href: '/terms' },
];
