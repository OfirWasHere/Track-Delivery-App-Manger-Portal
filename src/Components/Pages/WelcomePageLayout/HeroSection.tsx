import React, { useRef, useEffect, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import Footer from "./Footer";

function HeroSection() {
  const sections = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      const direction = event.deltaY > 0 ? 1 : -1;
      const newSectionIndex = Math.min(
        Math.max(currentSection + direction, 0),
        sections.current.length - 1
      );

      if (newSectionIndex !== currentSection) {
        moveToSection(newSectionIndex);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection]);

  function moveToSection(sectionIndex: number) {
    setCurrentSection(sectionIndex);
    sections.current[sectionIndex].scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* Section 1 */}
      <Box
        id={"home"}
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
                moveToSection(1);
              }}
            >
              התחל
            </Button>
            <Button
              onClick={() => {
                moveToSection(2);
              }}
              variant="outlined"
              size="large"
              color="primary"
            >
              בקש הדגמה
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Section 2 */}
      <Box
        id={"about"}
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
        <Typography variant="h3">קצת עליינו</Typography>
      </Box>

      {/* Section 3 */}
      <Box
        id={"contact"}
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
          <Typography variant="h3">צור קשר</Typography>
        </Box>
      </Box>
    </>
  );
}

export default HeroSection;
