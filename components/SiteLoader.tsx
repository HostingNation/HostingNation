'use client';

import { useEffect } from 'react';

export default function SiteLoader() {
  useEffect(() => {
    const el = document.getElementById('site-loader');
    if (!el) return;
    const t1 = setTimeout(() => el.classList.add('fading'),  500);
    const t2 = setTimeout(() => el.classList.add('hidden'),  950);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return null; /* The DOM element is rendered inline in layout (no hydration flash) */
}
