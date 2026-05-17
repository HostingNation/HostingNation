import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Work & Portfolio | Hosting Nation by Mohd Suhail',
  description:
    'Projects built by Hosting Nation — including WCL Cricket (409M viewers), Cromy e-commerce, and Growwfix. Custom web development, SaaS, and e-commerce.',
  alternates: { canonical: `${siteConfig.url}/work` },
  openGraph: {
    title: 'Work & Portfolio | Hosting Nation',
    description: 'Real projects built by Hosting Nation — from a 409M-viewer sports platform to premium e-commerce.',
    url: `${siteConfig.url}/work`,
  },
};

const PROJECTS = [
  {
    slug:       'wcl-cricket',
    eyebrow:    'Sports · United Kingdom',
    title:      'WCL Cricket',
    url:        'wclcricket.com',
    desc:       'Official digital platform for the World Championship of Legends — a UK T20 tournament featuring AB de Villiers, Yuvraj Singh, and Chris Gayle. Watched by 409 million people in 2025. Covered by NDTV, Hindustan Times, and The Hindu.',
    tags:       ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    stat:       '409M viewers',
    accent:     '#dc3545',
    caseStudy:  true,
    featured:   true,
  },
  {
    slug:       'cromy',
    eyebrow:    'E-commerce · India',
    title:      'Cromy.in',
    url:        'cromy.in',
    desc:       'End-to-end custom e-commerce storefront for a premium jeans brand in Delhi. Product catalog, cart, checkout, order management — all on a custom Next.js build.',
    tags:       ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    stat:       'Custom storefront',
    accent:     '#0284c7',
    caseStudy:  false,
    featured:   false,
  },
  {
    slug:       'growwfix',
    eyebrow:    'Agency · India',
    title:      'Growwfix.com',
    url:        'growwfix.com',
    desc:       'High-converting website for a digital marketing agency. Fast, clean, and optimized for lead generation across search and social.',
    tags:       ['Next.js', 'Tailwind CSS', 'Vercel'],
    stat:       'Lead-gen focused',
    accent:     '#059669',
    caseStudy:  false,
    featured:   false,
  },
];

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: siteConfig.url },
        { name: 'Work', url: `${siteConfig.url}/work` },
      ])} />

      {/* Header */}
      <section className="section pt-28 md:pt-32">
        <div className="max-w-3xl">
          <span className="eyebrow mb-4 block">Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Real clients. <span style={{ color: '#dc3545' }}>Real results.</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: '#606060' }}>
            From a 409-million-viewer sports platform to premium e-commerce — here&apos;s what Hosting Nation has built for real clients across the UK, India, and beyond.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section cv-auto">
        <div className="space-y-8">
          {PROJECTS.map(({ slug, eyebrow, title, url, desc, tags, stat, accent, caseStudy, featured }) => (
            <div key={slug} className={`rounded-2xl overflow-hidden bg-white ${featured ? 'shadow-md' : ''}`}
              style={{ border: `1px solid ${featured ? accent : '#ebebeb'}` }}>

              {/* Featured accent bar */}
              {featured && <div className="h-1" style={{ background: accent }} />}

              <div className="p-7 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#888888' }}>
                    {eyebrow}
                  </span>
                  {featured && (
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded"
                      style={{ background: '#fff6f6', color: accent }}>
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: '#000000' }}>
                      {title}
                    </h2>
                    <p className="text-sm mt-0.5 mb-4" style={{ color: '#888888' }}>{url}</p>
                    <p className="text-base leading-relaxed max-w-2xl" style={{ color: '#606060' }}>{desc}</p>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 md:items-end shrink-0">
                    <span className="text-sm font-bold px-4 py-1.5 rounded"
                      style={{ background: '#f5f5f5', color: '#000' }}>
                      {stat}
                    </span>
                    {caseStudy ? (
                      <Link href={`/work/${slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white transition-all hover:opacity-90"
                        style={{ background: accent, borderRadius: 4 }}>
                        Read case study <ArrowRight size={14} />
                      </Link>
                    ) : (
                      <a href={`https://${url}`} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold transition-all hover:opacity-80"
                        style={{ border: `1px solid ${accent}`, color: accent, borderRadius: 4 }}>
                        Visit site <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA pitch */}
      <section className="section cv-auto" style={{ background: '#fff6f6' }}>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
            Your project could be <span style={{ color: '#dc3545' }}>next</span>
          </h2>
          <p className="text-base leading-relaxed mb-7" style={{ color: '#606060' }}>
            Whether it&apos;s a SaaS MVP, an e-commerce store, or a platform for millions — we&apos;ve built at scale before. Let&apos;s talk about what you&apos;re building.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
