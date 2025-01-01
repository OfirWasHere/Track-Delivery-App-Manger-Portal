import React from "react";
import { AppProvider } from "@toolpad/core/react-router-dom";
import { DashboardLayout, PageContainer } from "@toolpad/core";
import { NAVIGATION, BRANDING } from "../Routes/Routes";
import { useThemeContext } from "../theme/ThemeContextProvider";

function Toolpad({ children }: any) {
  const { direction } = useThemeContext();

  return (
    <div dir={direction}>
      <AppProvider navigation={NAVIGATION} branding={BRANDING}>
        <DashboardLayout>
          <PageContainer>{children}</PageContainer>
        </DashboardLayout>
      </AppProvider>
    </div>
  );
}

export default Toolpad;
