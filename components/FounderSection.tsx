import Link from 'next/link';
import { ArrowRight, MapPin, Code2, Cpu, Globe } from 'lucide-react';

export default function FounderSection() {
  return (
    <section id="founder" className="cv-auto py-16 md:py-24" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — text */}
          <div>
            <span className="eyebrow mb-4 block">Meet the founder</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.07]" style={{ color: '#000000' }}>
              Built by <span style={{ color: '#dc3545' }}>Mohd Suhail</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: '#606060' }}>
              <strong style={{ color: '#000000', fontWeight: 700 }}>Mohd Suhail</strong> is the Founder &amp; CEO of Hosting Nation —
              a software studio that ships custom web apps, SaaS platforms, and automation tools
              for startups and businesses worldwide.
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: '#888888' }}>
              Every project is founder-led: you work directly with Suhail — no hand-offs,
              no junior developers, no template sites.
            </p>

            <ul className="mt-7 space-y-3.5">
              {[
                { Icon: Code2, label: 'React · Next.js · Node.js · TypeScript · MongoDB' },
                { Icon: Cpu,   label: 'SaaS architecture, dashboards & API integrations' },
                { Icon: Globe, label: 'Clients in US, UK, UAE, Canada, Australia, Europe' },
              ].map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm" style={{ color: '#606060' }}>
                  <span className="w-8 h-8 rounded grid place-items-center shrink-0"
                    style={{ background: '#fff6f6', border: '1px solid #ebebeb' }}>
                    <Icon size={14} style={{ color: '#dc3545' }} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1.5 mt-5 text-xs" style={{ color: '#888888' }}>
              <MapPin size={12} style={{ color: '#dc3545' }} />
              India · Working worldwide
            </div>

            <div className="flex flex-wrap gap-3 mt-7">
              <Link href="/founder" className="btn-primary">
                Full Bio <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Work with Suhail
              </Link>
            </div>
          </div>

          {/* Right — profile card */}
          <div className="overflow-hidden" style={{ border: '1px solid #ebebeb', borderRadius: 15, boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>

            {/* Avatar header — black like ViralPitch dark sections */}
            <div className="p-8 text-center" style={{ background: '#000000' }}>
              <div className="w-20 h-20 rounded-xl grid place-items-center font-bold text-2xl text-white mx-auto"
                style={{ background: '#dc3545' }}>MS</div>
              <p className="mt-4 font-bold text-xl text-white">Mohd Suhail</p>
              <p className="text-sm mt-1" style={{ color: '#dc3545' }}>Founder &amp; CEO · Hosting Nation</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['React','Next.js','Node.js','MongoDB','SaaS','APIs'].map((t) => (
                  <span key={t} className="px-3 py-1 rounded text-[11px] font-semibold"
                    style={{ background: '#111', border: '1px solid #222', color: '#888' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Info rows */}
            {[
              { label: 'Role',       value: 'Full-stack Engineer' },
              { label: 'Founded',    value: 'Hosting Nation, 2022' },
              { label: 'Clients',    value: '50+ across 15 countries' },
              { label: 'Engagement', value: 'Freelance & Agency' },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between px-7 py-3.5 bg-white transition-colors hover:bg-[#fff6f6]"
                style={{ borderTop: '1px solid #f5f5f5' }}>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#888888' }}>{label}</span>
                <span className="text-sm font-semibold" style={{ color: '#000000' }}>{value}</span>
              </div>
            ))}

            <div className="px-7 py-4 bg-white" style={{ borderTop: '1px solid #ebebeb' }}>
              <Link href="/contact"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-white transition-all hover:bg-black"
                style={{ background: '#dc3545', borderRadius: 4 }}>
                Work with Suhail <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
