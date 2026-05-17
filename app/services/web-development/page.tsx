import type { Metadata } from 'next';
import ServiceLayoutExpanded from '@/components/ServiceLayoutExpanded';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Web Development Services | Hosting Nation by Mohd Suhail',
  description:
    'Custom web development services by Hosting Nation. Fast, SEO-friendly websites and full-stack web apps built with Next.js, React, Node.js & MongoDB. Founded by Mohd Suhail.',
  alternates: { canonical: `${siteConfig.url}/services/web-development` },
  openGraph: {
    title: 'Web Development Services | Hosting Nation',
    description: 'High-performance websites and full-stack web apps built with Next.js, React, Node.js, and MongoDB.',
    url: `${siteConfig.url}/services/web-development`,
  },
  keywords: [
    'web development company', 'Next.js development agency', 'React development services',
    'custom web app development', 'full stack web development', 'Hosting Nation web development',
    'Mohd Suhail web developer',
  ],
};

export default function WebDevelopmentPage() {
  return (
    <ServiceLayoutExpanded
      slug="web-development"
      eyebrow="Web Development"
      title="Modern websites & web apps that convert"
      highlight="websites & web apps"
      serviceType="Web Development"
      intro="Your website is your most valuable sales tool and most business websites are quietly losing you clients. Hosting Nation builds fast, SEO-friendly, mobile-first websites and full-stack web applications. From marketing sites to complex dashboards every project is hand-coded with Next.js, React, and Node.js."
      whoFor={[
        'Startups launching their first professional web presence',
        'Businesses replacing slow, outdated WordPress sites',
        'Agencies that need a senior development partner',
        'Founders embarrassed to share their current website URL',
      ]}
      whatBuilt={[
        { title: 'Marketing Websites',    desc: 'High-converting landing pages and multi-page sites with great Core Web Vitals and SEO.' },
        { title: 'Full-Stack Web Apps',   desc: 'Authenticated apps with databases, dashboards, and complex business logic.' },
        { title: 'Admin Dashboards',      desc: 'Internal panels for managing users, content, orders, payments, and analytics.' },
        { title: 'Portals & Communities', desc: 'Customer portals, member areas, learning platforms, and community apps.' },
      ]}
      stack={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'PostgreSQL', 'Vercel', 'AWS']}
      outcomes={[
        'Lighthouse-grade performance and SEO out of the box',
        'Type-safe, maintainable codebase your team can extend',
        'Production deployment on Vercel, AWS, or your cloud',
        'Post-launch support and feature iteration included',
      ]}
      timeline="Starter sites: 2–3 weeks · Business sites with CMS: 4–6 weeks"
      longFormSections={[
        {
          heading: 'Build a Website That Works as Hard as You Do',
          body: 'Most business websites have the same problem: they look fine, but they don\'t convert. Slow load times, confusing navigation, copy that says nothing, and a design that looked modern in 2018 are all costing you leads. At Hosting Nation, we build websites that are fast, focused, and built to convert not just to look good in a screenshot.',
        },
        {
          heading: 'Why Next.js and Not WordPress?',
          body: 'We work in Next.js and React for the frontend the same technology stack used by Vercel, Netflix, and thousands of high-growth startups. The result is a website that is fast by default, SEO-friendly by architecture, and easy to extend as your needs grow. WordPress is accessible, but it carries a performance and security ceiling that modern businesses shouldn\'t have to accept. We recommend the right tool for your situation on the discovery call.',
        },
        {
          heading: 'What\'s Included in Every Web Development Project',
          body: 'Custom UI/UX design (no Figma templates sold as "custom"), Next.js or React frontend development, mobile-first responsive layout, Core Web Vitals optimization, on-page SEO (meta tags, structured data, XML sitemap, robots.txt), contact forms and lead capture integrations, Google Analytics 4 setup, and deployment on Vercel, Netlify, or your preferred hosting. Cross-browser testing and 14–30 days post-launch support included.',
        },
        {
          heading: 'SEO Built Into the Architecture, Not Added On',
          body: 'Search engine optimization is not a plugin or an afterthought at Hosting Nation it is built into how we structure every project. Server-side rendering with Next.js means your content is crawlable by default. Clean URL structures, proper heading hierarchies, structured data markup, and fast Core Web Vitals scores give your site the technical foundation to rank. We set up Google Search Console and Analytics on every project.',
        },
      ]}
      faqs={[
        {
          q: 'Do you build with WordPress?',
          a: 'Occasionally, for clients with a specific reason to use it. Our default is Next.js, which is faster, more secure, and better for long-term performance. We\'ll recommend the right tool for your situation on the discovery call.',
        },
        {
          q: 'Can you redesign an existing site without rebuilding from scratch?',
          a: 'It depends on the existing codebase. We\'ll assess it on the discovery call. In most cases, a rebuild on a modern stack is faster and cleaner than retrofitting bad code and it costs less in the long run.',
        },
        {
          q: 'Will I be able to update content myself after launch?',
          a: 'Yes. We integrate headless CMS solutions (like Sanity or Contentful) so you can update text, images, and blog posts without touching the code. No developer dependency for routine content updates.',
        },
      ]}
    />
  );
}
