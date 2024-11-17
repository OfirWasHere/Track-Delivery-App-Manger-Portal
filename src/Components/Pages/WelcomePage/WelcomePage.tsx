import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../common/Navbar/Navbar";
import BurgerMenu from "../../common/BurgerMenu/BurgerMenu/BurgerMenu";

function WelcomePage() {
  return (
    <div>
      <Box>
        <header>
          <BurgerMenu />
          <Navbar />
        </header>
        <Box>Hi I'm homeplage</Box>
      </Box>
    </div>
  );
}

export default WelcomePage;
