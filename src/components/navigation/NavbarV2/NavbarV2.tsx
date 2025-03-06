import { AppBar, Box, SxProps, Theme, Toolbar } from "@mui/material";
import React from "react";

type NavbarPropsV2 = {
  children: React.ReactNode;
  navbarHeight?: string;
  sx?: SxProps<Theme>;
};

function NavbarV2({ children, navbarHeight = "80px", sx }: NavbarPropsV2) {
  return (
    <Box sx={{ height: navbarHeight }}>
      <AppBar
        position="fixed"
        color="default"
        elevation={1}
        sx={{
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          height: navbarHeight,
          ...sx,
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
    </Box>
  );
}

export default NavbarV2;
