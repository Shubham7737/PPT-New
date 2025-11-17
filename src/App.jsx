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
          </Routes>
        </div>
      </div>
    
  );
};

export default App;
