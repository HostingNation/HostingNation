import type { Metadata } from 'next';
import ServiceLayoutExpanded from '@/components/ServiceLayoutExpanded';
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
    <ServiceLayoutExpanded
      slug="business-automation"
      eyebrow="Business Automation"
      title="Stop doing manually what a computer should do"
      highlight="manually what a computer should do"
      serviceType="Business Automation"
      intro="If someone on your team is copying data between spreadsheets, sending repetitive emails by hand, updating records in multiple places, or chasing approvals through WhatsApp — that is money burning on the floor. Business automation is how you get it back. We build automation systems that connect your tools, eliminate manual steps, and let your team focus on work that actually requires a human."
      whoFor={[
        'Operations teams spending hours on work that should take minutes',
        'Founders who are personally doing things that should be automated',
        'Sales teams losing leads because follow-up isn\'t happening fast enough',
        'Any business that has grown past the point where manual processes are sustainable',
      ]}
      whatBuilt={[
        { title: 'Workflow Automation',  desc: 'End-to-end pipelines: leads → CRM → email → tasks → reports, fully hands-off.' },
        { title: 'AI-Powered Agents',   desc: 'GPT and Claude-powered agents for support, research, content, and lead qualification.' },
        { title: 'Invoicing & Finance', desc: 'Auto-generate invoices, reconcile payments, send reminders, export to accounting.' },
        { title: 'Reporting & Alerts',  desc: 'Real-time dashboards plus scheduled Slack/email reports for the KPIs that matter.' },
      ]}
      stack={['Node.js', 'TypeScript', 'OpenAI', 'Anthropic Claude', 'AWS Lambda', 'Cron', 'MongoDB', 'SendGrid']}
      outcomes={[
        'Hours of manual work eliminated every week — measurable from month one',
        'Fewer human errors and missed follow-ups across your pipeline',
        'AI handling routine decisions so your team handles judgment calls',
        'A clear ROI that compounds as your business scales',
      ]}
      timeline="Most automation projects run 2–4 weeks depending on complexity"
      longFormSections={[
        {
          heading: 'What Business Automation Covers',
          body: 'Automation is a broad category. At Hosting Nation, we focus on process automation that connects your existing systems and eliminates friction at specific, high-cost points in your workflow. This includes lead capture and CRM automation, notification and alert systems (email, SMS, Slack), report generation and data aggregation, approval and review workflows, document generation and delivery, scheduled data sync between systems, and customer lifecycle triggers such as onboarding, renewal reminders, and churn alerts.',
        },
        {
          heading: 'How We Find What to Automate First',
          body: 'We start with a workflow audit. We look at where your team spends time on tasks that add no unique value — data entry, format conversion, status updates, manual follow-ups — and identify the highest-impact automation starting points. The first automation project almost always pays for itself within 30 days. We\'ve seen teams of 5 recover 15+ hours per week from a single workflow change.',
        },
        {
          heading: 'Custom Code vs. Zapier — When to Use Which',
          body: 'Zapier and Make are excellent tools for simple automation. We use them when appropriate. For complex logic, high data volumes, or anything that needs to be reliable at scale, custom code beats a drag-and-drop tool every time. The rule of thumb: if you\'re managing more than 5 steps in a Zap, hitting rate limits, or the automation is business-critical — it should be code. We\'ll tell you honestly which approach fits your situation.',
        },
        {
          heading: 'AI Automation: What\'s Actually Possible Today',
          body: 'We build AI automation using OpenAI and Anthropic Claude APIs — not AI tools that are wrappers around other AI tools. Practical use cases we\'ve built or can build: AI-powered lead qualification that scores and routes inbound inquiries, content generation pipelines for product descriptions or support responses, document processing that extracts structured data from PDFs and emails, and customer support triage that handles routine questions and escalates the rest.',
        },
      ]}
      faqs={[
        {
          q: 'Do I need to use specific tools for you to automate my workflow?',
          a: 'No. We work with whatever tools you\'re already using. If you\'re using Google Sheets, Notion, HubSpot, and WhatsApp — we\'ll build around that, not ask you to change your stack.',
        },
        {
          q: 'Is this the same as using Zapier?',
          a: 'Zapier is great for simple automations and we use it when it fits. For complex logic, high data volumes, or anything business-critical, custom code is more reliable and maintainable. We\'ll recommend the right approach for your specific situation.',
        },
        {
          q: 'How do I know what to automate first?',
          a: 'Start with the task your team does most often that adds no unique value. On our discovery call, we\'ll walk through your operations and identify the highest-impact automation starting point. Most clients see clear ROI within the first 30 days.',
        },
      ]}
    />
  );
}
