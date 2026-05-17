import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const REASONS = [
  {
    num: '01',
    title: "We've built for 409M viewers.",
    desc: 'WCL Cricket needed a platform that could handle global-scale traffic on match day. It launched on time, ran without a single incident, and represented the tournament at the level it deserved.',
  },
  {
    num: '02',
    title: 'You work directly with the founder.',
    desc: "Every project is handled personally by Mohd Suhail. You're not handed off to a junior developer or a project manager who doesn't write code. You talk to the person shipping your product.",
  },
  {
    num: '03',
    title: 'We work in your timezone.',
    desc: 'Whether you\'re in New York, London, or Dubai — we show up to calls, we respond to messages, and we ship on time. No excuses.',
  },
  {
    num: '04',
    title: 'No offshore hand-offs. No disappearing acts.',
    desc: 'Clean code, honest communication, and delivery that matches what was scoped. That\'s the standard on every project — not just the first one.',
  },
];

export default function SocialProof() {
  return (
    <section className="cv-auto py-16 md:py-24" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: '#dc3545' }}>
              ✦ Why founders choose us
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
              The kind of partner<br />
              you actually <span style={{ color: '#dc3545' }}>want</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed max-w-md" style={{ color: '#888888' }}>
              We&apos;ve served 50+ clients across 15+ countries. Here&apos;s what separates us from the agencies that overpromise and underdeliver.
            </p>
            <div className="mt-8">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 font-bold text-sm text-white transition-all hover:bg-[#c0202e]"
                style={{ background: '#dc3545', borderRadius: 4 }}>
                Start a Project <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right — reasons */}
          <div className="space-y-0">
            {REASONS.map(({ num, title, desc }, i) => (
              <div key={num} className="flex gap-5 py-6"
                style={{ borderBottom: i < REASONS.length - 1 ? '1px solid #222' : 'none' }}>
                <span className="font-mono text-xs font-bold shrink-0 mt-1" style={{ color: '#dc3545' }}>{num}</span>
                <div>
                  <h3 className="font-bold text-sm text-white mb-1.5">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
