export default function VoiceAI() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white via-neutral-50/50 to-neutral-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <p className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary-600 mb-4">Voice AI</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] max-w-3xl">
            Never Miss Another Call. Ever.
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-xl leading-relaxed">
            While your competitors send leads to voicemail, your AI receptionist qualifies
            prospects, books appointments, and handles support. Indistinguishable from your
            best employee.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://cal.com/kravestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 shadow-sm shadow-primary-500/25 transition-all duration-200 inline-flex items-center gap-2"
            >
              Book a Demo Call →
            </a>
            <a
              href="mailto:admin@thebil.co"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-neutral-700 bg-white border border-neutral-200 hover:border-neutral-300 shadow-sm transition-all duration-200"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '3x', label: 'More Leads Captured' },
              { value: '0', label: 'Missed Calls' },
              { value: '90%', label: 'Cost Reduction' },
              { value: '85%', label: 'Calls Resolved Without Human' },
            ].map((s, i) => (
              <div key={i} className="text-center py-4">
                <div className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">{s.value}</div>
                <div className="text-sm text-neutral-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Platform</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            Your AI handles it all. Automatically.
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg">
            Four core capabilities, one seamless system — running 24/7 without breaks, vacation,
            or sick days.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              { icon: '📞', title: 'Inbound Call Handling', desc: 'Replace frustrating IVR menus with natural conversation. Your AI answers, understands intent, and resolves issues instantly.' },
              { icon: '📤', title: 'Outbound Campaigns', desc: 'Proactive outreach at scale. Reminders, follow-ups, and lead qualification that feels personal.' },
              { icon: '📊', title: 'Real-Time Intelligence', desc: 'Every call transcribed and analyzed. Know what customers want before they file a ticket.' },
              { icon: '🔗', title: 'Deep Integrations', desc: 'Connects to your existing CRM, calendar, and stack in hours, not months.' },
            ].map((f, i) => (
              <div key={i} className="bg-neutral-50 border border-neutral-200/60 rounded-xl p-6 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="text-sm font-bold text-neutral-900 mb-2">{f.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-primary-600" />
                <span className="text-xs font-bold tracking-widest uppercase text-primary-600">How It Works</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
                Built for your industry. Not generic AI demos.
              </h2>
              <p className="mt-5 text-neutral-500 leading-relaxed max-w-md">
                Every deployment is custom-trained on your data, your tone, and your playbook.
                It sounds like you because it is you.
              </p>

              <div className="space-y-4 mt-8">
                {[
                  { title: 'Every call answered', desc: 'Every job booked. 40% more jobs captured versus traditional IVR.' },
                  { title: '<2 second response time', desc: 'No awkward pauses. Instant, natural conversation every time.' },
                  { title: '4.8/5 customer satisfaction', desc: "Callers often don't realize they're talking to an AI — until they ask." },
                  { title: '$0.12 avg cost per call', desc: 'Versus $6+ for human agents. Quality up, costs down — dramatically.' },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary-500 mt-0.5 text-sm">✦</span>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900">{f.title}</h4>
                      <p className="text-xs text-neutral-500 mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal mockup */}
            <div className="bg-neutral-900 rounded-2xl p-6 shadow-xl">
              <div className="flex gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="font-mono text-xs space-y-1.5">
                <p><span className="text-primary-400">▶</span> <span className="text-neutral-400">Call received —</span> <span className="text-green-400">+1 (555) 012-3456</span></p>
                <p><span className="text-primary-400">transcript</span><span className="text-neutral-500">:</span> <span className="text-green-400">"Hi, I'd like to book a service..."</span></p>
                <p><span className="text-primary-400">intent</span><span className="text-neutral-500">:</span> <span className="text-green-400">"schedule_service"</span></p>
                <p><span className="text-primary-400">confidence</span><span className="text-neutral-500">:</span> <span className="text-orange-400">0.97</span></p>
                <div className="my-3 h-px bg-neutral-700" />
                <p><span className="text-primary-400">action</span><span className="text-neutral-500">:</span> <span className="text-green-400">"check_availability"</span></p>
                <p><span className="text-primary-400">slot</span><span className="text-neutral-500">:</span> <span className="text-green-400">"Tomorrow, 10:00 AM"</span></p>
                <p><span className="text-primary-400">crm_update</span><span className="text-neutral-500">:</span> <span className="text-green-400">true</span></p>
                <p><span className="text-primary-400">confirmation_sent</span><span className="text-neutral-500">:</span> <span className="text-green-400">true</span></p>
                <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <p className="text-green-400 text-[10px] font-semibold">✓ Appointment booked. CRM updated.</p>
                  <p className="text-neutral-500 text-[10px] mt-1">Duration: 1m 42s · Cost: $0.12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            Ready to stop missing calls?
          </h2>
          <p className="mt-4 text-neutral-500 max-w-md mx-auto">
            Book a 30-minute demo call. We'll show you exactly how your AI would sound —
            trained on your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a
              href="https://cal.com/kravestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 shadow-sm shadow-primary-500/25 transition-all duration-200"
            >
              📅 Schedule Now — Free · 30 min
            </a>
            <a
              href="mailto:admin@thebil.co"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-neutral-700 bg-white border border-neutral-200 hover:border-neutral-300 shadow-sm transition-all duration-200"
            >
              ✉ Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
