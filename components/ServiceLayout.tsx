import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export interface ServiceLayoutProps {
  slug: string; eyebrow: string; title: string; highlight: string;
  intro: string; serviceType: string;
  whoFor: string[];
  whatBuilt: { title: string; desc: string }[];
  stack: string[]; outcomes: string[];
}

export default function ServiceLayout({ slug, eyebrow, title, highlight, intro, serviceType, whoFor, whatBuilt, stack, outcomes }: ServiceLayoutProps) {
  const url = `${siteConfig.url}/services/${slug}`;
  const parts = title.split(highlight);
  return (
    <>
      <JsonLd data={serviceSchema({ name: title, description: intro, url, serviceType })} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: siteConfig.url }, { name: 'Services', url: `${siteConfig.url}/services` }, { name: title, url }])} />

      <section className="section pt-28 md:pt-32">
        <div className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 tracking-tight leading-[1.05]">
            {parts[0]}<span style={{ color: '#dc3545' }}>{highlight}</span>{parts[1]}
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: '#606060' }}>{intro}</p>
          <div className="flex gap-3 mt-8">
            <Link href="/contact" className="btn-primary">Start a Project <ArrowRight size={17} /></Link>
            <Link href="/services" className="btn-ghost">All Services</Link>
          </div>
        </div>
      </section>

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

      <section className="section cv-auto">
        <div className="rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10"
          style={{ background: 'linear-gradient(135deg, #ffffff, #fff6f6)', border: '1px solid #ebebeb' }}>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: '#000000' }}>The <span style={{ color: '#dc3545' }}>stack</span></h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: '#606060' }}>Modern, battle-tested tools chosen for speed, scale, and maintainability.</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {stack.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: '#000000' }}>Business <span style={{ color: '#dc3545' }}>outcomes</span></h2>
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

      <CTA />
    </>
  );
}
