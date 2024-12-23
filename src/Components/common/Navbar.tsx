import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Link,
  Drawer,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";
import { Truck, Menu } from "lucide-react";
import { blue } from "@mui/material/colors";
import useIsMobile from "../Hooks/useIsMobile";
import RoutesNav from "../Routes/RoutesNav";
import LoginModal from "./LoginModal";
// import { useThemeContext } from "../theme/ThemeContextProvider";

interface NavbarProps {
  handleOpenLoginModal: () => void;
  activeSection: string;
}

export function NavbarLogo() {
  // const { toggleColorMode } = useThemeContext();
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Truck size={32} color={blue[500]} />

      <Typography
        // onClick={toggleColorMode}
        variant={"h6"}
        color={"text.primary"}
        fontWeight={"bold"}
      >
        אופיר תוכנה
      </Typography>
    </Box>
  );
}

function NavbarContainer({
  handleOpenLoginModal,
  activeSection,
}: NavbarProps): JSX.Element {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => setIsBurgerMenuOpen(!isBurgerMenuOpen);
  const isMobile = useIsMobile();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  const navbarContent = (
    <>
      {!isMobile ? (
        <>
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
                  key={index}
                  onClick={() => scrollToSection(route.toPath)}
                  sx={{
                    textDecoration: "none",
                    mx: "16px",
                    cursor: "pointer",
                    color:
                      activeSection === route.toPath
                        ? "primary.500"
                        : "text.primary",
                    fontWeight:
                      activeSection === route.toPath ? "bold" : "normal",
                  }}
                >
                  <Typography variant="h6">{route.routeName}</Typography>
                </Link>
              ))}
          </Box>
          <Box>
            <Button
              variant="contained"
              size="large"
              sx={{ bgcolor: "#212121", color: "#fff" }}
              onClick={handleOpenLoginModal}
            >
              התחברות
            </Button>
          </Box>
        </>
      ) : (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleBurgerMenu}
          sx={{
            ml: 2,
            color: "grey.100",
            bgcolor: "grey.900",
          }}
        >
          <Menu />
        </IconButton>
      )}
    </>
  );

  return (
    <Box>
      <AppBar
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
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
          <NavbarLogo />
          {navbarContent}
        </Toolbar>
        <Drawer
          anchor="right"
          open={isBurgerMenuOpen}
          onClose={toggleBurgerMenu}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleBurgerMenu}
            onKeyDown={toggleBurgerMenu}
          >
            <List>
              {RoutesNav.map((route, index) => (
                <ListItem
                  sx={{ textAlign: "right" }}
                  key={index}
                  onClick={() => scrollToSection(route.toPath)}
                >
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
                    handleOpenLoginModal();
                    toggleBurgerMenu();
                  }}
                >
                  <Typography variant="h6">התחברות</Typography>
                </Button>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </Box>
  );
}

function Navbar(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <LoginModal open={isModalOpen} onClose={handleCloseModal} />
      <NavbarContainer
        handleOpenLoginModal={handleOpenModal}
        activeSection={activeSection}
      />
    </Box>
  );
}

export default Navbar;
