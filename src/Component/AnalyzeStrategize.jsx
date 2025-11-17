import React, { useEffect } from "react";

export default function AnalyzeStrategize() {
  useEffect(() => {
    document.title = "Analyze & Strategize — Building a Strong Foundation";
  }, []);

  return (
    <main className="min-h-screen text-gray-100 py-12 px-6 md:px-12 lg:px-24">
      {/* Hero */}
      <header className="max-w-4xl mx-auto text-center mb-10">
        <div className="inline-block py-1 px-3 bg-[#ff9966] text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
          How We Work
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          Analyze &amp; Strategize — Building a Strong Foundation
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
          A powerful strategy is the backbone of every successful digital product or campaign.
          We dig deep into your business, competitors, and customers to create an actionable,
          measurable roadmap that reduces risk and maximizes growth.
        </p>
      </header>

      <article className="max-w-4xl mx-auto space-y-8">
        {/* Overview */}
        <section className="bg-[#071026] p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Why Analysis First?</h2>
          <p className="text-gray-300">
            Too many projects start with design or ads and skip the research. That’s why most
            initiatives fail to deliver sustainable results. We begin with a rigorous analysis
            so every decision — from feature priorities to ad budgets — is backed by data and
            clear business goals.
          </p>
        </section>

        {/* Discovery & Goals */}
        <section className="bg-[#071026] p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Discovery &amp; Business Goals</h3>
          <p className="text-gray-300 mb-3">
            We start by aligning on what success looks like for you. Common objectives include:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Increase online sales or average order value</li>
            <li>Drive qualified leads for services</li>
            <li>Improve user retention in an app</li>
            <li>Reduce customer acquisition cost (CAC)</li>
          </ul>
          <p className="mt-3 text-gray-300">
            From revenue targets to user engagement goals, clear KPIs let us measure progress
            and prioritize the roadmap effectively.
          </p>
        </section>

        {/* Audit */}
        <section className="bg-[#071026] p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Complete Website / App / Store Audit</h3>
          <p className="text-gray-300 mb-2">
            If you already have a digital presence, we perform a full audit that includes:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <h4 className="font-medium">Technical & Performance</h4>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Page speed & Core Web Vitals</li>
                <li>Mobile responsiveness</li>
                <li>Server & caching setup</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">UX, Conversion & Content</h4>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Navigation & flow analysis</li>
                <li>Checkout funnel and form UX</li>
                <li>Content clarity & SEO readiness</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-gray-300 italic text-sm">
            Outcome: a prioritized list of technical fixes, UX improvements, and content wins.
          </p>
        </section>

        {/* Competitor & Market */}
        <section className="bg-[#071026] p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Competitor & Market Research</h3>
          <p className="text-gray-300 mb-2">
            We map your competitive landscape to identify where you can win. Research includes:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Competitor product and pricing analysis</li>
            <li>Benchmarking website performance and UX</li>
            <li>Identifying profitable channels & ad creatives</li>
            <li>Keyword and content opportunity mapping</li>
          </ul>
          <p className="mt-3 text-gray-300">
            This helps us pick differentiated positioning and quick-win tactics that competitors
            aren’t optimizing for yet.
          </p>
        </section>

        {/* Personas & Messaging */}
        <section className="bg-[#071026] p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Target Audience & Customer Personas</h3>
          <p className="text-gray-300 mb-2">
            Strategy without empathy fails. We build 2–4 customer personas covering:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Demographics & device behavior</li>
            <li>Primary pain points & purchasing triggers</li>
            <li>Search and shopping habits</li>
            <li>Preferred content types (video, articles, product pages)</li>
          </ul>
          <p className="mt-3 text-gray-300">
            Personas guide UX, messaging, ad creatives, and content topics so every touchpoint
            speaks directly to the right user.
          </p>
        </section>

        {/* Roadmap & Technical Planning */}
        <section className="bg-[#071026] p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Roadmap, Features & Tech Planning</h3>
          <p className="text-gray-300 mb-3">
            Based on audits and research, we create a prioritized roadmap:
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Priority features & MVP scope for apps or stores</li>
            <li>SEO-first content and landing page plan</li>
            <li>Required integrations (payments, analytics, CRM)</li>
            <li>Estimate timelines & resource allocation</li>
          </ol>
          <p className="mt-3 text-gray-300 italic text-sm">
            Deliverable: clear wireframes, tech stack recommendation, and a sprint-ready backlog.
          </p>
        </section>

        {/* Deliverables & CTA */}
        <section className="bg-[#071026] p-6 rounded-2xl shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">What You Get After This Phase</h3>
          <div className="grid md:grid-cols-3 gap-4 text-gray-300 mb-4">
            <div className="p-4 border border-gray-800 rounded-lg">
              <strong>Audit Report</strong>
              <p className="text-sm mt-2">Technical, UX & SEO checklist with severity levels.</p>
            </div>
            <div className="p-4 border border-gray-800 rounded-lg">
              <strong>Strategy Deck</strong>
              <p className="text-sm mt-2">Goals, personas, channel plan, and KPI targets.</p>
            </div>
            <div className="p-4 border border-gray-800 rounded-lg">
              <strong>Execution Roadmap</strong>
              <p className="text-sm mt-2">Sprint plan, feature prioritization, and timeline.</p>
            </div>
          </div>

          <p className="text-gray-300 mb-4">
            Ready to start? Book a free discovery call and we’ll share an initial audit snapshot
            within 48 hours.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-block bg-[#ff9966] text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:opacity-95"
            >
              Book a Discovery Call
            </a>
            <a
              href="#services"
              className="inline-block border border-gray-600 text-gray-200 py-3 px-6 rounded-full font-medium hover:bg-gray-800"
            >
              View Services
            </a>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} [Pro Tech Touch]. All rights reserved.</p>
        </footer>
      </article>
    </main>
  );
}
