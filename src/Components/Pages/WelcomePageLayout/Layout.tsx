import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import AboutSection from "./Sections/AboutSection";
import ContactUs from "./Sections/ContactUs";
import HeaderSection from "./Sections/HeaderSection";
import NavbarV1 from "./Sections/NavbarV1";
import Navbar from "./Sections/Navbar";

// When Navbar updates the index the scroller doesn't know and still thinks we're on the same page

function Layout() {
  const [currentSection, setCurrentSection] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const sections = ["ראשי", "אודות", "תכונות", "המלצות?", "צור קשר"];

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

  const moveToSectionEventHandler = (id: number) => {
    setCurrentSection(id);
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
      <Navbar
        sections={sections}
        currentSection={currentSection}
        moveToSection={moveToSectionEventHandler}
      />
      <Box id="header-section">
        <HeaderSection moveToSection={moveToSectionEventHandler} />
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

export default Layout;
