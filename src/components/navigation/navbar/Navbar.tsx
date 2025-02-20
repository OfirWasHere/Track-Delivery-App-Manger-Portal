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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { CacheProvider } from "@emotion/react";
import RoutesNav from "../../../routes/RoutesNav";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import useIsMobile from "../../../hooks/useIsMobile";
import AuthModal from "../../modals/AuthModal/AuthModal";
import AuthModalV2 from "../../modals/AuthModalV2/AuthModalV2";
import { useDispatch } from "react-redux";
import { AuthModalActionType } from "../../../store/reducers/AuthModalReducer";

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
  handleOpenAuthModal?: () => void;
  toggleBurgerMenu?: () => void;
};

type NavbarDrawerProps = {
  moveToSection: (sectionIndex: number) => void;
  handleOpenAuthModal?: () => void;
  toggleBurgerMenu?: () => void;
  isBurgerMenuOpen: boolean;
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
        sx={{
          textDecoration: "none",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: "text.primary",
        }}
        // onClick={toggleDirection}
      >
        OnTrack
      </Typography>
    </Box>
  );
}

export function NavbarContent({
  currentSection,
  moveToSection,
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
              justifyContent: "flex-end",
              flex: 1,
              pr: 2,
            }}
          >
            {RoutesNav.slice()
              .reverse()
              .map((route, index) => {
                const originalIndex = RoutesNav.length - 1 - index;
                return (
                  <Link
                    key={originalIndex}
                    onClick={() => moveToSection(originalIndex)}
                    color={
                      currentSection === originalIndex ? "primary" : "inherit"
                    }
                    sx={{
                      textDecoration: "none",
                      mx: "16px",
                      cursor: "pointer",
                      color:
                        currentSection === originalIndex
                          ? "primary.500"
                          : "text.primary",
                      fontWeight:
                        currentSection === originalIndex ? "bold" : "normal",
                    }}
                  >
                    <Typography variant="h6">{route.routeName}</Typography>
                  </Link>
                );
              })}
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleBurgerMenu}
          >
            <Menu fontSize={"large"} sx={{ color: "grey.900" }} />
          </IconButton>
        </Box>
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
        // bgcolor: "background.paper",
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

function Navbar({ currentSection, moveToSection }: NavbarProps) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { direction } = useThemeContext();
  const { user } = useAuth();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => setIsBurgerMenuOpen((prev) => !prev);

  const dispatch = useDispatch();

  const handleAuthModal = (value: boolean) => {
    if (user) {
      navigate("/dashboard");
    } else {
      // dispatch({ type: "OPEN_DRAWER" });
      dispatch({ type: AuthModalActionType.OpenModal });
      // setIsModalOpen(value);
    }
  };

  return (
    <Box dir={direction === "ltr" ? "rtl" : "ltr"} sx={{ flexGrow: 1 }}>
      {/* <AuthModal open={isModalOpen} onClose={() => handleAuthModal(false)} /> */}
      <AuthModalV2 />
      <NavbarBody>
        <NavbarLogo />
        <NavbarContent
          handleOpenAuthModal={() => handleAuthModal(true)}
          currentSection={currentSection}
          moveToSection={moveToSection}
          toggleBurgerMenu={toggleBurgerMenu}
        />
        <NavbarDrawer
          handleOpenAuthModal={() => handleAuthModal(true)}
          isBurgerMenuOpen={isBurgerMenuOpen}
          moveToSection={moveToSection}
          toggleBurgerMenu={toggleBurgerMenu}
        />
      </NavbarBody>
    </Box>
  );
}

export default Navbar;
