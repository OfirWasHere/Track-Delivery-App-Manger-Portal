import { Box } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavbarExtraButtonsV2 from "../../components/navigation/NavbarV2/NavbarExtraButtonsV2";
import { NavbarLogoV2 } from "../../components/navigation/NavbarV2/NavbarLogoV2";
import { NavbarRoutesV2 } from "../../components/navigation/NavbarV2/NavbarRoutesV2";
import NavbarV2 from "../../components/navigation/NavbarV2/NavbarV2";
import useAuth from "../../hooks/useAuth";
import useIdObserver from "../../hooks/useIdObserver";
import { useAppDispatch } from "../../hooks/useReduxStore";
import NavbarRoutes from "../../routes/NavbarRoutes";
import { openAuthModal } from "../../store/reducers/AuthModalReducer";
import FoxLogo from "../../assets/logo.png";
import NavbarBodyV2 from "../../components/navigation/NavbarV2/NavbarBodyV2";
import { closeDrawer } from "../../store/reducers/NavbarDrawerReducer";
import NavbarDrawerV2 from "../../components/navigation/NavbarV2/NavbarDrawerV2";
import useIsMobile from "../../hooks/useIsMobile";
import AboutSectionV2 from "./AboutSectionV2";
import ContactUsV2 from "./ContactUsV2";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import HeaderSectionV2 from "./HeaderSectionV2";

function WelcomePageV2() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isMobile = useIsMobile();
  const { direction } = useThemeContext();

  const handleAuthModal = useCallback(() => {
    dispatch(closeDrawer());
    if (user) {
      navigate("/dashboard");
    } else {
      dispatch(openAuthModal());
    }
  }, [user, navigate, dispatch]);

  const handleRouteClick = (routeID: string) => {
    document.getElementById(routeID).scrollIntoView({ behavior: "smooth" });
    dispatch(closeDrawer());
  };

  const visible = useIdObserver([
    "hero-section",
    "about-section",
    "contact-section",
  ]);

  return (
    <Box>
      <div dir={direction === "ltr" ? "rtl" : "ltr"}>
        <NavbarV2>
          <NavbarLogoV2
            title="OnTrack"
            icon={
              <Box
                component={"img"}
                src={FoxLogo}
                width="40px"
                height="40px"
                alt="Company logo"
                sx={{ borderRadius: "12px" }}
              />
            }
          />
          <NavbarBodyV2>
            {!isMobile ? (
              <>
                <NavbarRoutesV2
                  navbarRoutes={NavbarRoutes}
                  handleRouteClick={handleRouteClick}
                  activeRoute={visible}
                />
                <NavbarExtraButtonsV2
                  buttonText="התחברות"
                  buttonClickAction={handleAuthModal}
                />
              </>
            ) : (
              <NavbarDrawerV2
                navbarRoutes={NavbarRoutes}
                handleAuthModal={handleAuthModal}
              />
            )}
          </NavbarBodyV2>
        </NavbarV2>
      </div>
      <div id="hero-section">
        <HeaderSectionV2 />
      </div>
      <div id="about-section">
        <AboutSectionV2 />
      </div>
      <div id="contact-section">
        <ContactUsV2 />
      </div>
    </Box>
  );
}

export default WelcomePageV2;
