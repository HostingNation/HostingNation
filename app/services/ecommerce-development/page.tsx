import type { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'E-commerce Development | Hosting Nation by Mohd Suhail',
  description:
    'Custom and headless e-commerce development by Hosting Nation. High-conversion online stores, payment integrations, and scalable storefronts. Founded by Mohd Suhail.',
  alternates: { canonical: `${siteConfig.url}/services/ecommerce-development` },
  openGraph: {
    title: 'E-commerce Development | Hosting Nation',
    description:
      'Custom and headless e-commerce stores with conversion-optimized checkout, payment gateways, and analytics.',
    url: `${siteConfig.url}/services/ecommerce-development`
  },
  keywords: [
    'ecommerce development',
    'Hosting Nation ecommerce',
    'custom ecommerce development',
    'headless ecommerce',
    'Shopify Hydrogen developer',
    'Next.js ecommerce',
    'online store development'
  ]
};

export default function EcommercePage() {
  return (
    <ServiceLayout
      slug="ecommerce-development"
      eyebrow="E-commerce"
      title="E-commerce stores built to convert"
      highlight="E-commerce stores"
      serviceType="E-commerce Development"
      intro="From a single-product Shopify alternative to a multi-vendor marketplace — Hosting Nation builds fast, mobile-first, conversion-optimized online stores with custom checkout, payment integrations, and powerful admin tools."
      whoFor={[
        'D2C brands wanting more than a template Shopify site',
        'Founders launching a niche product or marketplace',
        'Businesses needing custom checkout, pricing, or shipping logic',
        'Teams migrating to a faster headless storefront'
      ]}
      whatBuilt={[
        { title: 'Custom Storefronts', desc: 'Mobile-first storefronts with sub-second loads and silky-smooth UX.' },
        { title: 'Headless E-commerce', desc: 'Next.js front-ends powered by Shopify, Medusa, or a custom Node.js backend.' },
        { title: 'Payments & Checkout', desc: 'Stripe, Razorpay, Cashfree, PayPal — plus one-click and split-payment flows.' },
        { title: 'Admin & Inventory', desc: 'Orders, inventory, customers, discounts, and reports in one dashboard.' }
      ]}
      stack={['Next.js', 'Shopify', 'Medusa.js', 'Stripe', 'Razorpay', 'MongoDB', 'PostgreSQL', 'Vercel']}
      outcomes={[
        'Faster store = higher conversion and better ad ROAS',
        'Checkout flows tuned for your customers, not a template',
        'Full control over data, design, and roadmap',
        'Analytics, SEO, and structured data built in'
      ]}
    />
  );
}
