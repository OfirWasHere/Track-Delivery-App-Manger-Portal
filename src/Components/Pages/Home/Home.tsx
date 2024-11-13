import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../Navbar/Navbar";
import BurgerMenu from "../../BurgerMenu/BurgerMenu/BurgerMenu";

function Home() {
  return (
    <div>
      <Box>
        <header>
          <BurgerMenu />
          <Navbar />
        </header>
        <Box></Box>
      </Box>
    </div>
  );
}

export default Home;
