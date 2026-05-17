import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code, Database, Cloud, Plug, Briefcase, GraduationCap, MapPin, Mail } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import CTA from '@/components/CTA';
import { breadcrumbSchema, personSchema, organizationSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Meet Mohd Suhail | Founder & CEO of Hosting Nation',
  description: 'Mohd Suhail is the Founder & CEO of Hosting Nation. Full-stack developer specializing in React, Node.js, SaaS, dashboards, and API integration working with startups and businesses globally.',
  alternates: { canonical: `${siteConfig.url}/founder` },
  openGraph: { title: 'Meet Mohd Suhail | Founder & CEO of Hosting Nation', description: 'Mohd Suhail Founder & CEO of Hosting Nation.', url: `${siteConfig.url}/founder` },
  keywords: ['Mohd Suhail','Suhail','Mohd Suhail Founder Hosting Nation','Hosting Nation founder']
};

const SKILLS = [
  { icon: Code,     title: 'Frontend Engineering', stack: 'React, Next.js, TypeScript, Tailwind CSS, Framer Motion' },
  { icon: Database, title: 'Backend Engineering',  stack: 'Node.js, Express, Nest.js, MongoDB, PostgreSQL, Prisma' },
  { icon: Cloud,    title: 'SaaS Architecture',    stack: 'Multi-tenant design, auth, Stripe/Razorpay billing, role-based access' },
  { icon: Plug,     title: 'API Integration',      stack: 'REST, GraphQL, Webhooks, OpenAI, WhatsApp, payment & CRM APIs' }
];

const TIMELINE = [
  { year: '2022', title: 'Founded Hosting Nation',       desc: 'Started Hosting Nation as a founder-led software studio to deliver custom web apps and SaaS products to startups globally.' },
  { year: '2023', title: 'Scaled to International Clients', desc: 'Onboarded clients across the US, UK, UAE, and Europe. Launched the first internal SaaS templates for faster delivery.' },
  { year: '2024', title: 'Specialized in SaaS & Automation', desc: 'Deepened focus on SaaS platforms, dashboards, and AI-powered business automation for growing companies.' },
  { year: '2025+',title: 'Agency + Freelance Hybrid Model', desc: 'Operating Hosting Nation as both a focused agency and a freelance studio flexible engagements for any size.' }
];

export default function FounderPage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={breadcrumbSchema([{ name:'Home', url:siteConfig.url },{ name:'Founder', url:`${siteConfig.url}/founder` }])} />

      {/* Hero */}
      <section className="section pt-28 md:pt-32">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <span className="eyebrow">Meet the founder</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-[1.05] tracking-tight">
              Meet <span style={{ color: '#dc3545' }}>Mohd Suhail</span><br />
              Founder of Hosting Nation
            </h1>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: '#606060' }}>
              <strong style={{ color: '#000000' }}>Mohd Suhail</strong> is the{' '}
              <strong style={{ color: '#000000' }}>Founder &amp; CEO of Hosting Nation</strong>, a software development company that builds custom web applications and software solutions for startups and businesses worldwide.
            </p>
            <p className="mt-4 leading-relaxed text-sm" style={{ color: '#888888' }}>
              Full-stack engineer specializing in <strong style={{ color: '#606060' }}>React, Node.js, SaaS, dashboards, and API integration</strong>.
              Ships production software for clients across the US, UK, UAE, Canada, Australia, Europe, and Asia.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-5 text-xs" style={{ color: '#888888' }}>
              <span className="inline-flex items-center gap-1.5"><MapPin size={12} className="text-red-600" /> India · Working Worldwide</span>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 hover:text-red-700 transition-colors">
                <Mail size={12} className="text-red-600" /> {siteConfig.email}
              </a>
            </div>
            <div className="mt-7 flex gap-3">
              <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">Work with Suhail <ArrowRight size={16} /></Link>
              <Link href="/services" className="btn-ghost text-sm py-2.5 px-5">See Services</Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl p-8 text-center"
              style={{ background: '#000000', border: '1px solid #ebebeb' }}>
              <div className="w-32 h-32 mx-auto rounded-full grid place-items-center text-white text-4xl font-bold"
                style={{ background: '#dc3545' }}>MS</div>
              <p className="text-2xl font-bold mt-5" style={{ color: '#000000' }}>Mohd Suhail</p>
              <p className="text-sm mt-1 text-red-700">Founder &amp; CEO · Hosting Nation</p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {['React','Next.js','Node.js','MongoDB','SaaS','APIs','TypeScript'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section cv-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="eyebrow">Expertise</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight">
            What <span style={{ color: '#dc3545' }}>Suhail</span> builds
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {SKILLS.map(({ icon: Icon, title, stack }) => (
            <div key={title} className="rounded-xl p-6 bg-white" style={{ border: '1px solid #ebebeb' }}>
              <div className="w-11 h-11 rounded-xl grid place-items-center mb-4"
                style={{ background: '#fff0f1' }}>
                <Icon size={20} className="text-red-700" />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#000000' }}>{title}</h3>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: '#888888' }}>{stack}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section cv-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="eyebrow">Journey</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight">
            <span style={{ color: '#dc3545' }}>Timeline</span>
          </h2>
        </div>
        <div className="relative max-w-2xl mx-auto space-y-8">
          <div className="absolute left-3 top-2 bottom-2 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, #ff9aa0, #bae6fd, transparent)' }} />
          {TIMELINE.map(({ year, title, desc }) => (
            <div key={year} className="pl-10 relative">
              <div className="absolute left-0.5 top-2 w-5 h-5 rounded-full border-2"
                style={{ background: '#fff0f1', borderColor: '#dc3545' }} />
              <span className="inline-flex items-center gap-2 text-xs font-mono mb-1 text-red-700">
                <Briefcase size={11} /> {year}
              </span>
              <h3 className="text-lg font-semibold" style={{ color: '#000000' }}>{title}</h3>
              <p className="text-sm mt-1 leading-relaxed" style={{ color: '#888888' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement models */}
      <section className="section cv-auto">
        <div className="rounded-2xl p-8 md:p-12"
          style={{ background: '#000000', border: '1px solid #ebebeb' }}>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={20} className="text-red-700" />
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: '#000000' }}>How Suhail works with clients</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t:'Freelance',      d:'Direct, founder-led engagement for focused builds MVPs, landing pages, dashboards, integrations.' },
              { t:'Agency',         d:'Full-team delivery for SaaS products, complex platforms, and long-term retainers with QA, design, and support.' },
              { t:'Fractional CTO', d:'Architecture, hiring, and tech leadership for early-stage startups that need senior judgment without a full-time hire.' }
            ].map(({ t, d }) => (
              <div key={t}>
                <p className="font-semibold text-sm text-red-700">{t}</p>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: '#606060' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
