import * as React from "react";
import { Outlet, useOutlet } from "react-router-dom";
import WelcomePage from "../WelcomePageLayout/WelcomePage";
import { ThemeProvider } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import { ToastNotification } from "../../components/common/ToastNotification";

function Root() {
  const outlet = useOutlet();
  const { theme, direction } = useThemeContext();

  return (
    <div>
      <ThemeProvider theme={theme}>
        {outlet ? <Outlet /> : <WelcomePage />}
        <ToastNotification />
      </ThemeProvider>
    </div>
  );
}

export default Root;
