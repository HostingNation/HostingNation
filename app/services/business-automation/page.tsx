import type { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Business Automation Services | Hosting Nation by Mohd Suhail',
  description:
    'Business process automation by Hosting Nation. Automate invoicing, leads, reports, onboarding, and ops with custom scripts and AI. Founded by Mohd Suhail.',
  alternates: { canonical: `${siteConfig.url}/services/business-automation` },
  openGraph: {
    title: 'Business Automation Services | Hosting Nation',
    description:
      'Automate manual workflows — invoicing, leads, reports, onboarding, and ops — with custom scripts and AI.',
    url: `${siteConfig.url}/services/business-automation`
  },
  keywords: [
    'business automation',
    'Hosting Nation automation',
    'business process automation',
    'workflow automation services',
    'AI automation',
    'sales automation',
    'invoice automation'
  ]
};

export default function BusinessAutomationPage() {
  return (
    <ServiceLayout
      slug="business-automation"
      eyebrow="Business Automation"
      title="Automate the manual work that slows you down"
      highlight="manual work"
      serviceType="Business Automation"
      intro="If your team is copy-pasting between tools, chasing leads in spreadsheets, or generating reports by hand — Hosting Nation can automate it. We build custom automation systems, AI agents, and workflow tools that give your team hours back every week."
      whoFor={[
        'Operations teams losing hours to repetitive tasks',
        'Sales teams with messy lead routing and follow-ups',
        'Finance teams generating reports and invoices manually',
        'Founders who want AI agents handling routine operations'
      ]}
      whatBuilt={[
        { title: 'Workflow Automation', desc: 'End-to-end pipelines: leads → CRM → email → tasks → reports, fully hands-off.' },
        { title: 'AI Agents', desc: 'GPT / Claude-powered agents for support, content, research, lead qualification.' },
        { title: 'Invoicing & Finance', desc: 'Auto-generate invoices, reconcile payments, send reminders, export to accounting.' },
        { title: 'Reporting & Alerts', desc: 'Real-time dashboards plus scheduled email/Slack reports for KPIs that matter.' }
      ]}
      stack={['Node.js', 'TypeScript', 'OpenAI', 'Anthropic Claude', 'n8n / custom workers', 'Cron', 'BullMQ', 'MongoDB']}
      outcomes={[
        'Hours of manual work eliminated every week',
        'Fewer human errors and missed follow-ups',
        'AI handling routine decisions, humans handling judgment',
        'A clear ROI within the first month'
      ]}
    />
  );
}
