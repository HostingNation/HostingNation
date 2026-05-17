import type { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'API Integration Services | Hosting Nation by Mohd Suhail',
  description:
    'API integration services by Hosting Nation. Connect Stripe, Razorpay, OpenAI, WhatsApp, CRMs, and any 3rd-party API into one reliable system. Founded by Mohd Suhail.',
  alternates: { canonical: `${siteConfig.url}/services/api-integration` },
  openGraph: {
    title: 'API Integration Services | Hosting Nation',
    description:
      'Connect payments, AI, messaging, CRMs, and any 3rd-party API into one reliable workflow.',
    url: `${siteConfig.url}/services/api-integration`
  },
  keywords: [
    'API integration services',
    'Hosting Nation API integration',
    'Stripe integration',
    'Razorpay integration',
    'OpenAI API integration',
    'WhatsApp API integration',
    'third party API integration'
  ]
};

export default function ApiIntegrationPage() {
  return (
    <ServiceLayout
      slug="api-integration"
      eyebrow="API Integration"
      title="Connect every API into one reliable system"
      highlight="every API"
      serviceType="API Integration"
      intro="Your tools shouldn't live on separate islands. Hosting Nation connects payments, AI, messaging, CRMs, marketing tools, and 3rd-party APIs into one reliable workflow — with proper error handling, retries, and observability."
      whoFor={[
        'Teams stitching together 5+ SaaS tools manually',
        'Businesses adding AI (OpenAI, Anthropic) to existing products',
        'Founders connecting payments, billing, and accounting',
        'Companies syncing CRM data across multiple platforms'
      ]}
      whatBuilt={[
        { title: 'Payment Integrations', desc: 'Stripe, Razorpay, Cashfree, PayPal, Paddle — including webhooks and reconciliation.' },
        { title: 'AI Integrations', desc: 'OpenAI, Anthropic Claude, Gemini, vector databases — wired into your product.' },
        { title: 'Messaging & Comms', desc: 'WhatsApp Business, Twilio SMS, Slack, email pipelines (Resend, SendGrid).' },
        { title: 'CRM & Ops Sync', desc: 'HubSpot, Salesforce, Zoho, Pipedrive, Notion, Airtable — kept in sync automatically.' }
      ]}
      stack={['Node.js', 'TypeScript', 'Next.js API Routes', 'BullMQ', 'Redis', 'Webhooks', 'OAuth 2.0']}
      outcomes={[
        'Reliable, observable integrations — no silent failures',
        'Manual data entry replaced with automatic sync',
        'AI capabilities embedded into your product or workflow',
        'A single integration layer your team can extend'
      ]}
    />
  );
}
