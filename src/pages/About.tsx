export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white via-neutral-50/50 to-neutral-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <p className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary-600 mb-4">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] max-w-2xl">
            We build AI that actually works.
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-xl leading-relaxed">
            Not demos. Not prototypes. Production-grade systems that handle real-world
            complexity, scale reliably, and deliver measurable business value.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'Projects Shipped' },
              { value: '98%', label: 'Client Retention' },
              { value: '40%', label: 'Avg Cost Reduction' },
              { value: '24/7', label: 'System Uptime' },
            ].map((s, i) => (
              <div key={i} className="text-center py-6">
                <div className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">{s.value}</div>
                <div className="text-sm text-neutral-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Philosophy</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            How we think. How we build.
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg">
            We don't chase hype. Every solution is tested against real-world edge cases before it
            touches production. Demos are easy; reliability is earned.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              { num: '01', title: 'Production First', tagline: 'Ship what works', desc: 'Every system ships with monitoring, fallbacks enabled, and comprehensive testing.' },
              { num: '02', title: 'No Black Boxes', tagline: 'Explain everything', desc: "You'll understand exactly how your system works, what data it uses, and why it makes every decision." },
              { num: '03', title: 'Iterate Forever', tagline: 'AI is never done', desc: 'We build feedback loops into every system so your AI gets smarter with every interaction.' },
              { num: '04', title: 'Partners, Not Vendors', tagline: 'Your team, extended', desc: "We're embedded in your success. Your metrics are our metrics." },
            ].map((p, i) => (
              <div key={i} className="border border-neutral-200/80 rounded-xl p-6 hover:border-primary-200 transition-all">
                <div className="text-2xl font-extrabold text-primary-200 mb-3">{p.num}</div>
                <h3 className="text-base font-bold text-neutral-900 mb-1">{p.title}</h3>
                <p className="text-xs text-primary-600 font-semibold mb-3">{p.tagline}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Tech Stack</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            Tools we trust.
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg">
            We pick technologies based on reliability and results, not trends. Every tool in our
            stack has proven itself in production.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              { icon: '🧠', title: 'AI & LLMs', desc: 'OpenAI, Anthropic Claude, open-source models. We pick the right model for the job.' },
              { icon: '🎙️', title: 'Voice & Communication', desc: 'Twilio, ElevenLabs, Deepgram. Sub-second latency, human-quality voice.' },
              { icon: '⚡', title: 'Full-Stack Development', desc: 'Next.js, TypeScript, Python, FastAPI. Modern, maintainable code.' },
              { icon: '🔒', title: 'Infrastructure', desc: 'AWS, Vercel, Supabase, Pinecone. Scalable and secure from day one.' },
            ].map((t, i) => (
              <div key={i} className="bg-white border border-neutral-200/60 rounded-xl p-6 hover:shadow-md transition-all">
                <div className="text-2xl mb-4">{t.icon}</div>
                <h3 className="text-sm font-bold text-neutral-900 mb-2">{t.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Methodology</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            Methodology that delivers results.
          </h2>

          <div className="mt-12 bg-neutral-50 border border-neutral-200/60 rounded-2xl p-8 overflow-auto">
            <div className="flex gap-0 min-w-[600px]">
              {[
                { num: '01', title: 'Understand', desc: 'Deep dive into your business, users, and the problem worth solving.' },
                { num: '02', title: 'Architect', desc: 'Design with failure modes, edge cases, and scale in mind.' },
                { num: '03', title: 'Build', desc: 'Rapid, tested development with weekly demos and full transparency.' },
                { num: '04', title: 'Deploy', desc: 'Production launch with monitoring, alerting, and rollback plans.' },
                { num: '05', title: 'Evolve', desc: 'Continuous improvement as your data grows and needs change.' },
              ].map((step, i) => (
                <div key={i} className="flex-1 px-4 relative">
                  <div className="text-xs font-bold text-primary-600 tracking-wider uppercase mb-2">Stage {step.num}</div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{step.desc}</p>
                  {i < 4 && (
                    <span className="absolute right-0 top-4 text-neutral-300 text-lg">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            Ready to build something that actually works?
          </h2>
          <p className="mt-4 text-neutral-500 max-w-md mx-auto">
            Every great project starts with a conversation. Tell us about your challenges
            and we'll show you what's possible.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-neutral-400">
            <span>✓ 30-minute focused consultation</span>
            <span>✓ Technical architecture review</span>
            <span>✓ No commitment required</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a
              href="https://cal.com/kravestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 shadow-sm shadow-primary-500/25 transition-all duration-200"
            >
              Schedule a Call →
            </a>
            <a
              href="mailto:admin@thebil.co"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-neutral-700 bg-white border border-neutral-200 hover:border-neutral-300 shadow-sm transition-all duration-200"
            >
              ✉ admin@thebil.co
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
