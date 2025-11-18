import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, TrendingUp, Cpu, BookOpen } from 'lucide-react'; // Using lucide-react for icons

export default function SpeedScale() {
  useEffect(() => {
    document.title = "Speed & Scale — Pro Tech Touch";
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Consistent Framer Motion reveal variants
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
      q: "How fast can you deploy new features?",
      a: "By leveraging CI/CD pipelines, automated testing, and serverless functions, we typically reduce deployment cycles from weeks to hours, allowing for immediate iteration.",
    },
    {
      q: "What defines a 'Modern Stack' for scaling?",
      a: "A modern stack generally includes decoupled microservices (or serverless functions), high-performance databases (like Postgres or DynamoDB), and reactive front-ends (like React/Next.js) hosted on flexible cloud infrastructure (AWS/GCP).",
    },
    {
      q: "How do you handle sudden traffic spikes?",
      a: "We implement auto-scaling groups, load balancing, and effective caching strategies at the CDN and application levels. This ensures horizontal scaling capacity is ready before it's needed.",
    },
    {
      q: "What is a 'battle-tested playbook'?",
      a: "It's a documented, repeatable set of steps for critical processes, like incident response, performance tuning, or A/B testing setup. This eliminates guesswork and ensures consistent quality under pressure.",
    },
  ];

  return (
    // Background Dark Blue/Black Theme
    <main className="min-h-screen text-white py-12 px-4 md:px-12 lg:px-24 font-['Inter']">
      <article className="max-w-5xl mx-auto space-y-10">

        {/* Top Section - Speed & Scale */}
        <motion.header
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <motion.div variants={reveal.visible(0)}>
            <div className="inline-flex items-center px-4 py-2 rounded-full text-black font-semibold mb-4 shadow-lg bg-gradient-to-r from-green-300 to-teal-500">
              <Zap className="w-4 h-4 mr-2" />
              Speed & Scale
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-500">
              Engineering Velocity — Modern stacks and battle-tested playbooks to scale faster
            </h1>

            <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
              We eliminate technical debt and implement high-velocity deployment pipelines, ensuring your
              infrastructure is ready to handle 10x growth without breaking a sweat.
            </p>
          </motion.div>
        </motion.header>

        {/* Image + Intro: What "Speed & Scale" Means */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50/2 p-6 rounded-xl shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={reveal.visible(0.1)}>
            <h2 className="text-3xl font-bold mb-3 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-teal-400" />
                What Speed & Scale Means
            </h2>
            <p className="text-gray-300 leading-relaxed">
              "Speed & Scale" is the dual promise of rapid execution and limitless capacity. It means utilizing
              cutting-edge, efficient technology (Modern Stacks) and repeatable, documented processes (Playbooks) to
              accelerate feature development and maintain stability during explosive growth.
            </p>
            <ul className="mt-4 space-y-2 text-gray-300 list-none pl-0">
              <li className="flex items-center"><span className="text-teal-400 mr-2">•</span> Automated CI/CD Pipelines</li>
              <li className="flex items-center"><span className="text-teal-400 mr-2">•</span> Serverless and Decoupled Architectures</li>
              <li className="flex items-center"><span className="text-teal-400 mr-2">•</span> Infrastructure-as-Code (IaC)</li>
            </ul>
          </motion.div>

          <motion.div variants={reveal.visible(0.2)}>
            <img
              // *** UPDATED IMAGE SOURCE ***
              src="https://www.amplework.com/wp-content/uploads/2024/01/Mitigating-Solutions-to-Scalability-Issues-of-E-Commerce-Websites.png"
              alt="Diagram illustrating solutions to scalability issues for e-commerce websites"
              className="w-full h-72 object-cover rounded-xl shadow-xl border border-gray-700"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1e293b/a5f3fc?text=Scalability+Solutions'; }}
            />
          </motion.div>
        </motion.section>

        {/* Long Form Sections: The Engineering Promise */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          <motion.h3 variants={reveal.visible(0.2)} className="text-2xl font-bold text-cyan-400">
            Executive Summary — Our Scalability Promise
          </motion.h3>

          <motion.p variants={reveal.visible(0.25)} className="text-gray-300 leading-relaxed">
            We promise to transform your engineering culture from reactive to proactive. Our team focuses on building durable, flexible systems that not only function today but are designed for tomorrow’s demands. This includes aggressively tackling technical debt, standardizing deployment practices, and integrating monitoring tools to ensure 99.99% uptime.
          </motion.p>

          <motion.p variants={reveal.visible(0.3)} className="text-gray-300">
            From initial MVP architecture design to migrating legacy monolithic systems, we provide a complete engineering overhaul. Our blueprint is focused on reducing time-to-market for new products, optimizing cloud spend, and creating a robust, reliable foundation for sustained market leadership.
          </motion.p>
        </motion.section>

        {/* FAQ Accordion */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-3xl font-bold border-b border-gray-700 pb-2 flex items-center">
            <Cpu className="w-6 h-6 mr-2 text-teal-400" />
            Technical FAQs — Click to Expand
          </h3>

          <div className="space-y-3">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border bg-gray-50/2 rounded-xl bg-gray-800 hover:bg-gray-700 transition duration-200 shadow-lg p-5 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-lg text-white">{item.q}</h4>
                  <span className="text-2xl font-bold text-teal-400 transition-transform duration-300 transform" style={{
                      transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)"
                  }}>
                    {openIndex === index ? <BookOpen className="w-6 h-6" /> : <Zap className="w-6 h-6" />}
                  </span>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      className="mt-3 text-gray-400 overflow-hidden"
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
          viewport={{ once: true, amount: 0.1 }}
          className="text-center py-12 rounded-xl bg-gray-50/2 border-t-4 border-teal-500 shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white">Stop Scaling with Duct Tape. Start Scaling with Code.</h3>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Get a deep-dive analysis of your current stack's bottlenecks and a 12-month scaling roadmap.
          </p>

          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
            <a className="px-8 py-3 bg-teal-500 text-black rounded-full font-bold shadow-lg hover:scale-[1.02] transition duration-300 hover:bg-teal-400 cursor-pointer">
              Schedule Architecture Review
            </a>
            <a className="px-8 py-3 border border-gray-600 rounded-full text-gray-300 hover:bg-gray-700 transition duration-300 cursor-pointer">
              View Case Studies (10x Scale)
            </a>
          </div>
        </motion.section>

      </article>
    </main>
  );
}