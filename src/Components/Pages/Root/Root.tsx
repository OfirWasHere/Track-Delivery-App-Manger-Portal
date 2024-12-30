import * as React from "react";
import { AppProvider } from "@toolpad/core/react-router-dom";
import { Outlet, useOutlet } from "react-router-dom";
import { DashboardLayout, PageContainer } from "@toolpad/core";
import "./Root.css";
import WelcomePage from "../WelcomePageLayout/WelcomePage";
import { NAVIGATION } from "../../Routes/Routes";
import { ThemeProvider } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import useAuth from "../../Hooks/useAuth";

const BRANDING = {
  title: "My Toolpad Core App",
};

function Root() {
  const outlet = useOutlet();
  const { theme, direction } = useThemeContext();
  const { user } = useAuth();

  return (
    <div>
      <ThemeProvider theme={theme}>
        {outlet && user ? (
          <AppProvider navigation={NAVIGATION} branding={BRANDING}>
            <DashboardLayout>
              <PageContainer dir={direction}>
                <Outlet />
              </PageContainer>
            </DashboardLayout>
          </AppProvider>
        ) : (
          <WelcomePage />
        )}
      </ThemeProvider>
    </div>
  );
}

export default Root;
