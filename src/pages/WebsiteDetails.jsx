import React, { useEffect, useState } from "react";
// Lucide Icons for better visual appeal
import { Zap, Smartphone, Search, LayoutGrid, BarChart3, Headset, Mail, X, User, Phone, MessageSquare, CheckCircle, Code, DollarSign, Target } from 'lucide-react';

// --- Contact Modal Component (Kept Dark for Contrast) ---
const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

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
    
    const resetModal = () => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        onClose();
    }

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/70"
            onClick={resetModal} // Close modal when clicking outside
        >
            <div 
                className="w-full max-w-md p-6 md:p-8 rounded-2xl shadow-3xl border border-teal-700/50 transform transition-all duration-300 scale-100 backdrop-saturate-200 bg-gray-900 text-white"
                onClick={e => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-sky-300">
                        Discuss Your Project
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
                        <h3 className="text-2xl font-semibold text-white">Success!</h3>
                        <p className="text-gray-300">Your request has been successfully received. We will contact you within 24 hours.</p>
                        <button 
                            onClick={resetModal} 
                            className="mt-4 px-6 py-2 text-white font-medium rounded-lg bg-teal-600 hover:bg-teal-700 transition"
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
                                className="w-full p-3 pl-10 rounded-lg border border-gray-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-white bg-gray-800 placeholder-gray-400 transition"
                            />
                            <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
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
                                className="w-full p-3 pl-10 rounded-lg border border-gray-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-white bg-gray-800 placeholder-gray-400 transition"
                            />
                            <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>

                        {/* Phone Input */}
                        <div className="relative">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your Phone Number (Optional)"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-3 pl-10 rounded-lg border border-gray-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-white bg-gray-800 placeholder-gray-400 transition"
                            />
                            <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>

                        {/* Message Textarea */}
                        <div className="relative">
                            <textarea
                                name="message"
                                placeholder="Tell us about your web development needs"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full p-3 pl-10 pt-3 rounded-lg border border-gray-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-white bg-gray-800 placeholder-gray-400 transition"
                            ></textarea>
                            <MessageSquare size={20} className="absolute left-3 top-4 text-gray-500" />
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full mt-6 py-3 flex items-center justify-center bg-gradient-to-r from-teal-500 to-sky-500 text-white rounded-lg text-lg font-semibold hover:from-teal-600 hover:to-sky-600 transform transition duration-300 disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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

// --- Main Component ---
export default function WebsiteDevelopmentPage() {
    const [projectsCount, setProjectsCount] = useState(0);
    const [clientsCount, setClientsCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state added

    // Functions to manage modal visibility
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Counting effect
    useEffect(() => {
        let p = 0;
        let c = 0;
        const maxP = 150;
        const maxC = 120;

        const pInterval = setInterval(() => {
            if (p < maxP) setProjectsCount(++p);
            else clearInterval(pInterval);
        }, 15);

        const cInterval = setInterval(() => {
            if (c < maxC) setClientsCount(++c);
            else clearInterval(cInterval);
        }, 20);

        return () => {
            clearInterval(pInterval);
            clearInterval(cInterval);
        };
    }, []);

    // Placeholder Images
    const images = [
        "https://placehold.co/600x400/ffffff/0e7490?text=Responsive+Web+Design",
        "https://placehold.co/600x400/ffffff/0e7490?text=Advanced+SEO+Strategy",
        "https://placehold.co/600x400/ffffff/0e7490?text=Scalable+CMS+Solutions",
        "https://placehold.co/600x400/ffffff/0e7490?text=Modern+React+Application",
        "https://placehold.co/600x400/ffffff/0e7490?text=High+Converting+Pages",
        "https://placehold.co/600x400/ffffff/0e7490?text=24/7+Technical+Support",
    ];

    const servicesContent = [
        {
            title: "Custom Responsive Web Design & Development",
            content: `We specialize in **custom website solutions** that feature **responsive web design**, ensuring flawless performance and aesthetics on desktops, tablets, and smartphones. Our focus is on delivering high-speed, intuitive user experiences (UX) and clean, modern interfaces that reflect your brand identity. This foundational step is crucial for engaging visitors and establishing a credible online presence.`,
            icon: <Code size={32} className="text-sky-600" />,
            imageIndex: 0
        },
        {
            title: "Advanced SEO & Digital Visibility Strategy",
            content: `Beyond mere development, every site we build is optimized for search engines from the ground up. We integrate **technical SEO**, robust site mapping, and fast loading speeds to achieve higher organic rankings. This increases your digital visibility, driving targeted traffic and long-term, sustainable growth without reliance on paid advertising.`,
            icon: <Search size={32} className="text-teal-600" />,
            imageIndex: 1
        },
        {
            title: "Scalable CMS Integration & User Dashboards",
            content: `Gain full control over your content with scalable **Content Management System (CMS)** integrations like WordPress, Strapi, or custom backends. We provide user-friendly custom dashboards, allowing your team to manage products, update content, and process orders efficiently, making your website a dynamic, future-proof asset.`,
            icon: <LayoutGrid size={32} className="text-green-600" />,
            imageIndex: 2
        },
        {
            title: "High-Speed Single Page Applications (SPA)",
            content: `For sophisticated platforms, SaaS products, and highly interactive sites, we leverage modern frameworks like React and Vue to build **Single Page Applications (SPAs)**. SPAs offer incredibly smooth, fast, and desktop-like user experiences, reducing friction and boosting user engagement dramatically in real-time applications.`,
            icon: <Zap size={32} className="text-pink-600" />,
            imageIndex: 3
        },
        {
            title: "Conversion-Focused Landing Pages",
            content: `Our designs are strategically focused on maximizing your return on investment. We create highly persuasive landing pages with clear Calls-to-Action (CTAs), A/B testing capabilities, and robust lead capture forms. These pages are engineered specifically for **lead generation** and sales conversion, turning visitors into paying customers.`,
            icon: <Target size={32} className="text-orange-600" />,
            imageIndex: 4
        },
        {
            title: "Continuous Maintenance & Technical Support",
            content: `Website success requires ongoing care. We provide comprehensive continuous maintenance, crucial security updates, and performance optimization to ensure your site remains fast, secure, and accessible 24/7. Our dedicated team is ready for rapid bug fixes and technical support to keep your business running smoothly.`,
            icon: <Headset size={32} className="text-indigo-600" />,
            imageIndex: 5
        },
    ];

    const highlightCards = [
        { text: "High-Speed Performance", icon: <Zap size={20} /> },
        { text: "Mobile-First Design", icon: <Smartphone size={20} /> },
        { text: "Technical SEO Audits", icon: <Search size={20} /> },
        { text: "Custom Dashboard Access", icon: <LayoutGrid size={20} /> },
        { text: "Sales & Analytics Reporting", icon: <BarChart3 size={20} /> },
        { text: "Cost-Effective Solutions", icon: <DollarSign size={20} /> },
    ];

    return (
        // Main container now has no explicit background color, relying on parent theme
        <div className="min-h-screen py-16 px-4 md:px-8 text-gray-800 space-y-20 font-sans">
            
            {/* --- Hero Card: Enhanced SEO Title and Description --- */}
            <div className="bg-blue-50/10 max-w-5xl mx-auto rounded-3xl p-8 md:p-12 shadow-2xl shadow-gray-100 text-center border border-gray-100">
                <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(90deg,#00d4ff,#257451)] animate-fadeInDown">
                    Expert Web Design Company for Digital Transformation
                </h1>
                <h2 className="mt-4 text-xl text-white md:text-2xl font-medium text-gray-600 leading-relaxed max-w-3xl mx-auto animate-fadeInUp delay-100">
                    We deliver **custom website solutions** that are conversion-focused, SEO-friendly, and built for **high-speed performance** on every device.
                </h2>
                <button
                    onClick={openModal} // Triggers the modal
                    className="mt-8 px-10 py-4 flex items-center justify-center mx-auto bg-gradient-to-r from-teal-500 to-sky-500 text-white rounded-xl text-lg font-semibold hover:scale-[1.05] transform transition duration-300 shadow-xl shadow-teal-500/50"
                >
                    <Mail size={24} className="mr-3" />
                    Request a Free Consultation
                </button>
            </div>

            {/* --- Counting Section --- */}
            <section className="max-w-5xl mx-auto text-center py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-blue-50/10 flex flex-col items-center justify-center p-6 rounded-2xl border border-sky-200 shadow-lg">
                        <div className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-teal-600">
                            {projectsCount}+
                        </div>
                        <div className="text-2xl md:text-3xl font-medium mt-3 text-gray-700">Successful Projects Launched</div>
                    </div>

                    <div className="bg-blue-50/10 flex flex-col items-center justify-center p-6 rounded-2xl border border-sky-200 shadow-lg">
                        <div className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-green-600">
                            {clientsCount}+
                        </div>
                        <div className="text-2xl md:text-3xl font-medium mt-3 text-gray-700">Satisfied Global Clients</div>
                    </div>
                </div>
            </section>

            {/* --- Services & Content (Expanded) --- */}
            <section className="max-w-6xl mx-auto space-y-16">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">End-to-End **Web Development Solutions**</h2>
                {servicesContent.map((service, i) => (
                    <div
                        key={i}
                        className={`bg-blue-50/10 flex flex-col items-center gap-8 p-6 md:p-10 rounded-3xl border border-gray-200 
                                    ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} 
                                    shadow-xl hover:shadow-sky-100 transition duration-500`}
                    >
                        {/* Image/Visual Placeholder */}
                        <div className="overflow-hidden rounded-2xl w-full md:w-1/2 shadow-lg border border-gray-200">
                            <img
                                src={images[service.imageIndex]}
                                alt={`Service Visual ${i}: ${service.title}`}
                                className="w-full h-64 object-cover transform transition duration-700 hover:scale-105"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/f3f4f6/374151?text=Service+Visual" }}
                            />
                        </div>
                        
                        {/* Content Card */}
                        <div className="md:w-1/2 space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-teal-100 shadow-md">
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-sky-600">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="text-white text-lg leading-relaxed">{service.content}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* --- Highlight Cards (Key Features & Expertise) --- */}
            <section className="mt-20 max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
                    Technical Expertise & Deliverables
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {highlightCards.map((item, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-xl shadow-lg border border-gray-100 text-center flex flex-col items-center justify-center h-28 transform transition hover:scale-[1.05] hover:shadow-xl"
                        >
                            <span className="text-sky-600 mb-2">{item.icon}</span>
                            <p className="font-semibold text-sm text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Final CTA Card --- */}
            <div className="bg-blue-50/10 text-center mt-20 pb-10 max-w-4xl mx-auto p-8 rounded-3xl border border-sky-300 shadow-2xl shadow-sky-100">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    Ready for a High-Performance Website?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Start your **digital transformation** journey today. Let's build a powerful, custom web solution that drives real business results and maximizes your online reach.
                </p>
                <button
                    onClick={openModal} // Triggers the modal
                    className="px-12 py-4 flex items-center justify-center mx-auto bg-gradient-to-r from-teal-500 to-sky-500 text-white rounded-xl text-xl font-bold hover:from-teal-600 hover:to-sky-600 hover:scale-[1.02] transform transition duration-300 shadow-xl shadow-teal-500/50"
                >
                    <Mail size={24} className="mr-3" />
                    Get a Free Project Quote
                </button>
            </div>
            
            {/* Render the Contact Modal */}
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
                .animate-fadeInDown {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                .animate-fadeInUp.delay-200 {
                    animation-delay: 0.2s;
                }
            `}</style>
        </div>
    );
}