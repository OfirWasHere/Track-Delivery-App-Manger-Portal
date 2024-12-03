import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";

interface HeaderSectionProps {
  moveToSection: (sectionIndex: number) => void;
}

function HeaderSection({ moveToSection }: HeaderSectionProps): JSX.Element {
  return (
    <Box
      component="section"
      id="home"
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
  );
}

export default HeaderSection;
