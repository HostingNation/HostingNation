'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  { q: 'Who is Mohd Suhail?', a: 'Mohd Suhail is the Founder & CEO of Hosting Nation a full-stack engineer specializing in React, Next.js, Node.js, and MongoDB. He works with startups and businesses globally on freelance and agency projects.' },
  { q: 'What is Hosting Nation?', a: 'A modern software development studio founded by Mohd Suhail. We build custom web applications, SaaS products, e-commerce stores, API integrations, and business automation for startups worldwide.' },
  { q: 'Does Hosting Nation build custom software?', a: "Yes it's our core focus. We build admin panels, internal tools, CRMs, ERPs, and full-stack platforms engineered around your specific workflow, not a template." },
  { q: 'Can you build a SaaS product?', a: 'Absolutely. End-to-end: multi-tenant architecture, auth, subscription billing (Stripe/Razorpay), role-based access, dashboards, analytics, and cloud deployment on Vercel or AWS.' },
  { q: 'Do you work with international clients?', a: 'Yes. We serve clients in the US, UK, Canada, UAE, Australia, and across Europe and Asia fully remote with clear communication and milestone-based delivery.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="cv-auto py-16 md:py-24" style={{ background: '#fff6f6' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="eyebrow mb-3 block">Questions, answered</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: '#000000' }}>
            Frequently <span style={{ color: '#dc3545' }}>asked questions</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-2xl mx-auto space-y-2">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden bg-white transition-all duration-200"
                style={{
                  border: `1px solid ${isOpen ? '#dc3545' : '#ebebeb'}`,
                  borderRadius: 15,
                  boxShadow: isOpen ? '0 2px 12px rgba(109,40,217,0.08)' : 'none',
                }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 gap-4"
                  aria-expanded={isOpen}>
                  <span className="font-semibold text-sm md:text-base" style={{ color: isOpen ? '#000000' : '#000000' }}>
                    {f.q}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full grid place-items-center transition-colors"
                    style={{ background: isOpen ? '#dc3545' : '#f5f5f5' }}>
                    {isOpen
                      ? <Minus size={12} className="text-white" />
                      : <Plus  size={12} style={{ color: '#606060' }} />
                    }
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: '#606060' }}>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: '#888888' }}>
          Still have questions?{' '}
          <a href="/contact" className="font-semibold underline underline-offset-2 transition-colors hover:text-black" style={{ color: '#dc3545' }}>
            Send us a message
          </a>
        </p>
      </div>
    </section>
  );
}
