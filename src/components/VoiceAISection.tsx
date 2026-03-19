export default function VoiceAISection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-neutral-50/50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-primary-600" />
          <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Voice AI</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
              That 2&nbsp;AM call?
              <br />
              <span className="text-primary-600">Your AI answers it.</span>
            </h2>

            <p className="mt-5 text-neutral-500 leading-relaxed max-w-md">
              Every missed call is a missed opportunity. Our Voice AI picks up instantly,
              qualifies leads, books appointments, and handles objections — all while sounding
              genuinely human. Integrated with your CRM. Speaks your language.
            </p>

            {/* 2x2 feature cards */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {[
                { icon: '⏰', title: 'Never Miss a Lead', desc: 'Answers calls 24/7, even at 2 AM when your competitors sleep' },
                { icon: '📋', title: 'Trained on Your Data', desc: 'Knows your services, pricing, and policies like a senior employee' },
                { icon: '📅', title: 'Books Appointments', desc: 'Syncs with your calendar and CRM to schedule instantly' },
                { icon: '🛡️', title: 'Handles Objections', desc: 'Detects hesitation and responds with smart follow-ups' },
              ].map((f, i) => (
                <div key={i} className="border border-neutral-200/80 rounded-xl p-4 hover:border-primary-200 hover:bg-primary-50/30 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center text-base mb-3">
                    {f.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-900 mb-1">{f.title}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-[300px] bg-neutral-900 rounded-[2.5rem] p-3 shadow-2xl">
              <div className="bg-white rounded-[2rem] overflow-hidden">
                {/* Phone header */}
                <div className="bg-primary-600 px-5 py-4 text-white">
                  <div className="text-xs opacity-70 mb-0.5">KraveStudio</div>
                  <div className="text-sm font-semibold">Voice AI Active</div>
                </div>

                {/* Chat messages */}
                <div className="p-4 space-y-3 min-h-[280px] bg-neutral-50">
                  {/* Caller */}
                  <div className="flex justify-end">
                    <div className="bg-neutral-200 rounded-2xl rounded-tr-md px-3.5 py-2.5 max-w-[200px]">
                      <p className="text-xs text-neutral-700">Hi, I need to schedule an appointment. Do you have any openings tomorrow?</p>
                    </div>
                  </div>

                  {/* AI */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                        <span className="text-[8px] text-white font-bold">AI</span>
                      </div>
                      <span className="text-[10px] font-medium text-green-600">Sarah &bull; AI Agent</span>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-2xl rounded-tl-md px-3.5 py-2.5 max-w-[220px] shadow-sm">
                      <p className="text-xs text-neutral-700">
                        Great news! We have a 9:15 AM opening. I can book that for you and
                        send a confirmation to your phone.
                      </p>
                    </div>
                  </div>

                  {/* Waveform */}
                  <div className="flex items-center justify-center gap-0.5 py-2">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-primary-500 rounded-full"
                        style={{
                          height: `${8 + Math.sin(i * 0.8) * 12 + Math.random() * 6}px`,
                          opacity: 0.6 + Math.random() * 0.4,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Replay */}
                <div className="border-t border-neutral-200 px-4 py-3 flex items-center justify-center gap-2 bg-white">
                  <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                  </svg>
                  <span className="text-xs font-medium text-neutral-500">Replay Demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
