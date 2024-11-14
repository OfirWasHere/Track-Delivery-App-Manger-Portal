import React from "react";
import { Box } from "@mui/material";
import NavbarLayout from "../../NavbarLayout/NavbarLayout";
import BurgerMenu from "../../common/BurgerMenu/BurgerMenu/BurgerMenu";

function Home() {
  return (
    <div>
      <Box>
        <header>
          <BurgerMenu />
          <NavbarLayout />
        </header>
        <Box></Box>
      </Box>
    </div>
  );
}

export default Home;
