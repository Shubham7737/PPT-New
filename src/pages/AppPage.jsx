import React, { useState, useEffect } from 'react';
import { Mail, Smartphone, Code, Figma, Rocket, Layers, Globe, X, CheckCircle, TrendingUp, Zap, ShieldCheck, Cloud, Server } from 'lucide-react';

// Tailwind CSS is assumed to be available in the environment.

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

// Card for key features (Transparent background with border)
const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 h-full border border-gray-700 rounded-xl shadow-2xl backdrop-blur-sm transition duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-indigo-500/50">
    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-500">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

// Animated Stat/Graph Placeholder (Transparent background with border)
const StatPlaceholder = ({ title, value, growth, color, icon }) => (
  <div className="p-6 bg-transparent border border-indigo-500/50 rounded-xl shadow-lg transition duration-500 ease-in-out hover:shadow-indigo-500/70">
    <div className="flex justify-between items-center mb-4">
      <div className={`text-4xl font-extrabold ${color}`}>{value}</div>
      <div className={`p-2 rounded-full ${color}/20`}>{icon}</div>
    </div>
    <h4 className="text-lg font-semibold text-white">{title}</h4>
    <p className={`text-sm ${growth.includes('+') ? 'text-green-400' : 'text-red-400'} font-medium mt-1`}>
      {growth} Project Increase
    </p>
  </div>
);

// --- NEW Slider Card Component ---
// This card is used in the horizontal slider in Section 5
const SliderCard = ({ icon, title, description }) => (
  <div className="flex-shrink-0 w-80 p-6 bg-transparent border border-gray-700 rounded-xl shadow-lg transition-all duration-300 hover:shadow-indigo-500/50 snap-center">
    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-500">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
);


// --- Modal/Popup Component (Kept white for form readability) ---

const ConsultationModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm transition-opacity duration-300">
      <div className="w-full max-w-lg p-8 m-4 bg-white rounded-xl shadow-2xl transform transition-transform duration-300 scale-100 animate-slideDown">
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-extrabold text-gray-900">Launch Your App Idea</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
            <X size={24} />
          </button>
        </div>
        <p className="mt-2 mb-6 text-gray-600">Share your vision and we'll map out the development strategy.</p>

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
              placeholder="Describe your App idea and goals (e.g., 'A social network for local artists')"
              rows="4"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition text-gray-900" 
            ></textarea>
            <PrimaryButton type="submit" className="w-full">
              Start Discovery Phase
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function MobileAppLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [submissionMessage, setSubmissionMessage] = useState(null); 

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('App Idea Form Submitted');
    setIsModalOpen(false);
    setSubmissionMessage('Success! Your app idea is in expert hands. We will contact you soon.');
    setTimeout(() => setSubmissionMessage(null), 5000); 
  };
  
  // NOTE: longPlaceholder variable has been removed as paragraphs are no longer needed.


  return (
    // Main div remains transparent, relies on parent dark background
    <div className="min-h-screen font-sans antialiased text-white">
      
      {/* Custom Submission Message Box (non-alert) */}
      {submissionMessage && (
        <div className="fixed top-4 right-4 z-50 p-4 bg-green-600 text-white rounded-lg shadow-2xl transition-opacity duration-500 animate-slideDown">
          {submissionMessage}
        </div>
      )}

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} />

      {/* Fixed Header/Navigation (Transparent, but adds dark background on scroll) */}
      <header 
        className={`sticky top-0 z-40 w-full p-4 transition-all duration-300 ${
          scrollPosition > 50 ? 'bg-gray-900/90 shadow-xl backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-extrabold text-white tracking-widest">
            APP EDGE
          </div>
          <PrimaryButton onClick={() => setIsModalOpen(true)} className="!py-2 !px-4 !text-base">
            <Smartphone size={18} className="inline-block mr-2" />
            Start App Idea
          </PrimaryButton>
        </div>
      </header>

      {/* 1. Hero Section (Transparent Background) */}
      <section className="relative h-[80vh] flex items-center justify-center bg-transparent overflow-hidden border-b border-gray-800">
        
        {/* Animated Background Element (Adjusted opacity and color for visibility) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-96 h-96 bg-indigo-500 rounded-full blur-3xl absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
          <div className="w-64 h-64 bg-purple-400 rounded-full blur-3xl absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3 animate-spin-reverse"></div>
        </div>

        <div className="container mx-auto text-center relative z-10 p-6 md:p-12">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white animate-fadeInUp">
            **Transforming Ideas into Top-Rated Apps**
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 max-w-3xl mx-auto animate-fadeInUp delay-200">
            Native speed, stunning design, and scalable architecture for your next mobile breakthrough.
          </p>
          <PrimaryButton onClick={() => setIsModalOpen(true)} className="animate-pulse-slow">
            Request a Free Project Estimate
          </PrimaryButton>
        </div>
      </section>

      {/* 2. Core Service Overview (Platforms and Expertise) */}
      <section className="py-16 md:py-24 bg-transparent border-b border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
            Our **Development Expertise**
          </h2>
          
          <div className="grid  md:grid-cols-3 gap-8 text-center">
            {/* Cards updated for transparent background */}
            <div className="p-6 bg-blue-50/10 border border-gray-700 rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:bg-white/5">
              <Code size={40} className="mx-auto mb-4 text-green-400 animate-bounce-slow" />
              <h3 className="text-2xl font-bold mb-2 text-white">Native iOS/Android</h3>
              <p className="text-gray-300">Unmatched performance and access to platform-specific features using Swift/Kotlin.</p>
            </div>
            <div className="p-6 bg-blue-50/10 border border-gray-700 rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:bg-white/5">
              <Layers size={40} className="mx-auto mb-4 text-indigo-400 animate-bounce-slow delay-100" />
              <h3 className="text-2xl font-bold mb-2 text-white">Cross-Platform (React Native)</h3>
              <p className="text-gray-300">Efficiency and code reusability for faster deployment on both major app stores.</p>
            </div>
            <div className="p-6 bg-blue-50/10 border border-gray-700 rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:bg-white/5">
              <Figma size={40} className="mx-auto mb-4 text-purple-400 animate-bounce-slow delay-200" />
              <h3 className="text-2xl font-bold mb-2 text-white">UX/UI Design</h3>
              <p className="text-gray-300">Beautiful, intuitive interfaces crafted for maximum user engagement and retention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Dive Content Block - The Development Process (Paragraph Removed) */}
      <section className="py-16 bg-transparent border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Rich Content and Paragraphs (Paragraph Removed) */}
            <div>
              <h2 className="text-4xl font-extrabold mb-8 text-white">
                Our Agile **5-Step Development Roadmap**
              </h2>
              {/* The long intro paragraph has been removed */}
              
              <ul className="space-y-3 text-lg text-gray-200">
                <li className="flex items-start">
                  <CheckCircle size={24} className="text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                  **Discovery & Strategy:** Define scope, target audience, and monetization model.
                </li>
                <li className="flex items-start">
                  <CheckCircle size={24} className="text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                  **Design & Prototyping:** Wireframes, mockups, and iterative UX/UI refinement.
                </li>
                <li className="flex items-start">
                  <CheckCircle size={24} className="text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                  **Development & Integration:** Clean code, robust API integration, and continuous testing.
                </li>
                <li className="flex items-start">
                  <CheckCircle size={24} className="text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                  **Quality Assurance (QA):** Comprehensive testing on physical devices and simulators.
                </li>
                 <li className="flex items-start">
                  <CheckCircle size={24} className="text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                  **Launch & Post-Launch:** App store submission, compliance, and launch day support.
                </li>
              </ul>

              <PrimaryButton onClick={() => setIsModalOpen(true)} className="!bg-purple-600 hover:!bg-purple-700 mt-8">
                Request Detailed Process
              </PrimaryButton>
            </div>
            
            {/* Right: Mock Stats (Transparent with border) */}
            <div className="space-y-8">
              <div className='bg-blue-50/10'>
                <StatPlaceholder
                title="Average App Store Rating"
                value="4.9 / 5"
                growth="+0.2"
                color="text-yellow-400"
                icon={<Globe size={24} className="text-yellow-400" />}
              />
              </div>
              <div className='bg-blue-50/10'>
              <StatPlaceholder
                title="Avg. User Engagement Rate"
                value="92%"
                growth="+15%"
                color="text-green-400"
                icon={<TrendingUp size={24} className="text-green-400" />}
              />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* 4. Feature Cards (Technology Stack) */}
      <section className="py-20 bg-transparent border-b border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
            Our **Technology Stack** & Assurance
          </h2>
          <div className="grid md:grid-cols-3 gap-8"> 
            <div className='bg-blue-50/10'>
            <FeatureCard
              icon={<Code size={32} className="text-white" />}
              title="Modern Languages"
              description="We primarily use Swift, Kotlin, and TypeScript/React Native to ensure long-term stability and performance."
            />
            </div>
            <div className='bg-blue-50/10'>
            <FeatureCard
              icon={<Layers size={32} className="text-white" />}
              title="Cloud Native Backends"
              description="Scalable, secure, and resilient infrastructure built on Firebase, AWS, or Azure."
            />
            </div>
            <div className='bg-blue-50/10'>
            <FeatureCard
              icon={<Rocket size={32} className="text-white" />}
              title="Guaranteed App Store Approval"
              description="We handle all submission and policy compliance to ensure a smooth, headache-free launch."
            />
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEW: Card Slider Section (Replaces old paragraph section) */}
      <section className="py-16 md:py-24 bg-transparent border-b border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-white text-center">
            Beyond Launch: **Maintenance & Scaling**
          </h2>

          {/* Horizontal Scrolling Container */}
          <div className="w-full max-w-6xl mx-auto overflow-x-auto py-4 snap-x snap-mandatory scroll-p-8
                          scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-transparent">
            
            <div className="flex space-x-8 px-8 ">
              <div className=''>
              <SliderCard 
                icon={<ShieldCheck size={32} className="text-white" />} 
                title="Continuous Maintenance" 
                description="We handle OS updates, bug fixes, and security patches to keep your app running smoothly." 
              />
              </div>
              <SliderCard 
                icon={<TrendingUp size={32} className="text-white" />} 
                title="Performance Monitoring" 
                description="Real-time analytics to track crash rates, latency, and user engagement, ensuring optimal performance." 
              />
              <SliderCard 
                icon={<Globe size={32} className="text-white" />} 
                title="App Store Optimization (ASO)" 
                description="Improving your app's visibility and conversion rate on the App Store and Google Play." 
              />
              <SliderCard 
                icon={<Server size={32} className="text-white" />} 
                title="Scalable Infrastructure" 
                description="Our backend solutions scale automatically to handle millions of users without downtime." 
              />
              <SliderCard 
                icon={<Zap size={32} className="text-white" />} 
                title="New Feature Rollouts" 
                description="We help you plan, develop, and deploy new features iteratively to keep your users engaged." 
              />
            </div>
          </div>
          {/* Note: You may need 'npm install -D tailwind-scrollbar' for the scrollbar classes to work */}

        </div>
      </section>

      {/* 6. Final Call to Action (CTA) (Transparent background) */}
      <section className="py-20 bg-transparent border-t border-b border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Stop Dreaming, **Start Developing**.
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Your idea is too valuable to wait. Let's build it together.
          </p>
          <PrimaryButton 
            onClick={() => setIsModalOpen(true)}
            className="!bg-white !text-indigo-600 hover:!bg-gray-100 !text-xl shadow-2xl transition duration-500"
          >
            Launch My App Strategy Session
          </PrimaryButton>
        </div>
      </section>

      {/* Footer (Transparent background) */}
      <footer className="py-8 bg-transparent text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} App Edge Development. All rights reserved.</p>
        <p className="mt-2 text-sm">Case Studies | Tech Stack</p>
      </footer>

      {/* Tailwind utility classes for custom animations */}
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
        
        /* For the scrollbar, you might need to install tailwind-scrollbar */
        /* If not installed, the browser's default will be used */
        .scrollbar-thin {
            scrollbar-width: thin;
            scrollbar-color: #4f46e5 transparent;
        }
        .scrollbar-thin::-webkit-scrollbar {
            height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
            background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
            background-color: #4f46e5;
            border-radius: 4px;
        }
      `}</style>

    </div>
  );
}