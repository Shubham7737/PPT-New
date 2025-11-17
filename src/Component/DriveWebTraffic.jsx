import React, { useEffect, useRef, useState } from "react";
import { Search, Target, Share2, Cpu, BarChart3, Zap, CheckCircle, TrendingUp } from 'lucide-react';

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

// --- Data for Traffic Generation Pillars ---

const trafficPillars = [
  {
    icon: <Search size={28} />,
    title: "Organic Search (SEO & Content)",
    description: "Deep keyword research, on-page optimization, and high-value content creation ensures your business ranks high on search engines, attracting users actively looking for your solutions.",
    imagePath: "400x200/047857/a7f3d0?text=SEO+Strategy",
  },
  {
    icon: <Target size={28} />,
    title: "Paid Acquisition (Targeted Ads)",
    description: "Accelerate traffic growth through optimized paid campaigns (Google Ads, Social Media). We focus on compelling creatives and refined audience targeting for maximum ROI and quality leads.",
    imagePath: "400x200/047857/a7f3d0?text=Paid+Campaigns",
  },
  {
    icon: <Share2 size={28} />,
    title: "Social & Referral Traffic",
    description: "Leveraging strong social media presence, strategic partnerships, and effective referral programs to generate high-quality, trusted traffic from external sources.",
    imagePath: "400x200/047857/a7f3d0?text=Referral+Marketing",
  },
  {
    icon: <Cpu size={28} />,
    title: "Technical Performance & UX",
    description: "Improving website speed, mobile responsiveness, and intuitive navigation (UX) is crucial. A fast, user-friendly site reduces bounce rate and maximizes engagement from incoming traffic.",
    imagePath: "400x200/047857/a7f3d0?text=Site+Performance",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Data Analytics & Optimization",
    description: "Continuous analysis of traffic sources, user behavior, and engagement metrics helps us identify high-performing channels and optimize underperforming ones for sustained, efficient growth.",
    imagePath: "400x200/047857/a7f3d0?text=Data+Driven+Traffic",
  },
];

// Component for a single Traffic Pillar Card
const TrafficCard = ({ item, index }) => {
  // Staggered delay for card grid animation
  const delay = 100 * index;

  const [ref, visible] = useFadeIn(0.1);

  return (
    <div 
        ref={ref}
        style={{ transitionDelay: `${delay}ms` }}
        className={`
            h-full p-6 rounded-xl border border-emerald-700 bg-[#071026] shadow-2xl transition-opacity duration-700
            hover:shadow-emerald-500/40 hover:-translate-y-1 flex flex-col
            ${visible ? 'opacity-100' : 'opacity-0'}
        `}
    >
        {/* Placeholder Image */}
        <div className="mb-4 rounded-lg overflow-hidden border border-emerald-600">
            <img
                // Using a custom dark green/light green placeholder theme for contrast
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
            <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0">
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


export default function DriveWebTraffic() {
  useEffect(() => {
    document.title = "Drive Web Traffic — Increase Visitors & Engagement";
  }, []);

  return (
    <main className="min-h-screen text-gray-100 py-12 px-6 md:px-12 lg:px-24 font-sans antialiased bg-gray-900/10">
      
      {/* Hero Section */}
      <AnimatedSection className="mb-16">
        <header className="max-w-4xl mx-auto text-center">
          <div className="inline-block py-1 px-3 bg-emerald-500 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
            🚀 Growth Engine Focus
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-400">
            Drive Web Traffic — Increase Visitors & Engagement
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Driving **high-quality visitors** is essential to grow leads, sales, and brand awareness. We focus on multichannel strategies that attract, engage, and retain your ideal audience.
          </p>
        </header>
      </AnimatedSection>

      {/* Main Content & Pillars Grid */}
      <article className="max-w-7xl mx-auto space-y-16">

        {/* Key Takeaways / Summary */}
        <AnimatedSection className="bg-[#071026] p-8 rounded-2xl border-2 border-emerald-500/30 shadow-xl shadow-emerald-500/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center space-x-3 text-white">
                <Zap size={30} className="text-emerald-400" />
                <span>Impact of High-Quality Traffic</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-gray-300">
                <div className="p-4 bg-white/5 rounded-lg border border-gray-700">
                    <TrendingUp className="inline-block w-6 h-6 mr-2 text-green-400" />
                    <p className="font-semibold">Scalable Lead Generation</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-gray-700">
                    <CheckCircle className="inline-block w-6 h-6 mr-2 text-green-400" />
                    <p className="font-semibold">Improved Brand Authority (SEO)</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-gray-700">
                    <Target className="inline-block w-6 h-6 mr-2 text-emerald-400" />
                    <p className="font-semibold">Lower Customer Acquisition Cost (CAC)</p>
                </div>
            </div>
        </AnimatedSection>

        {/* Traffic Pillars Grid */}
        <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white">
                Our 5 Pillars of Web Traffic Generation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {trafficPillars.map((item, index) => (
                    <TrafficCard key={index} item={item} index={index} />
                ))}
            </div>
        </AnimatedSection>

        {/* Conclusion & Call to Action */}
        <AnimatedSection className="py-10 text-center">
            <h2 className="text-3xl font-bold mb-5 text-white">
                Ready to Boost Your Visitor Count?
            </h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                Without consistent, quality traffic, even the best digital platform can’t succeed. We deliver comprehensive strategies for sustained visitor growth and engagement.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="#consultation"
                className="inline-block bg-emerald-500 text-white py-3 px-8 rounded-full font-bold shadow-2xl shadow-emerald-500/50 hover:bg-emerald-600 transition-colors"
              >
                Schedule a Traffic Audit
              </a>
              <a
                href="#services"
                className="inline-block border-2 border-gray-600 text-gray-200 py-3 px-8 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                View SEO & Ad Services
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