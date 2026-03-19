import { useState } from 'react'

export default function AIAgents() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white via-neutral-50/50 to-neutral-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <p className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary-600 mb-4">AI Agents</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] max-w-3xl">
            Software that thinks. Software that acts. Autonomously.
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-xl leading-relaxed">
            Custom AI agents that don't just answer questions — they take action. From customer
            support to operations, deploy autonomous systems that work alongside your team 24/7.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://cal.com/kravestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 shadow-sm shadow-primary-500/25 transition-all duration-200 inline-flex items-center gap-2"
            >
              Book a Consultation &rarr;
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
              { value: '5+', label: 'Agents Deployed' },
              { value: '2-3', label: 'Weeks to Launch' },
              { value: '99%', label: 'Uptime SLA' },
              { value: '70%', label: 'Tickets Resolved Autonomously' },
            ].map((s, i) => (
              <div key={i} className="text-center py-4">
                <div className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">{s.value}</div>
                <div className="text-sm text-neutral-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI Agents */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Why AI Agents</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            Beyond chatbots. Beyond automation.
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg">
            AI agents don't follow scripts — they reason, plan, and execute multi-step tasks
            with judgment and adaptability.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              { icon: '🧠', title: 'Beyond Rule-Based', stat: '10x', statLabel: 'More flexible', desc: 'Agents reason through novel situations instead of following rigid if/then logic trees.' },
              { icon: '⚖️', title: 'Judgment at Scale', stat: '24/7', statLabel: 'Autonomous operation', desc: 'Make nuanced decisions across thousands of interactions simultaneously — consistently.' },
              { icon: '📉', title: 'Linear Cost Savings', stat: '80%', statLabel: 'Cost reduction', desc: 'Handle 10x more volume without 10x more headcount. Costs scale linearly, not exponentially.' },
              { icon: '🔄', title: 'Continuous Learning', stat: '↑', statLabel: 'Improves over time', desc: 'Agents improve with every interaction, learning from feedback and edge cases over time.' },
            ].map((f, i) => (
              <div key={i} className="bg-neutral-50 border border-neutral-200/60 rounded-xl p-6 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="text-sm font-bold text-neutral-900 mb-1">{f.title}</h3>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-lg font-extrabold text-primary-600">{f.stat}</span>
                  <span className="text-[10px] text-neutral-400">{f.statLabel}</span>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Capabilities</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            What agents can do. Beyond simple chatbots.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              { icon: '🔗', title: 'Multi-Step Reasoning', desc: 'Break complex problems into steps, reason through each one, and synthesize a final result — like a human analyst.' },
              { icon: '🛠️', title: 'Tool Integration', desc: 'Agents call APIs, query databases, read files, send emails, and interact with any system your team uses.' },
              { icon: '🧠', title: 'Persistent Context', desc: 'Remember previous interactions, user preferences, and ongoing tasks across sessions.' },
              { icon: '🤝', title: 'Multi-Agent Systems', desc: 'Multiple specialized agents working together — routing, executing, and supervising as one unified system.' },
            ].map((f, i) => (
              <div key={i} className="bg-white border border-neutral-200/60 rounded-xl p-6 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="text-sm font-bold text-neutral-900 mb-2">{f.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Agent Orchestration */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-primary-600" />
                <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Architecture</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
                Multi-agent orchestration. One unified system.
              </h2>
              <p className="mt-5 text-neutral-500 leading-relaxed max-w-md">
                Complex problems need specialized agents working together — a router that delegates,
                specialists that execute, and a supervisor that ensures quality.
              </p>

              <div className="space-y-4 mt-8">
                {[
                  { title: 'Router agent', desc: 'Classifies incoming requests and routes to the right specialist agent instantly.' },
                  { title: 'Specialist agents', desc: 'Domain-specific agents for support, billing, scheduling, research — each trained on their domain.' },
                  { title: 'Supervisor layer', desc: 'Monitors all agent actions, catches errors, and escalates to humans when confidence is low.' },
                  { title: 'Shared memory', desc: 'Agents share context and history so customers never have to repeat themselves.' },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary-500 mt-0.5 text-sm">&#10022;</span>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900">{f.title}</h4>
                      <p className="text-xs text-neutral-500 mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Agent flow mockup */}
            <div className="bg-neutral-900 rounded-2xl p-6 shadow-xl">
              <div className="flex gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="font-mono text-xs space-y-1.5">
                <p><span className="text-primary-400">&#9654;</span> <span className="text-neutral-400">Incoming request —</span> <span className="text-green-400">"I need to reschedule my appointment"</span></p>
                <div className="my-3 h-px bg-neutral-700" />
                <p><span className="text-primary-400">router</span><span className="text-neutral-500">:</span> <span className="text-green-400">classifying intent...</span></p>
                <p><span className="text-primary-400">intent</span><span className="text-neutral-500">:</span> <span className="text-green-400">"scheduling_change"</span></p>
                <p><span className="text-primary-400">delegate</span><span className="text-neutral-500">:</span> <span className="text-orange-400">scheduling_agent</span></p>
                <div className="my-3 h-px bg-neutral-700" />
                <p><span className="text-primary-400">scheduling_agent</span><span className="text-neutral-500">:</span> <span className="text-green-400">checking calendar...</span></p>
                <p><span className="text-primary-400">action</span><span className="text-neutral-500">:</span> <span className="text-green-400">"reschedule_to_next_available"</span></p>
                <p><span className="text-primary-400">new_slot</span><span className="text-neutral-500">:</span> <span className="text-green-400">"Thursday, 2:00 PM"</span></p>
                <p><span className="text-primary-400">confirmation</span><span className="text-neutral-500">:</span> <span className="text-green-400">sent via SMS + email</span></p>
                <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <p className="text-green-400 text-[10px] font-semibold">&#10003; Rescheduled. Customer notified. CRM updated.</p>
                  <p className="text-neutral-500 text-[10px] mt-1">Duration: 8s &middot; Human involvement: none</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Safety */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Enterprise Safety</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            Guardrails built in. Not bolted on.
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg">
            Every agent ships with safety constraints, audit trails, and human escalation paths.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              { title: 'Action Boundaries', desc: 'Define exactly what each agent can and cannot do. No unauthorized actions, ever.' },
              { title: 'Human-in-the-Loop', desc: 'Automatic escalation when confidence drops below threshold or for high-stakes decisions.' },
              { title: 'Full Audit Trail', desc: 'Every decision, action, and reasoning step is logged and searchable.' },
              { title: 'Rate Limiting', desc: 'Built-in safeguards prevent runaway costs or excessive API calls.' },
              { title: 'Data Isolation', desc: 'Agents only access the data they need. Role-based permissions at every level.' },
              { title: 'Kill Switch', desc: 'Instantly pause or shut down any agent from a central dashboard.' },
            ].map((f, i) => (
              <div key={i} className="bg-neutral-50 border border-neutral-200/60 rounded-xl p-6 hover:border-primary-200 hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-neutral-900 mb-2">{f.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Use Cases</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            Where agents deliver the most impact.
          </h2>

          <div className="grid sm:grid-cols-2 gap-5 mt-12">
            {[
              {
                title: 'Customer Support',
                stat: '70%',
                statLabel: 'tickets resolved autonomously',
                desc: 'Handle tier-1 and tier-2 support tickets end-to-end. Sub-minute first response. Human agents focus on complex cases.',
              },
              {
                title: 'Operations Automation',
                stat: '5x',
                statLabel: 'faster processing',
                desc: 'Documents processed in minutes. Zero manual data entry errors. Audit-ready documentation generated automatically.',
              },
              {
                title: 'Research & Analysis',
                stat: '80%',
                statLabel: 'time saved',
                desc: 'Research that took days now takes hours. Real-time monitoring. Structured, actionable outputs from unstructured data.',
              },
              {
                title: 'Data Processing',
                stat: '10x',
                statLabel: 'throughput increase',
                desc: 'Unstructured to structured conversion. Cross-source synthesis. Automated ETL pipelines that adapt to new formats.',
              },
            ].map((u, i) => (
              <div key={i} className="bg-white border border-neutral-200/80 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{u.title}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-extrabold text-primary-600">{u.stat}</span>
                  <span className="text-xs text-neutral-400">{u.statLabel}</span>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Process</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            From concept to deployed agent in 2-3 weeks.
          </h2>

          <div className="grid sm:grid-cols-3 gap-5 mt-12">
            {[
              { week: 'Week 1', title: 'Discovery & Design', desc: 'Map your workflows, define agent capabilities, set guardrails, and design the interaction model.' },
              { week: 'Week 1-2', title: 'Build & Train', desc: 'Develop the agent, integrate with your systems, and train on your data and edge cases.' },
              { week: 'Week 2-3', title: 'Test & Deploy', desc: 'Rigorous testing with real scenarios, gradual rollout, and monitoring setup.' },
            ].map((s, i) => (
              <div key={i} className="bg-neutral-50 border border-neutral-200/60 rounded-xl p-6 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="text-xs font-bold text-primary-600 mb-2">{s.week}</div>
                <h3 className="text-sm font-bold text-neutral-900 mb-2">{s.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">FAQ</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 leading-[1.15] mb-8">
            Got questions? We've got answers.
          </h2>
          <div className="space-y-3">
            {[
              { q: 'How are AI agents different from chatbots?', a: 'Chatbots respond to messages. Agents take action — they can read databases, call APIs, update records, send notifications, and execute multi-step workflows autonomously.' },
              { q: 'Are AI agents safe for business-critical processes?', a: 'Yes. Every agent ships with action boundaries, human-in-the-loop escalation, full audit trails, and a kill switch. High-stakes decisions always require human approval.' },
              { q: 'What systems can agents integrate with?', a: 'Any system with an API: CRMs (Salesforce, HubSpot), calendars (Google, Outlook), communication tools (Slack, email), databases, and custom internal tools.' },
              { q: 'How long does it take to deploy an agent system?', a: 'Most agent systems go live in 2-3 weeks. Week 1 is discovery and design, weeks 1-2 are build and training, and weeks 2-3 are testing and deployment.' },
              { q: 'What happens when agents make mistakes?', a: 'The supervisor layer catches errors in real-time. Low-confidence decisions are escalated to humans with full context. Every action is logged for review and the agent learns from corrections.' },
              { q: 'What\'s the pricing model?', a: 'We charge a one-time development fee based on complexity, plus optional ongoing support. No per-query fees, no usage surprises. Book a call and we\'ll give you a clear quote.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-neutral-200/80 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-neutral-900">{faq.q}</span>
                  <span className="text-neutral-400 text-lg ml-4">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            Ready to deploy your first agent?
          </h2>
          <p className="mt-4 text-neutral-500 max-w-md mx-auto">
            Book a consultation. We'll map your workflows and show you exactly where
            AI agents can make the biggest impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a
              href="https://cal.com/kravestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 shadow-sm shadow-primary-500/25 transition-all duration-200"
            >
              Schedule Now — Free &middot; 30 min
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
    </>
  )
}
