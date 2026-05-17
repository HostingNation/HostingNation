import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog | Hosting Nation Web Development & SaaS Insights',
  description:
    'Practical guides on SaaS development, Next.js, web performance, and building software for startups by Mohd Suhail, Founder of Hosting Nation.',
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: 'Blog | Hosting Nation',
    description: 'Technical guides and insights on SaaS, Next.js, and building software for startups.',
    url: `${siteConfig.url}/blog`,
  },
};

const POSTS = [
  {
    slug:     'how-to-build-saas-mvp-8-weeks',
    date:     'May 2025',
    tag:      'SaaS Development',
    title:    'How to Build a SaaS MVP in 8 Weeks: A Technical Roadmap',
    excerpt:  'The 8-week timeline is real but only if you make the right decisions early. A week-by-week technical roadmap from scope to production launch.',
    readTime: '12 min read',
  },
  {
    slug:     'why-indian-developers-us-startups-2025',
    date:     'May 2025',
    tag:      'Hiring & Outsourcing',
    title:    'Why Indian Developers Are the Best Choice for US Startups in 2025',
    excerpt:  'The outdated reputation vs. the current reality. Why the best-funded US startups are quietly building their engineering teams in India.',
    readTime: '9 min read',
  },
  {
    slug:     'nextjs-vs-wordpress-business-website',
    date:     'April 2025',
    tag:      'Web Development',
    title:    'Next.js vs WordPress: Which Is Better for Your Business Website?',
    excerpt:  'A direct, practical comparison not a Next.js advertisement. The honest answer depends on what you actually need.',
    readTime: '10 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: siteConfig.url },
        { name: 'Blog', url: `${siteConfig.url}/blog` },
      ])} />

      <section className="section pt-28 md:pt-32">
        <div className="max-w-3xl">
          <span className="eyebrow mb-4 block">Blog</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Insights on building <span style={{ color: '#dc3545' }}>real software</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: '#606060' }}>
            Practical guides on SaaS development, Next.js, web performance, and building products that work written by Mohd Suhail, Founder of Hosting Nation.
          </p>
        </div>
      </section>

      <section className="section cv-auto">
        <div className="max-w-3xl space-y-8">
          {POSTS.map(({ slug, date, tag, title, excerpt, readTime }) => (
            <Link key={slug} href={`/blog/${slug}`}
              className="group block rounded-2xl p-7 bg-white transition-all hover:shadow-md hover:bg-[#fff6f6]"
              style={{ border: '1px solid #ebebeb' }}>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded"
                  style={{ background: '#fff6f6', color: '#dc3545' }}>
                  {tag}
                </span>
                <span className="text-xs" style={{ color: '#888888' }}>{date} · {readTime}</span>
              </div>
              <h2 className="text-xl font-extrabold tracking-tight mb-2 group-hover:text-[#dc3545] transition-colors"
                style={{ color: '#000000' }}>
                {title}
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#606060' }}>{excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold transition-all group-hover:gap-2.5"
                style={{ color: '#dc3545' }}>
                Read post <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
