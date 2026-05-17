import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Users, Zap, Globe2, ShieldCheck, Sparkles } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import CTA from '@/components/CTA';
import { breadcrumbSchema, organizationSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Hosting Nation | Software Company Founded by Mohd Suhail',
  description: 'Learn about Hosting Nation a software development company founded by Mohd Suhail. We build custom web apps, SaaS platforms, and business automation for startups and businesses worldwide.',
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: { title: 'About Hosting Nation | Software Company Founded by Mohd Suhail', description: 'Hosting Nation is a software development company founded by Mohd Suhail.', url: `${siteConfig.url}/about` },
  keywords: ['About Hosting Nation','Hosting Nation company','Mohd Suhail company','software company India','web development company']
};

const VALUES = [
  { icon: Target,      color: '#faf5ff', iconColor: '#dc3545', title: 'Outcome-driven',    desc: 'Every project ties back to a measurable business outcome revenue, retention, or efficiency.' },
  { icon: Users,       color: '#e0f2fe', iconColor: '#0284c7', title: 'Founder-led',        desc: 'You work directly with Mohd Suhail and a small senior team never handed off to junior staff.' },
  { icon: Zap,         color: '#fef9c3', iconColor: '#ca8a04', title: 'Modern stack',        desc: 'Next.js, React, Node.js, TypeScript, MongoDB  chosen for speed, scale, and longevity.' },
  { icon: Globe2,      color: '#ecfdf5', iconColor: '#059669', title: 'Global by default',   desc: 'Clients in the US, UK, UAE, Canada, Australia, and across Asia & Europe.' },
  { icon: ShieldCheck, color: '#fff7ed', iconColor: '#ea580c', title: 'Built to last',       desc: 'Clean architecture, documented code, automated tests, and post-launch support.' },
  { icon: Sparkles,    color: '#fdf4ff', iconColor: '#a21caf', title: 'Design-forward',      desc: 'Modern, accessible interfaces that feel as good as they perform.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={breadcrumbSchema([{ name:'Home', url:siteConfig.url },{ name:'About', url:`${siteConfig.url}/about` }])} />

      {/* Hero */}
      <section className="section pt-16 md:pt-20">
        <div className="max-w-3xl">
          <span className="eyebrow mb-4 block">About us</span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight" style={{ color: '#000000' }}>
            We&apos;re <span style={{ color: '#dc3545' }}>Hosting Nation</span> a modern software studio.
          </h1>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: '#606060' }}>
            Hosting Nation is a software development company founded by{' '}
            <Link href="/founder" className="text-red-700 hover:text-red-900 underline underline-offset-2 transition-colors font-medium">Mohd Suhail</Link>.
            We design and build custom web applications, SaaS platforms, e-commerce stores, API integrations, dashboards,
            and business automation systems for startups, agencies, and growing businesses around the world.
          </p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: '#888888' }}>
            Engineering-first, founder-led, and obsessed with shipping software that actually moves the business forward.
            No bloated retainers, no junior hand-offs, no template sites.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section cv-auto" style={{ background: '#fff6f6' }}>
        <div className="section-divider mb-14" />
        <div className="grid lg:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: '#000000' }}>
              Our <span style={{ color: '#dc3545' }}>mission</span>
            </h2>
            <p className="mt-4 leading-relaxed text-sm" style={{ color: '#606060' }}>
              To make world-class custom software accessible to startups and growing businesses
              without the agency markup, without templated mediocrity.
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {VALUES.map(({ icon: Icon, color, iconColor, title, desc }) => (
              <div key={title} className="rounded-xl p-5 bg-white" style={{ border: '1px solid #ebebeb' }}>
                <div className="w-9 h-9 rounded-lg grid place-items-center mb-4" style={{ background: color }}>
                  <Icon size={17} style={{ color: iconColor }} />
                </div>
                <h3 className="text-sm font-semibold" style={{ color: '#000000' }}>{title}</h3>
                <p className="text-sm mt-1.5 leading-relaxed" style={{ color: '#606060' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section cv-auto">
        <div className="section-divider mb-14" />
        <div className="rounded-2xl p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center"
          style={{ background: '#ffffff', border: '1px solid #ebebeb' }}>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: '#000000' }}>
              Led by <span style={{ color: '#dc3545' }}>Mohd Suhail</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: '#606060' }}>
              Founder &amp; CEO. Full-stack engineer React, Node.js, MongoDB, SaaS, and API integration.
            </p>
            <Link href="/founder" className="btn-primary mt-5 inline-flex">
              Founder Bio <ArrowRight size={14} />
            </Link>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[['2022','Founded'],['50+','Projects'],['15+','Countries'],['100%','Custom code'],['10+','Industries'],['1','Mission']].map(([k,v]) => (
              <div key={v} className="text-center p-4 rounded-xl bg-white" style={{ border: '1px solid #ebebeb' }}>
                <div className="text-2xl font-extrabold" style={{ color: '#dc3545' }}>{k}</div>
                <div className="text-xs mt-1" style={{ color: '#888888' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
