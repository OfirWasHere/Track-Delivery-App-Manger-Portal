import { LocalShipping } from "@mui/icons-material";
import { Box } from "@mui/material";
import AboutSection from "../../../pages/WelcomePageLayout/Sections/AboutSection";
import ContactUs from "../../../pages/WelcomePageLayout/Sections/ContactUs";
import HeaderSection from "../../../pages/WelcomePageLayout/Sections/HeaderSection";
import { NavbarLogoV2 } from "./NavbarLogoV2";
import { NavbarRoutesV2 } from "./NavbarRoutesV2";
import NavbarV2 from "./NavbarV2";
import NavbarExtraButtonsV2 from "./NavbarExtraButtonsV2";
import { useAppDispatch } from "../../../hooks/useReduxStore";
import { openAuthModal } from "../../../store/reducers/AuthModalReducer";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useCallback, useEffect, useRef } from "react";
import NavbarRoutes from "../../../routes/NavbarRoutes";
import useObserver from "../../../hooks/useObserver";

function LayoutV2() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleAuthModal = useCallback(() => {
    if (user) {
      navigate("/dashboard");
    } else {
      dispatch(openAuthModal());
    }
  }, [user, navigate, dispatch]);

  const sectionRefs: Record<string, React.RefObject<HTMLElement>> = {
    "hero-section": heroRef,
    "about-section": aboutRef,
    "contact-section": contactRef,
  };

  const handleRouteClick = (routeID: string) => {
    const sectionRef = sectionRefs[routeID];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box>
      <NavbarV2>
        <NavbarLogoV2
          title="Ofir Software"
          icon={<LocalShipping fontSize="large" sx={{ color: "black" }} />}
        />
        <NavbarRoutesV2
          NavbarRoutes={NavbarRoutes}
          handleRouteClick={handleRouteClick}
        />
        <NavbarExtraButtonsV2
          buttonText="התחברות"
          buttonClickAction={handleAuthModal}
        />
      </NavbarV2>
      <div ref={heroRef}>
        <HeaderSection />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={contactRef}>
        <ContactUs />
      </div>
    </Box>
  );
}

export default LayoutV2;
