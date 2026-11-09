/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StripedTechnologiesSection from "./components/StripedTechnologiesSection";
import Burdens from "./components/Burdens";
import Technology from "./components/Technology";
import Advantages from "./components/Advantages";
import HowItWorks from "./components/HowItWorks";
import Expertise from "./components/Expertise";
import Applications from "./components/Applications";
import ApplicationPageView from "./components/ApplicationPageView";
import ClearanceView from "./components/ClearanceView";
import CapitalAnalysisView from "./components/CapitalAnalysisView";
import TechnicalSpecificationsView from "./components/TechnicalSpecificationsView";
import TechnicalFaqView from "./components/TechnicalFaqView";
import TechnicalSpecifications from "./components/TechnicalSpecifications";
import TechnicalFaq from "./components/TechnicalFaq";
import RoiCalculator from "./components/RoiCalculator";
import BookCallModal from "./components/BookCallModal";
import CalculatorModal from "./components/CalculatorModal";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export type ApplicationSlug = "drilling" | "food-beverage" | "agriculture" | "general-industrial" | "refineries" | "cooling-towers" | "wastewater";

function getInitialRouteState() {
  if (typeof window === "undefined") {
    return {
      activeApp: null as ApplicationSlug | null,
      isCapitalAnalysis: false,
      isClearance: false,
      capitalTab: "comparison" as "comparison" | "risk" | "advantage",
    };
  }
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const route = `${path} ${hash}`;

  if (route.includes("capital-analysis") || route.includes("comparison") || route.includes("risk-vs-advantage")) {
    const tab: "comparison" | "risk" | "advantage" = route.includes("risk")
      ? "risk"
      : route.includes("advantage")
      ? "advantage"
      : "comparison";
    return { activeApp: null, isCapitalAnalysis: true, isClearance: false, capitalTab: tab };
  }
  if (route.includes("clearance") || hash === "#clearance") {
    return { activeApp: null, isCapitalAnalysis: false, isClearance: true, capitalTab: "comparison" as const };
  }
  if (route.includes("refineries") || route.includes("oil-refineries") || hash === "#application-refineries" || hash === "#application-oil-refineries" || hash === "#oil-refineries-hydrocarbon") {
    return { activeApp: "refineries" as ApplicationSlug, isCapitalAnalysis: false, isClearance: false, capitalTab: "comparison" as const };
  }
  if (route.includes("wastewater") || hash === "#application-wastewater" || hash === "#wastewater-treatment-effluent") {
    return { activeApp: "wastewater" as ApplicationSlug, isCapitalAnalysis: false, isClearance: false, capitalTab: "comparison" as const };
  }
  if (route.includes("cooling-tower") || hash === "#application-cooling-towers" || hash === "#cooling-towers-industrial") {
    return { activeApp: "cooling-towers" as ApplicationSlug, isCapitalAnalysis: false, isClearance: false, capitalTab: "comparison" as const };
  }
  if (route.includes("drilling") || hash === "#application-drilling" || hash === "#drilling-lithium-extraction") {
    return { activeApp: "drilling" as ApplicationSlug, isCapitalAnalysis: false, isClearance: false, capitalTab: "comparison" as const };
  }
  if (route.includes("food-beverage") || hash === "#application-food-beverage" || hash === "#food-beverage-compliance") {
    return { activeApp: "food-beverage" as ApplicationSlug, isCapitalAnalysis: false, isClearance: false, capitalTab: "comparison" as const };
  }
  if (route.includes("agriculture") || hash === "#application-agriculture" || hash === "#agriculture-wastewater") {
    return { activeApp: "agriculture" as ApplicationSlug, isCapitalAnalysis: false, isClearance: false, capitalTab: "comparison" as const };
  }
  if (route.includes("general-industrial") || hash === "#application-general-industrial") {
    return { activeApp: "cooling-towers" as ApplicationSlug, isCapitalAnalysis: false, isClearance: false, capitalTab: "comparison" as const };
  }

  return { activeApp: null, isCapitalAnalysis: false, isClearance: false, capitalTab: "comparison" as const };
}

export default function App() {
  const initialRoute = getInitialRouteState();
  const [roiSummaryText, setRoiSummaryText] = useState("");
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [activeApplication, setActiveApplication] = useState<ApplicationSlug | null>(initialRoute.activeApp);
  const [isClearanceActive, setIsClearanceActive] = useState(initialRoute.isClearance);
  const [isCapitalAnalysisActive, setIsCapitalAnalysisActive] = useState(initialRoute.isCapitalAnalysis);
  const [isSpecsActive, setIsSpecsActive] = useState(false);
  const [isFaqActive, setIsFaqActive] = useState(false);
  const [capitalAnalysisTab, setCapitalAnalysisTab] = useState<"comparison" | "risk" | "advantage">(initialRoute.capitalTab);

  // Sync with URL pathname and hash for deep linking and search engine crawlers (e.g., /drilling, #application-drilling, etc.)
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const currentRoute = `${path} ${hash}`;

      if (currentRoute.includes("capital-analysis") || currentRoute.includes("comparison") || currentRoute.includes("risk-vs-advantage")) {
        setIsCapitalAnalysisActive(true);
        setIsClearanceActive(false);
        setIsSpecsActive(false);
        setIsFaqActive(false);
        setActiveApplication(null);
        if (currentRoute.includes("risk")) {
          setCapitalAnalysisTab("risk");
        } else if (currentRoute.includes("advantage")) {
          setCapitalAnalysisTab("advantage");
        } else {
          setCapitalAnalysisTab("comparison");
        }
      } else if (currentRoute.includes("clearance") || hash === "#clearance") {
        setIsClearanceActive(true);
        setIsCapitalAnalysisActive(false);
        setIsSpecsActive(false);
        setIsFaqActive(false);
        setActiveApplication(null);
      } else if (currentRoute.includes("technical-specifications") || currentRoute.includes("specifications") || hash === "#specs") {
        setIsSpecsActive(false);
        setIsFaqActive(false);
        setIsClearanceActive(false);
        setIsCapitalAnalysisActive(false);
        setActiveApplication(null);
        setTimeout(() => {
          const el = document.getElementById("technical-specifications");
          if (el) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            window.scrollTo({
              top: elementRect - bodyRect - offset,
              behavior: "smooth"
            });
          }
        }, 80);
      } else if (currentRoute.includes("technical-faq") || hash === "#faq") {
        setIsFaqActive(false);
        setIsSpecsActive(false);
        setIsClearanceActive(false);
        setIsCapitalAnalysisActive(false);
        setActiveApplication(null);
        setTimeout(() => {
          const el = document.getElementById("technical-faq");
          if (el) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            window.scrollTo({
              top: elementRect - bodyRect - offset,
              behavior: "smooth"
            });
          }
        }, 80);
      } else if (currentRoute.includes("refineries") || currentRoute.includes("oil-refineries") || hash === "#application-refineries" || hash === "#application-oil-refineries" || hash === "#oil-refineries-hydrocarbon") {
        setIsClearanceActive(false);
        setIsCapitalAnalysisActive(false);
        setIsSpecsActive(false);
        setIsFaqActive(false);
        setActiveApplication("refineries");
      } else if (currentRoute.includes("wastewater") || hash === "#application-wastewater" || hash === "#wastewater-treatment-effluent") {
        setIsClearanceActive(false);
        setIsCapitalAnalysisActive(false);
        setIsSpecsActive(false);
        setIsFaqActive(false);
        setActiveApplication("wastewater");
      } else if (currentRoute.includes("cooling-tower") || hash === "#application-cooling-towers" || hash === "#cooling-towers-industrial") {
        setIsClearanceActive(false);
        setIsCapitalAnalysisActive(false);
        setIsSpecsActive(false);
        setIsFaqActive(false);
        setActiveApplication("cooling-towers");
      } else if (currentRoute.includes("drilling") || hash === "#application-drilling" || hash === "#drilling-lithium-extraction") {
        setIsClearanceActive(false);
        setIsCapitalAnalysisActive(false);
        setIsSpecsActive(false);
        setIsFaqActive(false);
        setActiveApplication("drilling");
      } else if (currentRoute.includes("food-beverage") || hash === "#application-food-beverage" || hash === "#food-beverage-compliance") {
        setIsClearanceActive(false);
        setIsCapitalAnalysisActive(false);
        setIsSpecsActive(false);
        setIsFaqActive(false);
        setActiveApplication("food-beverage");
      } else if (currentRoute.includes("agriculture") || hash === "#application-agriculture" || hash === "#agriculture-wastewater") {
        setIsClearanceActive(false);
        setIsCapitalAnalysisActive(false);
        setIsSpecsActive(false);
        setIsFaqActive(false);
        setActiveApplication("agriculture");
      } else if (currentRoute.includes("general-industrial") || hash === "#application-general-industrial") {
        setIsClearanceActive(false);
        setIsCapitalAnalysisActive(false);
        setIsSpecsActive(false);
        setIsFaqActive(false);
        setActiveApplication("cooling-towers");
      } else if (hash === "#home" || hash === "" || hash === "#applications" || hash === "#burdens" || path === "/" || path === "") {
        setIsClearanceActive(false);
        setIsCapitalAnalysisActive(false);
        setIsSpecsActive(false);
        setIsFaqActive(false);
        setActiveApplication(null);
      }
    };

    handleRouteChange();
    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const handleSelectIndustry = (slug: ApplicationSlug) => {
    setIsClearanceActive(false);
    setIsCapitalAnalysisActive(false);
    setIsSpecsActive(false);
    setIsFaqActive(false);
    setActiveApplication(slug);
    if (window.history.pushState) {
      window.history.pushState(null, "", `/${slug}`);
    } else {
      window.location.hash = `application-${slug}`;
    }
  };

  const handleClearanceClick = () => {
    setActiveApplication(null);
    setIsCapitalAnalysisActive(false);
    setIsSpecsActive(false);
    setIsFaqActive(false);
    setIsClearanceActive(true);
    if (window.history.pushState) {
      window.history.pushState(null, "", "/clearance");
    } else {
      window.location.hash = "clearance";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCapitalAnalysisClick = (subTab?: "comparison" | "risk" | "advantage") => {
    setActiveApplication(null);
    setIsClearanceActive(false);
    setIsSpecsActive(false);
    setIsFaqActive(false);
    setCapitalAnalysisTab(subTab || "comparison");
    setIsCapitalAnalysisActive(true);
    if (window.history.pushState) {
      window.history.pushState(null, "", "/capital-analysis");
    } else {
      window.location.hash = subTab ? `capital-analysis-${subTab}` : "capital-analysis";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSpecsClick = () => {
    setActiveApplication(null);
    setIsClearanceActive(false);
    setIsCapitalAnalysisActive(false);
    setIsSpecsActive(false);
    setIsFaqActive(false);
    window.location.hash = "technical-specifications";
    setTimeout(() => {
      const el = document.getElementById("technical-specifications");
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        window.scrollTo({
          top: elementRect - bodyRect - offset,
          behavior: "smooth"
        });
      }
    }, 60);
  };

  const handleFaqClick = () => {
    setActiveApplication(null);
    setIsClearanceActive(false);
    setIsCapitalAnalysisActive(false);
    setIsSpecsActive(false);
    setIsFaqActive(false);
    window.location.hash = "technical-faq";
    setTimeout(() => {
      const el = document.getElementById("technical-faq");
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        window.scrollTo({
          top: elementRect - bodyRect - offset,
          behavior: "smooth"
        });
      }
    }, 60);
  };

  const handleBackFromClearance = () => {
    setIsClearanceActive(false);
    if (window.history.pushState) {
      window.history.pushState(null, "", "/");
    }
    window.location.hash = "home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackFromCapitalAnalysis = () => {
    setIsCapitalAnalysisActive(false);
    if (window.history.pushState) {
      window.history.pushState(null, "", "/#burdens");
    } else {
      window.location.hash = "burdens";
    }
    setTimeout(() => {
      const el = document.getElementById("burdens");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const handleBackFromSpecs = () => {
    setIsSpecsActive(false);
    if (window.history.pushState) {
      window.history.pushState(null, "", "/");
    }
    window.location.hash = "home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackFromFaq = () => {
    setIsFaqActive(false);
    if (window.history.pushState) {
      window.history.pushState(null, "", "/");
    }
    window.location.hash = "home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToApplications = () => {
    setIsClearanceActive(false);
    setIsCapitalAnalysisActive(false);
    setIsSpecsActive(false);
    setIsFaqActive(false);
    setActiveApplication(null);
    if (window.history.pushState) {
      window.history.pushState(null, "", "/#applications");
    } else {
      window.location.hash = "applications";
    }
    setTimeout(() => {
      const el = document.getElementById("applications");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const handleHomeClick = () => {
    setIsClearanceActive(false);
    setIsCapitalAnalysisActive(false);
    setIsSpecsActive(false);
    setIsFaqActive(false);
    setActiveApplication(null);
    if (window.history.pushState) {
      window.history.pushState(null, "", "/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookCallClick = (presetSubject?: string) => {
    setRoiSummaryText(presetSubject || "");
    setIsBookCallOpen(true);
  };

  const handleBookWithRoi = (summary: string) => {
    setRoiSummaryText(summary);
    setIsBookCallOpen(true);
  };

  const handleCalculateClick = () => {
    setIsCalculatorOpen(true);
  };

  return (
    <div className="bg-[#F4F6FA] min-h-screen text-[#101828] font-sans selection:bg-[#0066FF] selection:text-white relative overflow-hidden">
      {/* Custom Cursor for Desktop viewports */}
      <CustomCursor />

      {/* Absolute Decorative Ambient Glow Circles for Frosted Glass Backdrop */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-[120px] opacity-40 pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#0066FF]/5 rounded-full blur-[130px] opacity-30 pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-[140px] opacity-35 pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-[#0066FF]/5 rounded-full blur-[100px] opacity-25 pointer-events-none -z-10" />

      {/* Premium Sticky Navigation Header */}
      <Header 
        onBookCallClick={handleBookCallClick} 
        onCalculatorClick={() => setIsCalculatorOpen(true)}
        onSelectIndustry={handleSelectIndustry}
        onClearanceClick={handleClearanceClick}
        isClearanceActive={isClearanceActive}
        onCapitalAnalysisClick={handleCapitalAnalysisClick}
        isCapitalAnalysisActive={isCapitalAnalysisActive}
        onSpecsClick={handleSpecsClick}
        onFaqClick={handleFaqClick}
        onHomeClick={handleHomeClick}
      />

      <main>
        {isCapitalAnalysisActive ? (
          <CapitalAnalysisView
            onBack={handleBackFromCapitalAnalysis}
            onBookCallClick={handleBookCallClick}
            onCalculatorClick={() => setIsCalculatorOpen(true)}
            initialTab={capitalAnalysisTab}
          />
        ) : isClearanceActive ? (
          <ClearanceView
            onBack={handleBackFromClearance}
            onBookCallClick={handleBookCallClick}
            onCalculatorClick={() => setIsCalculatorOpen(true)}
          />
        ) : isSpecsActive ? (
          <TechnicalSpecificationsView
            onBack={handleBackFromSpecs}
            onBookCallClick={handleBookCallClick}
            onCalculatorClick={() => setIsCalculatorOpen(true)}
          />
        ) : isFaqActive ? (
          <TechnicalFaqView
            onBack={handleBackFromFaq}
            onBookCallClick={handleBookCallClick}
            onCalculatorClick={() => setIsCalculatorOpen(true)}
          />
        ) : activeApplication ? (
          <ApplicationPageView
            slug={activeApplication}
            onBack={handleBackToApplications}
            onNavigate={handleSelectIndustry}
            onBookCallClick={handleBookCallClick}
            onCalculatorClick={() => setIsCalculatorOpen(true)}
          />
        ) : (
          <>
            {/* Wide Horizontal 5 Alternating Diagonal Stripes Image Section */}
            <StripedTechnologiesSection onSelectIndustry={handleSelectIndustry} />

            {/* Recreated Full-Screen Hero Section */}
            <Hero onCalculateClick={handleCalculateClick} onBookCallClick={handleBookCallClick} />

            {/* Financial impact and comparison dashboard: STOP FLUSHING CAPITAL */}
            <Burdens onLearnMore={(side) => handleCapitalAnalysisClick(side)} />

            {/* Process Technology Overview & Facility Video Walkthroughs */}
            <Technology />

            {/* Dynamic Key System Advantages & Facility Videos */}
            <Advantages />

            {/* Interactive Schematic Diagram: How It Works */}
            <HowItWorks />

            {/* Corporate Credentials, experience overview, and milestone timeline */}
            <Expertise />

            {/* Diversified Market Applications Bento Grid */}
            <Applications onSelectIndustry={handleSelectIndustry} />

            {/* Industrial Engineering Specifications & Baseline Sizing */}
            <TechnicalSpecifications onBookCallClick={handleBookCallClick} />

            {/* B2B Technical & Regulatory FAQ */}
            <TechnicalFaq onBookCallClick={handleBookCallClick} />

            {/* Interactive Interactive ROI Calculator Panel */}
            <RoiCalculator onBookWithRoi={handleBookWithRoi} />
          </>
        )}
      </main>

      {/* Corporate Info & Security footer */}
      <Footer 
        onSelectIndustry={handleSelectIndustry} 
        onClearanceClick={handleClearanceClick}
        onCapitalAnalysisClick={handleCapitalAnalysisClick}
        onSpecsClick={handleSpecsClick}
        onFaqClick={handleFaqClick}
      />

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
