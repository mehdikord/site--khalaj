'use client';

import { useEffect, useState } from 'react';

const KEY = 'pk_news_dismissed';

export default function NewsletterPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(KEY) === '1';
    } catch {
      dismissed = true; // storage blocked → don't nag the visitor
    }
    if (dismissed) return;

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setShow(true);
    };

    // Show only after real engagement: 60s on page or 60% scroll depth.
    const timer = window.setTimeout(reveal, 60000);
    const onScroll = () => {
      const ratio = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      if (ratio > 0.6) reveal();
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  function close() {
    setShow(false);
    try {
      window.localStorage.setItem(KEY, '1');
    } catch {
      /* ignore */
    }
  }

  if (!show) return null;

  return (
    <aside className="pop" role="dialog" aria-label="خبرنامه پویا خلج">
      <button type="button" className="pop__x" onClick={close} aria-label="بستن">
        ×
      </button>
      <span className="eyebrow">Newsletter</span>
      <h3>قبل از رفتن، یک سؤال:</h3>
      <p style={{ marginBottom: '1.15rem' }}>
        چرا بعضی برندها انتخاب می‌شوند و بعضی فقط دیده می‌شوند؟ اگر چنین سؤال‌هایی برایتان جذاب است، عضو خبرنامه شوید.
      </p>
      <a href="/insights#newsletter" className="btn btn--primary" onClick={close} style={{ width: '100%' }}>
        عضویت در خبرنامه
      </a>
      <button
        type="button"
        onClick={close}
        style={{ background: 'none', border: 0, color: 'var(--muted)', fontSize: '.85rem', marginTop: '.9rem', cursor: 'pointer', padding: 0 }}
      >
        فعلاً نه
      </button>
    </aside>
  );
}
