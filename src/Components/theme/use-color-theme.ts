import { createTheme, PaletteMode, Direction } from "@mui/material";
import React from "react";
import { getDesignTokens } from "./theme";

export const useColorTheme = () => {
  const [mode, setMode] = React.useState<PaletteMode>(() => {
    const storedTheme = localStorage.getItem("ThemeMode");
    if (storedTheme && (storedTheme === "light" || storedTheme === "dark")) {
      return storedTheme as PaletteMode;
    }
    return "light";
  });

  const [direction, setDirection] = React.useState<Direction>(() => {
    const storedDirection = localStorage.getItem("ThemeDirection");
    if (storedDirection && (storedDirection === "ltr" || storedDirection === "rtl")) {
      return storedDirection as Direction;
    }
    return "ltr";
  });

  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem('ThemeMode', newMode);
  };

  const toggleDirection = () => {
    const newDirection = direction === "ltr" ? "rtl" : "ltr";
    setDirection(newDirection);
    localStorage.setItem('ThemeDirection', newDirection);
  };

  const modifiedTheme = React.useMemo(
    () => createTheme({
      ...getDesignTokens(mode, direction),
      direction: direction,
    }),
    [mode, direction]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
    direction,
    toggleDirection,
  };
};

