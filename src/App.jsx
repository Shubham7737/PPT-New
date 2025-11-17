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
import AnalyzeStrategize from "./Component/AnalyzeStrategize"
import ExecutePrecision from "./Component/ExecutePrecision";
import MeasureOptimize from "./Component/MeasureOptimize";
import SupportBrandValue from "./Component/SupportBrandValue";
import BoostUserRelationship from "./Component/BoostUserRelationship";
import DriveWebTraffic from "./Component/DriveWebTraffic";
import StayOnTop from "./Component/StayOnTop";



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

          </Routes>
        </div>
      </div>
    
  );
};

export default App;
