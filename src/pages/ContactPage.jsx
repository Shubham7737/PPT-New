import React, { useState } from "react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Optional: reset the success message after 3 seconds
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section contact relative z-10 py-20 px-4 md:px-16">
      <div className="contact-card max-w-[1100px] mx-auto border border-[#123355] rounded-[18px] p-4 md:p-6 shadow-[var(--ring)] bg-gradient-to-b from-[#0e1b32] to-[#091325]">
        
        <h2 className="text-3xl font-bold mb-2 text-white">Let's build something great</h2>
        <p className="text-[#cfe7ff] mb-6">Tell us about your project. We'll reply within 24 hours.</p>
        
        <form className="contact-form grid gap-3" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="bg-[#0a1529] border border-[#153b62] rounded-lg p-3 text-[#cfe7ff] outline-none focus:ring-2 focus:ring-[#00d4ff44] transition"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-[#0a1529] border border-[#153b62] rounded-lg p-3 text-[#cfe7ff] outline-none focus:ring-2 focus:ring-[#00d4ff44] transition"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Company / Brand"
              className="bg-[#0a1529] border border-[#153b62] rounded-lg p-3 text-[#cfe7ff] outline-none focus:ring-2 focus:ring-[#00d4ff44] transition"
            />
            <select
              required
              className="bg-[#0a1529] border border-[#153b62] rounded-lg p-3 text-[#cfe7ff] outline-none focus:ring-2 focus:ring-[#00d4ff44] transition"
              defaultValue=""
            >
              <option value="" disabled>
                Service Interested In
              </option>
              <option>E-commerce Management</option>
              <option>Website Development</option>
              <option>App Development</option>
              <option>Digital Marketing</option>
            </select>
          </div>

          {/* Textarea */}
          <textarea
            rows="4"
            placeholder="Brief about your project"
            className="bg-[#0a1529] border border-[#153b62] rounded-lg p-3 text-[#cfe7ff] outline-none focus:ring-2 focus:ring-[#00d4ff44] transition"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary magnetic inline-block rounded-lg px-6 py-3 bg-[#00d4ff] text-[#091325] font-medium border border-[#0f2b46] hover:opacity-90 transition duration-150"
          >
            Request Proposal
          </button>

          {/* Success Message */}
          <div
            className={`form-success text-[#9ee8ff] text-sm mt-2 transition-all duration-250 ${
              formSubmitted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
            }`}
          >
            Thanks! We'll get back to you shortly.
          </div>
        </form>

        {/* Contact Meta */}
        <div className="contact-meta flex flex-wrap gap-3 mt-4">
          <a href="tel:+91-0000000000" className="chip inline-block px-4 py-2 rounded-full border border-[#123355] text-[#cfe7ff] text-sm">
            Call Us
          </a>
          <a href="mailto:hello@protechtouch.example" className="chip inline-block px-4 py-2 rounded-full border border-[#123355] text-[#cfe7ff] text-sm">
            Email
          </a>
          <a href="#home" className="chip inline-block px-4 py-2 rounded-full border border-[#123355] text-[#cfe7ff] text-sm">
            Back to top ↑
          </a>
        </div>
      </div>
    </section>
  );
}
