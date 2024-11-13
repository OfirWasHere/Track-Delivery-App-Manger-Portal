import React from "react";
import "./Navbar.css";
import { Box, Typography } from "@mui/material";
import useIsMobile from "../Hooks/useIsMobile";
import BurgerMenuIcon from "../BurgerMenu/BurgerMenuIcon/BurgerMenuIcon";

function Navbar(): JSX.Element {
  
  const isMobile = useIsMobile();

  return (
    <Box
      className="navbar"
      color="primary.100"
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      {!isMobile && <Typography variant="h4">Ofir Doron</Typography>}
      <Box pr={8}>
        <BurgerMenuIcon />
      </Box>
    </Box>
  );
}

export default Navbar;
