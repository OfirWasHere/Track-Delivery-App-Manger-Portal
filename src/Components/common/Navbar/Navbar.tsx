import React, { useState } from "react";
import {
  Box,
  Typography,
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Link,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import useIsMobile from "../../Hooks/useIsMobile";
import RoutesNav from "../../Routes/RoutesNav";
import BurgerMenuIcon from "../BurgerMenu/BurgerMenuIcon/BurgerMenuIcon";
import LoginModal from "../LoginModal/LoginModal";
import "./Navbar.css";
import { Truck } from "lucide-react";

interface navbarProps {
  onLoginClick: () => void;
}

function NavbarDesktop({ onLoginClick }: navbarProps): JSX.Element {
  return (
    <Box>
      <AppBar
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          px: 4,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Truck size={32} color="#2563EB" style={{ marginRight: 16 }} />
            <Typography variant={"h6"} color={"text.primary"} fontWeight="bold">
              TruckTrack
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              flex: 1,
              pr: 2,
            }}
          >
            {RoutesNav.slice()
              .reverse()
              .map((route, index) => (
                <Link
                  href={`#${route.toPath}`}
                  className={"NavLinks"}
                  key={index}
                  sx={{ textDecoration: "none", mx: "16px" }}
                >
                  <Typography variant="h5">{route.routeName}</Typography>
                </Link>
              ))}
          </Box>

          <Box>
            <Button
              variant="contained"
              size="large"
              sx={{ bgcolor: "#212121", color: "#fff" }}
              onClick={onLoginClick}
            >
              <Typography variant="h6">התחברות</Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function Drawer({ onLoginClick }: navbarProps) {
  
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
  const isMobile = useIsMobile();
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }} display={"block"}>
      <LoginModal open={isModalOpen} onClose={handleCloseModal} />
      {!isMobile && NavbarDesktop({ onLoginClick: handleOpenModal })}
      {isMobile && Drawer({ onLoginClick: handleOpenModal })}
    </Box>
  );
}

export default Navbar;
