import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Link,
  IconButton,
  Drawer,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import useIsMobile from "../Hooks/useIsMobile";
import RoutesNav from "../Routes/RoutesNav";
import AuthModal from "./AuthModal";
import { useThemeContext } from "../theme/ThemeContextProvider";
import { LocalShippingOutlined, Menu } from "@mui/icons-material";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const ltrCache = createCache({
  key: "mui",
});

interface NavbarProps {
  handleOpenAuthModal: () => void;
  activeSection: string;
}

export function NavbarLogo() {
  const { toggleDirection } = useThemeContext();
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <LocalShippingOutlined fontSize={"large"} sx={{ color: blue[500] }} />

      <Typography
        onClick={toggleDirection}
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
  handleOpenAuthModal,
  activeSection,
}: NavbarProps): JSX.Element {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => setIsBurgerMenuOpen(!isBurgerMenuOpen);
  const isMobile = useIsMobile();
  const { direction } = useThemeContext();

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
              onClick={handleOpenAuthModal}
            >
              התחברות
            </Button>
          </Box>
        </>
      ) : (
        <IconButton aria-label="menu" onClick={toggleBurgerMenu}>
          <Menu fontSize={"large"} sx={{ color: "grey.900" }} />
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
        <CacheProvider value={direction === "rtl" ? rtlCache : ltrCache}>
          <Drawer
            anchor={"left"}
            open={isBurgerMenuOpen}
            onClose={toggleBurgerMenu}
          >
            <Box
              width={250}
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
                      handleOpenAuthModal();
                      toggleBurgerMenu();
                    }}
                  >
                    <Typography variant="h6">התחברות</Typography>
                  </Button>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </CacheProvider>
      </AppBar>
    </Box>
  );
}

function Navbar(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { direction } = useThemeContext();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleAuthModal = (value: boolean) => {
    console.log(user);
    if (user !== null) {
      navigate("/dashboard");
    } else {
      setIsModalOpen(value);
    }
  };

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
    <Box dir={direction === "ltr" ? "rtl" : "ltr"} sx={{ flexGrow: 1 }}>
      <AuthModal open={isModalOpen} onClose={() => handleAuthModal(false)} />
      <NavbarContainer
        handleOpenAuthModal={() => handleAuthModal(true)}
        activeSection={activeSection}
      />
    </Box>
  );
}

export default Navbar;
