import type { Metadata } from 'next';
import ServiceLayoutExpanded from '@/components/ServiceLayoutExpanded';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Custom Software Development | Hosting Nation by Mohd Suhail',
  description:
    'Custom software development by Hosting Nation. Tailored CRMs, ERPs, dashboards, and internal tools built around your real workflow. Founded by Mohd Suhail.',
  alternates: { canonical: `${siteConfig.url}/services/custom-software-development` },
  openGraph: {
    title: 'Custom Software Development | Hosting Nation',
    description:
      'Tailored CRMs, ERPs, internal tools, and admin dashboards built around how your business actually works.',
    url: `${siteConfig.url}/services/custom-software-development`
  },
  keywords: [
    'custom software development',
    'Hosting Nation custom software',
    'bespoke software development',
    'CRM development',
    'ERP development',
    'internal tools development',
    'admin dashboard development'
  ]
};

export default function CustomSoftwarePage() {
  return (
    <ServiceLayoutExpanded
      slug="custom-software-development"
      eyebrow="Custom Software Development"
      title="Software built for exactly what you do"
      highlight="exactly what you do"
      serviceType="Custom Software Development"
      intro="Generic SaaS tools are designed for the average business. If your workflows are specific, your data is sensitive, or your processes don't fit inside someone else's product roadmap you need software built precisely for you. No feature bloat, no unnecessary subscriptions, no workarounds for things that should just work."
      whoFor={[
        'Operations teams drowning in spreadsheets and manual processes',
        'Founders who have outgrown their current tools with no off-the-shelf replacement',
        'Businesses in niche industries where no purpose-built software exists',
        'Companies sitting on data they cannot access or analyse effectively',
      ]}
      whatBuilt={[
        { title: 'Internal Tools',       desc: 'Operations dashboards, workflow managers, and data views built for your team.' },
        { title: 'CRM & ERP Systems',    desc: 'Custom customer relationship and resource management built around your actual processes.' },
        { title: 'Data Dashboards',      desc: 'Real-time business intelligence connect your data sources and visualize what matters.' },
        { title: 'Workflow Automation',  desc: 'Replace manual, repetitive processes with logic that runs itself.' },
      ]}
      stack={['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Vercel']}
      outcomes={[
        'Hours of manual work eliminated every week',
        'Single source of truth for your business data',
        'Software that fits your process not the other way around',
        'Full codebase ownership no vendor lock-in',
      ]}
      timeline="Most custom software projects run 6–12 weeks depending on scope"
      longFormSections={[
        {
          heading: 'Stop Forcing Your Business Into Off-the-Shelf Software',
          body: 'Every growing business eventually hits the same wall: the tools you started with don\'t fit anymore. You\'re using three SaaS subscriptions, a spreadsheet, and a WhatsApp group to manage what should be one coherent workflow. Custom software is how you tear that wall down. At Hosting Nation, we build tools around how your business actually works not how a product manager at a SaaS company imagined it might.',
        },
        {
          heading: 'The Discovery Process: Understanding What to Build',
          body: 'Every custom software project starts with understanding your workflow before touching the keyboard. We map your existing processes, identify where friction costs you the most time and money, and design a system that addresses those specific points. We talk to the people who will actually use the software because a CRM built for a sales team looks completely different from one built for a project management workflow.',
        },
        {
          heading: 'What\'s Included in Every Custom Software Project',
          body: 'Requirements discovery and workflow mapping, system architecture and technical specification, full-stack development (frontend, backend, and database), user authentication and role-based access control, admin dashboard for managing data and users, API design for future integrations, testing and QA, staging environment, production deployment, and post-launch support with full developer documentation.',
        },
        {
          heading: 'Is Custom Software Worth It for a Smaller Business?',
          body: 'If you\'re paying for 3+ SaaS subscriptions and still using spreadsheets to fill the gaps custom software is almost certainly more cost-effective within 18 months. The upfront investment is higher than a monthly subscription, but you own the tool outright, pay no recurring per-seat fees, and get exactly what you need instead of 80% of what you need and 20% of features you\'ll never use.',
        },
      ]}
      faqs={[
        {
          q: 'How do I know if I need custom software or an off-the-shelf tool?',
          a: 'If you\'re paying for 3+ SaaS subscriptions and still using spreadsheets to fill the gaps, custom software is almost certainly more cost-effective within 18 months. We can help you model this comparison on a discovery call.',
        },
        {
          q: 'What happens after the software is built who maintains it?',
          a: 'We offer ongoing maintenance retainers for clients who need them. Alternatively, we deliver fully documented code and hand it off to your internal team. The codebase is yours, with no vendor lock-in.',
        },
        {
          q: 'Is custom software only for large companies?',
          a: 'No. Some of our best work has been for 10-person teams. The question is not company size it\'s whether the problem is worth solving properly. If your team is losing hours every week to manual processes, it almost certainly is.',
        },
      ]}
    />
  );
}
