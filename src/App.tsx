/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Burdens from "./components/Burdens";
import Technology from "./components/Technology";
import Advantages from "./components/Advantages";
import HowItWorks from "./components/HowItWorks";
import Expertise from "./components/Expertise";
import Applications from "./components/Applications";
import RoiCalculator from "./components/RoiCalculator";
import BookCallModal from "./components/BookCallModal";
import CalculatorModal from "./components/CalculatorModal";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const [roiSummaryText, setRoiSummaryText] = useState("");
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleBookCallClick = () => {
    setRoiSummaryText("");
    setIsBookCallOpen(true);
  };

  const handleBookWithRoi = (summary: string) => {
    setRoiSummaryText(summary);
    setIsBookCallOpen(true);
  };

  const handleCalculateClick = () => {
    const el = document.getElementById("calculator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-slate-800 font-sans selection:bg-primary-600 selection:text-white relative overflow-hidden">
      {/* Custom Cursor for Desktop viewports */}
      <CustomCursor />

      {/* Absolute Decorative Ambient Glow Circles for Frosted Glass Backdrop */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px] opacity-40 pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-accent-500/5 rounded-full blur-[130px] opacity-30 pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[140px] opacity-35 pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-accent-500/5 rounded-full blur-[100px] opacity-25 pointer-events-none -z-10" />

      {/* Premium Sticky Navigation Header */}
      <Header onBookCallClick={handleBookCallClick} onCalculatorClick={() => setIsCalculatorOpen(true)} />

      <main>
        {/* Recreated Full-Screen Hero Section */}
        <Hero onCalculateClick={handleCalculateClick} onBookCallClick={handleBookCallClick} />

        {/* Financial impact and comparison dashboard: STOP FLUSHING CAPITAL */}
        <Burdens />

        {/* Process Technology Overview & Facility Video Walkthroughs */}
        <Technology />

        {/* Dynamic Key System Advantages & Facility Videos */}
        <Advantages />

        {/* Interactive Schematic Diagram: How It Works */}
        <HowItWorks />

        {/* Corporate Credentials, experience overview, and milestone timeline */}
        <Expertise />

        {/* Diversified Market Applications Bento Grid */}
        <Applications />

        {/* Interactive Interactive ROI Calculator Panel */}
        <RoiCalculator onBookWithRoi={handleBookWithRoi} />
      </main>

      {/* Corporate Info & Security footer */}
      <Footer />

      {/* Dynamic Inline Booking Modal */}
      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
        roiSummary={roiSummaryText}
      />

      {/* Dynamic Interactive Calculator Modal */}
      <CalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onBookWithRoi={handleBookWithRoi}
      />

    </div>
  );
}
