import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'WCL Cricket Case Study — 409M Viewers',
  description:
    'How Hosting Nation built the official digital platform for World Championship of Legends Cricket a UK T20 tournament watched by 409 million people, featuring AB de Villiers, Yuvraj Singh & Chris Gayle.',
  alternates: { canonical: `${siteConfig.url}/work/wcl-cricket` },
  openGraph: {
    title: 'WCL Cricket Case Study | Hosting Nation',
    description: 'How Hosting Nation built the official platform for a 409M-viewer cricket tournament.',
    url: `${siteConfig.url}/work/wcl-cricket`,
    images: ['/images/og-cover.png'],
  },
};

const FEATURES = [
  { title: 'Dynamic Homepage', desc: 'Hero banner, live countdown to match days, tournament highlights, and sponsor integrations.' },
  { title: 'Team & Player Profiles', desc: 'Full roster for each competing nation with player stats, career highlights, and tournament records.' },
  { title: 'Match Schedule & Results', desc: 'Real-time-ready layout for fixtures, scores, standings, and match summaries.' },
  { title: 'News & Media Hub', desc: 'Press-ready coverage section for broadcast partners, journalists, and media organizations.' },
  { title: 'Mobile-First Experience', desc: 'Optimized for cricket fans watching from phones across India, UK, West Indies, and beyond.' },
  { title: 'Performance Under Load', desc: 'Sub-2s load times on match days when global traffic spikes no downtime, no incidents.' },
  { title: 'SEO Architecture', desc: 'Structured for search visibility across multiple countries India, UK, West Indies, South Africa.' },
  { title: 'Social Sharing', desc: 'Open Graph optimization and shareable content blocks for match-day viral reach.' },
];

const STACK = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Headless CMS', 'Google Analytics 4'];

const RESULTS = [
  'Launched on schedule zero missed deadlines before tournament start',
  '409 million viewers globally during the 2025 season',
  'Zero downtime on match days despite major traffic spikes',
  'Media coverage by NDTV, Hindustan Times, The Hindu, Tribune India all citing the official site',
  'Clean, professional digital presence matching the stature of an international sporting event',
];

export default function WCLCricketCaseStudy() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: siteConfig.url },
        { name: 'Work', url: `${siteConfig.url}/work` },
        { name: 'WCL Cricket', url: `${siteConfig.url}/work/wcl-cricket` },
      ])} />

      {/* Hero */}
      <section className="section pt-28 md:pt-32" style={{ background: '#ffffff' }}>
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link href="/work" className="text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#dc3545]"
              style={{ color: '#888888' }}>
              ← All Work
            </Link>
            <span style={{ color: '#ebebeb' }}>|</span>
            <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded"
              style={{ background: '#fff6f6', color: '#dc3545' }}>
              Sports · UK
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Building the Official Platform for a{' '}
            <span style={{ color: '#dc3545' }}>409-Million-Viewer</span>{' '}
            Cricket Tournament
          </h1>

          <p className="mt-5 text-lg leading-relaxed" style={{ color: '#606060' }}>
            World Championship of Legends Cricket needed a flagship digital presence worthy of an internationally broadcast sporting event.
            Hosting Nation built it on time, under pressure, and without a single incident on match day.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/contact" className="btn-primary">
              Build Something Like This <ArrowRight size={17} />
            </Link>
            <a href="https://wclcricket.com" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
              Visit wclcricket.com <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: '#000000' }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { k: '409M',     v: 'Global viewers, 2025 season' },
              { k: 'UK',       v: 'Based tournament, global reach' },
              { k: '4+',       v: 'Competing nations' },
              { k: '0',        v: 'Downtime on match days' },
            ].map(({ k, v }) => (
              <div key={v} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold" style={{ color: '#dc3545' }}>{k}</div>
                <div className="text-xs mt-1.5 leading-snug" style={{ color: '#888888' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client overview */}
      <section className="section cv-auto">
        <div className="grid lg:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Client <span style={{ color: '#dc3545' }}>overview</span>
            </h2>
            <div className="mt-6 space-y-3">
              {[
                { label: 'Client',     value: 'World Championship of Legends (WCL)' },
                { label: 'Location',   value: 'United Kingdom' },
                { label: 'Industry',   value: 'Sports · Live Events' },
                { label: 'Website',    value: 'wclcricket.com' },
                { label: 'Tournament', value: 'UK-based T20 cricket, retired legends' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#888888' }}>{label}</span>
                  <span className="text-sm font-semibold" style={{ color: '#000000' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
                The <span style={{ color: '#dc3545' }}>challenge</span>
              </h2>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: '#606060' }}>
                <p>
                  The World Championship of Legends is a T20 tournament featuring retired international cricket legends AB de Villiers, Yuvraj Singh, Chris Gayle, Shoaib Akhtar, and more. The 2025 edition drew a global audience of 409 million viewers.
                </p>
                <p>
                  WCL needed a digital presence that could handle the scale and credibility of a globally broadcast sporting event. The existing online presence did not reflect the stature of the tournament or the legends competing in it.
                </p>
                <p>
                  They needed: a flagship site fast enough for match-day traffic spikes, a design matching the prestige of the lineup, player profiles and match schedules, and a media hub for broadcast partners. The deadline was fixed. The tournament was happening. There was no room to miss it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we built */}
      <section className="section cv-auto" style={{ background: '#fff6f6' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
            What Hosting Nation <span style={{ color: '#dc3545' }}>built</span>
          </h2>
          <p className="text-sm mb-8" style={{ color: '#606060' }}>End-to-end digital presence for the tournament.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map(({ title, desc }) => (
              <div key={title} className="rounded-xl p-5 bg-white" style={{ border: '1px solid #ebebeb' }}>
                <h3 className="text-base font-bold mb-2" style={{ color: '#000000' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack + Results */}
      <section className="section cv-auto">
        <div className="rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10"
          style={{ background: 'linear-gradient(135deg, #ffffff, #fff6f6)', border: '1px solid #ebebeb' }}>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight mb-2" style={{ color: '#000000' }}>
              Tech <span style={{ color: '#dc3545' }}>stack</span>
            </h2>
            <p className="text-sm mb-5" style={{ color: '#606060' }}>
              Chosen for performance under high concurrency and global CDN delivery.
            </p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight mb-5" style={{ color: '#000000' }}>
              Results & <span style={{ color: '#dc3545' }}>impact</span>
            </h2>
            <ul className="space-y-3">
              {RESULTS.map((r) => (
                <li key={r} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#606060' }}>
                  <Check size={16} className="text-red-600 shrink-0 mt-0.5" />{r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Media coverage */}
      <section className="section cv-auto" style={{ background: '#fff6f6' }}>
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-3 block">Media coverage</span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
            Covered by India&apos;s <span style={{ color: '#dc3545' }}>biggest outlets</span>
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: '#606060' }}>
            The WCL 2025 tournament and its official digital platform was covered by leading Indian and international media.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['NDTV', 'Hindustan Times', 'The Hindu', 'Tribune India'].map((m) => (
              <span key={m} className="px-5 py-2.5 rounded font-bold text-sm"
                style={{ background: '#000', color: '#fff' }}>
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial placeholder */}
      <section className="section cv-auto">
        <div className="max-w-2xl mx-auto rounded-2xl p-8 md:p-12 text-center"
          style={{ background: '#f9f9f9', border: '1px solid #ebebeb' }}>
          <div className="text-4xl mb-4" style={{ color: '#ebebeb' }}>&ldquo;</div>
          <p className="text-lg font-semibold italic leading-relaxed" style={{ color: '#888888' }}>
            Testimonial from WCL management coming soon.
          </p>
          <div className="mt-6">
            <p className="text-sm font-bold" style={{ color: '#000' }}> WCL Management</p>
            <p className="text-xs mt-1" style={{ color: '#888' }}>World Championship of Legends, United Kingdom</p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
