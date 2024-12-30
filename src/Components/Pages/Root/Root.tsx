import * as React from "react";
import { Outlet, useOutlet } from "react-router-dom";
import WelcomePage from "../WelcomePageLayout/WelcomePage";
import { ThemeProvider } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import useAuth from "../../Hooks/useAuth";

function Root() {
  const outlet = useOutlet();
  const { theme, direction } = useThemeContext();
  const { user } = useAuth();

  return (
    <div>
      <ThemeProvider theme={theme}>
        {outlet ? <Outlet /> : <WelcomePage />}
      </ThemeProvider>
    </div>
  );
}

export default Root;
