import * as React from "react";
import { Outlet, useOutlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import { ToastNotification } from "../../hooks/useToastNotification";
import ModalProvider from "../../components/modals/ModalProvider";
import WelcomePageV2 from "../WelcomePageV2/WelcomePageV2";

function Root() {
  const outlet = useOutlet();
  const { theme, direction } = useThemeContext();
  console.log(direction);

  return (
    <div dir={direction}>
      <ThemeProvider theme={theme}>
        {outlet ? <Outlet /> : <WelcomePageV2 />}
        <ToastNotification />
        <ModalProvider />
      </ThemeProvider>
    </div>
  );
}

export default Root;
