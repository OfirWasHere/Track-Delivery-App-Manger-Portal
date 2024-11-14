import React from "react";
import "./NavbarLayout.css";
import { Box, Typography, AppBar, IconButton, Toolbar } from "@mui/material";
import useIsMobile from "../Hooks/useIsMobile";
import BurgerMenuIcon from "../common/BurgerMenu/BurgerMenuIcon/BurgerMenuIcon";
import { NavLink } from "react-router-dom";
import RoutesNav from "../Routes/RoutesNav";

function NavbarLayout(): JSX.Element {
  const isMobile = useIsMobile();

  function renderNavLinks() {
    return RoutesNav.map((route, index) => (
      <NavLink className="NavLinks" to={route.path} key={index}>
        <Typography>{route.routeName}</Typography>
      </NavLink>
    ));
  }

  return (
    <div>
      {!isMobile && (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Fox software
              </Typography>
              {renderNavLinks()}
            </Toolbar>
          </AppBar>
        </Box>
      )}
      {isMobile && (
        <Box
          className="navbar"
          color="primary.100"
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
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
