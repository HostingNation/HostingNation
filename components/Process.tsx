import { Lightbulb, Pencil, Rocket, LifeBuoy } from 'lucide-react';

const STEPS = [
  { icon: Lightbulb, num: '01', title: 'Discovery Call',   iconColor: '#dc3545', desc: '30 minutes to understand your business, your users, and what you actually need — not what sounds good on paper. Day 1.' },
  { icon: Pencil,    num: '02', title: 'Scope & Proposal', iconColor: '#0284c7', desc: 'You get a clear project scope, timeline, and fixed price. No surprises, no hidden fees. Delivered in 2–4 days.' },
  { icon: Rocket,    num: '03', title: 'Build & Ship',     iconColor: '#059669', desc: 'We build in sprints, share progress weekly, and deploy to staging for your review at every milestone.' },
  { icon: LifeBuoy,  num: '04', title: 'Launch & Support', iconColor: '#ea580c', desc: 'We handle deployment, post-launch fixes, and stay available for 30 days after go-live. Shipping is not the finish line.' },
];

export default function Process() {
  return (
    <section className="cv-auto py-16 md:py-24" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="eyebrow mb-3 block">How we work</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: '#000000' }}>
            A simple <span style={{ color: '#dc3545' }}>4-step process</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed" style={{ color: '#606060' }}>
            Clear communication and structured delivery from first call to launch.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map(({ icon: Icon, num, title, iconColor, desc }) => (
            <div key={title} className="p-6 bg-white transition-all duration-200 hover:bg-[#fff6f6] hover:shadow-md"
              style={{ border: '1px solid #ebebeb', borderRadius: 15 }}>
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl grid place-items-center"
                  style={{ background: '#fff6f6', border: '1px solid #ebebeb' }}>
                  <Icon size={22} style={{ color: iconColor }} />
                </div>
                <span className="font-mono text-sm font-bold" style={{ color: '#ebebeb' }}>{num}</span>
              </div>
              <h3 className="font-bold text-base" style={{ color: '#000000' }}>{title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#606060' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
