import React, { useState } from "react";
import "./NavbarLayout.css";
import {
  Box,
  Typography,
  AppBar,
  IconButton,
  Toolbar,
  Button,
} from "@mui/material";
import useIsMobile from "../Hooks/useIsMobile";
import BurgerMenuIcon from "../common/BurgerMenu/BurgerMenuIcon/BurgerMenuIcon";
import { NavLink } from "react-router-dom";
import RoutesNav from "../Routes/RoutesNav";
import LoginModal from "../common/LoginModal";

function renderNavLinks() {
  return RoutesNav.map((route, index) => (
    <NavLink
      className="NavLinks"
      to={route.path}
      key={index}
      style={{
        color: "#fff",
        margin: "0 1rem",
        textDecoration: "none",
        fontWeight: 500,
        position: "relative",
      }}
    >
      <Typography
        sx={{
          "&:hover": {
            color: "#FFD700", // Gold hover effect
          },
          "&::after": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "2px",
            backgroundColor: "#FFD700",
            bottom: -4,
            left: 0,
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.3s ease-in-out",
          },
          "&:hover::after": {
            transform: "scaleX(1)",
          },
        }}
      >
        {route.routeName}
      </Typography>
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
    );
  }

  function navbarDesktop() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            background: "linear-gradient(45deg, #6a1b9a, #283593)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              Ofir Software
            </Typography>
            {renderNavLinks()}
            <Button onClick={handleOpenModal} variant="contained">
              Open Login Modal
            </Button>
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
