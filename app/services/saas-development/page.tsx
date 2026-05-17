import type { Metadata } from 'next';
import ServiceLayoutExpanded from '@/components/ServiceLayoutExpanded';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'SaaS Development | Build Your SaaS with Hosting Nation',
  description:
    'End-to-end SaaS development by Hosting Nation. Multi-tenant architecture, auth, billing, dashboards, and cloud deployment. Founded by Mohd Suhail.',
  alternates: { canonical: `${siteConfig.url}/services/saas-development` },
  openGraph: {
    title: 'SaaS Development | Hosting Nation',
    description:
      'Build production-ready SaaS products with Hosting Nation — auth, billing, dashboards, and scalable cloud deployment.',
    url: `${siteConfig.url}/services/saas-development`
  },
  keywords: [
    'SaaS development',
    'Hosting Nation SaaS',
    'SaaS development company',
    'build SaaS product',
    'multi-tenant SaaS',
    'SaaS MVP development',
    'subscription SaaS platform'
  ]
};

export default function SaasDevelopmentPage() {
  return (
    <ServiceLayoutExpanded
      slug="saas-development"
      eyebrow="SaaS Development"
      title="Ship your SaaS product, end to end"
      highlight="SaaS product"
      serviceType="SaaS Development"
      intro="Your SaaS idea is worthless without execution. Building a SaaS product is a technical and strategic challenge — multi-tenant architecture, subscription billing, onboarding flows, role-based access, and an API that supports integrations as your product matures. Hosting Nation handles all of it, or steps in at any stage if you've already started."
      whoFor={[
        'Founders launching their first SaaS MVP who need a technical co-founder equivalent',
        'Startups that have raised pre-seed funding and need to ship fast',
        'Businesses that want to productize an internal tool and sell it to others',
        'Companies migrating off no-code into a properly engineered codebase',
      ]}
      whatBuilt={[
        { title: 'Multi-Tenant Core',       desc: 'Workspaces, organizations, team invites, role-based permissions — done right from day one.' },
        { title: 'Auth & Billing',          desc: 'Email, OAuth, magic links, plus Stripe subscription billing with trial flows and plan gating.' },
        { title: 'Admin & User Dashboards', desc: 'Owner admin, team dashboards, and end-user UI — all in one maintainable codebase.' },
        { title: 'Usage, Limits & API',     desc: 'Plan-aware feature gating, usage metering, and a documented API for partner integrations.' },
      ]}
      stack={['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Stripe', 'Resend', 'Vercel', 'AWS']}
      outcomes={[
        'Paying customers within weeks, not quarters',
        'Architecture that scales from 10 to 10,000 users without rewrites',
        'Clean, documented codebase you can hand to your future engineering team',
        'Founder-led development and support through launch and beyond',
      ]}
      timeline="SaaS MVPs typically take 6–10 weeks depending on feature scope"
      longFormSections={[
        {
          heading: 'What SaaS Development Actually Requires',
          body: 'SaaS is not just a website with a login button. A properly built SaaS product requires multi-tenant data architecture, subscription billing, onboarding flows, role-based access control, usage tracking, and an API that can support third-party integrations as your product matures. Getting these wrong early means expensive rewrites later. At Hosting Nation, we\'ve built these systems before — and we architect for the version of your product that has 10,000 users, not just the version you\'re launching.',
        },
        {
          heading: 'The MVP-First Approach — And Why It Saves You Money',
          body: 'An MVP (Minimum Viable Product) is the smallest version of your product that delivers real value to real users. Starting there means you ship faster, spend less, and validate your assumptions before over-building. We push hard for this approach. The features you leave out of the MVP are not abandoned — they\'re deferred. We help you map your user journey and separate what users need on day one from what can wait for version two.',
        },
        {
          heading: 'Multi-Tenancy: Why We Build It In From Day One',
          body: 'Multi-tenancy — the ability for multiple organizations or workspaces to use your product with data isolation between them — is one of the most expensive things to retrofit into a codebase later. We design it in from the start. Whether you\'re building a team productivity tool, a client-facing platform, or a B2B SaaS, the data model and permission architecture we use ensures you can serve multiple customers without a structural rebuild.',
        },
        {
          heading: 'Stripe Billing, Onboarding, and the "Last Mile" of SaaS',
          body: 'Stripe is not hard to integrate — it is very hard to test properly. Subscription billing, trial periods, plan upgrades and downgrades, failed payment handling, and invoice generation all have edge cases that will bite you in production if they\'re not handled correctly. We allocate dedicated time to billing and write integration tests for every billing flow before go-live. Onboarding flows and transactional email are also treated as core features, not afterthoughts.',
        },
      ]}
      faqs={[
        {
          q: 'What is an MVP and why should I start there?',
          a: 'An MVP (Minimum Viable Product) is the smallest version of your product that delivers real value to real users. Starting there means you ship faster, spend less, and validate your assumptions before over-building. We help you identify what belongs in the MVP and what can wait.',
        },
        {
          q: 'Can you help me decide what features to include in the MVP?',
          a: 'Yes — this is part of our process. We\'ll help you map your user journey and separate what users need on day one from what can wait for version two. Most founders over-scope the MVP. We push back where it counts.',
        },
        {
          q: 'What if I want to build on top of the MVP after it launches?',
          a: 'We build for extensibility. The architecture we use supports iterative development — you can add features on top of what we build without rewriting anything. Ongoing retainer options are also available.',
        },
      ]}
    />
  );
}
