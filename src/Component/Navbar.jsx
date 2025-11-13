import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Work", href: "#work" },
        { name: "Why Us", href: "#why-us" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0b1324cc] backdrop-blur-md border-b border-[#0f2b46] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="p-1 rounded-md bg-[#1a4a49] mr-2">
                            <span className="font-extrabold text-sm">PTT</span>
                        </div>
                        <div className="font-bold text-xl">
                            Pro <span className="text-[#00d4ff]">Tech</span> Touch
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium hover:text-[#00d4ff] transition duration-150 ease-in-out"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a 
                            href="#contact"
                            className="text-sm font-medium py-2 px-5 rounded-full 
                                       bg-gradient-to-r from-[#00d4ff] to-[#00ff8c] 
                                       text-gray-900 hover:opacity-90 transition duration-150 ease-in-out shadow-lg"
                        >
                            Contact
                        </a>
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu with slide-down animation */}
            <div
                 className={`lg:hidden overflow-hidden transition-all duration-1000 ease-out ${
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    }`}
    id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block px-3 py-2 text-base font-medium text-white hover:text-[#00d4ff] hover:bg-[#1a4a49] rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        href="#contact"
                        className="mt-4 block w-full text-center text-lg font-bold py-3 px-3 rounded-md 
                                   bg-gradient-to-r from-[#00d4ff] to-[#00ff8c] 
                                   text-gray-900 hover:opacity-90 transition duration-150 ease-in-out shadow-xl"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
