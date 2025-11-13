import React from "react";
import ParticlesBackground from "./Component/ParticlesBackground";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import Services from "./Component/Services";
import Marquee from "./Component/MarqueeOne";
import MarqueeTwo from "./Component/MarqueeTwo";
import RecentWork from "./Component/RecentWork";
import MarqueeThree from "./Component/MarqueeThree";
import WhyChoose from "./Component/WhyChoose";
import ContactForm from "./Component/ContactForm"
import Footer from "./Component/Footer";
import BrandBuilding from "./Component/BrandBuilding";
import DigitalMarketingProcess from "./Component/DigitalMarketingProcess";
import DigitalMarketingBenefits from "./Component/DigitalMarketingBenefits";



const App = () => {
  return (
    <div className="relative text-white bg-[#0b1324] min-h-screen overflow-x-hidden">
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Navbar */}
      <Navbar />

      Hero Section
      <HeroSection />
      <Marquee />
      <Services />
      <MarqueeTwo />
      <RecentWork />
      <MarqueeThree />
      <WhyChoose />
      {/* <BrandBuilding /> */}
      <DigitalMarketingProcess />
      <DigitalMarketingBenefits />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
