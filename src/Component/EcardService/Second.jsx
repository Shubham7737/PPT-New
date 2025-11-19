import React, { useState } from 'react';
import { Target, TrendingUp, Settings, BarChart, Users, Zap } from 'lucide-react';

// Main application component
const App = () => {
  const [message, setMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Data structure for the content cards
  const marketingCards = [
    {
      icon: Target,
      title: "Precision Audience Targeting",
      content: "In today’s digital era, reaching the right audience is crucial. We leverage powerful platforms like Google Ads, Facebook Ads, and Instagram campaigns to ensure your brand connects with the most relevant users efficiently, maximizing visibility and engagement.",
      delay: 100
    },
    {
      icon: Settings,
      title: "Customized Strategy & Setup",
      content: "Our expert team starts by deeply analyzing your business goals, target audience demographics, and competitive landscape. We craft personalized campaigns covering everything from meticulous keyword research to sophisticated audience segmentation and compelling ad copy creation.",
      delay: 200
    },
    {
      icon: TrendingUp,
      title: "Continuous ROI Optimization",
      content: "Campaign success requires constant adjustment. We continuously monitor and optimize performance, adjusting bidding strategies, running A/B tests on creatives, and fine-tuning targeting to reach potential customers who are most likely to convert, ensuring every dollar is effectively utilized.",
      delay: 300
    },
    {
      icon: Users,
      title: "Integrated Paid & Organic",
      content: "Beyond paid advertising, we integrate organic strategies to strengthen your brand presence. This includes robust remarketing campaigns, engaging users on social media platforms, and optimizing ad placement to create a comprehensive, growth-driving marketing ecosystem.",
      delay: 400
    },
    {
      icon: BarChart,
      title: "Data-Driven Transparency",
      content: "Our services are customizable for startups, growing businesses, and established enterprises. We provide detailed analytics and transparent reporting, empowering you to understand campaign performance and make informed, data-driven decisions that lead to adaptive and profitable campaigns.",
      delay: 500
    },
    {
      icon: Zap,
      title: "Tangible Business Results",
      content: "Whether your primary goal is increasing brand awareness, generating high-quality leads, or boosting sales, our strategies are designed to deliver measurable, tangible results. We keep your campaigns competitive and innovative by staying ahead of the latest trends and technologies.",
      delay: 600
    },
  ];

  const handleCtaClick = () => {
    setMessage("Thank you! We'll reach out shortly to discuss your detailed strategy.");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setMessage(null);
  };

  return (
    <div className="min-h-screen p-8 md:p-12 font-inter">
      
      {/* Page Heading */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-700 animate-fadeInUp">
          Targeted Marketing & Advertising
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto animate-fadeInUp delay-100">
          Maximize visibility and conversion rates by connecting your brand with the right audience, every time.
        </p>
      </header>

      {/* Cards Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {marketingCards.map((card, index) => (
          <div
            key={index}
            className={`
              p-6 lg:p-8
              bg-gray-50/1
              border border-gray-100
              rounded-2xl
              shadow-xl hover:shadow-2xl transition-all duration-500
              transform hover:scale-[1.02]
              flex flex-col space-y-4
              opacity-0 animate-fadeInUp
            `}
            style={{ animationDelay: `${card.delay}ms` }}
          >
            <card.icon className="w-10 h-10 text-indigo-500 mb-2 p-2 bg-indigo-50 rounded-lg shadow-sm" />
            <h2 className="text-2xl font-bold text-gwhite">{card.title}</h2>
            <p className="text-white leading-relaxed flex-grow">{card.content}</p>
          </div>
        ))}
      </main>
      
      {/* CTA Section */}
      <section className="text-center mt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fadeInUp delay-700">
          Ready to Transform Your Marketing?
        </h2>
        <button
          onClick={handleCtaClick}
          className="
            px-10 py-4
            bg-gradient-to-r from-indigo-600 to-purple-600 text-white
            rounded-full
            font-semibold text-lg
            shadow-lg hover:shadow-xl
            hover:from-indigo-700 hover:to-purple-700
            transform transition duration-300 ease-in-out
            hover:scale-[1.05] active:scale-[0.98]
            animate-fadeInUp delay-800
          "
        >
          Schedule a Strategy Call
        </button>
      </section>

      {/* Custom Modal/Message Box */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full text-center transform transition-all scale-100 animate-slideUp">
            <p className="text-xl font-semibold text-gray-800 mb-6">{message}</p>
            <button
              onClick={closeModal}
              className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Animations - Kept and enhanced for modal */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;