import { Box, Typography } from "@mui/material";
import {} from "lucide-react";
import React from "react";

function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
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
  );
}

export default AboutSection;
