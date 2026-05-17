import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X } from 'lucide-react';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Next.js vs WordPress: Which Is Better for Your Business Website? | Hosting Nation',
  description:
    'A direct, balanced comparison of Next.js and WordPress for business websites. Not a Next.js advertisement the honest answer depends on what you actually need.',
  alternates: { canonical: `${siteConfig.url}/blog/nextjs-vs-wordpress-business-website` },
  openGraph: {
    title: 'Next.js vs WordPress: Which Is Better for Your Business Website? | Hosting Nation',
    description: 'A direct, practical comparison the honest answer depends on what you actually need.',
    url: `${siteConfig.url}/blog/nextjs-vs-wordpress-business-website`,
  },
  keywords: ['Next.js vs WordPress', 'best website platform for business', 'WordPress alternatives', 'Next.js for business', 'should I use WordPress'],
};

const COMPARISON = [
  { dimension: 'Page load speed',     nextjs: 'Excellent server-side rendering, edge delivery', wordpress: 'Moderate depends heavily on plugins and hosting', winner: 'next' },
  { dimension: 'Security',            nextjs: 'Strong small attack surface, no plugin vulnerabilities', wordpress: 'Risky most hacked CMS in the world due to plugins', winner: 'next' },
  { dimension: 'Content editing',     nextjs: 'Requires CMS setup (Sanity, Contentful)', wordpress: 'Built-in WYSIWYG editor easy for non-developers', winner: 'wp' },
  { dimension: 'Customization',       nextjs: 'No limits write anything you need', wordpress: 'Limited by theme and plugin ecosystem', winner: 'next' },
  { dimension: 'Long-term cost',      nextjs: 'Higher upfront, lower ongoing', wordpress: 'Lower upfront, higher ongoing (plugins, updates, security)', winner: 'draw' },
  { dimension: 'SEO',                 nextjs: 'Excellent fast, crawlable, structured data built-in', wordpress: 'Good with the right plugins (Yoast, RankMath)', winner: 'next' },
  { dimension: 'Developer ecosystem', nextjs: 'Growing fast used by top tech companies', wordpress: 'Massive most widely used CMS in the world', winner: 'wp' },
];

export default function NextjsVsWordpressBlogPost() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: siteConfig.url },
        { name: 'Blog', url: `${siteConfig.url}/blog` },
        { name: 'Next.js vs WordPress', url: `${siteConfig.url}/blog/nextjs-vs-wordpress-business-website` },
      ])} />

      <article>
        <section className="section pt-28 md:pt-32">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link href="/blog" className="text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#dc3545]"
                style={{ color: '#888888' }}>← Blog</Link>
              <span style={{ color: '#ebebeb' }}>|</span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded"
                style={{ background: '#fff6f6', color: '#dc3545' }}>Web Development</span>
              <span className="text-xs" style={{ color: '#888888' }}>April 2025 · 10 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.06]">
              Next.js vs WordPress: Which Is Better for Your{' '}
              <span style={{ color: '#dc3545' }}>Business Website?</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: '#606060' }}>
              A direct, balanced comparison not a Next.js advertisement. The honest answer depends on what you actually need. We build in both, and we recommend the right one for each client.
            </p>
            <p className="mt-3 text-sm font-semibold" style={{ color: '#888888' }}>
              By Mohd Suhail, Founder Hosting Nation
            </p>
          </div>
        </section>

        <section className="section cv-auto">
          <div className="max-w-3xl space-y-10">

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold mb-4" style={{ color: '#000000' }}>
                The Quick Answer
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#606060' }}>
                WordPress is excellent for content-heavy sites managed by non-developers who need to update pages frequently. Next.js is better for any site where performance, security, and long-term extensibility matter including most business websites, SaaS products, and anything you plan to grow into a web application.
              </p>
              <p className="mt-3 text-base leading-relaxed" style={{ color: '#606060' }}>
                The platform decision is secondary to what you actually need to build. Read on for the honest comparison.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold mb-4" style={{ color: '#000000' }}>
                What WordPress Is And Why It Still Dominates
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: '#606060' }}>
                WordPress powers approximately 43% of all websites on the internet. That market share is not because it is technically superior it is because it is accessible. A non-developer can set up a WordPress site, install a theme, and publish content without writing a line of code.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#606060' }}>
                The plugin ecosystem is both WordPress&apos;s greatest strength and its biggest liability. Plugins add functionality quickly, but they also introduce security vulnerabilities, performance overhead, and dependency management problems. Most WordPress security incidents are caused by outdated or poorly maintained plugins not WordPress itself.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold mb-4" style={{ color: '#000000' }}>
                What Next.js Is And Why Developers Love It
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: '#606060' }}>
                Next.js is a React-based framework built by Vercel. It handles server-side rendering, static generation, and client-side navigation which means fast initial page loads, excellent SEO, and a smooth user experience. It is the framework of choice for most high-growth tech companies, funded startups, and engineering teams that care about performance.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#606060' }}>
                The key distinction: Next.js is a development framework, not a CMS. It does not come with a built-in content editor. If you want non-developers to update content, you pair it with a headless CMS like Sanity or Contentful. That adds a setup step but the result is a faster, more secure, and more flexible site than WordPress can produce.
              </p>
            </div>

            {/* Comparison table */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold mb-5" style={{ color: '#000000' }}>
                Head-to-Head Comparison
              </h2>
              <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid #ebebeb' }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: '#000000' }}>
                      <th className="text-left px-5 py-3 font-bold text-white">Dimension</th>
                      <th className="text-left px-5 py-3 font-bold" style={{ color: '#dc3545' }}>Next.js</th>
                      <th className="text-left px-5 py-3 font-bold text-white">WordPress</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map(({ dimension, nextjs, wordpress, winner }, i) => (
                      <tr key={dimension} style={{ background: i % 2 === 0 ? '#ffffff' : '#fafafa', borderTop: '1px solid #f0f0f0' }}>
                        <td className="px-5 py-3 font-semibold" style={{ color: '#000000' }}>{dimension}</td>
                        <td className="px-5 py-3" style={{ color: winner === 'next' ? '#059669' : '#606060' }}>
                          {winner === 'next' && <Check size={13} className="inline mr-1.5 text-green-600" />}
                          {nextjs}
                        </td>
                        <td className="px-5 py-3" style={{ color: winner === 'wp' ? '#059669' : '#606060' }}>
                          {winner === 'wp' && <Check size={13} className="inline mr-1.5 text-green-600" />}
                          {winner === 'next' && <X size={13} className="inline mr-1.5 text-red-400" />}
                          {wordpress}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold mb-4" style={{ color: '#000000' }}>
                When WordPress Is the Right Answer
              </h2>
              <ul className="space-y-2">
                {[
                  'You need a blog or content site managed by non-developers',
                  'Budget is tight and timeline is short',
                  'Your team already uses and understands WordPress',
                  'You need a large plugin ecosystem for specific functionality',
                  'You\'re not concerned about performance optimization',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed" style={{ color: '#606060' }}>
                    <Check size={15} className="text-green-600 shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold mb-4" style={{ color: '#000000' }}>
                When Next.js Is the Right Answer
              </h2>
              <ul className="space-y-2">
                {[
                  'You need a fast, high-performance site that ranks well in search',
                  'Your website will evolve into a web app with user accounts or dashboards',
                  'You care about Core Web Vitals and technical SEO',
                  'You want full control over the tech stack and hosting',
                  'You plan to add features over time e-commerce, booking, payments',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed" style={{ color: '#606060' }}>
                    <Check size={15} className="text-red-600 shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold mb-4" style={{ color: '#000000' }}>
                The Hybrid Option: Headless WordPress
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: '#606060' }}>
                Some clients want the WordPress content editor for their editorial team but Next.js performance for their users. This is achievable with a headless WordPress architecture WordPress handles content management, and a Next.js frontend fetches and renders that content.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#606060' }}>
                This is a valid approach for high-traffic publishing sites or large editorial teams. For most business websites, it is overkill a simpler headless CMS like Sanity gives the same editorial flexibility with less infrastructure complexity.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold mb-4" style={{ color: '#000000' }}>
                The Bottom Line
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: '#606060' }}>
                WordPress has a low floor and a low ceiling. Next.js has a higher floor and no ceiling. If your business website will never need to do anything more than display content and a contact form WordPress is fine. If you have any ambition beyond that, start with Next.js and you won&apos;t need to migrate later.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#606060' }}>
                The platform decision is secondary to the business problem you&apos;re solving. If you need help deciding that&apos;s what the discovery call is for.
              </p>
            </div>

            <div className="p-6 rounded-2xl" style={{ background: '#fff6f6', border: '1px solid #ebebeb' }}>
              <p className="text-base font-bold mb-2" style={{ color: '#000000' }}>
                Not sure which is right for your project?
              </p>
              <p className="text-sm mb-4" style={{ color: '#606060' }}>
                At Hosting Nation, we build in both and we recommend the right tool for each client&apos;s specific situation. A 30-minute call is enough to give you a clear answer.
              </p>
              <Link href="/contact" className="btn-primary inline-flex">
                Book a Free Strategy Call <ArrowRight size={15} />
              </Link>
            </div>

          </div>
        </section>
      </article>

      <CTA />
    </>
  );
}
