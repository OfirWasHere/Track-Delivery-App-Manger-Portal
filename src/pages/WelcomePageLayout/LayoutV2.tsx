import { LocalShipping } from "@mui/icons-material";
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

function LayoutV2() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleAuthModal = useCallback(() => {
    if (user) {
      navigate("/dashboard");
    } else {
      dispatch(openAuthModal());
    }
  }, [user, navigate, dispatch]);

  const handleRouteClick = (routeID: string) => {
    document.getElementById(routeID).scrollIntoView({ behavior: "smooth" });
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
          // icon={<LocalShipping fontSize="large" sx={{ color: "black" }} />}
        />
        <NavbarRoutesV2
          navbarRoutes={NavbarRoutes}
          handleRouteClick={handleRouteClick}
          activeRoute={visible}
        />
        <NavbarExtraButtonsV2
          buttonText="התחברות"
          buttonClickAction={handleAuthModal}
        />
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
