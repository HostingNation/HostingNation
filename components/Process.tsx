import { Lightbulb, Pencil, Rocket, LifeBuoy } from 'lucide-react';

const STEPS = [
  { icon: Lightbulb, num: '01', title: 'Discover',      iconColor: '#dc3545', desc: 'We start with your goals, constraints, and users — then scope a clear roadmap and timeline.' },
  { icon: Pencil,    num: '02', title: 'Design',         iconColor: '#0284c7', desc: 'UI/UX, architecture, database schema, and API design — reviewed before a single line of code.' },
  { icon: Rocket,    num: '03', title: 'Build & Launch', iconColor: '#059669', desc: 'Iterative sprints, weekly demos, staging deployments, and a polished production launch.' },
  { icon: LifeBuoy,  num: '04', title: 'Support',        iconColor: '#ea580c', desc: 'Post-launch monitoring, hot-fixes, feature iterations, and long-term maintenance.' },
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
