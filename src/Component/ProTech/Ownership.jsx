// Ownership.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegHandshake, FaChartLine, FaMagic, FaBrain, FaRegCheckCircle } from "react-icons/fa";

export default function Ownership() {
  useEffect(() => {
    document.title = "Ownership Services — Pro Tech Touch";
  }, []);

  const reveal = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: "easeOut" },
    }),
  };

  const faqAnswerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.4 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    { question: "What does 'Ownership' mean in your workflow?", answer: "Ownership means we treat your project like our own. We are accountable for outcomes, not just tasks." },
    { question: "Will my team be involved?", answer: "Yes! We collaborate closely with your team for knowledge transfer, transparency, and shared responsibility." },
    { question: "How do you ensure accountability?", answer: "We set measurable KPIs, track progress via shared dashboards, and provide weekly updates." },
    { question: "Does this approach fit all industries?", answer: "Absolutely. Ownership is a versatile mindset. Our process adapts to SaaS, e-commerce, D2C, and B2B companies." },
  ];

  const processSteps = [
    { icon: FaRegHandshake, title: "1. Planning", description: "Define clear objectives, timelines, and expected outcomes collaboratively." },
    { icon: FaChartLine, title: "2. Execution", description: "Full responsibility for development and campaigns, ensuring quality and timeliness." },
    { icon: FaMagic, title: "3. Measurement", description: "Track every deliverable against KPIs, providing data-backed insights and reports." },
    { icon: FaBrain, title: "4. Improvement", description: "Use feedback loops and iterative enhancements to optimize projects dynamically for max ROI." },
  ];

  const services = [
    { icon: FaRegCheckCircle, title: "Project Ownership", description: "Manage all stages from start to finish, driving towards the desired outcome." },
    { icon: FaChartLine, title: "KPI Tracking", description: "Real-time dashboards and in-depth reporting to prove progress and performance." },
    { icon: FaMagic, title: "Optimization Cycles", description: "Continuous A/B testing and refinement based on data-driven insights." },
    { icon: FaRegHandshake, title: "Knowledge Transfer", description: "Thorough documentation and team collaboration for a smooth handover." },
  ];

  return (
    <main className="min-h-screen py-16 px-4 md:px-12 lg:px-24 text-white">
      <article className="max-w-6xl mx-auto space-y-20">

        {/* Hero Section */}
        <motion.header
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
        >
          <motion.div variants={reveal.visible(0)}>
            <div className="inline-block px-5 py-2 rounded-full text-black font-extrabold mb-4 text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2">
              <FaRegHandshake /> Ownership Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-4">
              True Partnership: We Own the Outcome
            </h1>
            <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-300">
              Our ownership model ensures full accountability for your project's success. From strategy to delivery, every decision is driven by data and a commitment to results.
            </p>
          </motion.div>
        </motion.header>

        {/* Image + Introduction */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 rounded-2xl border border-gray-600"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={reveal.visible(0.1)} className="order-2 md:order-1 space-y-4">
            <h2 className="text-3xl font-bold mb-3 text-purple-400">Why Ownership Matters</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Ownership drives results because we take full responsibility for every project stage. No passing the buck—we act like partners invested in your growth.
            </p>
            <ul className="mt-6 space-y-3 text-gray-200">
              <li className="flex items-center"><FaRegCheckCircle className="text-pink-500 mr-3" /> Full accountability for outcomes</li>
              <li className="flex items-center"><FaRegCheckCircle className="text-pink-500 mr-3" /> Transparent, data-driven reporting</li>
              <li className="flex items-center"><FaRegCheckCircle className="text-pink-500 mr-3" /> Continuous optimization for max ROI</li>
            </ul>
          </motion.div>

          <motion.div variants={reveal.visible(0.2)} className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-500/50 transform hover:scale-[1.01] transition duration-500">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D12AQHRQtVoNhZ21Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727273436147?e=2147483647&v=beta&t=7ip3VozH0ft6i-zfmYh5YcfODuh3gi4WfHNKDIQl8BU"
                alt="Ownership Services"
                className="w-full h-72 object-cover md:h-96"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Process */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} className="space-y-10">
          <motion.h3 variants={reveal.visible(0.05)} className="text-3xl font-bold text-center text-purple-300">
            Our 4-Step Process
          </motion.h3>
          <motion.div variants={reveal.visible(0.1)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl border border-purple-500/30 shadow-xl transition hover:shadow-purple-500/20">
                <step.icon className="text-4xl text-pink-500 mb-4" />
                <h4 className="font-semibold text-xl mb-2">{step.title}</h4>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Services */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} className="space-y-10">
          <motion.h3 variants={reveal.visible(0.05)} className="text-3xl font-bold text-center text-purple-300">
            Core Services
          </motion.h3>
          <motion.div variants={reveal.visible(0.1)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
                <div key={index} className="p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition duration-300">
                    <service.icon className="text-3xl text-purple-400 mb-3" />
                    <h4 className="font-bold text-xl mb-2">{service.title}</h4>
                    <p className="text-gray-300">{service.description}</p>
                </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Case Study */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal} className="space-y-4 p-8 rounded-2xl border border-purple-600">
          <motion.h3 variants={reveal.visible(0.05)} className="text-3xl font-bold text-yellow-300">
            Case Study: 5x ROI in 6 Months
          </motion.h3>
          <motion.div variants={reveal.visible(0.1)} className="text-gray-200 space-y-4 text-lg">
            <p>
              We took full responsibility for a mid-market e-commerce brand's campaigns. Our ownership model and continuous iteration led to their revenue growing <strong>5x in just 6 months</strong>.
            </p>
            <p>
              Transparent reporting and weekly checkpoints ensured alignment, proving the power of a team that deeply <strong>owns</strong> the results.
            </p>
          </motion.div>
        </motion.section>

        {/* FAQ */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal} className="space-y-6">
          <motion.h3 variants={reveal.visible(0.05)} className="text-3xl font-bold text-center text-purple-300">FAQs</motion.h3>
          <div className="space-y-3 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <motion.div key={idx} className="border border-gray-700 rounded-xl overflow-hidden shadow-lg transition duration-300 hover:border-pink-500/50">
                <div className="flex justify-between items-center p-5 cursor-pointer" onClick={() => toggleFAQ(idx)}>
                  <h4 className="font-bold text-lg text-gray-100">{faq.question}</h4>
                  <span className="text-pink-500 font-extrabold text-2xl transition-transform duration-300 transform" style={{ transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                </div>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div initial="hidden" animate="visible" exit="exit" variants={faqAnswerVariants} className="p-5 pt-0">
                      <p className="mt-2 text-gray-300 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal} className="py-16 rounded-2xl text-center border-4 border-purple-500/50 shadow-2xl">
          <motion.h3 variants={reveal.visible(0.05)} className="text-3xl md:text-4xl font-extrabold">
            Ready to partner with a team that <strong>owns</strong> results?
          </motion.h3>
          <motion.p variants={reveal.visible(0.1)} className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Book a call now to see how our ownership model accelerates your business outcomes.
          </motion.p>
          <motion.div variants={reveal.visible(0.15)} className="mt-8 flex items-center justify-center gap-6 flex-col md:flex-row">
            <a href="#contact" className="inline-block text-black font-extrabold py-4 px-8 rounded-full shadow-2xl hover:scale-[1.03] transition duration-300 uppercase tracking-wider border border-purple-500">
              Book Strategy Call
            </a>
            <a href="#contact" className="inline-block border-2 border-gray-500 text-gray-200 py-4 px-8 rounded-full hover:bg-gray-700 transition duration-300">
              Request Audit Snapshot
            </a>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <footer className="text-sm text-gray-500 text-center pt-8">
          <p>© {new Date().getFullYear()} Pro Tech Touch — Ownership services. Built with accountability.</p>
        </footer>
      </article>
    </main>
  );
}
