import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Pricing | Hosting Nation — Web Development & SaaS',
  description:
    'Transparent, fixed-price web development packages. Starter from $1,500 · Business from $4,000 · SaaS MVP from $8,000 · Enterprise custom. No surprises.',
  alternates: { canonical: `${siteConfig.url}/pricing` },
  openGraph: {
    title: 'Pricing | Hosting Nation',
    description: 'Transparent pricing for web apps, SaaS MVPs, e-commerce, and enterprise builds.',
    url: `${siteConfig.url}/pricing`,
  },
};

const TIERS = [
  {
    name:      'Starter',
    price:     '$1,500',
    suffix:    'starting at',
    tagline:   'Landing pages, portfolios & simple web apps',
    accent:    '#0284c7',
    featured:  false,
    includes: [
      'Up to 8 pages or screens',
      'Custom design — no templates',
      'Next.js or React frontend',
      'Contact / lead form with email notification',
      'Mobile-responsive layout',
      'SEO fundamentals (meta, sitemap, robots.txt)',
      'Deployment on Vercel or your host',
      '14 days post-launch support',
    ],
    notIncluded: 'Backend logic, auth, database, or 3rd-party APIs',
    timeline:  '2–3 weeks',
  },
  {
    name:      'Business',
    price:     '$4,000',
    suffix:    'starting at',
    tagline:   'Full-stack platforms, client portals & business sites',
    accent:    '#dc3545',
    featured:  true,
    includes: [
      'Everything in Starter, plus:',
      'Full-stack build (Next.js + Node.js backend)',
      'Database setup (PostgreSQL or MongoDB)',
      'User authentication (login, roles, sessions)',
      'Admin dashboard or CMS integration',
      'Up to 3 third-party API integrations',
      'Staging + production deployment',
      '30 days post-launch support',
    ],
    notIncluded: null,
    timeline:  '4–6 weeks',
  },
  {
    name:      'SaaS MVP',
    price:     '$8,000',
    suffix:    'starting at',
    tagline:   'Subscription platforms, multi-tenant apps & internal tools',
    accent:    '#059669',
    featured:  false,
    includes: [
      'Everything in Business, plus:',
      'Multi-tenant architecture',
      'Stripe subscription billing (monthly / annual)',
      'Role-based access control (RBAC)',
      'Onboarding flow + user dashboard',
      'API design + documentation',
      'Analytics and event tracking setup',
      'AWS or Vercel infrastructure',
      '60 days post-launch support',
    ],
    notIncluded: null,
    timeline:  '6–10 weeks',
  },
  {
    name:      'Enterprise',
    price:     'Custom',
    suffix:    'quote',
    tagline:   'Complex platforms, high-traffic products & ongoing teams',
    accent:    '#ea580c',
    featured:  false,
    includes: [
      'End-to-end architecture design',
      'Custom integrations & third-party systems',
      'Scalable cloud infrastructure (AWS, multi-region)',
      'Dedicated weekly sync calls',
      'QA + testing protocols',
      'Ongoing retainer option available',
      'NDA available on request',
    ],
    notIncluded: null,
    timeline:  'Scoped per project',
  },
];

const FAQS = [
  {
    q: 'Do you work on fixed-price or hourly contracts?',
    a: 'Both. Most projects are fixed-price with a defined scope — this protects you from bill shock. For ongoing work or evolving requirements, we offer a monthly retainer with a set number of hours. We\'ll recommend the right model on our first call.',
  },
  {
    q: 'How do payments work?',
    a: 'Fixed-price projects: 50% upfront to begin, 50% on delivery. Larger projects split into three milestones: 40% / 30% / 30%. We accept bank transfer, Wise, and PayPal for international clients.',
  },
  {
    q: 'What if I need changes after the project is live?',
    a: 'All tiers include post-launch support — 14 to 60 days depending on the plan — covering bug fixes and minor adjustments at no extra cost. Feature additions after delivery are scoped separately.',
  },
  {
    q: 'Can I start with Starter and upgrade later?',
    a: 'Yes. We build with modularity in mind. Starting with a clean frontend now doesn\'t trap you — we can add the backend layer in a follow-on project. That said, if you already know you\'ll need auth and a database, starting at Business will save you money.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes. On request, we\'ll sign an NDA before you share any sensitive project details. This is standard for our US, UK, and UAE clients.',
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: siteConfig.url },
        { name: 'Pricing', url: `${siteConfig.url}/pricing` },
      ])} />

      {/* Header */}
      <section className="section pt-28 md:pt-32">
        <div className="max-w-3xl">
          <span className="eyebrow mb-4 block">Pricing</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Transparent pricing.<br />
            <span style={{ color: '#dc3545' }}>No surprises.</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: '#606060' }}>
            Every quote at Hosting Nation is scoped against your actual requirements. The tiers below are starting points — not ceilings. If your project doesn&apos;t fit neatly into a box, we&apos;ll scope it honestly.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="section cv-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {TIERS.map(({ name, price, suffix, tagline, accent, featured, includes, notIncluded, timeline }) => (
            <div key={name} className={`flex flex-col rounded-2xl overflow-hidden bg-white ${featured ? 'ring-2 shadow-lg' : ''}`}
              style={{
                border: `1px solid ${featured ? accent : '#ebebeb'}`,
                ...(featured ? { outline: `2px solid ${accent}`, outlineOffset: 0 } : {}),
              }}>

              {featured && (
                <div className="text-center py-1.5 text-xs font-bold uppercase tracking-widest text-white"
                  style={{ background: accent }}>
                  Most Popular
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-5">
                  <h2 className="text-xl font-extrabold" style={{ color: '#000000' }}>{name}</h2>
                  <p className="text-xs mt-1" style={{ color: '#888888' }}>{tagline}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-end gap-1.5">
                    <span className="text-3xl font-extrabold" style={{ color: accent }}>{price}</span>
                    <span className="text-sm pb-1" style={{ color: '#888888' }}>{suffix}</span>
                  </div>
                  <p className="text-xs mt-1.5" style={{ color: '#888888' }}>Timeline: {timeline}</p>
                </div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-snug" style={{ color: '#606060' }}>
                      <Check size={14} className="shrink-0 mt-0.5" style={{ color: accent }} />
                      {item}
                    </li>
                  ))}
                </ul>

                {notIncluded && (
                  <p className="text-xs mb-4 leading-snug italic" style={{ color: '#888888' }}>
                    Not included: {notIncluded}
                  </p>
                )}

                <Link href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold transition-all"
                  style={{
                    background: featured ? accent : 'transparent',
                    color: featured ? '#fff' : accent,
                    border: `1px solid ${accent}`,
                    borderRadius: 4,
                  }}>
                  {name === 'Enterprise' ? 'Get a Custom Quote' : 'Get Started'} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section cv-auto" style={{ background: '#fff6f6' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-center">
            Pricing <span style={{ color: '#dc3545' }}>FAQ</span>
          </h2>
          <div className="space-y-5">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="rounded-xl p-6 bg-white" style={{ border: '1px solid #ebebeb' }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: '#000000' }}>{q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#606060' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
