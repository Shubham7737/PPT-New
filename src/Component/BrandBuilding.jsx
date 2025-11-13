import React from "react";
import { FaLightbulb, FaPalette, FaBullhorn, FaUsers } from "react-icons/fa";

const brandCards = [
  {
    icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
    title: "Strategy & Planning",
    description: "Data-driven strategies to define your brand’s voice.",
  },
  {
    icon: <FaPalette className="text-pink-500 text-4xl" />,
    title: "Visual Identity",
    description: "Creative designs and visuals that resonate with your audience.",
  },
  {
    icon: <FaBullhorn className="text-red-500 text-4xl" />,
    title: "Digital Marketing",
    description: "Performance marketing to grow your brand reach and engagement.",
  },
  {
    icon: <FaUsers className="text-blue-500 text-4xl" />,
    title: "Community & Engagement",
    description: "Building loyal communities through social media and content.",
  },
];

export default function BrandBuilding() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">We Build Brands That Stand Out</h2>
        <p className="text-white mb-12">
          Helping businesses grow, engage audiences, and leave a lasting impact online.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brandCards.map((card, index) => (
            <div key={index} className="border-[#0f2b46] bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-white">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white font-semibold rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Start Building Your Brand
          </a>
        </div>
      </div>
    </section>
  );
}
