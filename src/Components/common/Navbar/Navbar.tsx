import React, { useState } from "react";
import { Box, Typography, AppBar, IconButton, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import useIsMobile from "../../Hooks/useIsMobile";
import RoutesNav from "../../Routes/RoutesNav";
import BurgerMenuIcon from "../BurgerMenu/BurgerMenuIcon/BurgerMenuIcon";
import LoginModal from "../LoginModal/LoginModal";
import "./Navbar.css";

interface navbarProps {
  onLoginClick: () => void;
}

function renderNavLinks() {
  return RoutesNav.map((route, index) => (
    <NavLink to={route.path} key={index}>
      <Typography>{route.routeName}</Typography>
    </NavLink>
  ));
}

function navbarDesktop({ onLoginClick }: navbarProps): JSX.Element {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">Ofir Software</Typography>
          <Typography variant="h6">{renderNavLinks()}</Typography>
          <Typography variant="h6" onClick={onLoginClick}>
            Login
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function navbarMobile({ onLoginClick }: navbarProps) {
  return (
    <Box position="absolute" right={"24px"} top={"24px"}>
      <Box>
        <BurgerMenuIcon />
      </Box>
    </Box>
  );
}

function Navbar(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const isMobile = useIsMobile();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <LoginModal open={isModalOpen} onClose={handleCloseModal} />
      {!isMobile && navbarDesktop({ onLoginClick: handleOpenModal })}
      {isMobile && navbarMobile({ onLoginClick: handleOpenModal })}
    </Box>
  );
}

export default Navbar;
