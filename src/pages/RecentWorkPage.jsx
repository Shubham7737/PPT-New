import React, { useEffect, useRef, useState } from "react";

const Cards = [
  {
    image: "https://images.pexels.com/photos/3760376/pexels-photo-3760376.jpeg",
    title: "Marketplace",
    para: "End-to-end analytics.",
  },
  {
    image: "https://images.pexels.com/photos/7109087/pexels-photo-7109087.jpeg",
    title: "Storefront",
    para: "Headless e-commerce.",
  },
  {
    image: "https://images.pexels.com/photos/8424884/pexels-photo-8424884.jpeg",
    title: "Mobile App",
    para: "Interactive prototype.",
  },
];

const Card = ({ card, isMobile, index }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
  ref={ref}
  className={`flex flex-col rounded-xl overflow-hidden transform transition-all duration-700 ease-out
    ${visible ? "opacity-100 translate-x-0" : "-translate-x-16 opacity-0"}
    ${!isMobile ? "hidden sm:flex max-w-sm" : "flex-shrink-0"}`}
  style={{
    background: "linear-gradient(to right, #191e2b, #00c6e6)",
    border: "1px solid #0f2b46",
    boxShadow: "0 0 15px rgba(0,212,255,0.08)",
    width: isMobile ? "120px" : "auto",
    height: isMobile ? "160px" : "auto",
    padding: isMobile ? "4px" : "0",
    // transitionDelay: `${index * 150}ms`,  <-- REMOVE THIS LINE
  }}
>
      <img
        src={card.image}
        alt={card.title}
        className={`${
          isMobile ? "w-full h-28 rounded-md object-cover" : "w-full h-64 rounded-t-xl object-cover"
        } transform transition-transform duration-700 ${
          visible ? "translate-x-0" : "-translate-x-10"
        }`}
      />
      <div className={`flex flex-col items-start ${isMobile ? "mt-1" : "p-3"}`}>
        <h3
          className={`text-white font-bold ${
            isMobile ? "text-xs text-center w-full" : "text-lg"
          }`}
        >
          {card.title}
        </h3>
        <p
          className={`text-gray-200 ${
            isMobile ? "text-[10px] text-center w-full" : "text-sm"
          }`}
        >
          {card.para}
        </p>
      </div>
    </div>
  );
};

export default function RecentWork() {
  return (
    <section className="py-6 px-4 md:px-14" id="recent-work">
      <div className="text-center mb-6">
        <p className="text-4xl font-extrabold mb-2 text-[#e6f3ff] drop-shadow-[0_0_15px_rgba(0,212,255,0.13)]">
          Recent Work
        </p>
        <h1 className="text-xl sm:text-xl md:text-4xl font-bold text-[#9fb6c9] mt-2">
          A quick peek at the type of experiences we deliver
        </h1>
      </div>

      {/* Desktop / Tablet Grid */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {Cards.map((card, idx) => (
          <Card key={idx} card={card} isMobile={false} index={idx} />
        ))}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="flex sm:hidden space-x-4 overflow-x-auto px-2 justify-center items-center scrollbar-thin scrollbar-thumb-[#00d4ff] scrollbar-track-transparent">
        {Cards.map((card, idx) => (
          <Card key={idx} card={card} isMobile={true} index={idx} />
        ))}
      </div>
    </section>
  );
}
