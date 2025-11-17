import React, { useState, useEffect, useRef } from 'react'; // useRef added for scrolling
import { Mail, Zap, Search, Globe, LineChart, Cpu, X } from 'lucide-react';

// --- Helper Components ---

// Button component with hover animation
const PrimaryButton = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-xl hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-95 ${className}`}
  >
    {children}
  </button>
);

// Card for key features (Reduced Height and Padding - p-4, text-sm)
const FeatureCard = ({ icon, title, description }) => (
  <div className="p-4 h-full border border-gray-700 rounded-xl shadow-2xl backdrop-blur-sm transition duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-indigo-500/50">
    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-500">
      {icon}
    </div>
    <h3 className="mb-1 text-lg font-bold text-white">{title}</h3>
    <p className="text-gray-200 text-sm">{description}</p>
  </div>
);

// Animated Stat/Graph Placeholder 
const StatPlaceholder = ({ title, value, growth, color, icon }) => (
  <div className="p-6 bg-transparent border border-indigo-500/50 rounded-xl shadow-lg transition duration-500 ease-in-out hover:shadow-indigo-500/70">
    <div className="flex justify-between items-center mb-4">
      <div className={`text-4xl font-extrabold ${color}`}>{value}</div>
      <div className={`p-2 rounded-full ${color}/20`}>{icon}</div>
    </div>
    <h4 className="text-lg font-semibold text-white">{title}</h4>
    <p className={`text-sm ${growth.includes('+') ? 'text-green-400' : 'text-red-400'} font-medium mt-1`}>
      {growth} YOY Growth
    </p>
  </div>
);

// --- Modal/Popup Component ---

const ConsultationModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm transition-opacity duration-300">
      <div className="w-full max-w-lg p-8 m-4 bg-white rounded-xl shadow-2xl transform transition-transform duration-300 scale-100 animate-slideDown">
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-extrabold text-gray-900">Start Your Digital Journey</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
            <X size={24} />
          </button>
        </div>
        <p className="mt-2 mb-6 text-gray-600">Tell us about your business goals and we'll create a tailored strategy.</p>

        <form onSubmit={onSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Full Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition text-gray-900" 
            />
            <input
              type="email"
              placeholder="Business Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition text-gray-900" 
            />
            <textarea
              placeholder="Describe your needs (e.g., 'Need to increase leads by 50%')"
              rows="4"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition text-gray-900" 
            ></textarea>
            <PrimaryButton type="submit" className="w-full">
              Send My Request
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function DigitalDetailPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [submissionMessage, setSubmissionMessage] = useState(null); 
  const scrollRef = useRef(null); // Reference for the scrolling div

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    

    // Logic for Automatic Horizontal Sliding (Carousel) - runs only once after component mounts
    const container = scrollRef.current;
    let intervalId;
    
    if (container && window.innerWidth < 768) { // Only enable auto-slide on mobile (below md breakpoint)
      
      // Hide scrollbar for cleaner carousel look
      const style = document.createElement('style');
      style.innerHTML = `#scroll-container::-webkit-scrollbar { display: none; }`;
      document.head.appendChild(style);


      const totalCards = 3; 
      let currentCardIndex = 0;

      const slide = () => {
        const cardElement = container.querySelector('.feature-card-wrapper');
        if (!cardElement) return;

        const cardWidth = cardElement.offsetWidth + 24; // Card width + space-x-6 (1.5rem = 24px)

        currentCardIndex = (currentCardIndex + 1);

        if (currentCardIndex >= totalCards) {
          currentCardIndex = 0; // Loop back to the start
        }

        const newScrollPosition = currentCardIndex * cardWidth;
        
        container.scrollTo({
          left: newScrollPosition,
          behavior: 'smooth',
        });
      };

      // Set interval to slide every 4 seconds (4000ms)
      intervalId = setInterval(slide, 4000);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (intervalId) clearInterval(intervalId); // Cleanup interval
      
      // Cleanup injected style for scrollbar
      const styleElement = document.head.querySelector('style[innerHTML*="scroll-container"]');
      if (styleElement) document.head.removeChild(styleElement);
    };
  }, []); // Empty dependency array means this runs only once


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
    setIsModalOpen(false);
    setSubmissionMessage('Thank you for your inquiry! We will be in touch shortly.');
    setTimeout(() => setSubmissionMessage(null), 5000); 
  };
  
  const longPlaceholder = Array(50).fill('Our comprehensive approach to digital marketing ensures that every aspect of your online presence is optimized for maximum impact and sustained growth. We go beyond basic tactics, diving deep into data analytics, audience segmentation, and personalized content delivery to build a robust digital foundation that withstands market changes. This commitment to detail allows us to generate high-quality leads, foster brand loyalty, and significantly increase your return on investment (ROI). We view our partnership as a collaboration, continuously adapting our strategies based on real-time performance metrics and industry trends.').join(' ');


  return (
    <div className="min-h-screen font-sans antialiased text-white">
      
      {/* Custom Submission Message Box (non-alert) */}
      {submissionMessage && (
        <div className="fixed top-4 right-4 z-50 p-4 bg-green-500 text-white rounded-lg shadow-2xl transition-opacity duration-500 animate-slideDown">
          {submissionMessage}
        </div>
      )}

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} />

      {/* Fixed Header/Navigation */}
      <header 
        className={`sticky top-0 z-40 w-full p-3 sm:p-4 transition-all duration-300 ${scrollPosition > 50 ? 'bg-indigo-800 shadow-xl' : 'bg-transparent'}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-extrabold text-white tracking-widest">
            DIGITAL EDGE
          </div>
          <PrimaryButton onClick={() => setIsModalOpen(true)} className="!py-1 !px-3 !text-sm sm:!py-2 sm:!px-4 sm:!text-base">
            <Mail size={16} className="inline-block mr-1 sm:mr-2" />
            Get Started
          </PrimaryButton>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative h-[65vh] sm:h-[80vh] flex items-center justify-center bg-transparent shadow-2xl overflow-hidden">
        
        {/* Animated Background Element */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-96 h-96 bg-indigo-500 rounded-full blur-3xl absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
          <div className="w-64 h-64 bg-purple-400 rounded-full blur-3xl absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3 animate-spin-reverse"></div>
        </div>

        <div className="container mx-auto text-center relative z-10 p-6 md:p-12">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-3 text-white animate-fadeInUp">
            Dominate Your Market Digitally
          </h1>
          <p className="text-lg md:text-2xl font-light mb-6 text-gray-200 max-w-3xl mx-auto animate-fadeInUp delay-200">
            We build and execute cutting-edge digital marketing strategies that deliver measurable results and exponential growth.
          </p>
          <PrimaryButton onClick={() => setIsModalOpen(true)} className="animate-pulse-slow">
            Request a Free Consultation
          </PrimaryButton>
        </div>
      </section>

      {/* 2. Core Service Overview */}
      <section className="py-12 md:py-24 bg-transparent border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-white">
            Our Strategic Pillars of Success
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="p-6 bg-blue-50/10 border border-gray-700 rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:bg-white/5">
              <Search size={40} className="mx-auto mb-4 text-indigo-400 animate-bounce-slow" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Search Engine Optimization (SEO)</h3>
              <p className="text-gray-300">Achieve top rankings and sustainable organic traffic growth with our expert strategies.</p>
              <button className='px-4 py-2 font-semibold text-white bg-indigo-400 rounded-lg hover:bg-indigo-600 transition duration-300 mt-3'>More info</button>
            </div>
            <div className="p-6 bg-blue-50/10 border border-gray-700 rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:bg-white/5">
              <Zap size={40} className="mx-auto mb-4 text-indigo-400 animate-bounce-slow delay-100" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">High-Performance PPC</h3>
              <p className="text-gray-300">Maximize ad spend efficiency with targeted paid campaigns across all major platforms.</p>
              <button className='px-4 py-2 font-semibold text-white bg-indigo-400 rounded-lg hover:bg-indigo-600 transition duration-300 mt-3'>More info</button>
            </div>
            <div className="p-6 bg-blue-50/10 border border-gray-700 rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:bg-white/5">
              <Globe size={40} className="mx-auto mb-4 text-indigo-400 animate-bounce-slow delay-200" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Social Media & Branding</h3>
              <p className="text-gray-300">Build a powerful brand presence and engage your audience where they spend their time.</p>
              <button className='px-4 py-2 font-semibold text-white bg-indigo-400 rounded-lg hover:bg-indigo-600 transition duration-300 mt-3'>More info</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Dive Content Block - Part 1 */}
      <section className="py-12 bg-transparent border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            {/* Left: Rich Content and Paragraphs */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
                The In-Depth Strategy That Guarantees ROI
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                {longPlaceholder.substring(0, 750)}
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                Our process begins with an exhaustive audit of your current digital landscape. This phase is crucial, acting as the foundation for all subsequent actions. We analyze everything from site architecture and backlink profile to content gaps and user experience (UX). Our goal is to identify immediate wins and long-term strategic opportunities.
              </p>
              <PrimaryButton onClick={() => setIsModalOpen(true)} className="!bg-purple-600 hover:!bg-purple-700">
                See Case Studies
              </PrimaryButton>
            </div>
            
            {/* Right: Graph/Visual Placeholder 1 & 2 */}
            <div className="space-y-6 sm:space-y-8">
              <StatPlaceholder
                title="Client Lead Volume Increase"
                value="185%"
                growth="+45%"
                color="text-indigo-400"
                icon={<LineChart size={24} className="text-indigo-400" />}
              />
              <StatPlaceholder
                title="Average Ad Spend Efficiency (ROAS)"
                value="6.2x"
                growth="+18%"
                color="text-green-400"
                icon={<Cpu size={24} className="text-green-400" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Feature Cards - Auto-Sliding on Small Screens */}
      <section className="py-12 sm:py-20 bg-transparent border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-white">
            Why Our Clients Choose Digital Edge
          </h2>
          
          {/* 💥 Automatic Sliding Container for Mobile 💥 */}
          <div 
            ref={scrollRef} // Attach ref for automatic scrolling
            id="scroll-container" // ID for custom scrollbar hiding CSS
            className="flex overflow-x-hidden space-x-6 pb-4 md:grid md:grid-cols-3 md:gap-8 md:space-x-0 snap-x snap-mandatory"
          >
            
            {/* Card 1: Added snap-start and feature-card-wrapper */}
            <div className="bg-blue-50/10 min-w-[75%] sm:min-w-[45%] md:min-w-0 feature-card-wrapper snap-start">
            <FeatureCard
              icon={<Search size={32} className="text-white" />}
              title="Data-Driven Decisions"
              description="Every dollar and every keyword is validated by complex analytical models to ensure maximum impact and zero waste."
            />
            </div>
            
            {/* Card 2: Added snap-start and feature-card-wrapper */}
            <div className="bg-blue-50/10 min-w-[75%] sm:min-w-[45%] md:min-w-0 feature-card-wrapper snap-start">
            <FeatureCard
              icon={<Cpu size={32} className="text-white" />}
              title="AI-Powered Optimization"
              description="We leverage proprietary AI tools for predictive audience targeting and campaign optimization 24/7."
            />
            </div>
            
            {/* Card 3: Added snap-start and feature-card-wrapper */}
            <div className="bg-blue-50/10 min-w-[75%] sm:min-w-[45%] md:min-w-0 feature-card-wrapper snap-start">
            <FeatureCard
              icon={<Globe size={32} className="text-white" />}
              title="Global Scalability"
              description="Whether you serve a local community or the entire planet, our strategies are built to scale seamlessly."
            />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final Call to Action (CTA) */}
      <section className="py-16 sm:py-20 bg-transparent border-t border-b border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 text-white">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 mb-8">
            Stop guessing and start leading. Book a strategy session today.
          </p>
          <PrimaryButton 
            onClick={() => setIsModalOpen(true)}
            className="!bg-white !text-indigo-600 hover:!bg-gray-100 !text-lg sm:!text-xl shadow-2xl transition duration-500"
          >
            Schedule Your Strategy Session
          </PrimaryButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-transparent text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Digital Edge Marketing. All rights reserved.</p>
        <p className="mt-2 text-sm">Privacy Policy | Terms of Service</p>
      </footer>

      {/* Tailwind utility classes for custom animations (No Change) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { transform: translateY(-50px) scale(0.9); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-fadeInUp {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fadeInUp.delay-200 {
            animation-delay: 0.2s;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg) translate(-50%, -50%); }
          to { transform: rotate(360deg) translate(-50%, -50%); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg) translate(33%, 33%); }
          to { transform: rotate(0deg) translate(33%, 33%); }
        }
        .animate-spin-slow {
            animation: spin-slow 30s linear infinite;
        }
        .animate-spin-reverse {
            animation: spin-reverse 40s linear infinite;
        }
        @keyframes pulse-slow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7); }
            50% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
        }
        .animate-pulse-slow {
            animation: pulse-slow 3s infinite;
        }
        
      `}</style>

    </div>
  );
}