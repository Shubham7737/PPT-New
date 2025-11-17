import React from 'react'
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import Marquee from "../Component/MarqueeOne";
import MarqueeTwo from "../Component/MarqueeTwo";
import RecentWorkPage from "../pages/RecentWorkPage";
import MarqueeThree from "../Component/MarqueeThree";
import WhyChoosePage from "../pages/WhyChoosePage";
import ContactPage from "../pages/ContactPage"
import Footer from "../Component/Footer";
// import BrandBuilding from "./Component/BrandBuilding";
import DigitalMarketingProcess from "../Component/DigitalMarketingProcess";
import DigitalMarketingBenefits from "../Component/DigitalMarketingBenefits";

export default function Body() {
  return (
    <div>
      {/* 1. HOME Section */}
      <div id="home"><HomePage /></div>
      
      <Marquee />
      
      {/* 2. SERVICES Section - ID added: "services" */}
      <div id="services"> 
        <ServicesPage />
      </div>
      
      <MarqueeTwo />
      
      {/* 3. WORK Section - ID already present: "work" */}
      <div id="work"><RecentWorkPage /></div>
      
      <MarqueeThree />
      
      {/* Marketing Components (Inke liye ID zaroori nahi agar Navbar mein link nahi hai) */}
      <DigitalMarketingProcess />
      <DigitalMarketingBenefits />
      
      {/* 4. WHY US Section - ID changed from "why-us" to "why" to match Navbar link */}
      <div id="why"><WhyChoosePage /></div> 
      
      {/* 5. CONTACT Section - ID added: "contact" */}
      <div id="contact">
        <ContactPage />
      </div>
      
      <Footer />
    </div>
  )
}