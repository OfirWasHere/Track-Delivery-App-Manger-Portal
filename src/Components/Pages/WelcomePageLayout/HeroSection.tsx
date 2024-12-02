import React, { useRef, useEffect, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import Footer from "./Footer";

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
    <>
      {/* Section 1 */}
      <Box
        component="section"
        id="home"
        ref={(el) => (sections.current[0] = el)}
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          backgroundColor: "grey.900",
          textAlign: "right",
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" color="grey.200" gutterBottom>
            נהל את צי הנהגים שלך בקלות
          </Typography>
          <Typography variant="h5" color="grey.300" gutterBottom>
            האפליקציה שלנו עוזרת לך לסדר בקלות את ההובלות שלך, לערוך להוציא ועוד
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            gap={2}
            mt={2}
          >
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => {
                moveToSection(1);
              }}
            >
              פרטים נוספים
            </Button>
            <Button
              onClick={() => {
                moveToSection(2);
              }}
              variant="outlined"
              size="large"
              color="primary"
            >
              הרשמה
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Section 2 */}
      <Box
        component="section"
        id="about"
        ref={(el) => (sections.current[1] = el)}
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "grey.800",
          color: "white",
        }}
      >
        <Typography variant="h3">קצת עלינו</Typography>
      </Box>

      {/* Section 3 */}
      <Box
        component="section"
        id="contact"
        ref={(el) => (sections.current[2] = el)}
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "grey.700",
          color: "white",
        }}
      >
        <Box>
          <Typography variant="h3">צור קשר</Typography>
        </Box>
      </Box>
    </>
  );
}

export default HeroSection;
