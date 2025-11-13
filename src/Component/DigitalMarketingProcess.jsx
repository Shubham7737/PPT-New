import React, { useEffect, useRef, useState } from 'react';

const processSteps = [
  {
    number: 1,
    title: 'Analyze & Strategize',
    description: 'Understand goals, research market, and build strong winning strategies.',
  },
  {
    number: 2,
    title: 'Execute with Precision',
    description: 'Implement campaigns flawlessly with creativity, technology, and accuracy.',
  },
  {
    number: 3,
    title: 'Measure & Optimize',
    description: 'Track results, analyze performance, and improve for maximum growth.',
  },
];

const StepCard = ({ step }) => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
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
        flex-1 flex flex-col items-center text-center p-2 md:p-3 relative z-10 w-full md:max-w-xs
        transition-transform duration-700 transform
        ${visible ? 'opacity-100 translate-y-0 scale-100' : '-translate-y-16 opacity-0 scale-90'}
        hover:-translate-y-2 hover:scale-[1.02] hover:shadow-cyan-500/50
      `}
    >
      <div className="relative w-full max-w-[260px] aspect-square flex items-center justify-center mx-auto mb-4 md:mb-6">
        <div className="absolute w-full h-full border border-gray-700 rounded-full shadow-2xl bg-gray-800 flex items-center justify-center transition-shadow duration-300">
          <div className="px-4 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white">
              {step.title}
            </h3>
            <p className="text-sm md:text-base text-gray-300">{step.description}</p>
          </div>
        </div>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#ff9966] text-white text-xl font-extrabold flex items-center justify-center shadow-lg shadow-orange-500/50">
          {step.number}
        </div>
      </div>

      {step.number < processSteps.length && (
        <div className="md:hidden w-1 h-8 border-l-2 border-dashed border-gray-600"></div>
      )}
    </div>
  );
};

const DigitalMarketingProcess3D = () => {
  return (
    <section className="py-4 md:py-6 px-4 md:px-8">
      <div className="text-center mb-6 md:mb-8">
        <div className="inline-block py-1 px-3 bg-[#ff9966] text-white text-sm font-semibold rounded-full mb-2 shadow-lg">
          How We Work
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
          Our Proven Approach to Success
        </h2>
      </div>

      <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 lg:space-x-10 max-w-7xl mx-auto">
        <div className="hidden md:block absolute top-[110px] w-full h-1 border-t-2 border-dashed border-gray-600 transform -translate-y-1/2 left-0 right-0 mx-auto max-w-5xl"></div>

        {processSteps.map((step, index) => (
          <StepCard key={step.number} step={step} />
        ))}
      </div>
    </section>
  );
};

export default DigitalMarketingProcess3D;
