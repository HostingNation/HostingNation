import type { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';
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
    <ServiceLayout
      slug="custom-software-development"
      eyebrow="Custom Software"
      title="Custom software, built around your business"
      highlight="Custom software"
      serviceType="Custom Software Development"
      intro="Off-the-shelf tools rarely fit. Hosting Nation builds bespoke software — internal tools, dashboards, CRMs, ERPs, and operational systems — engineered around how your team actually works, not the other way around."
      whoFor={[
        'Operations teams drowning in spreadsheets and manual tasks',
        'Businesses with unique workflows no SaaS supports',
        'Agencies needing client portals or internal management tools',
        'Founders replacing patchwork tools with one unified system'
      ]}
      whatBuilt={[
        { title: 'Internal Admin Panels', desc: 'Manage users, orders, inventory, content, and workflows from one secure dashboard.' },
        { title: 'CRM & ERP Systems', desc: 'Custom-fit customer and resource management — far more useful than generic SaaS.' },
        { title: 'Operations Dashboards', desc: 'Real-time visibility into KPIs, leads, sales, support, and team performance.' },
        { title: 'Inventory & Logistics Tools', desc: 'Stock, suppliers, orders, shipments — connected in one workflow.' }
      ]}
      stack={['Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Prisma', 'Redis', 'Docker']}
      outcomes={[
        'Hours of manual work replaced with one-click automation',
        'A single source of truth across your tools and teams',
        'Role-based access and audit logs for compliance',
        'Scales as your team grows — without rewrites'
      ]}
    />
  );
}
