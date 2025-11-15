import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Data for the service cards
const servicesData = [
  {
    title: "E-commerce Management",
    features: [
      "Seller account setup & compliance (Amazon, Flipkart, Shopify, etc.)",
      "Product catalog creation & SEO optimization",
      "A+ content creation, ads & promotions",
      "Inventory management & performance analytics",
    ],
    buttonText: "Get a plan",
  },
  {
    title: "Website Development",
    features: [
      "Custom responsive websites for all devices",
      "SEO-ready & fast-loading pages",
      "SPA (Single Page Application) & CMS integrations (WordPress, Strapi)",
      "Landing pages & analytics to convert visitors",
    ],
    buttonText: "Start a project",
  },
  {
    title: "Digital Marketing",
    features: [
      "SEO, Content Marketing & PR campaigns",
      "Meta Ads, Google Ads & sales funnels",
      "Email & social media marketing automation",
      "Performance tracking & reporting dashboards",
    ],
    buttonText: "Boost growth",
  },
  {
    title: "Mobile App Development",
    features: [
      "iOS & Android apps with single codebase (React Native / Flutter)",
      "Prototyping to production deployment",
      "Clean UI/UX design system",
      "Firebase integration, payment gateways & authentication",
    ],
    buttonText: "Build an app",
  },
];

// Individual Card Component
const ServiceCard = ({ title, features, buttonText }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Scroll animation
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

  // Button click logic
  const handleButtonClick = () => {
    if (title === "E-commerce Management") navigate("/ecommerce-service");
    else if (title === "Website Development") navigate("/website-development");
    else if (title === "Digital Marketing") navigate("/digital-marketing")
      else if (title === "Mobile App Development") navigate("/app-page")
    else alert(`${title} button clicked!`);
  };

  const cardClasses =
    "rounded-[20px] border-[3px] border-[#123355] shadow-[0_0_15px_rgba(0,212,255,0.08)] bg-gradient-to-r from-[#191e2b] to-[#00c6e6]";
  const hoverClasses =
    "hover:shadow-[0_0_25px_rgba(0,212,255,0.15)] hover:border-[#00d4ff]";

  return (
    <div
      ref={cardRef}
      className={`p-6  transition-all duration-700 transform ${
        visible
          ? "opacity-100 scale-100 translate-y-0 rotate-0"
          : "opacity-0 scale-90 translate-y-10 rotate-2"
      } ${cardClasses} ${hoverClasses}`}
      style={{ perspective: "800px" }}
    >
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>

      <ul className="text-white space-y-3 mb-6 min-h-[140px]">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="text-[#00d4ff] mr-2 text-xl leading-none">•</span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleButtonClick}
         className="inline-block text-center rounded-lg px-4 py-1 border border-[#0f2b46]
        bg-gradient-to-r from-[#00d4ff] to-[#00ff8c] text-white font-medium
        hover:opacity-90 transition duration-150 ease-in-out text-sm"
      >
        {buttonText}
      </button>
    </div>
  );
};

// Main Services Section Component
export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 py-12 md:py-16 px-4 md:px-16 overflow-hidden text-black"
    >
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern
              id="dot-pattern"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              features={service.features}
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}