'use client';

import { useEffect, useState, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Loader2 } from 'lucide-react';
import { setNavigating } from '@/lib/navState';

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/founder',  label: 'Founder' },
  { href: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname        = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50" style={{ background: '#000000' }}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[64px]" aria-label="Primary navigation">

        {/* Logo */}
        <NavLink href="/" className="flex items-center gap-2.5 group" aria-label="Hosting Nation — Home">
          <span className="w-8 h-8 rounded grid place-items-center"
            style={{ background: '#dc3545' }}>
            <span className="text-white font-bold text-sm">HN</span>
          </span>
          <span className="font-bold text-base tracking-tight text-white">
            Hosting Nation
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                activeClass="text-white font-bold"
                inactiveClass="text-gray-400 hover:text-white"
                className="px-4 py-2 text-sm font-bold transition-colors duration-150"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA buttons — ViralPitch style */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink href="/services"
            className="px-5 py-2 text-sm font-semibold transition-all duration-200"
            style={{ border: '1px solid #dc3545', color: '#dc3545', borderRadius: 4 }}
            activeClass="" inactiveClass="">
            Our Services
          </NavLink>
          <NavLink href="/contact"
            className="px-5 py-2 text-sm font-semibold text-white transition-all duration-200"
            style={{ background: '#dc3545', borderRadius: 4 }}
            activeClass="" inactiveClass="">
            Start a Project
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded transition-colors"
          style={{ background: '#dc3545' }}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}
        style={open ? { borderTop: '1px solid #222', background: '#111111' } : {}}
      >
        <ul className="px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                className="block px-4 py-3 text-sm font-bold transition-colors"
                activeClass="text-white"
                inactiveClass="text-gray-400 hover:text-white"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-3 pb-1">
            <NavLink href="/contact"
              className="w-full flex items-center justify-center py-2.5 text-sm font-semibold text-white"
              style={{ background: '#dc3545', borderRadius: 4 }}
              activeClass="" inactiveClass="">
              Start a Project
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

/* ── NavLink ──────────────────────────────────────────────── */
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClass?: string;
  inactiveClass?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
}

function NavLink({ href, children, className = '', activeClass = '', inactiveClass = '', style, 'aria-label': ariaLabel }: NavLinkProps) {
  const router   = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const isActive = pathname === href;

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    if (isActive) return;
    setNavigating(true);
    startTransition(() => router.push(href));
  }

  const stateClass = (activeClass || inactiveClass) ? (isActive ? activeClass : inactiveClass) : '';

  return (
    <a href={href} onClick={handleClick} aria-label={ariaLabel} aria-current={isActive ? 'page' : undefined}
      className={`${className} ${stateClass}`} style={style}>
      {isPending ? (
        <span className="inline-flex items-center gap-1.5 animate-nav-pulse">
          <Loader2 size={13} className="animate-spin" style={{ color: '#dc3545' }} />
          {typeof children === 'string' ? children : null}
        </span>
      ) : children}
    </a>
  );
}
