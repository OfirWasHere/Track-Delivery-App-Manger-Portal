import React, { useState } from "react";
import {
  Box,
  Typography,
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import RoutesNav from "../../Routes/RoutesNav";
import LoginModal from "../LoginModal/LoginModal";
import "./Navbar.css";
import { Truck, Menu } from "lucide-react";
import useIsMobile from "../../Hooks/useIsMobile";

interface NavbarProps {
  onLoginClick: () => void;
}

function Navbar(): JSX.Element {
  const isMobile = useIsMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const toggleBurgerMenu = () => setIsBurgerMenuOpen(!isBurgerMenuOpen);

  const NavbarContent = (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Truck size={32} color="#2563EB" style={{ marginRight: 16 }} />
        <Typography variant="h6" color="text.primary" fontWeight="bold">
          Ofir Software
        </Typography>
      </Box>

      {!isMobile && (
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
                className="NavLinks"
                key={index}
                sx={{ textDecoration: "none", mx: "16px" }}
              >
                <Typography variant="h6">{route.routeName}</Typography>
              </Link>
            ))}
        </Box>
      )}

      {isMobile ? (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleBurgerMenu}
          sx={{
            ml: 2,
            color: "black",
            bgcolor: "white",
            "&:hover": {
              bgcolor: "grey.200",
            },
          }}
        >
          <Menu />
        </IconButton>
      ) : (
        <Box>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#212121",
              color: "#fff",
              "&:hover": {
                bgcolor: "#424242",
              },
            }}
            onClick={handleOpenModal}
          >
            <Typography variant="h6">התחברות</Typography>
          </Button>
        </Box>
      )}
    </>
  );

  return (
    <Box sx={{ flexGrow: 1 }} display="block">
      <LoginModal open={isModalOpen} onClose={handleCloseModal} />
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
          {NavbarContent}
        </Toolbar>
      </AppBar>
      <Toolbar />{" "}
      {/* Add this to prevent content from going under the AppBar */}
      <Drawer anchor="right" open={isBurgerMenuOpen} onClose={toggleBurgerMenu}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleBurgerMenu}
          onKeyDown={toggleBurgerMenu}
        >
          <List>
            {RoutesNav.map((route, index) => (
              <ListItem key={index} component="a" href={`#${route.toPath}`}>
                <ListItemText primary={route.routeName} />
              </ListItem>
            ))}
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#212121",
                  color: "#fff",
                  "&:hover": {
                    bgcolor: "#424242",
                  },
                }}
                onClick={() => {
                  handleOpenModal();
                  toggleBurgerMenu();
                }}
              >
                <Typography variant="h6">התחברות</Typography>
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;
