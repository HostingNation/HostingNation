import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import FeaturedWork from '@/components/FeaturedWork';
import FounderSection from '@/components/FounderSection';
import TrustBar from '@/components/TrustBar';
import Process from '@/components/Process';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title:
    'Hosting Nation | Custom Web Development, SaaS & Software Company by Mohd Suhail',
  description:
    'Hosting Nation, founded by Mohd Suhail, builds custom web applications, SaaS platforms, e-commerce stores, API integrations, and business automation for startups and businesses worldwide.',
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title:
      'Hosting Nation | Custom Web Development, SaaS & Software Company by Mohd Suhail',
    description:
      'Founded by Mohd Suhail, Hosting Nation builds custom web applications and software solutions for startups and businesses around the world.',
    url: siteConfig.url
  }
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url }
        ])}
      />

      <Hero />
      <TrustBar />
      <ServicesGrid />
      <FeaturedWork />
      <Process />
      <SocialProof />
      <FounderSection />
      <FAQ />
      <CTA />
    </>
  );
}
