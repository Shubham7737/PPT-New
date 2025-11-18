// BrandValueCard.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BrandValueCard() {
  useEffect(() => {
    document.title = "Results-first Services — Pro Tech Touch";
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const reveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  const faqs = [
    {
      q: "How soon will I see results?",
      a: "Some wins such as performance fixes and messaging improvements appear in 2–6 weeks. Larger compounding results need 60–120 days depending on your industry, budget, and competition.",
    },
    {
      q: "Do you guarantee revenue targets?",
      a: "We do not guarantee revenue because markets change, but we guarantee measurable KPIs, transparent reporting, and performance-aligned incentives that ensure mutual accountability.",
    },
    {
      q: "Which industries do you specialize in?",
      a: "We serve e-commerce, SaaS, D2C, service businesses, startups, and marketplaces. Our results-first approach is industry-agnostic and adapts to any model.",
    },
    {
      q: "What does onboarding look like?",
      a: "Discovery call, analytics access, funnel audit, strategy overview & a 30-60-90 day roadmap with KPI targets and execution calendar.",
    },
  ];

  return (
    <main className="min-h-screen text-white py-12 px-4 md:px-12 lg:px-24">
      <article className="max-w-5xl mx-auto space-y-10">

        {/* Top Section */}
        <motion.header
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <motion.div variants={reveal.visible(0)}>
            <div className="inline-block px-4 py-2 rounded-full text-black font-semibold mb-4 shadow-lg bg-gradient-to-r from-[#ff9966] to-[#ff6b6b]">
              Results-first Services
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
              Results-first — Data-driven execution that moves your business metrics
            </h1>

            <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
              We focus on measurable outcomes — revenue, conversions, retention, CAC, and scaling
              your growth through an aggressive results-first execution framework.
            </p>
          </motion.div>
        </motion.header>

        {/* Image + Intro */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={reveal.visible(0.1)}>
            <h2 className="text-2xl font-bold mb-3">What “Results-first” Means</h2>
            <p className="text-gray-300 leading-relaxed">
              “Results-first” is a performance philosophy where every task, campaign, and execution
              decision revolves around measurable output. No vanity metrics. No guesswork.
              Pure data-driven growth.
            </p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• KPI-aligned execution</li>
              <li>• Rapid experiments for quick uplift</li>
              <li>• Performance-focused reporting</li>
            </ul>
          </motion.div>

          <motion.div variants={reveal.visible(0.2)}>
            <img
              src="https://www.webindiamaster.com/public/uploads/ecommerce-web-development.jpg"
              alt="Service Visual"
              className="w-full h-72 object-cover rounded-xl shadow-xl"
            />
          </motion.div>
        </motion.section>

        {/* Long Form Sections */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          className="space-y-4"
        >
          <motion.h3 variants={reveal.visible(0.2)} className="text-2xl font-bold">
            Executive Summary — Our Results-first Promise
          </motion.h3>

          <motion.p variants={reveal.visible(0.25)} className="text-gray-300 leading-relaxed">
            We commit to delivering measurable business outcomes—not just deliverables. Our team's
            approach focuses on revenue-driving optimizations. Every feature, campaign, and execution
            is tied to a KPI. That means you always know what is working, what isn’t, and what action
            will produce the next win.
          </motion.p>

          <motion.p variants={reveal.visible(0.3)} className="text-gray-300">
            Our 2000+ word execution blueprint includes CRO, paid media strategy, lifecycle growth,
            retention modeling, and funnel optimization. Everything is designed to increase customer
            lifetime value and decrease acquisition costs.
          </motion.p>
        </motion.section>

        {/* FAQ Accordion */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold">FAQs — Click to Expand</h3>

          <div className="space-y-3">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-lg">{item.q}</h4>
                  <span className="text-2xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      className="mt-3 text-gray-300"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          className="text-center py-10 rounded-xl"
        >
          <h3 className="text-3xl font-bold">Ready for a Results-first Strategy?</h3>
          <p className="text-gray-300 mt-3 max-w-xl mx-auto">
            Book a consultation and get a free, actionable audit snapshot within 48 hours.
          </p>

          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
            <a className="px-6 py-3 bg-orange-400 text-black rounded-full font-semibold shadow-md hover:scale-105 transition">
              Book Strategy Call
            </a>
            <a className="px-6 py-3 border border-gray-500 rounded-full text-gray-300 hover:bg-gray-700 transition">
              Request Free Audit
            </a>
          </div>
        </motion.section>

      </article>
    </main>
  );
}
