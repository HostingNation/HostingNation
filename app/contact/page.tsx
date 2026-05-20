import type { Metadata } from 'next';
import { Mail, MapPin, Clock, Globe, Phone, Instagram } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact — Hire Mohd Suhail',
  description: 'Get in touch with Hosting Nation. Hire Mohd Suhail for custom web development, SaaS, software, and automation projects. We work with clients globally.',
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: 'Contact Hosting Nation | Hire Mohd Suhail',
    description: 'Hire Mohd Suhail and the Hosting Nation team for custom web, SaaS, and software projects.',
    url: `${siteConfig.url}/contact`,
    images: ['/images/og-cover.png']
  },
  keywords: ['contact Hosting Nation', 'hire Mohd Suhail', 'hire web developer', 'custom software quote']
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: `${siteConfig.url}/contact`,
  name: 'Contact Hosting Nation',
  description: 'Get in touch with Hosting Nation to hire Mohd Suhail for custom software projects.',
  mainEntity: { '@id': `${siteConfig.url}/#organization` }
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: siteConfig.url },
        { name: 'Contact', url: `${siteConfig.url}/contact` }
      ])} />
      <section className="section pt-28 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-4 tracking-tight leading-[1.05]">
              Let&apos;s build something <span style={{ color: '#dc3545' }}>great</span>
            </h1>
            <p className="mt-5 leading-relaxed text-sm" style={{ color: '#606060' }}>
              Tell us about your project. Mohd Suhail and the Hosting Nation team reply within 1 business day.
            </p>

            <div className="mt-8 space-y-3">
              {[
                {
                  icon: Mail,
                  label: siteConfig.email,
                  href: `mailto:${siteConfig.email}`
                },
                 { icon: Phone,     label: siteConfig.phone,   href: `tel:${siteConfig.phone.replace(/-/g, '')}`       },

                { icon: Instagram, label: '@hostingnation',   href: siteConfig.social.instagram                      },

                {
                  icon: MapPin,
                  label: 'India · Working with clients worldwide'
                },
                {
                  icon: Clock,
                  label: 'Replies within 1 business day'
                },
                {
                  icon: Globe,
                  label: 'Remote-first · US · UK · UAE · EU · APAC'
                }
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-lg grid place-items-center shrink-0"
                    style={{ background: '#fff0f1' }}
                  >
                    <Icon size={15} className="text-red-700" />
                  </span>
                  {href ? (
                    
                     <a href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm hover:text-red-700 transition-colors"
                      style={{ color: '#606060' }}
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: '#606060' }}>{label}</span>
                  )}
                </div>
              ))}
            </div>

            <div
              className="mt-10 rounded-xl p-5"
              style={{ background: '#ffffff', border: '1px solid #ebebeb' }}
            >
              <p className="text-sm leading-relaxed" style={{ color: '#606060' }}>
                <strong style={{ color: '#000000' }}>Working with Mohd Suhail.</strong>{' '}
                Every project starts with a free 30-minute discovery call to understand your goals, scope, and timeline.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
