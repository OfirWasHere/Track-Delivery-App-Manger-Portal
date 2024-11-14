import * as React from "react";
import { AppProvider } from "@toolpad/core/react-router-dom";
import { Outlet, useOutlet } from "react-router-dom";
import { DashboardLayout, PageContainer } from "@toolpad/core";
import "./Root.css";
import WelcomePage from "../WelcomePage/WelcomePage";
import { NAVIGATION } from "../../Routes/Routes";

const BRANDING = {
  title: "My Toolpad Core App",
};

function Root() {
  const outlet = useOutlet();

  return (
    <div>
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
    </div>
  );
}

export default Root;
