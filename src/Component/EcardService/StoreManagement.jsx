import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBoxes, FaChartLine, FaUsers, FaWarehouse, FaShieldAlt, FaTruck, FaRegCheckCircle } from "react-icons/fa";

export default function StoreManagement() {
  useEffect(() => {
    document.title = "Complete Store Management Services — Pro Tech Touch";
  }, []);

  // Framer Motion Variants
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
  const toggleSolution = (index) => setOpenIndex(openIndex === index ? null : index);

  // --- Data Sections ---

  const serviceAreas = [
    { icon: FaBoxes, title: "Inventory Optimization", description: "Maintain perfect stock levels, minimize dead stock, and ensure 99% accuracy." },
    { icon: FaChartLine, title: "Performance Reporting", description: "Real-time KPIs, detailed analytics, and actionable insights for better decision-making." },
    { icon: FaUsers, title: "Staff & HR Management", description: "Efficient scheduling, training programs, and compliance assurance." },
    { icon: FaWarehouse, title: "Supply Chain Integration", description: "Seamless flow from vendor to shelf, reducing lead times and costs." },
  ];

  const coreSolutions = [
    {
      icon: FaBoxes,
      title: "Inventory & Stock Control",
      answer: (
        <ul className="list-disc list-inside space-y-2 pt-2 text-gray-300">
          <li>Automated **reorder points** and demand forecasting.</li>
          <li>Systematic **cycle counting** and physical inventory checks.</li>
          <li>Loss prevention strategies to reduce shrinkage.</li>
        </ul>
      ),
    },
    {
      icon: FaTruck,
      title: "Logistics & Fulfillment Operations",
      answer: (
        <ul className="list-disc list-inside space-y-2 pt-2 text-gray-300">
          <li>Streamlined **goods receiving** and putaway processes.</li>
          <li>Optimized picking, packing, and shipping workflows (Click & Collect, Ship From Store).</li>
          <li>Vendor management and quality control implementation.</li>
        </ul>
      ),
    },
    {
      icon: FaShieldAlt,
      title: "Compliance & Security",
      answer: (
        <ul className="list-disc list-inside space-y-2 pt-2 text-gray-300">
          <li>Ensuring adherence to **local retail regulations** and standards.</li>
          <li>Physical store security audits and cash handling protocols.</li>
          <li>Data privacy and PCI compliance for transaction systems.</li>
        </ul>
      ),
    },
    {
      icon: FaChartLine,
      title: "Financial & Cash Management",
      answer: (
        <ul className="list-disc list-inside space-y-2 pt-2 text-gray-300">
          <li>Daily **sales reconciliation** and deposit verification.</li>
          <li>Detailed expense tracking and budget adherence.</li>
          <li>Audit readiness and preparation of financial statements.</li>
        </ul>
      ),
    },
  ];

  return (
    <main className="min-h-screen py-16 px-4 md:px-12 lg:px-24 text-white">
      <article className="max-w-6xl mx-auto space-y-20">

        {/* 1. Hero Section */}
        <motion.header
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
        >
          <motion.div variants={reveal.visible(0)}>
            <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-black font-extrabold mb-4 text-sm uppercase tracking-wider shadow-lg">
              <FaWarehouse className="inline-block mr-2" /> Store Management Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-50 to-green-300">
              Simplify Store Operations, Maximize Retail Profit.
            </h1>
            <p className="mt-6 text-gray-300 max-w-4xl mx-auto text-lg">
              We provide complete, end-to-end management of your retail locations, ensuring efficiency, minimizing losses, and delivering a superior customer experience. Focus on growth, we handle the complexity.
            </p>
          </motion.div>
        </motion.header>

        {/* 2. Service Grid */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={reveal} 
          className="space-y-10"
        >
          <motion.h2 variants={reveal.visible(0.05)} className="text-3xl font-bold text-center text-green-400">
            Our Key Service Areas
          </motion.h2>
          <motion.div variants={reveal.visible(0.1)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div 
                key={index} 
                className="p-6 rounded-xl border border-gray-700 bg-gray-800 shadow-xl text-center transition duration-300 hover:shadow-green-500/20 hover:border-green-500/50"
                variants={reveal.visible(0.15 + index * 0.1)}
              >
                <area.icon className="text-4xl text-blue-400 mb-4 mx-auto" />
                <h3 className="font-semibold text-xl mb-2">{area.title}</h3>
                <p className="text-gray-400 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 3. Core Solutions (Accordion) */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={reveal} 
          className="space-y-10"
        >
          <motion.h2 variants={reveal.visible(0.05)} className="text-3xl font-bold text-center text-green-400">
            End-to-End Solutions
          </motion.h2>
          <div className="space-y-3 max-w-4xl mx-auto">
            {coreSolutions.map((solution, idx) => (
              <motion.div 
                key={idx} 
                className="border border-gray-700 rounded-xl overflow-hidden shadow-lg"
                variants={reveal.visible(0.1 + idx * 0.05)}
              >
                <div 
                  className="flex justify-between items-center p-5 cursor-pointer bg-gray-800 hover:bg-gray-700 transition duration-300" 
                  onClick={() => toggleSolution(idx)}
                >
                  <div className="flex items-center">
                    <solution.icon className={`text-2xl mr-3 ${openIndex === idx ? 'text-green-400' : 'text-blue-300'}`} />
                    <h3 className="font-bold text-lg text-gray-100">{solution.title}</h3>
                  </div>
                  <span className="text-green-400 font-extrabold text-2xl transition-transform duration-300 transform" 
                        style={{ transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    +
                  </span>
                </div>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={faqAnswerVariants}
                      className="bg-gray-800/70 p-5 pt-2"
                    >
                      {solution.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* 4. Value Proposition */}
        <motion.section 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={reveal} 
            className="space-y-4 p-8 bg-gradient-to-r from-gray-800 to-gray-700/50 rounded-2xl shadow-2xl border border-blue-500/50"
        >
          <motion.h3 variants={reveal.visible(0.05)} className="text-3xl font-bold text-blue-300">
            The Pro Tech Touch Advantage
          </motion.h3>
          <motion.div variants={reveal.visible(0.1)} className="text-gray-200 space-y-4 text-lg">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <li className="flex items-start"><FaRegCheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" /> **Reduced Operating Costs:** Streamlining processes leads to significant savings.</li>
                <li className="flex items-start"><FaRegCheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" /> **Maximized Inventory Turns:** Data-driven stocking ensures optimal sales velocity.</li>
                <li className="flex items-start"><FaRegCheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" /> **Improved Customer Satisfaction:** Efficient operations mean better service delivery.</li>
                <li className="flex items-start"><FaRegCheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" /> **Total Accountability:** We own the management process, you own the results.</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* 5. CTA */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal} className="py-16 rounded-2xl text-center bg-gradient-to-br from-blue-700/30 to-green-700/30 border-4 border-green-500/50 shadow-2xl shadow-green-900/50">
          <motion.h3 variants={reveal.visible(0.05)} className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
            Ready to Transform Your Retail Performance?
          </motion.h3>
          <motion.p variants={reveal.visible(0.1)} className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg">
            Schedule a free consultation to see how our full-stack store management can boost your profitability.
          </motion.p>
          <motion.div variants={reveal.visible(0.15)} className="mt-8 flex items-center justify-center gap-6 flex-col md:flex-row">
            <a href="#contact" className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white font-extrabold py-4 px-8 rounded-full shadow-2xl shadow-green-500/50 hover:scale-[1.03] transition duration-300 ease-in-out uppercase tracking-wider">
              Book a Free Audit
            </a>
            <a href="#services" className="inline-block border-2 border-gray-500 text-gray-200 py-4 px-8 rounded-full hover:bg-gray-700 transition duration-300">
              Download Service Brochure
            </a>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <footer className="text-sm text-gray-500 text-center pt-8">
          <p>© {new Date().getFullYear()} Pro Tech Touch — Retail Management Experts.</p>
        </footer>
      </article>
    </main>
  );
}