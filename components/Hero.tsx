import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const STATS = [
  { k: '50+',  v: 'Projects Delivered' },
  { k: '15+',  v: 'Countries Served' },
  { k: '100%', v: 'Custom-Built Code' },
  { k: '3yr+', v: 'In Business' },
];

export default function Hero() {
  return (
    <section style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: text ── */}
          <div className="slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold mb-6 uppercase tracking-wider"
              style={{ background: '#fff6f6', border: '1px solid #ebebeb', color: '#dc3545' }}>
              ✦ Founder-Led · Custom Software
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[60px] font-extrabold leading-[1.06] tracking-tight" style={{ color: '#000000' }}>
              Custom Software<br />
              <span style={{ color: '#dc3545' }}>Built for Your</span><br />
              Business
            </h1>

            <p className="mt-5 text-lg leading-relaxed slide-up-delay" style={{ color: '#606060' }}>
              Web apps, SaaS platforms, dashboards, and automation — built by{' '}
              <Link href="/founder" className="font-semibold underline underline-offset-2 transition-colors" style={{ color: '#000000' }}>
                Mohd Suhail
              </Link>{' '}
              for startups and businesses worldwide.
            </p>

            <ul className="mt-6 space-y-2.5 slide-up-delay">
              {[
                'No templates — everything engineered from scratch',
                'Founder-led with direct communication',
                'Clients across US, UK, UAE, EU & Asia',
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm" style={{ color: '#606060' }}>
                  <CheckCircle2 size={15} style={{ color: '#dc3545', flexShrink: 0 }} />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-4 gap-6 pt-8"
              style={{ borderTop: '1px solid #ebebeb' }}>
              {STATS.map(({ k, v }) => (
                <div key={v}>
                  <div className="text-2xl md:text-3xl font-extrabold" style={{ color: '#000000' }}>{k}</div>
                  <div className="text-xs mt-1 leading-snug" style={{ color: '#606060' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: card ── */}
          <div className="relative slide-up">
            <div className="rounded-xl overflow-hidden"
              style={{ border: '1px solid #ebebeb', background: '#fff', boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>

              {/* Card header */}
              <div className="px-6 py-5 flex items-center justify-between"
                style={{ background: '#000000' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded grid place-items-center font-bold text-white text-sm"
                    style={{ background: '#dc3545' }}>HN</div>
                  <div>
                    <p className="font-bold text-sm text-white">Hosting Nation</p>
                    <p className="text-xs" style={{ color: '#888888' }}>Founded by Mohd Suhail</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded"
                  style={{ background: '#dcfce7', color: '#166534' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  Available
                </span>
              </div>

              {/* Services list */}
              <div className="divide-y" style={{ borderColor: '#f5f5f5' }}>
                {[
                  { name: 'Web Development',      time: '2–4 weeks' },
                  { name: 'SaaS Platform',         time: '6–12 weeks' },
                  { name: 'API Integration',        time: '1–2 weeks' },
                  { name: 'Business Automation',    time: '2–6 weeks' },
                  { name: 'Custom Software',        time: 'Scoped per project' },
                ].map(({ name, time }) => (
                  <div key={name} className="flex items-center justify-between px-6 py-3.5 transition-colors hover:bg-[#fff6f6]">
                    <span className="text-sm font-semibold" style={{ color: '#000000' }}>{name}</span>
                    <span className="text-xs" style={{ color: '#606060' }}>{time}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 py-4" style={{ background: '#fff6f6', borderTop: '1px solid #ebebeb' }}>
                <Link href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white transition-all hover:bg-black"
                  style={{ background: '#dc3545', borderRadius: 4 }}>
                  Get a free quote <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
