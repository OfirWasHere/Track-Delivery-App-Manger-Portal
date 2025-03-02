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
import AboutSection from "./Sections/AboutSection";
import ContactUs from "./Sections/ContactUs";
import HeaderSection from "./Sections/HeaderSection";
import FoxLogo from "../../assets/logo.png";
import NavbarBodyV2 from "../../components/navigation/NavbarV2/NavbarBodyV2";
import { closeDrawer } from "../../store/reducers/NavbarDrawerReducer";
import NavbarDrawerV2 from "../../components/navigation/NavbarV2/NavbarDrawerV2";

function LayoutV2() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

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
      <NavbarV2>
        <NavbarLogoV2
          title="OnTrack"
          icon={
            <img src={FoxLogo} width="40px" height="40px" alt="Company logo" />
          }
        />
        <NavbarBodyV2>
          {/* Is not mobile */}
          <NavbarRoutesV2
            navbarRoutes={NavbarRoutes}
            handleRouteClick={handleRouteClick}
            activeRoute={visible}
          />
          <NavbarExtraButtonsV2
            buttonText="התחברות"
            buttonClickAction={handleAuthModal}
          />
          {/* When mobile */}
          {/* <NavbarDrawerV2 navbarRoutes={NavbarRoutes} /> */}
        </NavbarBodyV2>
      </NavbarV2>
      <div id="hero-section">
        <HeaderSection />
      </div>
      <div id="about-section">
        <AboutSection />
      </div>
      <div id="contact-section">
        <ContactUs />
      </div>
    </Box>
  );
}

export default LayoutV2;
