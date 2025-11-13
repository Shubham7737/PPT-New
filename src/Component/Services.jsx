import React, { useEffect, useRef, useState } from "react";

// Data for the service cards
const servicesData = [
  {
    title: "E-commerce Management",
    features: [
      "Seller account setup & compliance",
      "Catalog, SEO, A+ content",
      "Ads, promotions & analytics",
      "Inventory & performance ops",
    ],
    buttonText: "Get a plan",
    buttonHref: "#contact",
  },
  {
    title: "Website Development",
    features: [
      "Fast, responsive, SEO-ready",
      "Headless & CMS integrations",
      "Landing pages that convert",
      "Analytics & automation",
    ],
    buttonText: "Start a project",
    buttonHref: "#project",
  },
  {
    title: "App Development",
    features: [
      "iOS/Android with one codebase",
      "Prototyping to production",
      "Clean UI/UX design system",
      "Firebase, payments, auth",
    ],
    buttonText: "Build an app",
    buttonHref: "#app",
  },
  {
    title: "Digital Marketing",
    features: [
      "SEO + Content + PR",
      "Meta/Google Ads & funnels",
      "Marketing automation",
      "Reporting & insights",
    ],
    buttonText: "Boost growth",
    buttonHref: "#growth",
  },
];

// Individual Card Component
const ServiceCard = ({ title, features, buttonText, buttonHref, index }) => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // IntersectionObserver for scroll popup effect
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
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  const isHighlighted = index >= 2;

  const cardClasses = `border border-[#0f2b46] shadow-[0_0_15px_rgba(0,212,255,0.08)] bg-gradient-to-r from-[#191e2b] to-[#00c6e6]`;

  const hoverClasses =
    "hover:shadow-[0_0_25px_rgba(0,212,255,0.15)] hover:border-[#00d4ff]";

  return (
    <div
      ref={cardRef}
      className={`p-6 rounded-xl transition-all duration-700 transform ${
        visible ? "opacity-100 scale-100 translate-y-0 rotate-0" : "opacity-0 scale-90 translate-y-10 rotate-2"
      } ${cardClasses} ${hoverClasses}`}
      style={{ perspective: "800px" }}
    >
      <h3 className="text-xl font-bold mb-4 text-[#e6f3ff]">{title}</h3>
      <ul className="text-[#9fb6c9] space-y-3 mb-6 min-h-[140px]">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="text-[#00d4ff] mr-2 text-xl leading-none">•</span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
     <a
  href={buttonHref}
  className="inline-block text-center rounded-lg px-6 py-2 border border-[#0f2b46] 
             bg-gradient-to-r from-[#00d4ff] to-[#00ff8c] text-gray-900 font-medium 
             hover:opacity-90 transition duration-150 ease-in-out"
>
  {buttonText}
</a>

    </div>
  );
};

// Main Services Section Component
export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 py-12 md:py-16 px-4 md:px-16 overflow-hidden bg-[#0b1324] text-white"
    >
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="dot-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#00d4ff"></circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)"></rect>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-4xl font-bold mb-2 text-[#e6f3ff] drop-shadow-[0_0_15px_rgba(0,212,255,0.13)]">
            Services
          </h2>
          <p className="text-[#9fb6c9]">
            Everything you need to launch, grow, and scale your digital business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              features={service.features}
              buttonText={service.buttonText}
              buttonHref={service.buttonHref}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
