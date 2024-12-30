import * as React from "react";
import { AppProvider } from "@toolpad/core/react-router-dom";
import { Outlet, useOutlet, useLocation } from "react-router-dom";
import { DashboardLayout, PageContainer } from "@toolpad/core";
import "./Root.css";
import WelcomePage from "../WelcomePageLayout/WelcomePage";
import { NAVIGATION, BRANDING } from "../../Routes/Routes";
import { ThemeProvider } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContextProvider";

function Root() {
  const outlet = useOutlet();
  const { theme, direction } = useThemeContext();
  const location = useLocation();

  const showToolpad = ["/main", "/dashboard"].includes(
    location.pathname.toLowerCase()
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        {outlet ? (
          showToolpad ? (
            <AppProvider navigation={NAVIGATION} branding={BRANDING}>
              <DashboardLayout>
                <PageContainer dir={direction}>
                  <Outlet />
                </PageContainer>
              </DashboardLayout>
            </AppProvider>
          ) : (
            <Outlet />
          )
        ) : (
          <WelcomePage />
        )}
      </ThemeProvider>
    </div>
  );
}

export default Root;
