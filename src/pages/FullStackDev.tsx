import { useState } from 'react'

export default function FullStackDev() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white via-neutral-50/50 to-neutral-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <p className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary-600 mb-4">Web Applications</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] max-w-3xl">
            Ship faster. Scale infinitely. Sleep soundly.
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-xl leading-relaxed">
            Production-grade web applications built with modern frameworks, clean architecture,
            and obsessive attention to performance. From MVP to enterprise scale.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://cal.com/kravestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 shadow-sm shadow-primary-500/25 transition-all duration-200 inline-flex items-center gap-2"
            >
              Schedule a Call &rarr;
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
              { value: '50+', label: 'Projects Shipped' },
              { value: '8-12', label: 'Week Avg Timeline' },
              { value: '99%', label: 'Client Retention' },
              { value: '99.9%', label: 'Uptime SLA' },
            ].map((s, i) => (
              <div key={i} className="text-center py-4">
                <div className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">{s.value}</div>
                <div className="text-sm text-neutral-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-primary-600" />
                <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Clean Code</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
                Code you'll actually want to maintain.
              </h2>
              <p className="mt-5 text-neutral-500 leading-relaxed max-w-md">
                Type-safe, well-tested, and documented. Every project ships with clean
                architecture that your team can extend confidently.
              </p>

              <div className="space-y-4 mt-8">
                {[
                  { title: 'TypeScript everywhere', desc: 'Full type safety from database to UI. Catch bugs at compile time, not in production.' },
                  { title: 'API-first design', desc: 'Clean REST or GraphQL APIs that are versioned, documented, and ready for any client.' },
                  { title: 'Test coverage', desc: 'Unit, integration, and E2E tests. Every critical path is covered before deployment.' },
                  { title: 'CI/CD from day one', desc: 'Automated builds, tests, and deployments. Push to main and it ships.' },
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

            {/* Code mockup */}
            <div className="bg-neutral-900 rounded-2xl p-6 shadow-xl">
              <div className="flex gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="font-mono text-xs space-y-0.5 text-neutral-300">
                <p><span className="text-primary-400">import</span> {'{'} NextRequest {'}'} <span className="text-primary-400">from</span> <span className="text-green-400">'next/server'</span></p>
                <p><span className="text-primary-400">import</span> {'{'} db {'}'} <span className="text-primary-400">from</span> <span className="text-green-400">'@/lib/database'</span></p>
                <p><span className="text-primary-400">import</span> {'{'} auth {'}'} <span className="text-primary-400">from</span> <span className="text-green-400">'@/lib/auth'</span></p>
                <p className="text-neutral-600">{'// Type-safe API with auth middleware'}</p>
                <p>&nbsp;</p>
                <p><span className="text-primary-400">export async function</span> <span className="text-orange-400">GET</span>(req: NextRequest) {'{'}</p>
                <p>  <span className="text-primary-400">const</span> session = <span className="text-primary-400">await</span> auth(req)</p>
                <p>  <span className="text-primary-400">if</span> (!session) <span className="text-primary-400">return</span> Response.json(</p>
                <p>    {'{'} error: <span className="text-green-400">'Unauthorized'</span> {'}'}, {'{'} status: <span className="text-orange-400">401</span> {'}'})</p>
                <p>&nbsp;</p>
                <p>  <span className="text-primary-400">const</span> projects = <span className="text-primary-400">await</span> db.project</p>
                <p>    .findMany({'{'}</p>
                <p>      where: {'{'} teamId: session.teamId {'}'},</p>
                <p>      orderBy: {'{'} updatedAt: <span className="text-green-400">'desc'</span> {'}'},</p>
                <p>    {'}'})</p>
                <p>&nbsp;</p>
                <p>  <span className="text-primary-400">return</span> Response.json(projects)</p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Tech Stack</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            Battle-tested. Production-proven.
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg">
            We use the tools that ship the fastest and scale the furthest — no hype, just results.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              { icon: '⚡', title: 'Next.js', desc: 'Server components, API routes, edge runtime. The React framework for production.' },
              { icon: '⚛️', title: 'React', desc: 'Component architecture, server-side rendering, and the ecosystem that powers the modern web.' },
              { icon: '🔷', title: 'TypeScript', desc: 'Full type safety across the entire stack. Fewer bugs, better DX, safer refactors.' },
              { icon: '🎨', title: 'Tailwind CSS', desc: 'Utility-first styling that ships fast, stays consistent, and never fights the framework.' },
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

      {/* Engineering Excellence */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Engineering Excellence</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            Built different. By design.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              { icon: '🚀', title: 'Speed that converts', desc: 'Every 100ms of load time costs you 7% in conversions.', metrics: ['95+ Lighthouse', '<100ms TTFB', '<2.5s LCP'] },
              { icon: '📈', title: 'From MVP to millions', desc: 'Architecture that handles 10 users or 10 million without rewriting.', metrics: ['Horizontal scaling', 'Auto-scaling', 'Load balancing'] },
              { icon: '🔒', title: 'Sleep soundly', desc: 'Security isn\'t a feature — it\'s the foundation everything else is built on.', metrics: ['SOC 2 ready', 'GDPR compliant', 'Pen tested'] },
              { icon: '✨', title: 'Code your team can own', desc: 'Well-documented, thoroughly tested code that your developers can extend confidently.', metrics: ['Clean code', 'Type-safe', 'Tested'] },
            ].map((f, i) => (
              <div key={i} className="bg-neutral-50 border border-neutral-200/60 rounded-xl p-6 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="text-sm font-bold text-neutral-900 mb-2">{f.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-3">{f.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {f.metrics.map((m, j) => (
                    <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-primary-50 text-primary-600 border border-primary-100 font-medium">{m}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">What We Build</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            From idea to production-ready product.
          </h2>

          <div className="grid sm:grid-cols-2 gap-5 mt-12">
            {[
              {
                title: 'SaaS Platforms',
                subtitle: 'Multi-tenant from day one.',
                desc: 'Subscription platforms with user roles, usage tracking, and billing that scales with your revenue.',
                features: ['Multi-tenancy', 'Subscription billing', 'Role-based access', 'Usage analytics'],
              },
              {
                title: 'E-Commerce',
                subtitle: 'Beyond templates.',
                desc: 'Custom storefronts, inventory management, payment processing, and order fulfillment built for your unique needs.',
                features: ['Custom checkout', 'Inventory sync', 'Payment processing', 'Order management'],
              },
              {
                title: 'Analytics Dashboards',
                subtitle: 'Make data actionable.',
                desc: 'Real-time data visualization, custom metrics, reporting, and alerting systems that drive decisions.',
                features: ['Real-time data', 'Custom metrics', 'Automated reports', 'Alert systems'],
              },
              {
                title: 'Internal Tools',
                subtitle: 'Replace the spreadsheet chaos.',
                desc: 'Custom admin panels, workflow tools, and operational dashboards that 10x your team\'s productivity.',
                features: ['Admin panels', 'Workflow automation', 'Data management', 'Team dashboards'],
              },
            ].map((u, i) => (
              <div key={i} className="bg-white border border-neutral-200/80 rounded-2xl p-8 hover:border-primary-200 hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{u.title}</h3>
                <p className="text-xs font-medium text-primary-600 mb-3">{u.subtitle}</p>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">{u.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {u.features.map((f, j) => (
                    <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 font-medium">{f}</span>
                  ))}
                </div>
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
            From concept to launch in 8-12 weeks.
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg">
            A structured sprint-based approach with weekly demos and continuous delivery.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              { week: 'Week 1-2', title: 'Discovery & Architecture', desc: 'We dive deep into your business goals, user needs, and technical requirements. Then design the architecture to match.' },
              { week: 'Week 2-3', title: 'Foundation & Setup', desc: 'Setting up the infrastructure that makes everything else possible. CI/CD, database, auth, and deployment pipelines.' },
              { week: 'Week 3-8', title: 'Core Development', desc: 'The main build phase. Iterative sprints with weekly demos, so you see progress and can steer direction in real time.' },
              { week: 'Week 8-9', title: 'Testing & Hardening', desc: 'Rigorous testing, performance optimization, and security hardening. Every edge case covered before launch.' },
              { week: 'Week 9-10', title: 'Launch & Monitor', desc: 'Production deployment with monitoring, error tracking, and analytics. We watch the metrics so you don\'t have to.' },
              { week: 'Ongoing', title: 'Iterate & Support', desc: 'Your app is live, but we\'re not done. Ongoing maintenance, feature iterations, and scaling support.' },
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
              { q: 'What\'s your typical development timeline?', a: 'Most web applications take 8-12 weeks from kickoff to launch. MVPs can be delivered in 6-8 weeks. Complex enterprise apps with extensive integrations may take longer. We\'ll give you an honest timeline upfront.' },
              { q: 'Do you provide ongoing maintenance and support?', a: 'Yes. We offer ongoing support packages including bug fixes, monitoring, feature iterations, and scaling support. We don\'t build and disappear — we\'re invested in your product\'s long-term success.' },
              { q: 'Can you work with our existing codebase?', a: 'Absolutely. We regularly join existing projects — whether it\'s adding features, fixing tech debt, or refactoring for scale. We\'ll audit the codebase first and give you an honest assessment.' },
              { q: 'How do you handle project communication?', a: 'Weekly demos, daily async updates in Slack, and a shared project board. You\'ll always know exactly where things stand. No surprises, no radio silence.' },
              { q: 'What happens if requirements change mid-project?', a: 'We expect it. Our sprint-based process is designed for flexibility. We re-scope, re-prioritize, and adjust the timeline transparently. Change is part of the process, not a disruption.' },
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
            Ready to build something that actually works?
          </h2>
          <p className="mt-4 text-neutral-500 max-w-md mx-auto">
            Let's discuss your project and explore the best technical approach.
            No commitment required.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-4 mb-4">
            {['30-minute focused consultation', 'Technical architecture review', 'No commitment required'].map((t, i) => (
              <span key={i} className="text-xs px-3 py-1 rounded-full border border-primary-200 text-primary-600 bg-primary-50/50 font-medium">{t}</span>
            ))}
          </div>
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
