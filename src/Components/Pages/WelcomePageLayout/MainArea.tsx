import React, { useEffect, useState, useCallback } from "react";
import { Box } from "@mui/material";
import AboutSection from "./Sections/AboutSection";
import ContactUs from "./Sections/ContactUs";
import HeaderSection from "./Sections/HeaderSection";

function HeroSection() {
  const [currentSection, setCurrentSection] = useState(0);
  const [canScroll, setCanScroll] = useState(true);

  const getMouseWheel = (event: React.WheelEvent) => {
    if (canScroll) {
      const direction = event.deltaY > 0 ? 1 : -1;
      setCurrentSection((prev) => Math.max(0, Math.min(prev + direction, 2)));
      setCanScroll(false);

      setTimeout(() => {
        setCanScroll(true);
      }, 800);
    }
  };

  useEffect(() => {
    const sectionIds = ["header-section", "about-section", "contact-section"];
    const targetSection = sectionIds[currentSection];

    const element = document.getElementById(targetSection);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentSection]);

  return (
    <div
      onWheel={getMouseWheel}
      style={{ overflow: "hidden", height: "100vh" }}
    >
      <Box id="header-section">
        <HeaderSection />
      </Box>
      <Box id="about-section">
        <AboutSection />
      </Box>
      <Box id="contact-section">
        <ContactUs />
      </Box>
    </div>
  );
}

export default HeroSection;
