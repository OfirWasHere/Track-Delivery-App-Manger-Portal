import { createTheme, PaletteMode } from "@mui/material";
import React from "react";
import theme, { getDesignTokens } from "./theme";

export const useColorTheme = () => {
  const [mode, setMode] = React.useState<PaletteMode>(() => {
    const storedTheme = localStorage.getItem("ThemeMode");
    if (storedTheme && storedTheme === "light" || storedTheme === "dark") {
      return storedTheme
    }
    return "light"
  }
  );

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  localStorage.setItem('ThemeMode', mode)

  // const modifiedTheme = React.useMemo(
  //   () =>
  //     createTheme({
  //       ...theme,
  //       palette: {
  //         ...theme.palette,
  //         mode,
  //       },
  //     }),
  //   [mode]
  // );

  const modifiedTheme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};