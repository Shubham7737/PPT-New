import React, { useEffect, useState, useCallback } from "react";
// Lucide Icons for better visual appeal
import {
  ShoppingCart,
  LayoutGrid,
  Zap,
  TrendingUp,
  Users,
  BarChart3,
  Package,
  Truck,
  ShieldCheck,
  Mail,
  ChevronLeft,
  ChevronRight,
  X,
  User,
  Phone,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export default function EcommerceManagementPage() {
  // --- State Management for Main Component ---
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions to manage modal visibility
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  // Static Data (Moved inside for single-function structure)
  const sliderImages = [
    "https://placehold.co/1200x600/1e293b/a5b4fc?text=Advanced+Store+Analytics",
    "https://placehold.co/1200x600/1e293b/a5b4fc?text=Marketing+Campaign+Dashboard",
    "https://placehold.co/1200x600/1e293b/a5b4fc?text=Custom+Logistics+System",
    "https://placehold.co/1200x600/1e293b/a5b4fc?text=Customer+Support+Interface",
    "https://placehold.co/1200x600/1e293b/a5b4fc?text=Product+Inventory+Management",
  ];

  const servicesContent = [
    {
      title: "Complete Store Management",
      content: `We handle your online store end-to-end including product uploads, inventory management, and order fulfillment.`,
      icon: <ShoppingCart size={32} className="text-indigo-400" />,
      imageIndex: 0,
    },
    {
      title: "Targeted Marketing & Advertising",
      content: `Targeted campaigns on Google, Facebook, and Instagram to maximize ROI and visibility across all channels.`,
      icon: <TrendingUp size={32} className="text-pink-400" />,
      imageIndex: 1,
    },
    {
      title: "Customer Support & Engagement",
      content: `24/7 chat support, prompt email handling, and proactive engagement for better customer retention and brand loyalty.`,
      icon: <Users size={32} className="text-sky-400" />,
      imageIndex: 3,
    },
    {
      title: "Analytics & Optimization",
      content: `Track user behavior, sales metrics, and conversion rates to continuously improve site performance and profitability.`,
      icon: <BarChart3 size={32} className="text-green-400" />,
      imageIndex: 2,
    },
  ];

  const highlightCards = [
    { text: "Fast Logistics Integration", icon: <Truck size={20} /> },
    { text: "Custom Packaging Solutions", icon: <Package size={20} /> },
    { text: "Advanced Inventory Tracking", icon: <LayoutGrid size={20} /> },
    { text: "Marketing Automation Setup", icon: <Zap size={20} /> },
    { text: "Secure Payment Gateways", icon: <ShieldCheck size={20} /> },
    { text: "Discount & Coupon Management", icon: <Users size={20} /> },
  ];

  // --- Component: CustomSlider (Now Nested) ---
  const CustomSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to navigate to next slide
    const nextSlide = useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    // Function to navigate to previous slide
    const prevSlide = useCallback(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }, [images.length]);

    // Autoplay functionality
    useEffect(() => {
      const interval = setInterval(nextSlide, 3000); // 3-second autoplay
      return () => clearInterval(interval);
    }, [nextSlide]); // Dependency on memoized nextSlide

    return (
      <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-gray-700">
        {/* Image container: Uses Tailwind's transition for smooth sliding */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={img}
                alt={`Ecommerce Project View ${index + 1}`}
                className="w-full h-72 md:h-96 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/1200x600/1e293b/a5b4fc?text=Image+Loading+Error";
                }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition z-10"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition z-10"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-indigo-400 w-4"
                  : "bg-gray-500 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  // --- Component: ContactModal (Now Nested) ---
  const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleChange = useCallback((e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);

    const resetModal = useCallback(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
      onClose();
    }, [onClose]);

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      console.log("Form Data Submitted:", formData);

      // Simulate an API call delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/50"
        onClick={resetModal} // Close modal when clicking outside
      >
        <div
          className="w-full max-w-md p-6 md:p-8 rounded-2xl shadow-3xl border border-indigo-700/50 transform transition-all duration-300 scale-100 backdrop-saturate-200"
          onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
        >
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-sky-300">
              Contact Us
            </h2>
            <button
              onClick={resetModal}
              className="text-gray-400 hover:text-white transition"
              aria-label="Close Modal"
            >
              <X size={24} />
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle size={64} className="text-green-500 mx-auto" />
              <h3 className="text-2xl font-semibold text-white">Thank You!</h3>
              <p className="text-gray-300">
                Your message has been successfully received. Our team will get
                back to you shortly.
              </p>
              <button
                onClick={resetModal}
                className="mt-4 px-6 py-2 text-white font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-100 bg-transparent placeholder-gray-400 transition"
                />
                <User
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-100 bg-transparent placeholder-gray-400 transition"
                />
                <Mail
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              </div>

              {/* Phone Input */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-100 bg-transparent placeholder-gray-400 transition"
                />
                <Phone
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Tell us about your E-commerce needs"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-3 pl-10 pt-3 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-100 bg-transparent placeholder-gray-400 transition"
                ></textarea>
                <MessageSquare
                  size={20}
                  className="absolute left-3 top-4 text-gray-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 py-3 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-sky-500 text-white rounded-lg text-lg font-semibold hover:from-indigo-700 hover:to-sky-600 transform transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail size={24} className="mr-3" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  };

  // --- Counter animation logic (Runs when main component mounts) ---
  useEffect(() => {
    let p = 0;
    let c = 0;
    const maxP = 976;
    const maxC = 912;

    const pInterval = setInterval(() => {
      if (p < maxP) setProjectsCount(++p);
      else clearInterval(pInterval);
    }, 20);

    const cInterval = setInterval(() => {
      if (c < maxC) setClientsCount(++c);
      else clearInterval(cInterval);
    }, 25);

    return () => {
      clearInterval(pInterval);
      clearInterval(cInterval);
    };
  }, []);

  // --- Main Component Render ---
  return (
    <div className="min-h-screen py-5 px-4 md:px-8 font-sans antialiased text-white">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-16 pt-10">
        <h1 className="text-4xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-sky-300 animate-fadeInUp">
          Complete <br className="sm:hidden" /> E-Commerce Management
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fadeInUp delay-200">
          Grow your online business seamlessly. From store setup to marketing
          and customer support, we ensure your brand thrives online with high
          sales and engagement.
        </p>
        <button
          onClick={openModal} // Opens the Contact Modal
          className="mt-8 px-10 py-4 flex items-center justify-center mx-auto bg-gradient-to-r from-indigo-600 to-sky-500 text-white rounded-xl text-lg font-semibold hover:scale-[1.03] transform transition duration-300 shadow-2xl shadow-indigo-500/50"
        >
          <Mail size={24} className="mr-3" />
          Email Us Now for a Strategy Call
        </button>
      </div>

      {/* Slider Section - Portfolio / System Views */}
      <section className="max-w-7xl mx-auto mb-20 px-0">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-100">
          Our Project Snapshots
        </h2>
        {/* Using the new custom slider component (now defined above) */}
        <CustomSlider images={sliderImages} />
      </section>

      {/* --- Counting Section (Enhanced) --- */}
      <section className="mt-16 mb-20 max-w-5xl mx-auto text-center border-t border-b border-gray-800 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-blue-50/10 flex flex-col items-center justify-center p-6 rounded-2xl border border-indigo-700/50 shadow-xl">
            <div className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              {projectsCount}+
            </div>
            <div className="text-2xl md:text-3xl font-medium mt-3 text-gray-200">
              Completed E-commerce Projects
            </div>
          </div>

          <div className="bg-blue-50/10 flex flex-col items-center justify-center p-6 rounded-2xl border border-indigo-700/50 shadow-xl">
            <div className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-green-400">
              {clientsCount}+
            </div>
            <div className="text-2xl md:text-3xl font-medium mt-3 text-gray-200">
              Satisfied Global Clients
            </div>
          </div>
        </div>
      </section>

      {/* Services & Content (Icon and Visual Enhancement) */}
      <section className="max-w-6xl mx-auto space-y-20">
        <h2 className="text-4xl font-extrabold text-center text-white mb-10">
          Our Core Management Services
        </h2>
        {servicesContent.map((service, i) => (
  <div
    key={i}
    // 1. Added 'relative' to the card wrapper for absolute positioning of the button.
    // 2. The main flex structure (flex-col, md:flex-row/reverse) is preserved for content layout.
    className={`
      flex flex-col items-center gap-10 p-6 md:p-10 rounded-3xl 
      border border-gray-800 bg-blue-50/10 relative 
      shadow-2xl hover:shadow-indigo-500/20 transition duration-500
      
      ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}
    `}
  >
    {/* --- Service Content Area --- */}
    <div className="md:w-1/2 space-y-6">
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-indigo-600/20 shadow-lg">
          {service.icon}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-sky-300">
          {service.title}
        </h3>
      </div>
      <p className="text-gray-100 text-lg leading-relaxed">
        {service.content}
      </p>
    </div>

    {/* --- Image/Visual Area --- */}
    <div className="overflow-hidden rounded-2xl w-full md:w-1/2 shadow-xl border border-gray-700">
      <img
        src={sliderImages[service.imageIndex % sliderImages.length]}
        alt={`Service ${i}: ${service.title}`}
        className="w-full h-64 object-cover transform transition duration-700 hover:scale-105"
        onError={e => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://placehold.co/600x400/1e293b/a5b4fc?text=Service+Visual";
        }}
      />
    </div>

    {/* --- Call to Action Button (Optimized for Bottom Right) --- */}
    <button
      className=" mt-5
        w-max px-6 py-2 text-sm font-semibold text-white bg-teal-600 rounded-lg 
        hover:bg-teal-500 transition shadow-md
        
        // Mobile (default): Show the button below the content/image
        mt-1 ml-auto 
        
        // Desktop (md): Position it absolutely at the bottom right of the card (p-10 spacing)
        md:absolute md:bottom-5 md:right-5 md:mt-0 md:ml-0
      "
    >
      More Info
    </button>
  </div>
))}
      </section>

      {/* Highlight Cards (Enhanced) */}
      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-100">
          Specialized E-Commerce Capabilities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {highlightCards.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl shadow-lg border-1 border-[#4D4DFF] text-center flex flex-col items-center justify-center h-28 hover:scale-[1.05] transform transition duration-300"
            >
              <span className="text-indigo-400 mb-2">{item.icon}</span>
              <p className="font-medium text-sm text-gray-200">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <div className="bg-blue-50/10 text-center mt-20 pb-10 max-w-4xl mx-auto p-8 rounded-3xl border border-indigo-700/50 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Ready to Scale Your Business?
        </h2>
        <p className="text-lg text-indigo-100 mb-8">
          Contact our e-commerce experts today for a personalized growth
          strategy session.
        </p>
        <button
          onClick={openModal} // Opens the Contact Modal
          className="px-12 py-4 flex items-center justify-center mx-auto bg-gradient-to-r from-green-500 to-teal-400 text-gray-900 rounded-xl text-xl font-bold hover:scale-[1.05] transform transition duration-300 shadow-xl shadow-green-500/50"
        >
          <Mail size={24} className="mr-3" />
          Email Us Now!
        </button>
      </div>

      {/* Render the Contact Modal (now defined above) */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Custom Styles for animations */}
      <style>{` 
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                .animate-fadeInUp.delay-200 {
                    animation-delay: 0.2s;
                }
            `}</style>
    </div>
  );
}
