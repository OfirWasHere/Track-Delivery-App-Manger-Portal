import React from "react";
import { Box } from "@mui/material";
import NavbarLayout from "../../NavbarLayout/NavbarLayout";
import BurgerMenu from "../../common/BurgerMenu/BurgerMenu/BurgerMenu";

function WelcomePage() {
  return (
    <div>
      <Box>
        <header>
          <BurgerMenu />
          <NavbarLayout />
        </header>
        <Box>Hi I'm homeplage</Box>
      </Box>
    </div>
  );
}

export default WelcomePage;
