'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav } from '@/content/site';

export default function Header() {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className={`hd ${stuck ? 'is-stuck' : ''} ${open ? 'is-open' : ''}`}>
      <div className="wrap wrap-wide hd__in">
        <Link href="/" className="hd__logo" aria-label={'\u067E\u0648\u06CC\u0627 \u062E\u0644\u062C'}>
          <b>{'\u067E\u0648\u06CC\u0627 \u062E\u0644\u062C'}</b>
          <span>Brand Engineering</span>
        </Link>

        <nav className="hd__nav" aria-label="\u0645\u0646\u0648\u06CC \u0627\u0635\u0644\u06CC">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hd__link ${isActive(item.href) ? 'is-active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/consulting#request" className="btn btn--primary hd__cta">
          {'\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0645\u0634\u0627\u0648\u0631\u0647'}
        </Link>

        <button
          type="button"
          className="hd__burger"
          aria-label={open ? '\u0628\u0633\u062A\u0646 \u0645\u0646\u0648' : '\u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u0645\u0646\u0648'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <i />
        </button>
      </div>

      {open && (
        <div className="hd__drawer">
          {nav.map((item, i) => (
            <Link key={item.href} href={item.href}>
              {item.label}
              <span>{String(i + 1).padStart(2, '0')}</span>
            </Link>
          ))}
          <Link href="/consulting#request" className="btn btn--primary">
            درخواست مشاوره
          </Link>
        </div>
      )}
    </header>
  );
}
