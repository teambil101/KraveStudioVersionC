export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-12 bg-gradient-to-b from-white via-neutral-50/50 to-neutral-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <p className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary-600 mb-4">Ready to connect</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] max-w-2xl">
            Let's build something extraordinary.
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-xl leading-relaxed">
            No lengthy forms. No automated responses. Just a real conversation about what
            you're trying to build.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Schedule */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8">
              <div className="text-3xl mb-5">📅</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Schedule a Call</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                Book a free consultation. We'll discuss your project, explore possibilities,
                and outline next steps.
              </p>
              <a
                href="https://cal.com/kravestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 rounded-lg text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 shadow-sm shadow-primary-500/25 transition-all duration-200"
              >
                Book a Free Consultation
              </a>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-xs px-2.5 py-1 rounded-full border border-primary-200 text-primary-600 bg-primary-50/50 font-medium">30 min</span>
                <span className="text-xs px-2.5 py-1 rounded-full border border-primary-200 text-primary-600 bg-primary-50/50 font-medium">Free</span>
              </div>
              <p className="text-xs text-neutral-400 mt-3">Available 7 days a week (Central Time)</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-8">
              <div className="text-3xl mb-5">✉️</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Email Us</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                Prefer email? Drop us a line. We typically respond within 4 hours during
                business hours.
              </p>
              <a
                href="mailto:admin@thebil.co"
                className="block w-full text-center px-5 py-3 rounded-lg text-sm font-medium text-neutral-700 bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 shadow-sm transition-all duration-200"
              >
                admin@thebil.co
              </a>
              <p className="text-xs text-neutral-400 mt-4">≤ 4 hour response during business hours</p>
            </div>
          </div>

          {/* Details */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Find Us */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-primary-600" />
                <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Find Us</span>
              </div>
              <div className="bg-white rounded-xl border border-neutral-200/80 divide-y divide-neutral-100">
                {[
                  { icon: '📧', label: 'Email', value: 'admin@thebil.co', href: 'mailto:admin@thebil.co' },
                  { icon: '📍', label: 'Based in', value: 'Austin, TX', href: null },
                  { icon: '🕐', label: 'Timezone', value: 'Central Time (CST)', href: null },
                ].map((d, i) => (
                  <div key={i} className="flex items-start gap-4 px-5 py-4">
                    <span className="text-base mt-0.5">{d.icon}</span>
                    <div>
                      <div className="text-[10px] font-bold tracking-wider uppercase text-neutral-400 mb-0.5">{d.label}</div>
                      {d.href ? (
                        <a href={d.href} className="text-sm text-primary-600 hover:underline">{d.value}</a>
                      ) : (
                        <div className="text-sm text-neutral-700">{d.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What to expect */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-primary-600" />
                <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Ready when you are</span>
              </div>
              <div className="bg-white rounded-xl border border-neutral-200/80 divide-y divide-neutral-100">
                <div className="px-5 py-4">
                  <div className="text-[10px] font-bold tracking-wider uppercase text-neutral-400 mb-1">What to expect</div>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    A focused 30-minute call. We'll listen to your challenges, ask the right
                    questions, and share what's possible.
                  </p>
                </div>
                <div className="px-5 py-4">
                  <div className="text-[10px] font-bold tracking-wider uppercase text-neutral-400 mb-1">No commitment required</div>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    This is a conversation, not a sales call. Walk away with clarity — whether
                    you work with us or not.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '4h', label: 'Avg. Email Response' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">{s.value}</div>
                <div className="text-sm text-neutral-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
