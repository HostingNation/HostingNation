import type { Metadata } from 'next';
import ServiceLayoutExpanded from '@/components/ServiceLayoutExpanded';
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
    <ServiceLayoutExpanded
      slug="api-integration"
      eyebrow="API Integration"
      title="Your tools should talk to each other"
      highlight="talk to each other"
      serviceType="API Integration"
      intro="Every growing business eventually hits the same wall: too many tools, no connection between them, and too much manual work moving data from one place to another. API integration is how you tear that wall down. We connect your website, app, CRM, payment processor, and any third-party service into one reliable, automated workflow."
      whoFor={[
        'Businesses that use multiple SaaS tools and want them connected',
        'Founders whose app needs third-party services — payments, messaging, maps, AI',
        'Teams building internal tools that pull from or push to external systems',
        'Companies that want to expose their platform\'s data via a documented API',
      ]}
      whatBuilt={[
        { title: 'Payment Integrations',  desc: 'Stripe, Razorpay, PayPal, Paddle — including webhooks, subscriptions, and reconciliation.' },
        { title: 'AI Integrations',       desc: 'OpenAI, Anthropic Claude, Gemini, vector databases — wired into your product reliably.' },
        { title: 'Messaging & Comms',     desc: 'WhatsApp Business, Twilio SMS, Slack, email pipelines (Resend, SendGrid).' },
        { title: 'CRM & Ops Sync',        desc: 'HubSpot, Salesforce, Zoho, Notion, Airtable — kept in sync automatically.' },
      ]}
      stack={['Node.js', 'TypeScript', 'Next.js', 'OAuth 2.0', 'Webhooks', 'REST', 'GraphQL', 'BullMQ']}
      outcomes={[
        'Reliable integrations with no silent failures or data loss',
        'Manual data entry replaced with automatic sync',
        'AI capabilities embedded directly into your product or workflow',
        'A documented integration layer your team can maintain and extend',
      ]}
      timeline="Simple integrations: 1–2 weeks · Multi-system integrations: 3–5 weeks"
      longFormSections={[
        {
          heading: 'What API Integration Means in Practice',
          body: 'An API (Application Programming Interface) is how software systems communicate. When your checkout talks to Stripe, when your app sends emails through SendGrid, when your CRM receives new leads from your website — that\'s all API integration. We specialize in building reliable, well-structured API connections: both consuming third-party APIs (calling external services from your product) and building first-party APIs (the interface that lets your product talk to others).',
        },
        {
          heading: 'Common Integrations We\'ve Built',
          body: 'Stripe subscription billing, PayPal and Razorpay payment flows, SendGrid and Resend transactional email, Twilio SMS and WhatsApp messaging, Google Calendar and Google Maps, OpenAI and Claude AI integrations, HubSpot CRM sync, Slack notifications and bots, AWS services (S3, SES, Lambda), Mapbox, Zapier webhooks, and custom REST API design and documentation.',
        },
        {
          heading: 'Building APIs That Don\'t Break',
          body: 'The difference between a working integration and a reliable one is error handling, retry logic, and monitoring. We build integrations with all three. Every external API call has timeout handling, exponential backoff for retries, structured error logging, and alerting when something consistently fails. We also write integration tests for every API we connect — because a silent integration failure is worse than no integration at all.',
        },
        {
          heading: 'First-Party API Design and Documentation',
          body: 'If you want other developers or partners to integrate with your product, we design and build REST APIs to production standards — versioning, authentication (API keys or OAuth 2.0), rate limiting, structured error responses, and OpenAPI/Swagger documentation. Clean API design is an investment in your product\'s future — it reduces support burden and makes it possible to build a developer ecosystem.',
        },
      ]}
      faqs={[
        {
          q: 'What if the third-party API I need is poorly documented?',
          a: 'We\'ve worked with underdocumented and legacy APIs before. We reverse-engineer what we need, test edge cases manually, and build robust error handling for unpredictable third-party responses. It takes longer — we scope for it.',
        },
        {
          q: 'Can you build a public API for my product so other developers can integrate with it?',
          a: 'Yes. We design, build, and document REST APIs to production standards — versioning, authentication, rate limiting, and OpenAPI documentation included.',
        },
        {
          q: 'How do you handle breaking changes when a third-party updates their API?',
          a: 'We build with monitoring in place and write integration tests. We also stay available post-launch to handle breaking changes. Most major API providers give advance notice of deprecations — we track these for active integrations.',
        },
      ]}
    />
  );
}
