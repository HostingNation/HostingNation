import Link from 'next/link';
import { ArrowRight, Mail, Clock, Globe, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export default function CTA() {
  return (
    <section className="cv-auto" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — main message */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: '#dc3545' }}>
              ✦ Ready to start?
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
              Let&apos;s build something<br />
              <span style={{ color: '#dc3545' }}>remarkable</span> together
            </h2>
            <p className="mt-5 text-base leading-relaxed max-w-md" style={{ color: '#888888' }}>
              Custom web apps, SaaS, e-commerce, or automation — Hosting Nation ships it.
              Reach out and let&apos;s talk about your project.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 font-bold text-sm text-white transition-all duration-200 hover:bg-[#c0202e]"
                style={{ background: '#dc3545', borderRadius: 4 }}>
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 px-8 py-3 font-bold text-sm transition-all duration-200 hover:bg-white hover:text-black"
                style={{ border: '1px solid #444', color: '#888', borderRadius: 4 }}>
                See All Services
              </Link>
            </div>
          </div>

          {/* Right — info panel */}
          <div className="space-y-5" style={{ borderLeft: '1px solid #222', paddingLeft: '3rem' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#444' }}>
              Contact details
            </p>
            {[
              { icon: Mail,          label: 'Email',          value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: Clock,         label: 'Response time',  value: 'Within 1 business day' },
              { icon: Globe,         label: 'Serves',         value: 'US · UK · UAE · EU · APAC' },
              { icon: MessageSquare, label: 'Free discovery', value: '30-min call, no commitment' },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded grid place-items-center shrink-0"
                  style={{ background: '#111', border: '1px solid #222' }}>
                  <Icon size={15} style={{ color: '#dc3545' }} />
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: '#555' }}>{label}</p>
                  {href
                    ? <a href={href} className="text-sm font-semibold text-white hover:text-[#dc3545] transition-colors">{value}</a>
                    : <p className="text-sm font-semibold text-white">{value}</p>
                  }
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
