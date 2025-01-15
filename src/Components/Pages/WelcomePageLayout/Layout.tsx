import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import AboutSection from "./Sections/AboutSection";
import ContactUs from "./Sections/ContactUs";
import HeaderSection from "./Sections/HeaderSection";
import RoutesNav from "../../Routes/RoutesNav";
import Navbar from "./Sections/Navbar";

function Layout() {
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

  const moveToSectionEventHandler = (id: number) => {
    setCurrentSection(id);
  };

  useEffect(() => {
    const targetSection = RoutesNav[currentSection].RouteID;

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
