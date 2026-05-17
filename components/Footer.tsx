import Link from 'next/link';
import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { siteConfig } from '@/lib/site';

const SOCIALS = [
  { href: siteConfig.social.linkedin,  icon: Linkedin,  label: 'LinkedIn' },
  { href: siteConfig.social.twitter,   icon: Twitter,   label: 'Twitter / X' },
  { href: siteConfig.social.github,    icon: Github,    label: 'GitHub' },
  { href: siteConfig.social.instagram, icon: Instagram, label: 'Instagram' },
];

const SERVICES = [
  ['/services/web-development',             'Web Development'],
  ['/services/custom-software-development', 'Custom Software'],
  ['/services/saas-development',            'SaaS Development'],
  ['/services/ecommerce-development',       'E-commerce'],
  ['/services/api-integration',             'API Integration'],
  ['/services/business-automation',         'Business Automation'],
] as const;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: '#000000', borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Grid */}
        <div className="grid md:grid-cols-12 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
              <span className="w-9 h-9 rounded grid place-items-center"
                style={{ background: '#dc3545' }}>
                <span className="text-white font-bold text-sm">HN</span>
              </span>
              <span className="font-bold text-lg text-white">
                Hosting Nation
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#696969' }}>
              A modern software studio founded by{' '}
              <Link href="/founder" className="text-white hover:text-[#dc3545] underline underline-offset-2 transition-colors">
                Mohd Suhail
              </Link>.
              Custom web apps, SaaS, e-commerce, and automation for startups worldwide.
            </p>
            <a href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 mt-5 text-sm transition-colors hover:text-white"
              style={{ color: '#696969' }}>
              <Mail size={13} /> {siteConfig.email}
            </a>
            <div className="flex items-center gap-2 mt-5">
              {SOCIALS.map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="footer-social w-9 h-9 rounded grid place-items-center transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#444' }}>Company</p>
            <ul className="space-y-3">
              {[
                { href: '/about',   l: 'About' },
                { href: '/founder', l: 'Founder — Mohd Suhail' },
                { href: '/services',l: 'Services' },
                { href: '/contact', l: 'Contact' },
              ].map(({ href, l }) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors hover:text-white" style={{ color: '#696969' }}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#444' }}>Services</p>
            <ul className="space-y-3">
              {SERVICES.map(([href, l]) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors hover:text-white" style={{ color: '#696969' }}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #1a1a1a' }} className="pt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs" style={{ color: '#696969' }}>
            <p>
              © {year} {siteConfig.name}. Founded by{' '}
              <Link href="/founder" className="hover:text-white transition-colors">Mohd Suhail</Link>.
              All rights reserved.
            </p>
            <p>Built with Next.js · TypeScript · Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
