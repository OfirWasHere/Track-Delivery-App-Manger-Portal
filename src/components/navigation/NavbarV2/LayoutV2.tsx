import { LocalShipping } from "@mui/icons-material";
import { Box } from "@mui/material";
import AboutSection from "../../../pages/WelcomePageLayout/Sections/AboutSection";
import ContactUs from "../../../pages/WelcomePageLayout/Sections/ContactUs";
import HeaderSection from "../../../pages/WelcomePageLayout/Sections/HeaderSection";
import RoutesNav from "../../../routes/RoutesNav";
import { NavbarContentV2 } from "./NavbarContentV2";
import { NavbarLogoV2 } from "./NavbarLogoV2";
import NavbarV2 from "./NavbarV2";

function LayoutV2() {
  return (
    <Box>
      <NavbarV2>
        <NavbarLogoV2
          title={"Ofir Software"}
          icon={<LocalShipping fontSize={"large"} sx={{ color: "black" }} />}
        />
        <NavbarContentV2 routes={RoutesNav} />
      </NavbarV2>
      <HeaderSection />
      <AboutSection />
      <ContactUs />
    </Box>
  );
}

export default LayoutV2;
