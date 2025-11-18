import React, { useEffect, useRef, useState } from 'react';

// Custom icons using inline SVG (Lucide-like)
const Icon = ({ name, className = 'w-6 h-6' }) => {
  const icons = {
    // Section 1: Tracking
    Monitor: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="15" x="2" y="3" rx="2" ry="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="18" y2="21" />
      </svg>
    ),
    // Section 2: Analysis
    Database: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 12a9 3 0 0 0 9 3 9 3 0 0 0 9-3" />
        <path d="M3 19a9 3 0 0 0 9 3 9 3 0 0 0 9-3" />
      </svg>
    ),
    // Section 3: Optimization
    Target: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    // Section 4: Reporting
    ClipboardCheck: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
    // Section 5: Feedback
    MessageCircle: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
      </svg>
    ),
    // Section 6: Strategy
    TrendingUp: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    // CTA: Consultation
    Sparkles: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9.9 14.2c.4 1.2 1.6 2 2.9 2.1 1.3.1 2.5-.5 3.3-1.6.8-1.1 1.1-2.4.8-3.7-.4-1.2-1.6-2-2.9-2.1-1.3-.1-2.5.5-3.3 1.6-.8 1.1-1.1 2.4-.8 3.7z" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m20 9-2 2" />
        <path d="m6 13-2 2" />
        <path d="m20 15-2-2" />
        <path d="m6 11-2-2" />
        <path d="M22 12h-2" />
        <path d="M4 12H2" />
      </svg>
    ),
  };
  return icons[name] || null;
};

// Hook for fade-in on scroll
const useFadeIn = () => {
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
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      // Cleanup observer on component unmount
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, visible];
};

const AnimatedSection = ({ title, iconName, children }) => {
  const [ref, visible] = useFadeIn();
  return (
    <section
      ref={ref}
      className={`
        bg-gray-800/80 p-8 rounded-2xl border border-gray-700/50 shadow-2xl backdrop-blur-sm
        transition-all duration-1000 ease-out transform
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
      `}
    >
      <div className="flex items-center space-x-3 mb-4 text-teal-400">
        <Icon name={iconName} className="w-8 h-8 flex-shrink-0 text-teal-500" />
        <h2 className="text-2xl font-extrabold text-white">
          {title}
        </h2>
      </div>
      <div className="text-gray-300">
        {children}
      </div>
    </section>
  );
};

export default function App() {
  useEffect(() => {
    document.title = "Data-Driven Measure & Optimize";
    // Set a consistent font for better design feel
    document.body.style.fontFamily = 'Inter, sans-serif'; 
    document.body.className = 'bg-gray-950'; // Apply main background color
  }, []);

  return (
    <main className="min-h-screen text-gray-100 py-16 px-4 md:px-12 lg:px-24 bg-gray-950">
      
      {/* Hero Section */}
      <header className="max-w-5xl mx-auto text-center mb-16">
        <div className="inline-block py-1.5 px-4 bg-teal-600 text-white text-sm font-semibold rounded-full mb-4 shadow-lg shadow-teal-500/30 animate-pulse-slow">
          Precision Growth Engine
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-400">
          Measure, Analyze, & Optimize for Max Impact
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
          We transform raw data into a reliable roadmap for sustained success. Track every KPI,
          extract powerful insights, and continuously refine your digital presence for maximum ROI.
        </p>
      </header>

      <article className="max-w-5xl mx-auto space-y-12">
        
        {/* Section 1: Performance Tracking */}
        <AnimatedSection title="Real-Time Performance Tracking" iconName="Monitor">
          <p className="mb-4">
            We implement comprehensive monitoring across all touchpoints, ensuring you have a single,
            accurate view of your project's health and immediate alerts for critical deviations.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 pl-4">
            <li>KPI Dashboards: Unified views for traffic, engagement, and conversion metrics.</li>
            <li>App Analytics: Deep dive into DAU, retention cohorts, and feature adoption.</li>
            <li>Campaign ROI: Granular tracking of ad spend, CTR, and lead quality.</li>
            <li>Server & Load Monitoring: Ensuring technical performance supports user experience.</li>
          </ul>
          <button className="w-full text-center py-2 px-4 bg-gray-700 text-[#56f6a6] rounded-lg font-semibold hover:bg-gray-600 transition duration-200 shadow-md" >
                More Info</button>
        </AnimatedSection>

        {/* Section 2: Data Analysis & Insights */}
        <AnimatedSection title="Actionable Data Analysis & Insights" iconName="Database">
          <p className="mb-4">
            Our experts dive deep into behavioral patterns, providing the strategic intelligence needed
            to stop guessing and start making informed, high-impact decisions.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 pl-4">
            <li>User Segmentation: Identifying the most valuable customer groups.</li>
            <li>Conversion Funnel: Pinpointing exact drop-off points in user journeys.</li>
            <li>Attribution Modeling: Understanding which channels truly drive value.</li>
            <li>Predictive Modeling: Forecasting future trends and potential risks.</li>
          </ul>
           <button className="w-full text-center py-2 px-4 bg-gray-700 text-[#56f6a6] rounded-lg font-semibold hover:bg-gray-600 transition duration-200 shadow-md" >
                More Info</button>
        </AnimatedSection>

        {/* Section 3: Continuous Optimization */}
        <AnimatedSection title="Iterative & Continuous Optimization" iconName="Target">
          <p className="mb-4">
            We establish a disciplined cycle of hypothesis, testing, and deployment to ensure your
            digital assets are always moving towards peak efficiency and user satisfaction.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 pl-4">
            <li>A/B and Multivariate Testing: Rigorous validation of design and copy changes.</li>
            <li>CRO: Dedicated optimization of landing pages, checkout flows, and key conversion paths.</li>
            <li>Personalization: Tailoring user experiences based on behavioral data.</li>
            <li>Technical SEO: Improving site speed, indexability, and core web vitals.</li>
          </ul>
           <button className="w-full text-center py-2 px-4 bg-gray-700 text-[#56f6a6] rounded-lg font-semibold hover:bg-gray-600 transition duration-200 shadow-md" >
                More Info</button>
        </AnimatedSection>

        {/* Section 4: Automation & Reporting */}
        <AnimatedSection title="Intelligent Automation & Reporting" iconName="ClipboardCheck">
          <p className="mb-4">
            Free your team from manual data aggregation. We set up automated pipelines that deliver
            timely, customized reports directly to stakeholders, promoting data literacy and agility.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 pl-4">
            <li>Automated KPI Alerts: Instant notification when metrics cross critical thresholds.</li>
            <li>Custom Dashboards: Tailored visualizations for marketing, product, and sales teams.</li>
            <li>API Integration: Connecting disparate data sources for holistic reporting.</li>
            <li>Executive Summaries: Clear, concise reports focusing on business impact.</li>
          </ul>
           <button className="w-full text-center py-2 px-4 bg-gray-700 text-[#56f6a6] rounded-lg font-semibold hover:bg-gray-600 transition duration-200 shadow-md" >
                More Info</button>
        </AnimatedSection>

        {/* Section 5: Strategic Recommendations */}
        <AnimatedSection title="Forward-Looking Strategic Recommendations" iconName="TrendingUp">
          <p className="mb-4">
            Our analysis culminates in strategic recommendations that not only fix current issues but
            also chart a clear, scalable course for future growth and market dominance.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 pl-4">
            <li>Roadmap Prioritization: Data-backed guidance on where to invest development resources.</li>
            <li>Budget Allocation: Optimizing marketing spend across high-performing channels.</li>
            <li>Future-Proofing: Preparing your data infrastructure for evolving privacy standards.</li>
            <li>Product/Market Fit Insights: Deep consumer understanding to guide product development.</li>
          </ul>
           <button className="w-full text-center py-2 px-4 bg-gray-700 text-[#56f6a6] rounded-lg font-semibold hover:bg-gray-600 transition duration-200 shadow-md" >
                More Info</button>
        </AnimatedSection>

        {/* CTA Section */}
        <div className="pt-8 pb-12">
            <AnimatedSection title="Ready to Stop Guessing and Start Growing?" iconName="Sparkles">
                <p className="text-gray-300 mb-6 text-center text-lg">
                    Transform your data from an expense into your most valuable asset. Let's build a measurement framework that delivers predictable, scalable growth.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <a
                        href="#consultation"
                        className="inline-block bg-teal-500 text-white py-3 px-8 rounded-full font-bold shadow-lg shadow-teal-500/40 hover:bg-teal-400 transition transform hover:scale-[1.02] active:scale-95"
                    >
                        Book Your Optimization Audit
                    </a>
                    <a
                        href="#process"
                        className="inline-block border border-gray-600 text-gray-200 py-3 px-8 rounded-full font-medium hover:bg-gray-700/50 transition"
                    >
                        Learn More About Our Process
                    </a>
                </div>
            </AnimatedSection>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 border-t border-gray-800 pt-6">
          <p>© {new Date().getFullYear()} Pro Tech Solutions. Data-Driven Decisions, Maximum Results.</p>
        </footer>
      </article>
    </main>
  );
}