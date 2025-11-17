import React, { useEffect, useState } from "react";

import "../pages/Hero.css";

const Hero = () => {

   const words = ["performant", "elegant", "scalable", "profitable"];
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % words.length;
      setCurrentWord(words[i]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Count-up animation
  useEffect(() => {
    const els = document.querySelectorAll('.metric span[data-count]');
    const animate = (el) => {
      const target = +el.dataset.count;
      const dur = 1200;
      const start = performance.now();
      function tick(t) {
        const p = Math.min(1, (t - start) / dur);
        const val = Math.floor(0 + (target - 0) * (0.5 - Math.cos(p * Math.PI) / 2));
        el.textContent = val;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animate(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.6 });
    els.forEach(el => io.observe(el));
  }, []);


  // handle call btn
  const handleCall = () => {
    window.location.href = "tel: +91 0000000000"
  }

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="title reveal show" id="first">
            We build{" "}
            <span className="accent gradient-text swapper">{currentWord}</span>
            <br />
            digital products
          </h1>
          <p className="subtitle reveal delay-1 show">
            E-commerce Management • Website & App Development • Digital Marketing
          </p>
          <div className="cta-row reveal delay-2 show">
            <a className="btn btn-primary magnetic" href="#contact">
              Get Proposal
            </a>
            <a className="btn btn-ghost" href="#services" onClick={handleCall} >
              <span id="call">Call Us </span>
            </a>
          </div>
          <div className="metrics reveal delay-3 show">
            <div className="metric">
              <span data-count="250" id="spanHero">250</span>+ Projects
            </div>
            <div className="metric">
              <span data-count="120" id="span120" >120</span>% Growth
            </div>
            <div className="metric" >
              <span data-count="9" id="span9">9</span> Years
            </div>
          </div>
        {/* </div> */}
        </div>

        <div className="hero-panel reveal delay-2 show" aria-hidden="true">
          <svg viewBox="0 0 400 400" className="neon-orb">
            <defs>
              <radialGradient id="g1" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#00d4ff" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="#00d4ff" stopOpacity="0"></stop>
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="120" fill="url(#g1)">
              <animate
                attributeName="r"
                values="110;140;110"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          <div className="panel-card tilt">
            {/* <h3>Growth Engine</h3>
            <p>SEO + Ads + CRO + Automation. We stitch channels that convert.</p> */}
          </div>

          <div
            className="panel-card tilt"
            id="light-box"
            style={{ transform: "perspective(800px) rotateX(0deg) rotateY(0deg)" }}
          >
            <h3>Lightning Dev</h3>
            <p>Modern stacks, clean UI/UX, API-first — built for scale.</p>
          </div>

          <div className="panel-card tilt" id="market-box">
            <h3>Marketplace Ops</h3>
            <p>End-to-end seller onboarding & growth on Amazon/Flipkart/etc.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
