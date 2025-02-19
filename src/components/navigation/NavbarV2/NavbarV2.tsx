import { AppBar, Toolbar } from "@mui/material";
import React from "react";

function NavbarV2({ isResponsive, children }: any) {
  return (
    <AppBar
    position="fixed"
    color="default"
    elevation={1}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {children}
      </Toolbar>
    </AppBar>
  );
}

export default NavbarV2;
