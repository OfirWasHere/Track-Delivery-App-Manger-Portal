import * as React from "react";
import { AppProvider } from "@toolpad/core/react-router-dom";
import { Outlet, useOutlet } from "react-router-dom";
import { DashboardLayout, PageContainer } from "@toolpad/core";
import "./Root.css";
import WelcomePage from "../WelcomePageLayout/WelcomePage";
import { NAVIGATION } from "../../Routes/Routes";
import { ThemeProvider } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContextProvider";

const BRANDING = {
  title: "My Toolpad Core App",
};

function Root() {
  const outlet = useOutlet();
  const { theme } = useThemeContext();

  return (
    <div>
      <ThemeProvider theme={theme}>
        {outlet ? (
          <AppProvider navigation={NAVIGATION} branding={BRANDING}>
            <DashboardLayout>
              <PageContainer>
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
