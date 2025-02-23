import { AppBar, Toolbar } from "@mui/material";
import React from "react";

type NavbarPropsV2 = {
  isResponsive?: boolean;
  children: React.ReactNode;
};

function NavbarV2({ isResponsive, children }: NavbarPropsV2) {
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
