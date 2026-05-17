import type { Metadata } from 'next';
import ServicesGrid from '@/components/ServicesGrid';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services | Web Development, SaaS, Software & Automation Hosting Nation',
  description:
    'Hosting Nation services: custom web development, SaaS development, e-commerce, API integration, business automation, and custom software by Mohd Suhail.',
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: 'Services Hosting Nation',
    description:
      'Custom web development, SaaS, e-commerce, API integration, and business automation by Mohd Suhail.',
    url: `${siteConfig.url}/services`
  },
  keywords: [
    'Hosting Nation services',
    'web development services',
    'SaaS development services',
    'custom software development',
    'API integration services',
    'business automation services',
    'e-commerce development services'
  ]
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Services', url: `${siteConfig.url}/services` }
        ])}
      />
      <section className="section pt-28 md:pt-32 text-center max-w-3xl mx-auto">
        <span className="eyebrow">Our services</span>
        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          Software services for{' '}
          <span style={{ color: '#dc3545' }}>modern businesses</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed" style={{ color: '#606060' }}>
          From websites to full-blown SaaS platforms Hosting Nation, founded
          by Mohd Suhail, delivers production-ready software end-to-end.
        </p>
      </section>
      <ServicesGrid />
      <CTA />
    </>
  );
}
