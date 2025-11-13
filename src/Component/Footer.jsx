import React, { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000 * 60 * 60 * 24);
    return () => clearInterval(timer);
  }, []);

  const linkClass =
    "relative inline-block text-[#9db8cf] transition-all duration-300 hover:text-[#00d4ff] hover:scale-105 before:content-[''] before:absolute before:w-0 before:h-[2px] before:bottom-0 before:left-0 before:bg-[#00d4ff] before:transition-all before:duration-300 hover:before:w-full";

  return (
    <footer className="border-t border-[#0f2b46] py-8 px-6 bg-[#0b1324]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-0">

        {/* Services */}
        <div className="flex flex-col space-y-1">
          <h2 className="text-white font-semibold mb-2">Our Services</h2>
          <p className={linkClass}>E-Commerce Management</p>
          <p className={linkClass}>Digital Marketing</p>
          <p className={linkClass}>Website Development</p>
          <p className={linkClass}>App Development</p>
        </div>

        {/* Technologies */}
        <div className="flex flex-col space-y-1">
          <h2 className="text-white font-semibold mb-2">Technologies</h2>
          <p className={linkClass}>React.js + Node.js + MongoDB</p>
          <p className={linkClass}>Python + Django</p>
          <p className={linkClass}>Canvas API</p>
          <p className={linkClass}>Adobe Suite</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-1">
          <h2 className="text-white font-semibold mb-2">Let's Work Together</h2>
          <p className={linkClass}>📱 +91 0000000000</p>
          <p className={linkClass}>📧 contact@protechtouch.com</p>
          <p className={linkClass}>📍 Vashali Nagar, Jaipur 302021</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-1">
          <h2 className="text-white font-semibold mb-2">Quick Links</h2>
          <p className={linkClass}>Home</p>
          <p className={linkClass}>Services</p>
          <p className={linkClass}>Our Work</p>
          <p className={linkClass}>Why Choose Us</p>
          <p className={linkClass}>Privacy Policy</p>
          <p className={linkClass}>Cookie Policy</p>
        </div>
      </div>

      <div className="mt-8 border-t border-[#0f2b46] pt-4 text-center text-sm text-[#9db8cf]">
        &copy; {year} Pro Tech Touch. All rights reserved.
      </div>
    </footer>
  );
}
