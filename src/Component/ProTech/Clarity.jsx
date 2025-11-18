import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Lucide Icons for strategic and clear visuals
import { Zap, Target, MessageSquare, Lightbulb, CheckCircle, ChevronDown } from 'lucide-react';

// --- Animated Icon Feature Component ---
const ClarityFeature = ({ icon: Icon, title, description, delay }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: delay } },
  };

  return (
    <motion.div
      // Dark Card Background and Border with Lighter Text
      className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:border-blue-500 flex flex-col items-start space-y-3"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Icon color adjusted for dark BG */}
      <Icon className="w-8 h-8 text-blue-400 bg-blue-900/50 p-1 rounded-md" />
      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

// --- Main Component ---
export default function Clarity() {
  useEffect(() => {
    document.title = "Clarity: Simple Strategy, Powerful Execution";
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // General reveal animation for sections
  const reveal = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  const faqs = [
    {
      q: "How do you define 'No Jargon' communication?",
      a: "We avoid technical buzzwords and abstract terms. All reports and communication use plain language focused on 'What we did' and 'What the result was.'",
    },
    {
      q: "What is a Clarity Audit?",
      a: "It's a comprehensive review of your existing documentation, meeting structures, and reporting dashboards to identify areas of confusion and overlap.",
    },
    {
      q: "How does clarity impact execution speed?",
      a: "When the strategy is clear, every team member knows their exact priority. This reduces decision-making lag, minimizes rework, and dramatically increases overall execution velocity.",
    },
  ];

  return (
    // Main container now has no background color (transparent/white) and uses white text
    <main className="min-h-screen text-white py-12 px-4 md:px-12 lg:px-24 font-['Inter']">
      <article className="max-w-5xl mx-auto space-y-12">

        {/* Header Section */}
        <motion.header
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <motion.div variants={reveal.visible(0)}>
            <div className="inline-flex items-center px-4 py-2 rounded-full text-white font-semibold mb-4 shadow-md bg-gradient-to-r from-blue-500 to-indigo-600">
              <Lightbulb className="w-4 h-4 mr-2" />
              Core Value: Clarity
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Unlocking Clarity: Simple Strategy, Powerful Execution
            </h1>

            <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg">
              We cut through the noise, eliminate complexity, and establish transparent processes so your
              team can focus only on actions that drive needle-moving results.
            </p>
          </motion.div>
        </motion.header>

        {/* Core Principles Section */}
        <section className="pt-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-400">
                Our Three Pillars of Clarity
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ClarityFeature
                    icon={Target}
                    title="Focused Metrics"
                    description="Identify the 3-5 highest-leverage Key Performance Indicators (KPIs) and ignore all the rest. If it doesn't move these, it's not a priority."
                    delay={0.1}
                />
                <ClarityFeature
                    icon={MessageSquare}
                    title="Communication Minimalism"
                    description="Concise, actionable updates in one channel. We demand 'No Jargon' reporting—just plain, clear language that anyone can understand."
                    delay={0.3}
                />
                <ClarityFeature
                    icon={CheckCircle}
                    title="Process Transparency"
                    description="Every roadmap, timeline, and decision is visible to all stakeholders. Accountability is built in when everyone can see the progress."
                    delay={0.5}
                />
            </div>
        </section>

        {/* Benefits/Impact Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true, amount: 0.3 }}
          // Dark background for this section
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700"
        >
            <motion.div variants={reveal.visible(0.1)}>
                <h2 className="text-3xl font-bold mb-4 flex items-center text-blue-400">
                    <Zap className="w-6 h-6 mr-2" />
                    Why Clarity is Your Superpower
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Confusion is the single greatest killer of execution speed. By focusing ruthlessly on clarity,
                    we solve alignment issues before they start. This approach frees up leadership time, accelerates
                    product iteration, and reduces costly errors caused by misinterpretation.
                </p>
                <ul className="mt-4 space-y-2 text-gray-300 list-none pl-0">
                    <li className="flex items-center"><span className="text-green-400 text-xl leading-none mr-2">•</span> Reduces decision latency by 40%.</li>
                    <li className="flex items-center"><span className="text-green-400 text-xl leading-none mr-2">•</span> Increases team psychological safety.</li>
                    <li className="flex items-center"><span className="text-green-400 text-xl leading-none mr-2">•</span> Converts complexity into competitive advantage.</li>
                </ul>
            </motion.div>
            
            <motion.div variants={reveal.visible(0.2)}>
                {/* Image using the user-provided URL */}
                <img
                  src="https://burhani.co/wp-content/uploads/2022/12/Business-Technology-Roadmap-Consulting-in-Dubai-UAE.png"
                  alt="A detailed Business Technology Roadmap diagram, illustrating the strategic path."
                  className="w-full h-72 object-cover rounded-xl shadow-lg border border-gray-700"
                  // Fallback for image loading error
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/1f2937/d1d5db?text=Roadmap+Image+Not+Available"; }}
                />
            </motion.div>
        </motion.section>

        {/* FAQ Accordion */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4 pt-6" 
        >
          <h3 className="text-3xl font-bold border-b border-gray-700 pb-2 text-indigo-400 flex items-center">
            <ChevronDown className="w-6 h-6 mr-2 transform rotate-[-90deg]" />
            Clarity Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((item, index) => (
              <div
                key={index}
                // Dark background for FAQ items
                className="border border-gray-700 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-200 shadow-md p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-lg text-white">{item.q}</h4>
                  <span className="text-xl font-bold text-blue-400 transition-transform duration-300 transform" style={{
                      transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)"
                  }}>
                    <ChevronDown className="w-6 h-6" />
                  </span>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      className="mt-2 text-gray-300 overflow-hidden pr-6"
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

        {/* CTA (Call to Action) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true, amount: 0.1 }}
          // Strong dark background for CTA
          className="text-center py-12 rounded-2xl bg-gray-900 border-t-4 border-indigo-600 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-white">Ready to Cut Through the Noise?</h3>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Stop wasting time on misaligned projects. Start with a Clarity Audit to simplify your path to success.
          </p>

          <div className="mt-6">
            <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg transition duration-300 hover:bg-indigo-700 cursor-pointer inline-block"
            >
              Start Your Clarity Audit
            </motion.a>
          </div>
        </motion.section>

      </article>
    </main>
  );
}