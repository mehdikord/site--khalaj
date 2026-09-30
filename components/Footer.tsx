import Link from 'next/link';
import { contact, nav, site } from '@/content/site';

export default function Footer() {
  const year = new Intl.DateTimeFormat('fa-IR', { year: 'numeric' }).format(new Date());

  return (
    <footer className="ft">
      <div className="wrap wrap-wide">
        <div className="ft__top">
          <div>
            <div className="ft__word">Pouya Khalaj</div>
            <div className="eyebrow is-fa" style={{ marginTop: '.75rem' }}>
              Brand Engineering
            </div>
            <p className="small muted" style={{ maxWidth: '34ch' }}>
              ساختن برندهایی که فقط دیده نمی‌شوند؛ معنا پیدا می‌کنند، انتخاب می‌شوند و رشد می‌کنند.
            </p>
          </div>

          <div>
            <h4>Menu</h4>
            <div className="ft__links">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4>Connect</h4>
            <div className="ft__links">
              <a href={contact.instagram.href} target="_blank" rel="noopener noreferrer">
                Instagram — {contact.instagram.label}
              </a>
              <a href={contact.linkedin.href} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <p className="tiny muted" style={{ marginTop: '1rem' }}>
              برای همکاری، مشاوره یا دعوت به رویداد از صفحه تماس استفاده کنید.
            </p>
          </div>
        </div>

        <div className="ft__bottom">
          <span>© {year} Pouya Khalaj. All Rights Reserved.</span>
          <div className="ft__bot-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
        <p className="tiny muted" style={{ marginTop: '1.25rem' }}>
          {site.tagline}
        </p>
      </div>
    </footer>
  );
}
