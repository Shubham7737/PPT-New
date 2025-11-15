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
      <div id="home"><HomePage /></div>
      <Marquee />
      <ServicesPage />
      <MarqueeTwo />
      <div id="work"><RecentWorkPage /></div>
      <MarqueeThree />
      {/* <BrandBuilding /> */}
      <DigitalMarketingProcess />
      <DigitalMarketingBenefits />
     <div id="why-us"><WhyChoosePage /></div>
      <ContactPage />
      <Footer />
    </div>
  )
}
