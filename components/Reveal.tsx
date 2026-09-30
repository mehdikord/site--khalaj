'use client';

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ElementType,
  type CSSProperties,
} from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: ElementType;
  style?: CSSProperties;
  id?: string;
};

/**
 * Reveals content on scroll. Progressive enhancement:
 * if JS is disabled or the user prefers reduced motion, content stays visible.
 */
export default function Reveal({ children, className = '', delay = 0, as, style, id }: Props) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      style={style}
      data-d={delay || undefined}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
