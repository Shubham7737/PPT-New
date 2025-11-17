import React, { useEffect, useRef, useState } from 'react';
import { Code, Cloud, ShoppingCart, TrendingUp, Zap, Smartphone, Layers, Shield, Search } from 'lucide-react';

// --- AnimatedSection Component (Kept as is) ---
const AnimatedSection = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    const transitionDelay = `${delay}ms`;

    return (
        <div
            ref={elementRef}
            className={`
                transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            style={{ transitionDelay: transitionDelay }}
        >
            {children}
        </div>
    );
};

// --- Data for Services (Refactored from long text) ---
const serviceCards = [
    {
        icon: <Search size={24} />,
        title: "Strategic SEO & Content Authority",
        description: "Focusing on Topical Authority and Technical SEO to ensure high rankings and sustained, qualified traffic.",
        imagePath: "600x300/1e293b/a5b4fc?text=SEO+Strategy",
        category: 1,
    },
    {
        icon: <TrendingUp size={24} />,
        title: "Adaptive Performance Marketing",
        description: "Dynamic Creative Optimization (DCO) and Real-Time Bidding (RTB) across platforms for maximum ROAS.",
        imagePath: "600x300/1e293b/a5b4fc?text=Paid+Media+Ads",
        category: 1,
    },
    {
        icon: <Layers size={24} />,
        title: "Omni-Channel Engagement Funnels",
        description: "Unifying customer experience across social, email, and SMS with sophisticated CRM automation and Social Listening.",
        imagePath: "600x300/1e293b/a5b4fc?text=CRM+Channels",
        category: 1,
    },
    // E-commerce Services
    {
        icon: <ShoppingCart size={24} />,
        title: "Headless Storefront Architecture",
        description: "Building fast, high-conversion e-commerce platforms with optimized, mobile-first checkout flows.",
        imagePath: "600x300/1e293b/a5b4fc?text=E-commerce+UI",
        category: 2,
    },
    {
        icon: <Cloud size={24} />,
        title: "Elastic Backend Scalability",
        description: "Cloud-native solutions (AWS/Azure) and flexible databases to handle massive traffic spikes without downtime.",
        imagePath: "600x300/1e293b/a5b4fc?text=Scalable+Backend",
        category: 2,
    },
    {
        icon: <Zap size={24} />,
        title: "Payment & Fulfillment Integration",
        description: "Seamless integration of diverse payment gateways, BNPL options, and advanced 3PL logistics networks.",
        imagePath: "600x300/1e293b/a5b4fc?text=Fulfillment+System",
        category: 2,
    },
    // Development Services
    {
        icon: <Code size={24} />,
        title: "Next.js Web Platforms",
        description: "Developing high-speed, SEO-friendly websites using React and Next.js for superior Core Web Vitals performance.",
        imagePath: "600x300/1e293b/a5b4fc?text=Web+Development",
        category: 3,
    },
    {
        icon: <Smartphone size={24} />,
        title: "Cross-Platform Mobile Apps",
        description: "Rapid deployment on iOS and Android using React Native/Flutter, ensuring native performance and feature parity.",
        imagePath: "600x300/1e293b/a5b4fc?text=Mobile+App+Code",
        category: 3,
    },
    {
        icon: <Shield size={24} />,
        title: "DevOps & CI/CD Automation",
        description: "Automated testing and deployment pipelines for fast, reliable updates and reducing critical time-to-market.",
        imagePath: "600x300/1e293b/a5b4fc?text=DevOps+Pipeline",
        category: 3,
    },
];

// --- Service Card Component ---
const ServiceCard = ({ item, index }) => {
    // Staggered delay for card grid animation
    const delay = 100 * (index % 3) + 200 * Math.floor(index / 3);

    return (
        <AnimatedSection delay={delay}>
            <div 
                className="
                    h-full p-6 rounded-xl border border-gray-700 bg-blue-50/10 backdrop-blur-sm
                    flex flex-col overflow-hidden shadow-2xl transition-all duration-500
                    hover:shadow-indigo-500/30 hover:-translate-y-1
                "
            >
                {/* Placeholder Image */}
                <div className="mb-4 rounded-lg overflow-hidden border border-gray-600">
                    <img
                        src={`https://placehold.co/${item.imagePath}`}
                        alt={item.title}
                        className="w-full h-auto object-cover"
                        onError={e => {
                            // Fallback in case placeholder fails
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = `https://placehold.co/600x300/374151/D1D5DB?text=${item.title.replace(/\s/g, '+')}`;
                        }}
                    />
                </div>

                {/* Content */}
                <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 rounded-full bg-indigo-600/20 text-indigo-400">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-sky-300">
                        {item.title}
                    </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm flex-grow">
                    {item.description}
                </p>
                {/* Simple Call to Action at the bottom */}
                <button 
                    className="mt-4 px-3 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition self-start"
                >
                    Learn More
                </button>
            </div>
        </AnimatedSection>
    );
};


export default function StayOnTop() {
    return (
        <div className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 font-sans antialiased text-white">
            <div className="max-w-7xl mx-auto">

                {/* Main Title and Context */}
                <AnimatedSection delay={0}>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-sky-300">
                        Staying on Top: The Blueprint for Digital Dominance
                    </h1>
                    <p className="text-center text-lg md:text-xl mb-16 max-w-4xl mx-auto text-gray-300">
                        Maintaining a **dominant presence online** requires continuous adaptation, competitive awareness, and technological excellence. We deliver excellence across three core pillars: Digital Marketing, E-commerce, and Cutting-Edge Development.
                    </p>
                </AnimatedSection>
                
                <hr className="my-10 border-gray-700" />

                {/* ========================================================= */}
                {/* SERVICES GRID */}
                {/* ========================================================= */}
                
                {/* Section 1: Digital Marketing */}
                <AnimatedSection delay={100}>
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 border-b border-indigo-400/50 pb-3 mb-10">
                        1. Digital Marketing: Adaptation & Competitive Pace
                    </h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {serviceCards.filter(c => c.category === 1).map((item, index) => (
                        <ServiceCard key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Section 2: E-commerce */}
                <AnimatedSection delay={200}>
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 border-b border-indigo-400/50 pb-3 mb-10">
                        2. E-commerce: Maximizing Revenue and User Experience
                    </h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {serviceCards.filter(c => c.category === 2).map((item, index) => (
                        <ServiceCard key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Section 3: Development */}
                <AnimatedSection delay={300}>
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 border-b border-indigo-400/50 pb-3 mb-10">
                        3. Development: Technological Excellence & Future Proofing
                    </h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {serviceCards.filter(c => c.category === 3).map((item, index) => (
                        <ServiceCard key={index} item={item} index={index} />
                    ))}
                </div>
                
                <hr className="my-10 border-gray-700" />

                {/* Conclusion */}
                <AnimatedSection delay={800}>
                    <div className="text-center pt-10">
                        <p className="text-xl md:text-2xl font-semibold text-gray-200">
                            **Conclusion:** Staying on top isn't a passive state; it's a commitment to relentless improvement across all digital touchpoints—from the visibility generated by marketing to the transaction speed guaranteed by development. Let us build the architecture that sustains your competitive edge.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}