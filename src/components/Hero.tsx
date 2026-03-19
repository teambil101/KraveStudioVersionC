export default function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden min-h-[100svh] bg-gradient-to-b from-white via-neutral-50/50 to-neutral-50">
      {/* Subtle radial glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-32 lg:pt-40 pb-20 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left: Content */}
          <div>
            <p className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary-600 mb-6">
              Built For Teams Who Can't Afford To Miss
            </p>

            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold tracking-tight leading-[1.1] text-neutral-900">
              Leads Don't Wait.
              <br />
              Neither{' '}
              <span className="relative inline-block text-primary-600 squiggle-underline">
                Should You.
              </span>
            </h1>

            <p className="mt-6 text-base lg:text-lg text-neutral-500 max-w-lg leading-relaxed">
              We build <strong className="text-neutral-700">Voice AI</strong> that picks up at 2am and{' '}
              <strong className="text-neutral-700">RAG systems</strong> that never hallucinate. Your customers
              get answers. You get results.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://cal.com/kravestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 shadow-sm shadow-primary-500/25 transition-all duration-200 inline-flex items-center gap-2"
              >
                Book a Call <span aria-hidden="true">→</span>
              </a>
              <a
                href="#services"
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-neutral-700 bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 shadow-sm transition-all duration-200"
              >
                See Our Work
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:block">
            {/* Stacked card effect */}
            <div className="absolute top-3 left-3 w-full h-full bg-neutral-100/80 rounded-2xl" />
            <div className="absolute top-1.5 left-1.5 w-full h-full bg-neutral-50/90 rounded-2xl" />

            {/* Main card */}
            <div className="relative bg-white rounded-2xl border border-neutral-200/60 shadow-lg p-6 space-y-1">
              {/* Service items */}
              {[
                { icon: '📞', label: 'Lead Qualification', desc: 'Qualify leads 24/7 via voice' },
                { icon: '🎧', label: 'Customer Support', desc: 'Resolve issues instantly', active: true },
                { icon: '📄', label: 'Document Intelligence', desc: 'Extract insights with citations' },
                { icon: '💡', label: 'Knowledge Base AI', desc: 'Answer from your data' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all ${
                    item.active
                      ? 'bg-primary-50 border border-primary-200/60'
                      : 'hover:bg-neutral-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                    item.active ? 'bg-primary-100' : 'bg-neutral-100'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">{item.label}</div>
                    <div className="text-xs text-neutral-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Processing badge */}
            <div className="absolute -top-2 -right-2 bg-white rounded-full px-3 py-1.5 shadow-md border border-neutral-100 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-neutral-700">Processing</span>
            </div>

            {/* Microphone visual */}
            <div className="absolute -right-16 top-1/3 w-28 h-28 rounded-full bg-primary-500/90 flex items-center justify-center shadow-xl shadow-primary-500/20">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
              </svg>
            </div>

            {/* 98% Accuracy badge */}
            <div className="absolute -right-8 bottom-16 bg-white rounded-xl px-4 py-2.5 shadow-md border border-neutral-100 flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-neutral-800">98% Accuracy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by */}
      <div className="border-t border-neutral-200/60 bg-neutral-50/50 py-6">
        <p className="text-center text-xs font-medium text-neutral-400 tracking-wider uppercase mb-0">
          Trusted by innovative companies
        </p>
      </div>
    </section>
  )
}
