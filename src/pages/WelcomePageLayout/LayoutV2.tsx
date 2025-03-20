import { Box } from "@mui/material";
import { useCallback, useEffect, useState, TouchEvent } from "react";
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
import useIsMobile from "../../hooks/useIsMobile";

function LayoutV2() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isMobile = useIsMobile();

  const sections = ["hero-section", "about-section", "contact-section"];
  const [currentSection, setCurrentSection] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleAuthModal = useCallback(() => {
    dispatch(closeDrawer());
    if (user) {
      navigate("/dashboard");
    } else {
      dispatch(openAuthModal());
    }
  }, [user, navigate, dispatch]);

  const handleRouteClick = (routeID: string) => {
    document.getElementById(routeID)?.scrollIntoView({ behavior: "smooth" });
    setCurrentSection(sections.indexOf(routeID));
    dispatch(closeDrawer());
  };

  // Handle Mouse Wheel Scrolling
  const handleWheel = (event: React.WheelEvent) => {
    if (!canScroll) return;

    const direction = event.deltaY > 0 ? 1 : -1;
    setCurrentSection((prev) =>
      Math.max(0, Math.min(prev + direction, sections.length - 1))
    );
    setCanScroll(false);

    setTimeout(() => {
      setCanScroll(true);
    }, 600);
  };

  // Handle Touch Scrolling
  const handleTouchStart = (event: TouchEvent) => {
    setTouchStart(event.touches[0].clientY);
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (!touchStart || !canScroll) return;

    const touchEnd = event.touches[0].clientY;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) < 50) return;

    const direction = diff > 0 ? 1 : -1;
    setCurrentSection((prev) =>
      Math.max(0, Math.min(prev + direction, sections.length - 1))
    );
    setCanScroll(false);

    setTimeout(() => {
      setCanScroll(true);
    }, 500);

    setTouchStart(null);
  };

  useEffect(() => {
    const sectionID = sections[currentSection];
    document.getElementById(sectionID)?.scrollIntoView({ behavior: "smooth" });
  }, [currentSection]);

  return (
    <Box
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      sx={{
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <NavbarV2>
        <NavbarLogoV2
          title="OnTrack"
          icon={
            <img src={FoxLogo} width="40px" height="40px" alt="Company logo" />
          }
        />
        <NavbarBodyV2>
          {!isMobile ? (
            <>
              <NavbarRoutesV2
                navbarRoutes={NavbarRoutes}
                handleRouteClick={handleRouteClick}
                activeRoute={sections[currentSection]}
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

      <Box id="hero-section">
        <HeaderSection />
      </Box>
      <Box id="about-section">
        <AboutSection />
      </Box>
      <Box id="contact-section">
        <ContactUs />
      </Box>
    </Box>
  );
}

export default LayoutV2;
