import Link from 'next/link';
import { Code2, Layers, Cloud, ShoppingCart, Plug, Workflow, ArrowRight } from 'lucide-react';

const SERVICES = [
  { title: 'Web Development',     slug: 'web-development',             icon: Code2,        iconColor: '#dc3545', summary: 'High-performance sites and full-stack apps with Next.js, React, and Node.js.' },
  { title: 'Custom Software',     slug: 'custom-software-development', icon: Layers,       iconColor: '#0284c7', summary: 'Internal tools, dashboards, CRMs, and ERPs tailored to your exact workflow.' },
  { title: 'SaaS Development',    slug: 'saas-development',            icon: Cloud,        iconColor: '#dc3545', summary: 'Multi-tenant SaaS with auth, billing, role-based access, and cloud deployment.' },
  { title: 'E-commerce',          slug: 'ecommerce-development',       icon: ShoppingCart, iconColor: '#059669', summary: 'Custom stores, headless e-commerce, payment gateways, and fast checkouts.' },
  { title: 'API Integration',     slug: 'api-integration',             icon: Plug,         iconColor: '#ea580c', summary: 'Connect Stripe, OpenAI, WhatsApp, CRMs, and any 3rd-party API reliably.' },
  { title: 'Business Automation', slug: 'business-automation',         icon: Workflow,     iconColor: '#ca8a04', summary: 'Automate invoicing, leads, reports, and onboarding with custom scripts and AI.' },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="cv-auto py-16 md:py-24" style={{ background: '#fff6f6' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow mb-3 block">What we build</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: '#000000' }}>
            Services for <span style={{ color: '#dc3545' }}>modern businesses</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: '#606060' }}>
            End-to-end software development for startups and businesses worldwide.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ title, slug, icon: Icon, iconColor, summary }) => (
            <Link key={slug} href={`/services/${slug}`}
              className="group flex flex-col gap-4 p-6 bg-white transition-all duration-200 hover:bg-[#fff6f6] hover:shadow-md"
              style={{ border: '1px solid #ebebeb', borderRadius: 15 }}>
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl grid place-items-center transition-transform duration-200 group-hover:scale-110"
                  style={{ background: '#fff6f6', border: '1px solid #ebebeb' }}>
                  <Icon size={22} style={{ color: iconColor }} />
                </div>
                <ArrowRight size={15} className="mt-1 transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5" style={{ color: iconColor }} />
              </div>
              <div>
                <h3 className="font-bold text-base" style={{ color: '#000000' }}>{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: '#606060' }}>{summary}</p>
              </div>
              <span className="text-xs font-bold mt-auto flex items-center gap-1 transition-colors" style={{ color: iconColor }}>
                Learn more <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
