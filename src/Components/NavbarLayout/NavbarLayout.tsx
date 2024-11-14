import React from "react";
import "./NavbarLayout.css";
import { Box } from "@mui/material";
import useIsMobile from "../Hooks/useIsMobile";
import BurgerMenuIcon from "../common/BurgerMenu/BurgerMenuIcon/BurgerMenuIcon";

function NavbarLayout(): JSX.Element {
  const isMobile = useIsMobile();

  return (
    <div>
      {!isMobile && <Box></Box>}
      {isMobile && (
        <Box
          className="navbarLayout"
          color="primary.100"
          p={4}
          display="flex"
          alignItems="center"
          justifyContent={"flex-end"}
        >
          <Box pr={8}>
            <BurgerMenuIcon />
          </Box>
        </Box>
      )}
    </div>
  );
}

export default NavbarLayout;
