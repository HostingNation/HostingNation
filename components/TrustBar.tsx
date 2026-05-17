const STACK = ['Next.js','React','Node.js','TypeScript','MongoDB','PostgreSQL','Stripe','Razorpay','AWS','Vercel','Tailwind CSS','OpenAI'];

const MEDIA = ['NDTV', 'Hindustan Times', 'The Hindu', 'Tribune India'];

export default function TrustBar() {
  return (
    <section style={{ background: '#fff6f6', borderTop: '1px solid #ebebeb', borderBottom: '1px solid #ebebeb' }}>
      <div className="max-w-7xl mx-auto px-6 py-5 space-y-4">

        {/* Media coverage row */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-widest whitespace-nowrap shrink-0" style={{ color: '#888888' }}>
            Our work covered by
          </p>
          <div className="flex flex-wrap gap-2">
            {MEDIA.map((outlet) => (
              <span key={outlet} className="px-3 py-1 rounded text-xs font-bold"
                style={{ background: '#000', color: '#fff', letterSpacing: '0.02em' }}>
                {outlet}
              </span>
            ))}
          </div>
        </div>

        {/* Tech stack row */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-widest whitespace-nowrap shrink-0" style={{ color: '#888888' }}>
            Built with
          </p>
          <div className="flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
