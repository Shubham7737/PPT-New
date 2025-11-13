import React, { useEffect, useRef, useState } from 'react';

// Data for the four benefit cards
const benefitData = [
  {
    icon: '💎',
    title: 'Support Brand Value',
    description: 'Establish authority, build trust, and ensure consistent messaging across all digital touchpoints.',
  },
  {
    icon: '🤝',
    title: 'Boost User Relationship',
    description: 'Engage customers actively through personalized content and social platforms, fostering long-term loyalty.',
  },
  {
    icon: '🚀',
    title: 'Drive Web Traffic',
    description: 'Utilize SEO, paid ads, and content strategy to bring highly qualified visitors directly to your site.',
  },
  {
    icon: '🥇',
    title: 'Stay on Top',
    description: 'Keep pace with competitors, quickly adapt to market trends, and maintain a dominant presence online.',
  },
];

const BenefitCard = ({ item }) => {
  const cardRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`
        p-6 md:p-8 rounded-xl text-center flex flex-col items-center justify-start
        bg-gradient-to-r from-fuchsia-500 to-cyan-500  border-t-4 border-l-2 border-gray-700
        shadow-2xl relative transform transition-all duration-700
        ${visible ? 'opacity-100 scale-100 translate-y-0 shadow-cyan-500/50' : 'opacity-0 scale-90 translate-y-10'}
        hover:-translate-y-2 hover:scale-[1.02] hover:shadow-cyan-500/60
      `}
    >
      {/* Icon */}
      <div 
        className={`
          absolute -top-6 left-1/2 transform -translate-x-1/2 
          text-4xl p-4 rounded-full bg-[#ff9966] text-white font-bold 
          shadow-xl shadow-orange-500/50 border-2 border-white 
          flex items-center justify-center w-20 h-20
        `}
      >
        {item.icon}
      </div>

      {/* Content */}
      <div className="pt-10">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
          {item.title}
        </h3>
        <p className="text-sm md:text-base text-white">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default function DigitalMarketingBenefits() {
  return (
    <div className={`py-12 md:py-14 px-4 md:px-8 font-sans antialiased bg-[#0b1324]`}>
      {/* Header */}
      <div className="text-center mb-10 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text text-white">
          Why Your Business Needs Digital Marketing & E-commerce Services
        </h2>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
        {benefitData.map((item, index) => (
          <BenefitCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
