import React, { useEffect } from "react";

// Data for Why Choose items
const whyUsData = [
  {
    title: "Results-first",
    description: "We obsess over business metrics, not vanity stats.",
  },
  {
    title: "Speed & Scale",
    description: "Modern stacks and battle-tested playbooks to go faster.",
  },
  {
    title: "Ownership",
    description: "We ship, measure, iterate — like partners, not vendors.",
  },
  {
    title: "Clarity",
    description: "Transparent roadmap, crisp reporting, and weekly wins.",
  },
];

// Individual Why Card
const WhyCard = ({ title, description, delay }) => {
  return (
    <div
      className={`p-8 rounded-xl shadow-md transform transition duration-500 ease-out opacity-0 tilt h-[200px] border border-[#0f2b46] bg-gradient-to-r from-fuchsia-500 to-cyan-500 
                  hover:scale-105 hover:shadow-lg`}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      <h4 className="text-white font-bold mb-4 text-xl md:text-2xl lg:text-3xl">
        {title}
      </h4>
      <p className="text-white text-base md:text-lg lg:text-xl">{description}</p>
    </div>
  );
};

export default function WhyChoose() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".tilt").forEach(el => {
      el.classList.add("opacity-0", "translate-y-10");
      observer.observe(el);
    });
  }, []);

  return (
    <section id="why" className="py-12 md:py-16 px-4 md:px-16 relative z-10">
      {/* Header */}
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-[0_0_15px_rgba(0,212,255,0.13)]">
          Why choose Pro Tech Touch?
        </h2>
        <p className="text-white text-base md:text-lg lg:text-xl">
          We blend engineering, design, and growth into one powerful team.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyUsData.map((item, index) => (
          <WhyCard
            key={index}
            title={item.title}
            description={item.description}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
}
