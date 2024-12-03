import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const colors = {
  primary: {
    main: "#1976d2",
    light: "#42a5f5",
    dark: "#1565c0",
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#1976d2",
    600: "#1565c0",
    700: "#0d47a1",
    800: "#0a2f6b",
    900: "#051d40",
  },
  secondary: {
    main: "#9c27b0",
    light: "#ba68c8",
    dark: "#7b1fa2",
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
  },
  error: {
    main: "#d32f2f",
    light: "#ef5350",
    dark: "#c62828",
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
  },
  warning: {
    main: "#ed6c02",
    light: "#ff9800",
    dark: "#e65100",
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
  },
  info: {
    main: "#0288d1",
    light: "#03a9f4",
    dark: "#01579b",
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
  },
  success: {
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    success: colors.success,
    // ...(mode === "light"
    //   ? {
    //       grey: {
    //         50: "#212121",
    //         100: "#424242",
    //         200: "#616161",
    //         300: "#757575",
    //         400: "#9e9e9e",
    //         500: "#bdbdbd",
    //         600: "#e0e0e0",
    //         700: "#eeeeee",
    //         800: "#f5f5f5",
    //         900: "#fafafa",
    //       },
    //     }
    //   : {
    //       grey: {
    //         50: "#fafafa",
    //         100: "#f5f5f5",
    //         200: "#eeeeee",
    //         300: "#e0e0e0",
    //         400: "#bdbdbd",
    //         500: "#9e9e9e",
    //         600: "#757575",
    //         700: "#616161",
    //         800: "#424242",
    //         900: "#212121",
    //       },
    //     }),
  },
});

// Example: Applying the theme
const mode: PaletteMode = "light"; // or "dark"
const theme = createTheme(getDesignTokens(mode));

export default theme;
