import React, { useEffect, useRef, useState } from "react";
import { Award, RefreshCw, Target, BarChart3, Globe, Zap, CheckCircle } from 'lucide-react';

// Custom hook for Intersection Observer (Fade-In Effect)
const useFadeIn = (threshold = 0.2) => {
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

// Component wrapper for fade-in animation (PERFORMANCE OPTIMIZED: Only opacity transition)
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

// Data for the Brand Value Pillars
const brandPillars = [
  {
    icon: <Award size={28} />,
    title: "Pillar 1: Authority & Credibility",
    description: "We establish your business as a thought leader through expert content (whitepapers, case studies) and maximize social proof (reviews, testimonials) to drive customer trust and confidence.",
    imagePath: "400x200/4c1d95/c4b5fd?text=Thought+Leadership",
  },
  {
    icon: <RefreshCw size={28} />,
    title: "Pillar 2: Messaging Consistency",
    description: "Developing comprehensive style and content guidelines ensures a uniform brand voice, color, and design across your website, social media, and advertising. Consistency equals reliability.",
    imagePath: "400x200/4c1d95/c4b5fd?text=Brand+Consistency",
  },
  {
    icon: <Target size={28} />,
    title: "Pillar 3: Enhanced Customer Perception",
    description: "Every touchpoint—from website UX to ad creative—is optimized to influence a positive perception of quality and professionalism, increasing engagement and retention.",
    imagePath: "400x200/4c1d95/c4b5fd?text=Customer+Perception",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Pillar 4: Measurable Brand Impact",
    description: "We use advanced analytics to track visibility, sentiment, reach, and customer loyalty indices, quantifying your brand's growth and optimizing future investments for measurable ROI.",
    imagePath: "400x200/4c1d95/c4b5fd?text=Data+Driven+Branding",
  },
  {
    icon: <Globe size={28} />,
    title: "Pillar 5: Digital Differentiation",
    description: "By leveraging unique content and technical SEO, we ensure your brand cuts through market noise, making you stand out from competitors and justifying premium pricing.",
    imagePath: "400x200/4c1d95/c4b5fd?text=Digital+Differentiation",
  },
];

// Component for a single Brand Pillar Card
const ValueCard = ({ item, index }) => {
  // Staggered delay for card grid animation
  const delay = 100 * index;

  const [ref, visible] = useFadeIn(0.1);

  return (
    <div 
        ref={ref}
        style={{ transitionDelay: `${delay}ms` }}
        className={`
            h-full p-6 rounded-xl border border-gray-700 bg-[#071026] shadow-2xl transition-opacity duration-700
            hover:shadow-orange-500/40 hover:-translate-y-1 flex flex-col
            ${visible ? 'opacity-100' : 'opacity-0'}
        `}
    >
        {/* Placeholder Image */}
        <div className="mb-4 rounded-lg overflow-hidden border border-gray-600">
            <img
                // Using a purple/white placeholder theme for contrast
                src={`https://placehold.co/${item.imagePath}`}
                alt={item.title}
                className="w-full h-auto object-cover"
                onError={e => {
                    // Fallback in case placeholder fails
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://placehold.co/400x200/374151/D1D5DB?text=${item.title.replace(/\s/g, '+')}`;
                }}
            />
        </div>

        {/* Icon and Title */}
        <div className="flex items-start space-x-4 mb-3">
            <div className="p-3 rounded-full bg-[#ff9966]/20 text-[#ff9966] flex-shrink-0">
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


export default function SupportBrandValue() {
  useEffect(() => {
    document.title = "Support Brand Value — Strengthen Your Digital Presence";
  }, []);

  return (
    <main className="min-h-screen text-gray-100 py-12 px-6 md:px-12 lg:px-24 font-sans antialiased bg-gray-900/10">
      
      {/* Hero Section */}
      <AnimatedSection className="mb-16">
        <header className="max-w-4xl mx-auto text-center">
          <div className="inline-block py-1 px-3 bg-[#ff9966] text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
            💎 Core Brand Benefit
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff9966]">
            Support Brand Value — Strengthen Your Digital Presence
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Brand value is your greatest non-tangible asset. We establish authority, build deep trust, and ensure your message is consistently powerful across every digital touchpoint.
          </p>
        </header>
      </AnimatedSection>

      {/* Main Content & Pillars Grid */}
      <article className="max-w-7xl mx-auto space-y-16">

        {/* Key Takeaways / Summary */}
        <AnimatedSection className="bg-[#071026] p-8 rounded-2xl border-2 border-[#ff9966]/30 shadow-xl shadow-[#ff9966]/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center space-x-3 text-white">
                <Zap size={30} className="text-[#ff9966]" />
                <span>Why This Foundation is Critical</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-gray-300">
                <div className="p-4 bg-white/5 rounded-lg border border-gray-700">
                    <CheckCircle className="inline-block w-6 h-6 mr-2 text-green-400" />
                    <p className="font-semibold">Reduces Customer Acquisition Cost (CAC)</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-gray-700">
                    <CheckCircle className="inline-block w-6 h-6 mr-2 text-green-400" />
                    <p className="font-semibold">Allows for Premium Pricing</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-gray-700">
                    <CheckCircle className="inline-block w-6 h-6 mr-2 text-green-400" />
                    <p className="font-semibold">Increases Customer Loyalty (LTV)</p>
                </div>
            </div>
        </AnimatedSection>

        {/* Brand Pillars Grid */}
        <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white">
                Our 5 Pillars of Sustainable Brand Value
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {brandPillars.map((item, index) => (
                    <ValueCard key={index} item={item} index={index} />
                ))}
            </div>
        </AnimatedSection>

        {/* Conclusion & Call to Action */}
        <AnimatedSection className="py-10 text-center">
            <h2 className="text-3xl font-bold mb-5 text-white">
                Ready to Boost Your Brand Value?
            </h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                Strong brand value makes every marketing effort more effective, increases customer loyalty, and builds the foundation for long-term, sustainable growth.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="#consultation"
                className="inline-block bg-[#ff9966] text-white py-3 px-8 rounded-full font-bold shadow-2xl shadow-[#ff9966]/50 hover:bg-[#e68a55] transition-colors"
              >
                Start Your Brand Assessment
              </a>
              <a
                href="#services"
                className="inline-block border-2 border-gray-600 text-gray-200 py-3 px-8 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                View Digital Strategy Services
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