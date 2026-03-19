export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 overflow-hidden">
      {/* Subtle glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-neutral-800 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-neutral-300">Available for new projects</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              <span className="gradient-text">
                Let's build your
                <br />
                next big thing.
              </span>
            </h2>

            <p className="mt-6 text-neutral-400 leading-relaxed max-w-md">
              No generic demos. No endless sales calls. Just a focused conversation about
              your challenges and how we can solve them.
            </p>
          </div>

          {/* Right: Call & Email cards */}
          <div className="space-y-4">
            {/* Discovery Call card */}
            <div className="bg-neutral-800/50 backdrop-blur border border-neutral-700/50 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Book a Discovery Call</h3>
                    <p className="text-sm text-neutral-400 mt-0.5">
                      30 minutes to discuss your project, challenges, and how we can help.
                      Pick a time that works for you.
                    </p>
                  </div>
                </div>
                <span className="inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20 whitespace-nowrap">
                  Recommended
                </span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <a
                  href="https://cal.com/kravestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary-300 transition-colors"
                >
                  Schedule Now <span>→</span>
                </a>
                <span className="text-xs text-neutral-500">Free &bull; 30 min</span>
              </div>
            </div>

            {/* Email card */}
            <div className="bg-neutral-800/50 backdrop-blur border border-neutral-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-700 flex items-center justify-center">
                  <svg className="w-5 h-5 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Email Us Directly</h3>
                  <a href="mailto:admin@thebil.co" className="text-sm text-primary-400 hover:text-primary-300 transition-colors">
                    admin@thebil.co
                  </a>
                </div>
              </div>
              <p className="text-xs text-neutral-500 mt-3">We typically respond within 4 hours during business hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
