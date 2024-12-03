import React, { useRef, useEffect, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import AboutSection from "./Sections/AboutSection";
import ContactUs from "./Sections/ContactUs";
import HeaderSection from "./Sections/HeaderSection";

function HeroSection() {
  const sections = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (isScrolling) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const newSectionIndex = Math.min(
        Math.max(currentSection + direction, 0),
        sections.current.length - 1
      );

      if (newSectionIndex !== currentSection) {
        setIsScrolling(true);
        moveToSection(newSectionIndex);
        setTimeout(() => setIsScrolling(false), 300);
      }
    };

    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let newCurrentSection = 0;

      sections.current.forEach((section, index) => {
        if (section && scrollPosition >= section.offsetTop) {
          newCurrentSection = index;
        }
      });

      if (newCurrentSection !== currentSection) {
        setCurrentSection(newCurrentSection);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection, isScrolling]);

  function moveToSection(sectionIndex: number) {
    setCurrentSection(sectionIndex);
    const section = sections.current[sectionIndex];
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <Box>
      <Box ref={(el) => (sections.current[0] = el)}>
        <HeaderSection moveToSection={moveToSection} />
      </Box>
      <Box ref={(el) => (sections.current[1] = el)}>
        <AboutSection />
      </Box>
      <Box ref={(el) => (sections.current[2] = el)}>
        <ContactUs />
      </Box>
    </Box>
  );
}

export default HeroSection;
