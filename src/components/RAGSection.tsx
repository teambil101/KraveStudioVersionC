export default function RAGSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Knowledge Base mockup */}
          <div className="bg-white rounded-2xl border border-neutral-200/80 shadow-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                  <span className="text-sm">📄</span>
                </div>
                <span className="text-sm font-semibold text-neutral-800">Knowledge Base</span>
              </div>
              <button className="text-xs text-neutral-400 flex items-center gap-1 hover:text-neutral-600">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                </svg>
                Reset
              </button>
            </div>

            {/* Search */}
            <div className="px-5 py-3 border-b border-neutral-100">
              <div className="flex items-center gap-2 text-neutral-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <span className="text-sm">What is our SLA for enterprise support tickets?</span>
              </div>
            </div>

            {/* Sources */}
            <div className="p-5 space-y-3">
              {[
                { name: 'Enterprise SLA Agreement', section: 'Section 4.1 - Response Times', score: 96 },
                { name: 'Support Tier Guidelines', section: 'Priority Levels', score: 89 },
                { name: 'Operations Handbook', section: 'Escalation Procedures', score: 74 },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-neutral-100 flex items-center justify-center">
                      <span className="text-xs text-neutral-400">📄</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-800">{doc.name}</div>
                      <div className="text-xs text-neutral-400">{doc.section}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-neutral-500">{doc.score}%</span>
                    <div className="w-12 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-500 rounded-full" style={{ width: `${doc.score}%` }} />
                    </div>
                  </div>
                </div>
              ))}

              {/* Generated response */}
              <div className="mt-4 pt-4 border-t border-neutral-100">
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="text-xs text-neutral-400">✦</span>
                  <span className="text-xs font-medium text-neutral-400">Generated Response</span>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4 text-xs text-neutral-600 leading-relaxed">
                  <p>According to the Enterprise SLA Agreement (Section 4.1), your support ticket response times are:</p>
                  <ul className="mt-2 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      <span>Critical (P1): <strong className="text-primary-600">15 minutes</strong> <span className="text-neutral-400">(System down)</span></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      <span>High (P2): <strong className="text-primary-600">1 hour</strong> <span className="text-neutral-400">(Major feature broken)</span></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      <span>Normal (P3): <strong className="text-primary-600">4 hours</strong> <span className="text-neutral-400">(Standard issues)</span></span>
                    </li>
                  </ul>
                  <p className="mt-3 text-neutral-400">All times are 24/7 for enterprise tier. Escalations go directly to the on-call engineering team.</p>
                </div>

                {/* Sources badges */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs text-neutral-400">Sources:</span>
                  <span className="text-xs px-2.5 py-1 rounded-full border border-primary-200 text-primary-600 bg-primary-50/50 font-medium">Enterprise SLA Agreement</span>
                  <span className="text-xs px-2.5 py-1 rounded-full border border-primary-200 text-primary-600 bg-primary-50/50 font-medium">Support Tier Guidelines</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary-600" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary-600">RAG Pipeline</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
              ChatGPT makes
              <br />
              things up.{' '}
              <span className="text-primary-600">Yours won't.</span>
            </h2>

            <p className="mt-5 text-neutral-500 leading-relaxed max-w-md">
              Generic AI hallucinates. Our RAG systems only answer from{' '}
              <strong className="text-neutral-700">your verified documents</strong>, with citations pointing
              to the exact source.
            </p>
            <p className="mt-4 text-neutral-500 leading-relaxed max-w-md">
              Your team gets instant, accurate answers. Your customers get reliable information.
              You get peace of mind knowing every response is grounded in truth.
            </p>

            {/* 2x2 feature cards */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {[
                { icon: '❝', title: 'Cited Answers', desc: 'Every response links back to the exact document and paragraph' },
                { icon: '✓', title: 'Zero Hallucinations', desc: 'Answers only from your verified data, never fabricated' },
                { icon: '🔄', title: 'Always Current', desc: 'Documents sync automatically, knowledge stays up to date' },
                { icon: '🔒', title: 'Enterprise Ready', desc: 'SOC2 compliant with encryption and access controls' },
              ].map((f, i) => (
                <div key={i} className="bg-neutral-50 border border-neutral-200/60 rounded-xl p-4 hover:border-primary-200 hover:bg-primary-50/30 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200/60 flex items-center justify-center text-primary-500 text-base mb-3 font-bold">
                    {f.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-900 mb-1">{f.title}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
