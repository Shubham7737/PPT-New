import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ParticlesBackground from "./Component/ParticlesBackground";
import Navbar from "./Component/Navbar";
import Body from "./Component/Body"; // ← Full home page


const App = () => {
  return (
    <Router>
      <div className="relative text-white bg-[#0b1324] min-h-screen overflow-x-hidden">
        <ParticlesBackground />
        <Navbar />

        <Routes>
          {/* Full home page */}
          <Route path="/" element={<Body />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
