import { LocalShipping, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useThemeContext } from "../../../theme/ThemeContextProvider";
import useIsMobile from "../../../Hooks/useIsMobile";
import { useState } from "react";
import AuthModal from "../../../common/AuthModal";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { CacheProvider } from "@emotion/react";
import RoutesNav from "../../../Routes/RoutesNav";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const ltrCache = createCache({
  key: "mui",
});

type NavbarProps = {
  currentSection: number;
  moveToSection: (sectionIndex: number) => void;
  sections: string[];
  handleOpenAuthModal?: () => void;
  toggleBurgerMenu?: () => void;
};

type NavbarDrawerProps = {
  moveToSection: (sectionIndex: number) => void;
  handleOpenAuthModal?: () => void;
  toggleBurgerMenu?: () => void;
  isBurgerMenuOpen: boolean;
  sections: string[];
};

type NavbarBodyProps = {
  children: React.ReactNode;
};

export function NavbarLogo() {
  const { toggleDirection } = useThemeContext();
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <LocalShipping fontSize={"large"} sx={{ color: "black" }} />

      <Typography
        variant="h6"
        component="a"
        href="/"
        letterSpacing="2"
        sx={{
          textDecoration: "none",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
        }}
        onClick={toggleDirection}
        color={"text.primary"}
        fontWeight={"bold"}
      >
        SoftFox
      </Typography>
    </Box>
  );
}

export function NavbarContent({
  currentSection,
  moveToSection,
  sections,
  handleOpenAuthModal,
  toggleBurgerMenu,
}: NavbarProps) {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Desktop Navigation */}
      {!isMobile && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flex: 1,
              pr: 2,
            }}
          >
            {sections
              .slice()
              .reverse()
              .map((section, index) => (
                <Button
                  key={section}
                  onClick={() => moveToSection(index)}
                  color={currentSection === index ? "primary" : "inherit"}
                  sx={{
                    fontWeight: currentSection === index ? 700 : 400,
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  {section}
                </Button>
              ))}
          </Box>
          <Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#212121",
                color: "#fff",
                "&:hover": {
                  bgcolor: "#323232",
                },
              }}
              onClick={handleOpenAuthModal}
            >
              התחברות
            </Button>
          </Box>
        </>
      )}

      {/* Mobile Drawer Menu Button (Burger) */}
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          sx={{ display: "flex", justifyContent: "flex-end", flex: 1, pr: 2 }}
          // edge="end"
          // sx={{ ml: "auto" }}
          onClick={toggleBurgerMenu}
        >
          <Menu fontSize={"large"} sx={{ color: "grey.900" }} />
        </IconButton>
      )}
    </>
  );
}

export function NavbarBody({ children }: NavbarBodyProps) {
  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={1}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
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
        {children}
      </Toolbar>
    </AppBar>
  );
}

export function NavbarDrawer({
  moveToSection,
  isBurgerMenuOpen,
  handleOpenAuthModal,
  toggleBurgerMenu,
  sections,
}: NavbarDrawerProps) {
  const { direction } = useThemeContext();

  return (
    <div>
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
                  onClick={() => moveToSection(index)}
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
    </div>
  );
}

function NavbarV3({ currentSection, moveToSection, sections }: NavbarProps) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { direction } = useThemeContext();
  const { user } = useAuth();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => setIsBurgerMenuOpen((prev) => !prev);

  const handleAuthModal = (value: boolean) => {
    if (user) {
      navigate("/dashboard");
    } else {
      setIsModalOpen(value);
    }
  };

  return (
    <Box dir={direction === "ltr" ? "rtl" : "ltr"} sx={{ flexGrow: 1 }}>
      <AuthModal open={isModalOpen} onClose={() => handleAuthModal(false)} />
      <NavbarBody>
        <NavbarLogo />
        <NavbarContent
          handleOpenAuthModal={() => handleAuthModal(true)}
          sections={sections}
          currentSection={currentSection}
          moveToSection={moveToSection}
          toggleBurgerMenu={toggleBurgerMenu}
        />
        <NavbarDrawer
          handleOpenAuthModal={() => handleAuthModal(true)}
          sections={sections}
          isBurgerMenuOpen={isBurgerMenuOpen}
          moveToSection={moveToSection}
          toggleBurgerMenu={toggleBurgerMenu}
        />
      </NavbarBody>
    </Box>
  );
}

export default NavbarV3;
