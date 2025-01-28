import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        bgcolor: "background.default",
        gap: 2, // Adds spacing between spinner and text
      }}
    >
      <CircularProgress
        sx={{
          color: "primary.main", // Use theme's primary color
        }}
      />
      <Typography variant="h6" color="text.secondary">
        טוען את הדף אנא המתן...
      </Typography>
    </Box>
  );
}

export default Loading;
