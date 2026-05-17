import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'How to Build a SaaS MVP in 8 Weeks: A Technical Roadmap | Hosting Nation',
  description:
    'A week-by-week technical roadmap for building a production-ready SaaS MVP in 8 weeks. Stack choices, architecture decisions, billing, and go-live.',
  alternates: { canonical: `${siteConfig.url}/blog/how-to-build-saas-mvp-8-weeks` },
  openGraph: {
    title: 'How to Build a SaaS MVP in 8 Weeks | Hosting Nation',
    description: 'A week-by-week technical roadmap from scope to production launch.',
    url: `${siteConfig.url}/blog/how-to-build-saas-mvp-8-weeks`,
  },
  keywords: ['build SaaS MVP', 'SaaS development roadmap', 'SaaS MVP 8 weeks', 'how to launch SaaS', 'SaaS architecture'],
};

const WEEKS = [
  {
    week: 'Week 1',
    title: 'Define What You\'re Actually Building',
    points: [
      'Write your one-sentence product definition — who it\'s for, what it does, what they stop using instead',
      'Build a user story map and then cut 40% of it',
      'Draw the hard line between MVP and V2 — features left out are deferred, not abandoned',
      'Define your "definition of done" for every feature before writing a line of code',
    ],
  },
  {
    week: 'Week 2',
    title: 'Choose Your Stack Before You Waste Time',
    points: [
      'Pick boring, proven technology — Next.js, Node.js, PostgreSQL, Stripe is the right stack for most SaaS',
      'Multi-cloud, microservices, and GraphQL are not MVP concerns',
      'Set up your repo, CI/CD, and deployment pipeline on day one — not week six',
      'Optimise for speed of development, not theoretical future scale',
    ],
  },
  {
    week: 'Week 3',
    title: 'Architecture and Database Design',
    points: [
      'Design multi-tenancy from day one — retrofitting it later is expensive',
      'Map your data model completely before writing any API code',
      'Design user roles and permissions: simple now, extensible later',
      'Write the migration files — database schema is the foundation everything else sits on',
    ],
  },
  {
    week: 'Week 4',
    title: 'Authentication and Core Infrastructure',
    points: [
      'Choose your auth approach: NextAuth, Auth0, or custom (each has real trade-offs)',
      'Set up three environments: local, staging, production — from week one',
      'Configure CI/CD so every push to staging triggers an automated deploy',
      'Set up error monitoring (Sentry) and basic logging before you write business logic',
    ],
  },
  {
    week: '5–6',
    title: 'Building the Core Product',
    points: [
      'Build in this order: onboarding flow → user dashboard → core feature',
      'Don\'t polish UI until the core logic works — ugly and working beats pretty and broken',
      'Run weekly internal demos — ship to staging, click through it yourself, note what\'s broken',
      'Keep a "cut from MVP" list — when scope creep hits, add to the list, don\'t expand the sprint',
    ],
  },
  {
    week: 'Week 7',
    title: 'Billing, Emails, and the Last Mile',
    points: [
      'Integrate Stripe — subscription, one-time, and trial flows — and allocate time to test every edge case',
      'Set up transactional email: welcome, billing receipts, password reset (use Resend or SendGrid)',
      'Add error monitoring and basic analytics (PostHog or Mixpanel)',
      'Start writing your go-live checklist — DNS, environment variables, backup strategy',
    ],
  },
  {
    week: 'Week 8',
    title: 'QA, Launch, and What Comes After',
    points: [
      'Complete the non-negotiable pre-launch checklist: auth flows, billing edge cases, mobile layout, error states',
      'Launch day: DNS cutover, environment variables, monitoring dashboard open',
      'Measure week one: who signed up, who completed onboarding, who paid — not traffic',
      'Start building V2 backlog from the cut list and user feedback',
    ],
  },
];

export default function SaasMVPBlogPost() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: siteConfig.url },
        { name: 'Blog', url: `${siteConfig.url}/blog` },
        { name: 'How to Build a SaaS MVP in 8 Weeks', url: `${siteConfig.url}/blog/how-to-build-saas-mvp-8-weeks` },
      ])} />

      <article>
        {/* Header */}
        <section className="section pt-28 md:pt-32">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link href="/blog" className="text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#dc3545]"
                style={{ color: '#888888' }}>← Blog</Link>
              <span style={{ color: '#ebebeb' }}>|</span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded"
                style={{ background: '#fff6f6', color: '#dc3545' }}>SaaS Development</span>
              <span className="text-xs" style={{ color: '#888888' }}>May 2025 · 12 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.06]">
              How to Build a SaaS MVP in{' '}
              <span style={{ color: '#dc3545' }}>8 Weeks:</span>{' '}
              A Technical Roadmap
            </h1>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: '#606060' }}>
              The 8-week timeline is real — but only if you make the right decisions early. This is a week-by-week technical roadmap for founders and developers who want to go from scope to production-ready MVP without wasting months over-building.
            </p>
            <p className="mt-3 text-sm font-semibold" style={{ color: '#888888' }}>
              By Mohd Suhail, Founder — Hosting Nation
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section cv-auto">
          <div className="max-w-3xl space-y-5 text-base leading-relaxed" style={{ color: '#606060' }}>
            <p>
              The graveyard of software startups is full of great ideas that never shipped, or shipped badly. Building a SaaS product is not a programming problem — it is a prioritization and architecture problem. Most MVPs take too long because founders over-scope, make expensive technical decisions early, or build in the wrong order.
            </p>
            <p>
              This guide is written from direct experience building SaaS products from scratch. The 8-week timeline is achievable for a focused founder working with an experienced developer — or a small team with good process. It is not achievable if you add features every week, change the data model in week five, or try to build microservices from day one.
            </p>
            <p>
              What follows is the roadmap. Follow it, and you will have a working, billable, deployable SaaS product in 8 weeks.
            </p>
          </div>
        </section>

        {/* Week-by-week */}
        <section className="section cv-auto" style={{ background: '#fff6f6' }}>
          <div className="max-w-3xl space-y-10">
            {WEEKS.map(({ week, title, points }) => (
              <div key={week} className="rounded-2xl p-7 bg-white" style={{ border: '1px solid #ebebeb' }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded"
                    style={{ background: '#fff6f6', color: '#dc3545' }}>
                    {week}
                  </span>
                </div>
                <h2 className="text-xl font-extrabold mb-4" style={{ color: '#000000' }}>{title}</h2>
                <ul className="space-y-2.5">
                  {points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#606060' }}>
                      <Check size={15} className="text-red-600 shrink-0 mt-0.5" />{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="section cv-auto">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold mb-4" style={{ color: '#000000' }}>
              The 8 Weeks Are Real — If You Respect the Constraints
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: '#606060' }}>
              <p>
                The founders who ship in 8 weeks are not the ones who work the hardest. They are the ones who make a decision on every open question before it blocks development, cut features without sentimentality, and trust the process over their instincts.
              </p>
              <p>
                The founders who take 6 months for their MVP are the ones who change scope in week 3, want to launch on 4 platforms simultaneously, and insist on features their users haven&apos;t asked for yet.
              </p>
              <p>
                Pick a stack. Define the MVP. Build it in order. Ship it. Then listen to your users and build V2.
              </p>
            </div>

            <div className="mt-8 p-6 rounded-2xl" style={{ background: '#fff6f6', border: '1px solid #ebebeb' }}>
              <p className="text-base font-bold mb-2" style={{ color: '#000000' }}>
                Want to build your SaaS MVP with an experienced team?
              </p>
              <p className="text-sm mb-4" style={{ color: '#606060' }}>
                At Hosting Nation, we specialize in taking SaaS products from zero to launched. We&apos;ve done it before. If you want a technical partner who knows where the landmines are — let&apos;s talk.
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
