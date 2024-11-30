import React, { useRef, useEffect, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import Footer from "./Footer";

function HeroSection() {
  const sections = useRef([]); // Array to store section references
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false); // Track if scrolling is in progress

  useEffect(() => {
    const handleScroll = (event: any) => {
      event.preventDefault();
      if (isScrolling.current) return;
      isScrolling.current = true;

      const direction = event.deltaY > 0 ? 1 : -1; // Scroll down or up
      const newSectionIndex = Math.min(
        Math.max(currentSection + direction, 0),
        sections.current.length - 1
      );

      if (newSectionIndex !== currentSection) {
        setCurrentSection(newSectionIndex);
        sections.current[newSectionIndex].scrollIntoView({
          behavior: "smooth",
        });
        setTimeout(() => {
          isScrolling.current = false;
        }, 800); // Adjust the delay based on your animation duration
      }
    };

    const handleResize = () => {
      // Scroll to the current section to ensure it stays in the viewport
      sections.current[currentSection]?.scrollIntoView({
        behavior: "smooth",
        block: "center", // Align the section to the center
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("resize", handleResize); // Add resize event listener
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("resize", handleResize); // Clean up resize event listener
    };
  }, [currentSection]);

  return (
    <>
      {/* Section 1 */}
      <Box
        ref={(el) => (sections.current[0] = el)}
        sx={{
          height: "100vh",
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
                setCurrentSection(1);
                sections.current[1].scrollIntoView({ behavior: "smooth" });
              }}
            >
              התחל
            </Button>
            <Button variant="outlined" size="large" color="primary">
              בקש הדגמה
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Section 2 */}
      <Box
        ref={(el) => (sections.current[1] = el)}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "grey.800",
          color: "white",
        }}
      >
        <Typography variant="h3">ברוכים הבאים לחלק הבא</Typography>
      </Box>

      {/* Section 3 */}
      <Box
        ref={(el) => (sections.current[2] = el)}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "grey.700",
          color: "white",
        }}
      >
        <Box>
          <Typography variant="h3">עוד מידע מעניין</Typography>
        </Box>
      </Box>
    </>
  );
}

export default HeroSection;
