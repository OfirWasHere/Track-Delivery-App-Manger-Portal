import React, { useState } from "react";
import "./NavbarLayout.css";
import { Box, Typography, AppBar, Toolbar } from "@mui/material";
import useIsMobile from "../Hooks/useIsMobile";
import BurgerMenuIcon from "../common/BurgerMenu/BurgerMenuIcon/BurgerMenuIcon";
import { NavLink } from "react-router-dom";
import RoutesNav from "../Routes/RoutesNav";
import LoginModal from "../common/LoginModal";

function renderNavLinks() {
  return RoutesNav.map((route, index) => (
    <NavLink className="NavLinks" to={route.path} key={index}>
      <Typography>{route.routeName}</Typography>
    </NavLink>
  ));
}

function NavbarLayout(): JSX.Element {
  const isMobile = useIsMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  function navbarMobile() {
    return (
      <Box
        className="navbar"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box pr={8}>
          <BurgerMenuIcon />
        </Box>
      </Box>
    );
  }

  function navbarDesktop() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="appBar">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              className="appBarTypography"
            >
              Ofir Software
            </Typography>
            {renderNavLinks()}
            <Typography className="NavLinks loginTrigger" onClick={handleOpenModal}>
              התחברות
            </Typography>
            <LoginModal open={isModalOpen} onClose={handleCloseModal} />
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  return (
    <div>
      {!isMobile && navbarDesktop()}
      {isMobile && navbarMobile()}
    </div>
  );
}

export default NavbarLayout;
