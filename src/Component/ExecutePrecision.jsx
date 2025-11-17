import React, { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  HardHat,
  ShieldCheck,
  Users,
  TrendingUp,
  BarChart2,
  Package,
  Rocket
} from "lucide-react";

// The main component name must be 'App'
export default function App() {
  // Set the document title on component mount
  useEffect(() => {
    document.title = "Execute with Precision - Flawless Implementation & Growth";
  }, []);

  // Hook for fade-in on scroll effect
  const useFadeIn = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              // Stop observing once visible
              observer.unobserve(entry.target);
            }
          });
        },
        // Trigger when 15% of the element is visible
        { threshold: 0.15 } 
      );

      if (ref.current) observer.observe(ref.current);
      // Cleanup function to stop observing when component unmounts
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []);

    return [ref, visible];
  };

  // Component to wrap sections with the fade-in animation and an icon
  const AnimatedSection = ({ children, title, icon: IconComponent }) => {
    const [ref, visible] = useFadeIn();
    return (
      <section
        ref={ref}
        className={`bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-2xl transition-all duration-1000 transform ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex items-center space-x-3 mb-4">
          {/* Icon component displayed in the accent color */}
          <IconComponent className="w-7 h-7 text-[#56f6a6] flex-shrink-0" />
          <h2 className="text-2xl font-bold text-gray-50">{title}</h2>
        </div>
        <div>
            {children}
        </div>
      </section>
    );
  };

  return (
    // Main container with a dark background and a subtle radial gradient
    <main className="min-h-screen bg-gray-950 text-gray-100 py-16 px-4 md:px-12 lg:px-24 font-sans relative overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-0 w-full h-96 bg-[#56f6a6] opacity-[0.03] blur-3xl rounded-full"></div>
      
      <article className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Hero Section */}
        <header className="text-center mb-16 pt-8">
          <div className="inline-flex items-center py-2 px-5 bg-opacity-10 bg-[#56f6a6] text-black text-sm font-semibold rounded-full mb-5 shadow-inner">
            <Rocket className="w-4 h-4 mr-2" /> Our Execution Methodology
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Execute with <span className="text-[#56f6a6]">Precision</span>
            <br className="hidden sm:block" /> Flawless Implementation & Scalable Growth
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            We transform strategic blueprints into tangible success. Our implementation framework leverages cutting-edge technology and rigorous quality assurance to deliver maximum Return on Investment (ROI) and measurable business expansion.
          </p>
        </header>

        {/* Section 1: Planning & Preparation */}
        <AnimatedSection title="Planning & Preparation" icon={ClipboardList}>
          <p className="text-gray-300 mb-4">
            Proper execution starts with thorough planning. We meticulously map every step of the project lifecycle, allocate resources efficiently, and identify potential risks in advance. This upfront work ensures every launch is smooth and error-free.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Detailed Resource Allocation and cross-functional team responsibilities.</li>
            <li>Agile Timeline Planning and continuous milestone tracking.</li>
            <li>Proactive Risk Analysis and robust mitigation strategies.</li>
            <li>Clearly defined Project KPIs and success metrics for accountability.</li>
          </ul>
        </AnimatedSection>

        {/* Section 2: Technical Implementation */}
        <AnimatedSection title="Technical Implementation" icon={HardHat}>
          <p className="text-gray-300 mb-4">
            From developing high-performance applications to deploying complex marketing campaigns, technical execution is critical. Our experts ensure all systems, integrations, and platforms are optimized for performance, speed, and reliability.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-4 text-gray-300">
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-white mb-2 border-b border-gray-700 pb-1">Web & App Development</h3>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Pixel-perfect Responsive UI/UX implementation.</li>
                <li>CMS, custom application, and e-commerce platform deployment.</li>
                <li>Seamless Third-party API Integration and workflow automation.</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-white mb-2 border-b border-gray-700 pb-1">Digital Marketing Deployment</h3>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Precision Ad Campaign Setup across major platforms (Google, Meta, etc.).</li>
                <li>Advanced Email Marketing and lead nurturing automation.</li>
                <li>Optimized content publishing and technical SEO implementation.</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Section 3: Quality Assurance & Testing */}
        <AnimatedSection title="Quality Assurance & Testing" icon={ShieldCheck}>
          <p className="text-gray-300 mb-4">
            Execution is incomplete without validation. We run extensive QA processes to guarantee that every product and campaign functions flawlessly across all user environments. This proactive approach identifies and resolves issues before they impact end-users.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Comprehensive Cross-Browser & Device Testing for universal compatibility.</li>
            <li>In-depth Performance Monitoring and rigorous load testing.</li>
            <li>Content and functional Accuracy Checks against compliance standards.</li>
            <li>Meticulous campaign tracking and conversion funnel verification.</li>
          </ul>
        </AnimatedSection>

        {/* Section 4: Collaboration & Communication */}
        <AnimatedSection title="Collaboration & Communication" icon={Users}>
          <p className="text-gray-300 mb-4">
            Smooth execution relies on tight collaboration and transparency. We employ agile methodologies and systematic reporting to ensure the entire team, stakeholders, and clients are perfectly aligned at every stage of deployment.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Disciplined Agile Project Management and regular sprint planning.</li>
            <li>Transparent daily and weekly progress reporting.</li>
            <li>Streamlined stakeholder approvals and continuous feedback integration.</li>
            <li>Efficient team collaboration using centralized project tools.</li>
          </ul>
        </AnimatedSection>
        
        {/* Section 5: Data-Driven Optimization */}
        <AnimatedSection title="Data-Driven Optimization" icon={TrendingUp}>
          <p className="text-gray-300 mb-4">
            Our execution model is inherently iterative. We continuously track real-time performance, gather actionable insights, and optimize campaigns, websites, and apps for superior results, higher conversions, and maximizing ROI.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Advanced Analytics Setup and customized KPI dashboard creation.</li>
            <li>Systematic A/B Testing and multivariate experimentation to validate hypotheses.</li>
            <li>Prompt content and user experience (UX) adjustments based on behavioral data.</li>
            <li>Continuous ad spend optimization and strategic retargeting initiatives.</li>
          </ul>
        </AnimatedSection>

        {/* Section 6: Reporting & Insights */}
        <AnimatedSection title="Reporting & Insights" icon={BarChart2}>
          <p className="text-gray-300 mb-4">
            Transparency is non-negotiable. We deliver detailed, easily understandable reports covering project status, campaign results, and direct business impact. This empowers clients to clearly measure success and confidently plan their next strategic steps.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Comprehensive weekly and monthly Performance Reports.</li>
            <li>Clear ROI Calculations and holistic business impact analysis.</li>
            <li>Setup of real-time dashboards for continuous monitoring.</li>
            <li>Strategic recommendations for future scaling and next actions.</li>
          </ul>
        </AnimatedSection>

        {/* Deliverables & CTA */}
        <AnimatedSection title="Next Steps & Deliverables" icon={Package}>
          <p className="text-gray-300 mb-6 text-center text-lg font-medium">
            After a successful implementation phase, you receive a complete package of documentation and strategic assets to ensure continuity and growth.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300 mb-8">
            <div className="p-5 border border-[#56f6a6]/30 bg-gray-800 rounded-xl shadow-inner hover:shadow-[#56f6a6]/20 transition duration-300">
              <h4 className="text-white font-bold mb-1">Final Implementation Reports</h4>
              <p className="text-sm text-gray-400">
                Detailed summary of all technical, marketing, and UX activities performed.
              </p>
            </div>
            <div className="p-5 border border-[#56f6a6]/30 bg-gray-800 rounded-xl shadow-inner hover:shadow-[#56f6a6]/20 transition duration-300">
              <h4 className="text-white font-bold mb-1">Actionable Optimization Insights</h4>
              <p className="text-sm text-gray-400">
                Data-backed recommendations and A/B test summaries to ensure continuous performance uplift.
              </p>
            </div>
            <div className="p-5 border border-[#56f6a6]/30 bg-gray-800 rounded-xl shadow-inner hover:shadow-[#56f6a6]/20 transition duration-300">
              <h4 className="text-white font-bold mb-1">Future Scaling Roadmap</h4>
              <p className="text-sm text-gray-400">
                A clear plan for scaling campaigns, applications, and technology efficiently over the next 12 months.
              </p>
            </div>
          </div>

          <p className="text-gray-300 mb-6 text-center text-xl">
            Ready to implement your strategy flawlessly? Let's connect and discuss your project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-block bg-[#56f6a6] text-gray-900 py-3 px-8 rounded-full font-bold shadow-lg shadow-[#56f6a6]/50 hover:bg-[#4dd297] transition duration-300 transform hover:scale-[1.02]"
            >
              Book a Consultation Now
            </a>
            <a
              href="#services"
              className="inline-block border border-gray-600 text-gray-200 py-3 px-8 rounded-full font-medium hover:bg-gray-800 transition duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 mt-12 py-4 border-t border-gray-800">
          <p>© {new Date().getFullYear()} [Pro Tech Touch]. All Rights Reserved.</p>
        </footer>
      </article>
    </main>
  );
}