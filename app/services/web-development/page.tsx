import type { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Web Development Services | Hosting Nation by Mohd Suhail',
  description:
    'Custom web development services by Hosting Nation. Fast, modern websites and full-stack web apps built with Next.js, React, Node.js & MongoDB. Founded by Mohd Suhail.',
  alternates: { canonical: `${siteConfig.url}/services/web-development` },
  openGraph: {
    title: 'Web Development Services | Hosting Nation',
    description:
      'High-performance websites and full-stack web apps by Hosting Nation — built with Next.js, React, Node.js, and MongoDB.',
    url: `${siteConfig.url}/services/web-development`
  },
  keywords: [
    'Hosting Nation web development',
    'web development company',
    'Next.js development agency',
    'React development services',
    'custom web app development',
    'full stack web development',
    'Mohd Suhail web developer'
  ]
};

export default function WebDevelopmentPage() {
  return (
    <ServiceLayout
      slug="web-development"
      eyebrow="Web Development"
      title="Modern websites & web apps that convert"
      highlight="websites & web apps"
      serviceType="Web Development"
      intro="We design and build fast, SEO-friendly, mobile-first websites and full-stack web applications. From marketing sites to complex dashboards — every project is hand-coded with Next.js, React, Node.js, and MongoDB."
      whoFor={[
        'Startups launching their MVP or marketing site',
        'Businesses replacing slow, outdated WordPress sites',
        'Agencies that need a senior dev partner',
        'SaaS founders building their first product surface'
      ]}
      whatBuilt={[
        { title: 'Marketing Websites', desc: 'High-converting landing pages and multi-page sites with great Core Web Vitals.' },
        { title: 'Full-Stack Web Apps', desc: 'Authenticated apps with databases, dashboards, and complex business logic.' },
        { title: 'Admin Dashboards', desc: 'Internal panels for managing users, content, orders, payments, analytics.' },
        { title: 'Portals & Communities', desc: 'Customer portals, member areas, learning platforms, and community apps.' }
      ]}
      stack={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'PostgreSQL', 'Vercel', 'AWS']}
      outcomes={[
        'Lighthouse-grade performance and SEO out of the box',
        'Type-safe, maintainable codebase your team can extend',
        'Production deployment on Vercel, AWS, or your cloud',
        'Post-launch support and feature iteration'
      ]}
    />
  );
}
