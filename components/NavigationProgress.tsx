'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { subscribeNavigating, setNavigating } from '@/lib/navState';

/**
 * Renders the colored top progress bar + dark overlay.
 * The bar is driven by navState (set by NavLink on click) and reset when pathname changes.
 */
export default function NavigationProgress() {
  const pathname = usePathname();
  const barRef     = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const doneTimer  = useRef<ReturnType<typeof setTimeout>>();

  /* ── When navState flips to loading ────────────────────── */
  useEffect(() => {
    const unsub = subscribeNavigating((loading) => {
      const bar     = barRef.current;
      const overlay = overlayRef.current;
      if (!bar || !overlay) return;

      if (loading) {
        /* Show overlay */
        overlay.classList.add('show');
        /* Start progress bar */
        bar.classList.remove('done');
        bar.classList.add('active');
      } else {
        /* Hide overlay */
        overlay.classList.remove('show');
        /* Complete bar → fade out */
        bar.classList.remove('active');
        bar.classList.add('done');
        if (doneTimer.current) clearTimeout(doneTimer.current);
        doneTimer.current = setTimeout(() => {
          bar.classList.remove('done');
        }, 400);
      }
    });
    return () => void unsub();
  }, []);

  /* ── When route actually changes → clear loading ─────── */
  useEffect(() => {
    setNavigating(false);
  }, [pathname]);

  return (
    <>
      <div id="nav-progress" ref={barRef} aria-hidden="true" />
      <div id="nav-overlay"  ref={overlayRef} aria-hidden="true" />
    </>
  );
}
