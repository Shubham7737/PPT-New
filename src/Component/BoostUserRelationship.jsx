import React, { useEffect, useRef, useState } from "react";
import { MessageSquarePlus, Rss, Users, HeartHandshake, BarChart3, TrendingUp, Sparkles, CheckCircle } from 'lucide-react';

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
      if (ref.current) observer.unobserve(ref.current);
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

// --- Data for Relationship Pillars ---

const relationshipPillars = [
  {
    icon: <MessageSquarePlus size={28} />,
    title: "Personalized Engagement",
    description: "Understanding user preferences and needs allows us to deliver tailored experiences, from segmented email campaigns to custom product recommendations. This drives higher engagement and long-term loyalty.",
    imagePath: "400x200/1e406f/7dd3fc?text=Personalization",
  },
  {
    icon: <Rss size={28} />,
    title: "Effective Communication Channels",
    description: "We optimize multi-channel communication (email, social, SMS, in-app) to ensure users stay informed with minimal friction. Every touchpoint is mapped for maximum interaction and heightened convenience.",
    imagePath: "400x200/1e406f/7dd3fc?text=Omnichannel+Comms",
  },
  {
    icon: <Users size={28} />,
    title: "Building Community & Loyalty",
    description: "Engaging users through communities, forums, and rewards programs encourages active participation and brand advocacy. Loyal members become organic promoters, expanding your reach authentically.",
    imagePath: "400x200/1e406f/7dd3fc?text=Community+Building",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Collecting & Acting on Feedback",
    description: "Actively listening and responding to user feedback (surveys, NPS) strengthens trust. Quick implementation of improvements shows users their opinions matter, ensuring satisfaction and ongoing loyalty.",
    imagePath: "400x200/1e406f/7dd3fc?text=Feedback+Loop",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Data-Driven Relationship Growth",
    description: "We use analytics to understand engagement patterns, identify at-risk users, and optimize retention campaigns. Actionable insights from metrics like LTV and churn rate drive continuous strategy refinement.",
    imagePath: "400x200/1e406f/7dd3fc?text=Retention+Analytics",
  },
];

// Component for a single Relationship Pillar Card
const RelationshipCard = ({ item, index }) => {
  // Staggered delay for card grid animation
  const delay = 100 * index;

  const [ref, visible] = useFadeIn(0.1);

  return (
    <div 
        ref={ref}
        style={{ transitionDelay: `${delay}ms` }}
        className={`
            h-full p-6 rounded-xl border border-sky-800 bg-[#071026] shadow-2xl transition-opacity duration-700
            hover:shadow-sky-500/40 hover:-translate-y-1 flex flex-col
            ${visible ? 'opacity-100' : 'opacity-0'}
        `}
    >
        {/* Placeholder Image */}
        <div className="mb-4 rounded-lg overflow-hidden border border-sky-700">
            <img
                // Using a custom dark blue/cyan placeholder theme for contrast
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
            <div className="p-3 rounded-full bg-sky-500/20 text-sky-400 flex-shrink-0">
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
    </div>
  );
};


export default function BoostUserRelationship() {
  useEffect(() => {
    document.title = "Boost User Relationship — Engage & Retain Customers";
  }, []);

  return (
    <main className="min-h-screen text-gray-100 py-12 px-6 md:px-12 lg:px-24 font-sans antialiased bg-gray-900/10">
      
      {/* Hero Section */}
      <AnimatedSection className="mb-16">
        <header className="max-w-4xl mx-auto text-center">
          <div className="inline-block py-1 px-3 bg-sky-500 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
            ⭐ Customer Retention Focus
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-400">
            Boost User Relationship — Engage & Retain Customers
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Long-term success depends on strong user relationships. We focus on building deep **trust**, encouraging repeat **engagement**, and creating loyal **advocates** for your business.
          </p>
        </header>
      </AnimatedSection>

      {/* Main Content & Pillars Grid */}
      <article className="max-w-7xl mx-auto space-y-16">

        {/* Key Takeaways / Summary */}
        <AnimatedSection className="bg-[#071026] p-8 rounded-2xl border-2 border-sky-500/30 shadow-xl shadow-sky-500/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center space-x-3 text-white">
                <Sparkles size={30} className="text-sky-400" />
                <span>Impact of Prioritizing User Relationships</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-gray-300">
                <div className="p-4 bg-white/5 rounded-lg border border-gray-700">
                    <TrendingUp className="inline-block w-6 h-6 mr-2 text-green-400" />
                    <p className="font-semibold">Increases Customer Lifetime Value (LTV)</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-gray-700">
                    <CheckCircle className="inline-block w-6 h-6 mr-2 text-green-400" />
                    <p className="font-semibold">Reduces Customer Churn and Acquisition Costs</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-gray-700">
                    <Users className="inline-block w-6 h-6 mr-2 text-sky-400" />
                    <p className="font-semibold">Generates Strong Word-of-Mouth Marketing</p>
                </div>
            </div>
        </AnimatedSection>

        {/* Relationship Pillars Grid */}
        <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white">
                Our 5 Pillars for Lasting Customer Connections
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relationshipPillars.map((item, index) => (
                    <RelationshipCard key={index} item={item} index={index} />
                ))}
            </div>
        </AnimatedSection>

        {/* Conclusion & Call to Action */}
        <AnimatedSection className="py-10 text-center">
            <h2 className="text-3xl font-bold mb-5 text-white">
                Ready to Turn Users into Advocates?
            </h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                Stop chasing new sales and start nurturing the relationships you already have. Strong user loyalty is the bedrock of sustainable, profitable growth.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="#consultation"
                className="inline-block bg-sky-500 text-white py-3 px-8 rounded-full font-bold shadow-2xl shadow-sky-500/50 hover:bg-sky-600 transition-colors"
              >
                Start Your Loyalty Audit
              </a>
              <a
                href="#services"
                className="inline-block border-2 border-gray-600 text-gray-200 py-3 px-8 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                View Engagement Strategy Services
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