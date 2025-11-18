import React, { useEffect, useRef, useState } from "react";
import { Gauge, Users, Compass, Binary, ListOrdered, CheckCircle, Lightbulb } from 'lucide-react';

// --- Custom Hooks and Utilities ---

// Custom hook for Intersection Observer (Fade-In Effect)
const useFadeIn = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    // Cleanup function
    return () => {
      if (ref.current) observer.unobserve(entry.target);
    };
  }, [threshold]);

  return [ref, visible];
};

// Component wrapper for fade-in animation (Performance Optimized: Only opacity transition)
const AnimatedSection = ({ children, className = "" }) => {
  const [ref, visible] = useFadeIn(0.1);
  return (
    <section
      ref={ref}
      className={`
        transition-opacity duration-700 ease-out
        ${visible ? "opacity-100" : "opacity-0"} 
        ${className}
      `}
    >
      {children}
    </section>
  );
};

// --- Data for Strategy Phases ---

const strategyPhases = [
  {
    icon: <Gauge size={28} />,
    title: "Phase 1: Discovery & Goal Setting",
    description: "Define clear, measurable success metrics (KPIs). We align on business objectives—whether it's increasing LTV, reducing CAC, or improving app usage—to set the direction for the entire project.",
    imagePath: "400x200/9d580b/fcd34d?text=Define+KPIs",
  },
  {
    icon: <Compass size={28} />,
    title: "Phase 2: Market & Competitor Analysis",
    description: "We map your competitive landscape, benchmarking performance, pricing, and messaging. This identifies unique positioning and untapped opportunities where you can win quickly and sustainably.",
    imagePath: "400x200/9d580b/fcd34d?text=Competitor+Mapping",
  },
  {
    icon: <Binary size={28} />,
    title: "Phase 3: Technical & UX Audit",
    description: "A rigorous audit covers technical performance (speed, mobile), UX flow, and conversion funnels. We generate a prioritized list of fixes to optimize your existing platform's foundation.",
    imagePath: "400x200/9d580b/fcd34d?text=Full+Platform+Audit",
  },
  {
    icon: <Users size={28} />,
    title: "Phase 4: Audience & Persona Mapping",
    description: "Strategy requires empathy. We build detailed customer personas covering pain points, motivations, and device behavior to ensure all design and messaging speak directly to the right user.",
    imagePath: "400x200/9d580b/fcd34d?text=Customer+Personas",
  },
  {
    icon: <ListOrdered size={28} />,
    title: "Phase 5: Roadmap & Prioritization",
    description: "Based on data, we deliver an actionable roadmap, defining MVP scope, feature priority, content plan, and technical integrations. This creates a sprint-ready backlog for efficient execution.",
    imagePath: "400x200/9d580b/fcd34d?text=Actionable+Roadmap",
  },
];

// Component for a single Strategy Phase Card
const PhaseCard = ({ item, index }) => {
  // Staggered delay for card grid animation
  const delay = 100 * index;

  const [ref, visible] = useFadeIn(0.1);

  return (
    <div 
        ref={ref}
        style={{ transitionDelay: `${delay}ms` }}
        className={`
            h-full p-6 rounded-xl border border-amber-700 bg-[#071026] shadow-2xl transition-opacity duration-700
            hover:shadow-amber-500/40 hover:-translate-y-1 flex flex-col
            ${visible ? 'opacity-100' : 'opacity-0'}
        `}
    >
        {/* Placeholder Image */}
        <div className="mb-4 rounded-lg overflow-hidden border border-amber-600">
            <img
                // Using a custom dark orange/yellow placeholder theme for contrast
                src={`https://placehold.co/${item.imagePath}`}
                alt={item.title}
                className="w-full h-auto object-cover"
                onError={e => {
                    // Fallback in case placeholder fails
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://placehold.co/400x200/1f2937/D1D5DB?text=${item.title.replace(/\s/g, '+')}`;
                }}
            />
        </div>

        {/* Icon and Title */}
        <div className="flex items-start space-x-4 mb-3">
            <div className="p-3 rounded-full bg-amber-500/20 text-amber-400 flex-shrink-0">
                {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white leading-tight mt-1">
                {item.title}
            </h3>
        </div>
        
        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-sm flex-grow">
            {item.description}
        </p>

        <button className="mt-2 self-start px-4 py-2 text-xs rounded-lg font-semibold transition-colors duration-200
                       bg-amber-600 text-gray-900 hover:bg-amber-500 shadow-md hover:shadow-lg">
                           More Info </button>
    </div>
  );
};


export default function AnalyzeStrategize() {
  useEffect(() => {
    document.title = "Analyze & Strategize — Building a Strong Foundation";
  }, []);

  return (
    <main className="min-h-screen text-gray-100 py-12 px-6 md:px-12 lg:px-24 font-sans antialiased bg-gray-900/10">
      
      {/* Hero Section */}
      <AnimatedSection className="mb-16">
        <header className="max-w-4xl mx-auto text-center">
          <div className="inline-block py-1 px-3 bg-amber-500 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
            🔍 Foundation Focus
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-400">
            Analyze & Strategize — Building a Strong Foundation
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A powerful strategy is the backbone of every successful digital product. We dig deep into your business, competitors, and customers to create an actionable, measurable roadmap.
          </p>
        </header>
      </AnimatedSection>

      {/* Main Content & Pillars Grid */}
      <article className="max-w-7xl mx-auto space-y-16">

        {/* Core Value Statement */}
        <AnimatedSection className="bg-[#071026] p-8 rounded-2xl border-2 border-amber-500/30 shadow-xl shadow-amber-500/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center space-x-3 text-white">
                <Lightbulb size={30} className="text-amber-400" />
                <span>Why We Start with Analysis</span>
            </h2>
            <p className="text-gray-300 text-center max-w-4xl mx-auto text-lg">
                Too many projects skip the research phase, leading to failed initiatives and wasted resources. We ensure every decision — from feature prioritization to ad budgets — is*backed by data and aligned with clear business goals, maximizing your potential for sustainable growth.
            </p>
        </AnimatedSection>

        {/* Strategy Phases Grid */}
        <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white">
                Our 5-Step Strategic Framework
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {strategyPhases.map((item, index) => (
                    <PhaseCard key={index} item={item} index={index} />
                ))}
            </div>
        </AnimatedSection>
        
        {/* Deliverables Summary */}
        <AnimatedSection className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 text-center text-white">
                Key Deliverables from the Strategy Phase
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                <div className="p-4 border-l-4 border-amber-500 bg-gray-800 rounded-lg shadow-md">
                    <CheckCircle size={20} className="text-amber-400 mb-2 inline-block mr-2" />
                    <strong className="text-white">Comprehensive Audit Report</strong>
                    <p className="text-sm mt-1">A prioritized list of technical fixes, UX improvements, and SEO wins with clear severity levels.</p>
                </div>
                <div className="p-4 border-l-4 border-amber-500 bg-gray-800 rounded-lg shadow-md">
                    <CheckCircle size={20} className="text-amber-400 mb-2 inline-block mr-2" />
                    <strong className="text-white">Differentiated Strategy Deck</strong>
                    <p className="text-sm mt-1">Clear goals, customer personas, channel plan, and KPI targets based on market analysis.</p>
                </div>
                <div className="p-4 border-l-4 border-amber-500 bg-gray-800 rounded-lg shadow-md">
                    <CheckCircle size={20} className="text-amber-400 mb-2 inline-block mr-2" />
                    <strong className="text-white">Execution Roadmap & Backlog</strong>
                    <p className="text-sm mt-1">A sprint-ready plan with defined MVP scope, feature prioritization, and estimated timelines.</p>
                </div>
            </div>
        </AnimatedSection>


        {/* Conclusion & Call to Action */}
        <AnimatedSection className="py-10 text-center">
            <h2 className="text-3xl font-bold mb-5 text-white">
                Stop Guessing, Start Growing.
            </h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                Ready to build your product or campaign on a foundation of data, not assumptions? Let’s define your success story together.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="#consultation"
                className="inline-block bg-amber-500 text-gray-900 py-3 px-8 rounded-full font-bold shadow-2xl shadow-amber-500/50 hover:bg-amber-400 transition-colors"
              >
                Book a Free Discovery Call
              </a>
              <a
                href="#services"
                className="inline-block border-2 border-gray-600 text-gray-200 py-3 px-8 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                View Strategy & Consulting Services
              </a>
            </div>
        </AnimatedSection>

        <footer className="text-center text-sm text-gray-500 mt-8 pt-4 border-t border-gray-800">
          <p>© {new Date().getFullYear()} [Pro Tech Touch]. All rights reserved.</p>
        </footer>
      </article>
    </main>
  );
}