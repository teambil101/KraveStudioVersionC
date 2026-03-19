import { Link } from 'react-router-dom'

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-4">
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
            Not AI that talks.
          </h2>
        </div>

        {/* Two main service cards */}
        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {/* Voice AI */}
          <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 hover:border-primary-200 hover:shadow-lg transition-all group">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-600 mb-4">Voice AI</span>

            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-neutral-900 leading-tight">
                Your phones<br />answered.<br />Always.
              </h3>
              <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center flex-shrink-0 ml-4">
                <div className="flex items-end gap-0.5">
                  {[12, 20, 8, 24, 16, 22, 10].map((h, i) => (
                    <div key={i} className="w-1 bg-primary-500 rounded-full" style={{ height: h }} />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              Calls at 2 AM? Handled. Lead qualification? Automated. Appointments? Booked.
              All while sounding genuinely human.
            </p>

            <Link to="/services/voice-ai" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
              Explore <span>→</span>
            </Link>
          </div>

          {/* Knowledge AI */}
          <div className="bg-white rounded-2xl border border-neutral-200/80 p-8 hover:border-primary-200 hover:shadow-lg transition-all group">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-600 mb-4">Knowledge AI</span>

            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-neutral-900 leading-tight">
                Answers<br />with<br />receipts.
              </h3>
              <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center flex-shrink-0 ml-4">
                <div className="space-y-1">
                  <div className="w-8 h-1 bg-primary-300 rounded-full" />
                  <div className="w-6 h-1 bg-primary-200 rounded-full" />
                  <div className="w-7 h-1 bg-primary-400 rounded-full" />
                </div>
              </div>
            </div>

            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              AI that only speaks from your documents. Every response cites the source.
              Zero hallucinations, just facts.
            </p>

            <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
              Explore <span>→</span>
            </Link>
          </div>
        </div>

        {/* Also building */}
        <div className="mt-12">
          <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-4">Also Building</p>
          <div className="flex flex-wrap gap-3">
            {['Web Development', 'Mobile Apps', 'Custom AI Agents'].map((pill) => (
              <span
                key={pill}
                className="px-4 py-2 rounded-full border border-neutral-200 text-sm text-neutral-500 hover:border-primary-300 hover:text-primary-600 transition-colors cursor-default"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Let's talk CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://cal.com/kravestudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 shadow-lg transition-all"
          >
            Let's talk <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
