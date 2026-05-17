import Link from 'next/link';
import { ArrowRight, Globe, Users, TrendingUp } from 'lucide-react';

const PROJECTS = [
  {
    slug:     'wcl-cricket',
    eyebrow:  'Sports · UK',
    title:    'WCL Cricket',
    url:      'wclcricket.com',
    desc:     'Official digital platform for the World Championship of Legends a UK T20 tournament featuring AB de Villiers, Yuvraj Singh & Chris Gayle, watched by 409 million people.',
    stat:     '409M viewers',
    statIcon: Users,
    tags:     ['Next.js', 'React', 'Vercel', 'TypeScript'],
    accent:   '#dc3545',
    caseStudy: true,
  },
  {
    slug:     'cromy',
    eyebrow:  'E-commerce · India',
    title:    'Cromy.in',
    url:      'cromy.in',
    desc:     'End-to-end custom e-commerce storefront for a premium jeans brand in Delhi product catalog, cart, checkout, and order management built on Next.js.',
    stat:     'Custom storefront',
    statIcon: TrendingUp,
    tags:     ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    accent:   '#0284c7',
    caseStudy: false,
  },
  {
    slug:     'growwfix',
    eyebrow:  'Agency · India',
    title:    'Growwfix.com',
    url:      'growwfix.com',
    desc:     'High-converting website for a digital marketing agency fast, clean, and optimized for lead generation across search and social.',
    stat:     'Lead-gen focused',
    statIcon: Globe,
    tags:     ['Next.js', 'Tailwind CSS', 'Vercel'],
    accent:   '#059669',
    caseStudy: false,
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="cv-auto py-16 md:py-24" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow mb-3 block">Featured work</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: '#000000' }}>
              Trusted by <span style={{ color: '#dc3545' }}>real brands</span>
            </h2>
            <p className="mt-3 text-base max-w-xl" style={{ color: '#606060' }}>
              From a 409-million-viewer sports platform to premium e-commerce here&apos;s what we&apos;ve built.
            </p>
          </div>
          <Link href="/work"
            className="inline-flex items-center gap-2 text-sm font-bold shrink-0 transition-colors hover:text-[#dc3545]"
            style={{ color: '#000000' }}>
            View all projects <ArrowRight size={15} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {PROJECTS.map(({ slug, eyebrow, title, url, desc, stat, statIcon: StatIcon, tags, accent, caseStudy }) => (
            <div key={slug} className="flex flex-col rounded-2xl overflow-hidden bg-white transition-all duration-200 hover:shadow-lg"
              style={{ border: '1px solid #ebebeb' }}>

              {/* Top accent bar */}
              <div className="h-1.5" style={{ background: accent }} />

              <div className="flex flex-col flex-1 p-6 gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#888888' }}>
                    {eyebrow}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded"
                    style={{ background: '#fff6f6', color: accent }}>
                    <StatIcon size={11} />
                    {stat}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold tracking-tight" style={{ color: '#000000' }}>{title}</h3>
                  <p className="text-xs mt-0.5" style={{ color: '#888888' }}>{url}</p>
                </div>

                <p className="text-sm leading-relaxed flex-1" style={{ color: '#606060' }}>{desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span key={t} className="tag text-[11px]">{t}</span>
                  ))}
                </div>

                <div className="pt-2" style={{ borderTop: '1px solid #f5f5f5' }}>
                  {caseStudy ? (
                    <Link href="/work/wcl-cricket"
                      className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors hover:gap-2.5"
                      style={{ color: accent }}>
                      Read case study <ArrowRight size={13} />
                    </Link>
                  ) : (
                    <a href={`https://${url}`} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors hover:gap-2.5"
                      style={{ color: accent }}>
                      Visit site <ArrowRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
