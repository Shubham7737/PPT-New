import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ParticlesBackground from "./Component/ParticlesBackground";
import Navbar from "./Component/Navbar";
import Body from "./Component/Body"; // ← Full home page
import EcommerceDetails from "./pages/EcommerceDetails";
import WebsiteDetails from "./pages/WebsiteDetails";
import DigitalDetailPage from "./pages/DigitalDetailPage";
import AppPage from "./pages/AppPage";
import useScrollToTop from "./Hooks/useScrollToTop";
import AnalyzeStrategize from "./Component/strategy/AnalyzeStrategize"
import ExecutePrecision from "./Component/strategy/ExecutePrecision";
import MeasureOptimize from "./Component/strategy/MeasureOptimize";
import SupportBrandValue from "./Component/support/SupportBrandValue";
import BoostUserRelationship from "./Component/support/BoostUserRelationship";
import DriveWebTraffic from "./Component/support/DriveWebTraffic";
import StayOnTop from "./Component/support/StayOnTop";
import BrandValueCard from "./Component/ProTech/BrandValueCard";
import SpeedScale from "./Component/ProTech/SpeedScale";
import Ownership from "./Component/ProTech/Ownership";
import Clarity from "./Component/ProTech/Clarity";
import StoreManagement from "./Component/EcardService/StoreManagement";
import Second from "./Component/EcardService/Second";
import ThirdCard from "./Component/EcardService/thirdCard";
import ForthCard from "./Component/EcardService/forthCard";




const App = () => {
useScrollToTop(); 

  return (
    
      <div className="relative min-h-screen overflow-x-hidden">
         
         {/* <useScrollToTop /> */}

        {/* Particles Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <ParticlesBackground />
        </div>

        {/* Navbar + Page Content */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/ecommerce-service" element={<EcommerceDetails />} />
            <Route path="/website-development" element={<WebsiteDetails />} />
            <Route path="/digital-marketing" element={<DigitalDetailPage />} />
            <Route path="/app-page" element={<AppPage />} />
            <Route path="/analyze-strategize" element={<AnalyzeStrategize />} />
            <Route path="/ExecutePrecision" element={<ExecutePrecision />} />
            <Route path="/MeasureOptimize" element={<MeasureOptimize />} />
            
          {/* {Support routing} */}
          <Route path="/supportBrandValue" element={<SupportBrandValue />} />
           <Route path="/boostUserRelationship" element={<BoostUserRelationship />} />
          <Route path="/DriveWebTraffic" element={<DriveWebTraffic />} />
          <Route path="/StayOnTop" element={<StayOnTop />} />


          {/* Brand value page route */}
          <Route path="/Results-first" element={<BrandValueCard />} />
          <Route path="/speed-scale" element={<SpeedScale />} />
          <Route path="/ownership" element={<Ownership />} />
          <Route path="/clarity" element={<Clarity />} />

          {/* {E-commerce details page route} */}
          <Route path="/store-management" element={<StoreManagement />} />
          <Route path="/second-card" element={<Second />} />
          <Route path="/third-card" element={<ThirdCard />} />
          <Route path="/forth-card" element={<ForthCard />} />

          </Routes>
        </div>
      </div>
    
  );
};

export default App;
