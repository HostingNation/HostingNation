import type { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';
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
    <ServiceLayout
      slug="saas-development"
      eyebrow="SaaS Development"
      title="Ship your SaaS product, end to end"
      highlight="SaaS product"
      serviceType="SaaS Development"
      intro="From idea to paying customers. Hosting Nation builds multi-tenant SaaS platforms with authentication, subscription billing, role-based access, dashboards, analytics, and scalable cloud deployment — engineered to grow with your users."
      whoFor={[
        'Founders launching their first SaaS MVP',
        'Indie hackers turning a side project into a real product',
        'Businesses productizing an internal tool',
        'Companies migrating off no-code into a proper codebase'
      ]}
      whatBuilt={[
        { title: 'Multi-Tenant Core', desc: 'Workspaces, organizations, team invites, role-based permissions — done right.' },
        { title: 'Auth & Billing', desc: 'Email, OAuth, magic links, plus Stripe / Razorpay subscriptions and trials.' },
        { title: 'Admin & User Dashboards', desc: 'Owner admin, team dashboards, and end-user UI — all in one clean codebase.' },
        { title: 'Usage, Limits & Analytics', desc: 'Plan-aware feature gating, usage metering, and product analytics built-in.' }
      ]}
      stack={['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'Stripe', 'Razorpay', 'Redis', 'Vercel', 'AWS']}
      outcomes={[
        'Paying customers within weeks, not quarters',
        'Architecture that scales from 10 to 10,000 users',
        'Clean codebase you can hand to your future team',
        'Founder-led support through launch and beyond'
      ]}
    />
  );
}
