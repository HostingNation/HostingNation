import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export interface ServiceFAQ { q: string; a: string; }

export interface ServiceLayoutExpandedProps {
  slug: string;
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  serviceType: string;
  whoFor: string[];
  whatBuilt: { title: string; desc: string }[];
  stack: string[];
  outcomes: string[];
  longFormSections: { heading: string; body: string }[];
  timeline: string;
  faqs: ServiceFAQ[];
}

export default function ServiceLayoutExpanded({
  slug, eyebrow, title, highlight, intro, serviceType,
  whoFor, whatBuilt, stack, outcomes, longFormSections, timeline, faqs,
}: ServiceLayoutExpandedProps) {
  const url   = `${siteConfig.url}/services/${slug}`;
  const parts = title.split(highlight);

  return (
    <>
      <JsonLd data={serviceSchema({ name: title, description: intro, url, serviceType })} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home',     url: siteConfig.url },
        { name: 'Services', url: `${siteConfig.url}/services` },
        { name: title,      url },
      ])} />

      {/* Hero */}
      <section className="section pt-28 md:pt-32">
        <div className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 tracking-tight leading-[1.05]">
            {parts[0]}<span style={{ color: '#dc3545' }}>{highlight}</span>{parts[1]}
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: '#606060' }}>{intro}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/contact" className="btn-primary">Start a Project <ArrowRight size={17} /></Link>
            <Link href="/services" className="btn-ghost">All Services</Link>
          </div>
        </div>
      </section>

      {/* Who it's for + What we build */}
      <section className="section cv-auto">
        <div className="grid lg:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Who it&apos;s <span style={{ color: '#dc3545' }}>for</span>
            </h2>
            <ul className="mt-5 space-y-3">
              {whoFor.map((w) => (
                <li key={w} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#606060' }}>
                  <Check size={16} className="text-red-600 shrink-0 mt-0.5" />{w}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              What we <span style={{ color: '#dc3545' }}>build</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {whatBuilt.map((w) => (
                <div key={w.title} className="rounded-xl p-5 bg-white" style={{ border: '1px solid #ebebeb' }}>
                  <h3 className="text-base font-semibold" style={{ color: '#000000' }}>{w.title}</h3>
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: '#888888' }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stack + Outcomes */}
      <section className="section cv-auto">
        <div className="rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10"
          style={{ background: 'linear-gradient(135deg, #ffffff, #fff6f6)', border: '1px solid #ebebeb' }}>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: '#000000' }}>
              The <span style={{ color: '#dc3545' }}>stack</span>
            </h2>
            <p className="mt-2 text-sm mb-5" style={{ color: '#606060' }}>
              Modern, battle-tested tools chosen for speed, scale, and maintainability.
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="mt-5 pt-4" style={{ borderTop: '1px solid #ebebeb' }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#888' }}>Typical timeline</p>
              <p className="text-sm font-semibold" style={{ color: '#000' }}>{timeline}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: '#000000' }}>
              Business <span style={{ color: '#dc3545' }}>outcomes</span>
            </h2>
            <ul className="mt-5 space-y-3">
              {outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#606060' }}>
                  <Check size={16} className="text-red-600 shrink-0 mt-0.5" />{o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Long-form SEO content */}
      <section className="section cv-auto" style={{ background: '#fff6f6' }}>
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom space-y-10">
            {longFormSections.map(({ heading, body }) => (
              <div key={heading}>
                <h2 className="text-xl md:text-2xl font-extrabold tracking-tight mb-3" style={{ color: '#000000' }}>
                  {heading}
                </h2>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#606060' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section cv-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-center">
            Common <span style={{ color: '#dc3545' }}>questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
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
