import React, { useEffect, useState, TouchEvent } from "react";
import { Box } from "@mui/material";
import AboutSection from "./Sections/AboutSection";
import ContactUs from "./Sections/ContactUs";
import HeaderSection from "./Sections/HeaderSection";
import RoutesNav from "../../Routes/RoutesNav";
import Navbar from "./Sections/Navbar";

function Layout() {
  const [currentSection, setCurrentSection] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (event: TouchEvent) => {
    setTouchStart(event.touches[0].clientY);
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (!touchStart || !canScroll) return;

    const touchEnd = event.touches[0].clientY;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) < 50) return;

    if (canScroll) {
      const direction = diff > 0 ? 1 : -1;
      setCurrentSection((prev) => Math.max(0, Math.min(prev + direction, 2)));
      setCanScroll(false);

      setTimeout(() => {
        setCanScroll(true);
      }, 500);
    }

    setTouchStart(null);
  };

  const getMouseWheel = (event: React.WheelEvent) => {
    if (canScroll) {
      const direction = event.deltaY > 0 ? 1 : -1;
      setCurrentSection((prev) => Math.max(0, Math.min(prev + direction, 2)));
      setCanScroll(false);

      setTimeout(() => {
        setCanScroll(true);
      }, 600);
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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        touchAction: "none", // Prevents default touch handling
      }}
    >
      <Navbar
        currentSection={currentSection}
        moveToSection={moveToSectionEventHandler}
      />
      <Box
        id="header-section"
        sx={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <HeaderSection moveToSection={moveToSectionEventHandler} />
      </Box>
      <Box
        id="about-section"
        sx={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <AboutSection />
      </Box>
      <Box
        id="contact-section"
        sx={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <ContactUs />
      </Box>
    </div>
  );
}

export default Layout;
