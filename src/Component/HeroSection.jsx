import { useEffect, useState } from "react";

const words = ["performant", "elegant", "scalable", "profitable"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [cardsAnimated, setCardsAnimated] = useState(false);

  const [projectsCount, setProjectsCount] = useState(0);
  const [growthCount, setGrowthCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    const animationDelay = setTimeout(() => {
      setCardsAnimated(true);
    }, 100);

    const projectsTarget = 250;
    const growthTarget = 120;
    const duration = 2000;
    const steps = 50;
    const projectStep = Math.ceil(projectsTarget / steps);
    const growthStep = Math.ceil(growthTarget / steps);
    let projectCurrent = 0;
    let growthCurrent = 0;

    const countInterval = setInterval(() => {
      if (projectCurrent < projectsTarget) {
        projectCurrent += projectStep;
        if (projectCurrent > projectsTarget) projectCurrent = projectsTarget;
        setProjectsCount(projectCurrent);
      }
      if (growthCurrent < growthTarget) {
        growthCurrent += growthStep;
        if (growthCurrent > growthTarget) growthCurrent = growthTarget;
        setGrowthCount(growthCurrent);
      }
      if (projectCurrent === projectsTarget && growthCurrent === growthTarget) {
        clearInterval(countInterval);
      }
    }, duration / steps);

    return () => {
      clearInterval(interval);
      clearTimeout(animationDelay);
      clearInterval(countInterval);
    };
  }, []);

  const getCardClasses = (initialX, finalX, yPosition, styles) => {
    const baseClasses = `absolute rounded-xl p-4 w-[min(280px,90%)] text-white transition-all duration-1000 ease-out sm:left-1/2 sm:-translate-x-1/2 md:right-0 ${yPosition} ${styles}`;
    return cardsAnimated
      ? `${baseClasses} opacity-100 translate-x-0`
      : `${baseClasses} opacity-0 translate-x-[${initialX}px] md:translate-x-0`;
  };

  return (
    <section className="relative z-10 mt-20 px-4 md:px-16">
  <div className="max-w-7xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
    {/* Hero Text */}
    <div>
      <h1 className="text-[clamp(30px,5.4vw,62px)] font-bold leading-[1.06] mb-4 text-[#e6f3ff] drop-shadow-[0_6px_24px_rgba(0,212,255,0.13)]">
        We build{" "}
        <span className="bg-gradient-to-r from-[#00d4ff] to-[#56f6a6] bg-clip-text text-transparent">
          {words[wordIndex]}
        </span>
        <br className="sm:hidden md:block" />
        digital products
      </h1>
      <p className="text-[#9fb6c9] mb-6">
        E‑commerce Management • Website & App Development • Digital Marketing
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        <a
          className="btn-primary rounded-lg px-4 py-2 border border-[#0f2b46] bg-gradient-to-r from-[#00d4ff] to-[#00ff8c] text-gray-900 font-medium hover:opacity-90 transition duration-150 ease-in-out"
          href="#contact"
        >
          Get Proposal
        </a>
        <a
          className="btn-ghost rounded-lg px-4 py-2 border border-[#0f2b46] text-[#b7d0e5] font-medium hover:text-[#00d4ff] transition duration-150 ease-in-out"
          href="#services"
        >
          Explore Services
        </a>
      </div>

      <div className="flex gap-6 text-[#b7d0e5]">
        <div className="bg-[#0b1630a6] border border-[#123355] px-3 py-2 rounded-lg">
          <span className="text-[#00d4ff] font-bold">{projectsCount}</span>+ Projects
        </div>
        <div className="bg-[#0b1630a6] border border-[#123355] px-3 py-2 rounded-lg">
          <span className="text-[#00d4ff] font-bold">{growthCount}</span>% Growth
        </div>
        <div className="bg-[#0b1630a6] border border-[#123355] px-3 py-2 rounded-lg">
          <span className="text-[#00d4ff] font-bold">9</span> Years
        </div>
      </div>
    </div>

    {/* Hero Panel Cards */}
    <div className="relative h-[350px] mt-8 ml-10  w-full mx-auto md:max-w-none">
  {/* Background Effect */}
  <div className="absolute inset-0 m-auto w-full h-full opacity-60 blur-[2px] drop-shadow-[0_0_60px_rgba(0,212,255,0.2)] rounded-full bg-gradient-radial from-[#00d4ff]/30 to-transparent"></div>

  {/* Marketplace Ops Card */}
  <div
    id="market-box"
    className={getCardClasses(
      -100,
      0,
      "top-26 z-30",
      "bg-gradient-to-r from-[#00c6e6] to-[#253045] border-[3px]  border-[#00ffcc80] shadow-[0_0_10px_rgba(4,16,14,0.3),0_0_20px_rgba(0,255,200,0.4),0_0_40px_rgba(0,255,200,0.5)] p-6"
    )}
  >
    <h3 className="text-[#00d4ff] font-bold mb-2 text-3xl">Marketplace Ops</h3>
    <p className="text-[#cfe7ff] text-base">
      End‑to‑end seller onboarding & growth on Amazon/Flipkart/etc.
    </p>
  </div>

  {/* Lightning Dev Card */}
  <div
  id="light-box"
  className={getCardClasses(
    100,
    0,
    // ↓ mobile pe thoda andar, desktop pe thoda bahar
    "left-6 md:left-70 z-20",
    "bg-gradient-to-r from-[#191e2b] to-[#00c6e6] border border-[#00ffcc80] shadow-[0_0_10px_rgba(4,16,14,0.3),0_0_20px_rgba(0,255,200,0.4),0_0_40px_rgba(0,255,200,0.5)] p-6"
  )}
>
  <h3 className="text-[#00d4ff] font-bold mb-2 text-3xl">Lightning Dev</h3>
  <p className="text-[#cfe7ff]  text-2xl">
    Modern stacks, clean UI/UX, API-first — built for scale.
  </p>
</div>

</div>

  </div>
</section>

  );
}
