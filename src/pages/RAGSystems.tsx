import { useState } from 'react'

export default function RAGSystems() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-b from-white via-neutral-50/50 to-neutral-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <p className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary-600 mb-4">RAG Systems</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] max-w-3xl">
            Your Documents. Instant Answers. Zero Guessing.
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-xl leading-relaxed">
            Stop losing hours searching through documents. Your custom RAG system turns your
            entire knowledge base into an AI that answers questions with pinpoint accuracy —
            and cites its sources.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://cal.com/kravestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 shadow-sm shadow-primary-500/25 transition-all duration-200 inline-flex items-center gap-2"
            >
              Book a Demo Call &rarr;
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
              { value: '98%', label: 'Answer Accuracy' },
              { value: '0', label: 'Hallucinations' },
              { value: '100+', label: 'File Types Supported' },
              { value: '<2s', label: 'Response Time' },
            ].map((s, i) => (
              <div key={i} className="text-center py-4">
                <div className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">{s.value}</div>
                <div className="text-sm text-neutral-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">The Pipeline</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            From raw documents to precise answers.
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg">
            Five stages that turn unstructured data into a reliable, citation-backed AI knowledge system.
          </p>

          <div className="grid sm:grid-cols-5 gap-4 mt-12">
            {[
              { step: '01', title: 'Ingest', desc: 'PDFs, Docs, Slack, Notion, APIs — we pull from every source your team uses.' },
              { step: '02', title: 'Chunk', desc: 'Intelligent splitting that preserves context, headings, and document structure.' },
              { step: '03', title: 'Embed', desc: 'State-of-the-art embeddings that capture semantic meaning, not just keywords.' },
              { step: '04', title: 'Search', desc: 'Hybrid retrieval combining vector similarity with keyword matching for maximum recall.' },
              { step: '05', title: 'Answer', desc: 'LLM generates precise answers grounded in your data — with source citations.' },
            ].map((s, i) => (
              <div key={i} className="relative bg-neutral-50 border border-neutral-200/60 rounded-xl p-5 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="text-xs font-bold text-primary-600 mb-2">{s.step}</div>
                <h3 className="text-sm font-bold text-neutral-900 mb-2">{s.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{s.desc}</p>
                {i < 4 && (
                  <div className="hidden sm:block absolute top-1/2 -right-3 text-neutral-300 text-lg">&rarr;</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See The Difference */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">See The Difference</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            Same question. Completely different trust.
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg">
            Ask both systems the same question and see why grounded answers change everything.
          </p>

          <div className="mt-12 mb-6 bg-neutral-100 rounded-xl px-5 py-3">
            <p className="text-sm font-medium text-neutral-700">&ldquo;What is our refund policy for enterprise customers?&rdquo;</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Generic AI */}
            <div className="bg-white border border-red-200/60 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Generic AI</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Enterprise customers are typically eligible for a full refund within 30 days of purchase.
                Most companies offer a pro-rated refund after the initial period. You should contact your
                account manager to initiate the refund process.
              </p>
              <div className="mt-4 bg-red-50 border border-red-100 rounded-lg p-3">
                <p className="text-xs text-red-600 font-medium">&#9888; No sources cited. Information may be fabricated.</p>
              </div>
            </div>

            {/* RAG System */}
            <div className="bg-white border border-green-200/60 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Your RAG System</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Per Section 4.2 of the Enterprise Terms (v4), enterprise clients may request a full refund
                within 14 days of contract signing. After 14 days, refunds are pro-rated based on remaining
                contract term, minus a 5% processing fee.
              </p>
              <div className="mt-4 bg-green-50 border border-green-100 rounded-lg p-3">
                <p className="text-xs text-green-700 font-medium">&#10003; Source: Enterprise_Terms_v4.pdf, Section 4.2, Page 23</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Key Benefits</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            Why RAG changes everything.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              { icon: '🎯', title: 'No More Hallucinations', desc: 'Every answer grounded in your actual documents. If there\'s no source, the system says so.' },
              { icon: '📎', title: 'Every Claim Traceable', desc: 'Users see exactly which document, page, and paragraph the answer came from.' },
              { icon: '🔒', title: 'Your Data Stays Yours', desc: 'Deployed on your infrastructure. Your data never leaves your control.' },
              { icon: '🔄', title: 'Always Up to Date', desc: 'Documents change, the system re-indexes automatically. No stale answers.' },
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

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600">Process</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            From kickoff to production in 4-6 weeks.
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg">
            A proven methodology that gets your RAG system live — fast, reliable, and built to scale.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              { week: 'Week 1', title: 'Discovery', desc: 'Audit your data sources, define use cases, and map out the knowledge architecture.' },
              { week: 'Week 1-2', title: 'Architecture', desc: 'Design the pipeline, select models, and set up infrastructure for your scale.' },
              { week: 'Week 2-3', title: 'Data Pipeline', desc: 'Build ingestion, chunking, and embedding pipelines across all your data sources.' },
              { week: 'Week 3-4', title: 'RAG Core', desc: 'Implement retrieval, re-ranking, and answer generation with citation tracking.' },
              { week: 'Week 4-5', title: 'Integration', desc: 'Connect to your apps — Slack, web portal, API, or wherever your team needs answers.' },
              { week: 'Week 5-6', title: 'Optimization', desc: 'Fine-tune accuracy, test edge cases, and optimize for speed and cost.' },
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
            Common questions.
          </h2>
          <div className="space-y-3">
            {[
              { q: 'How accurate are the answers really?', a: 'Our RAG systems achieve 98%+ accuracy by grounding every answer in your actual documents. Unlike generic AI, answers are always backed by source citations you can verify.' },
              { q: 'What documents and file types do you support?', a: 'PDFs, Word docs, Google Docs, Notion pages, Confluence, Slack messages, CSVs, HTML, Markdown, and more. If it has text, we can ingest it.' },
              { q: 'How long does implementation take?', a: 'Most deployments go live in 4-6 weeks. Simple use cases with clean data can be faster. Complex multi-source setups may take slightly longer.' },
              { q: 'Can it update automatically when documents change?', a: 'Yes. The system watches your data sources and re-indexes automatically when documents are added, updated, or removed. No manual intervention needed.' },
              { q: 'What about security and data privacy?', a: 'Your data never leaves your infrastructure. We deploy on your cloud or a dedicated instance with full encryption at rest and in transit, plus role-based access controls.' },
              { q: 'How do you handle conflicting information?', a: 'The system surfaces all relevant sources and flags conflicts, letting users see the most recent version and the context behind each answer. It prioritizes recency and source authority.' },
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
            Turn your documents into answers.
          </h2>
          <p className="mt-4 text-neutral-500 max-w-md mx-auto">
            Book a 30-minute demo. We'll build a proof-of-concept with your actual documents —
            so you can see the quality before you commit.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-4 mb-4">
            {['30-minute focused demo', 'POC with your documents', 'No commitment required'].map((t, i) => (
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
