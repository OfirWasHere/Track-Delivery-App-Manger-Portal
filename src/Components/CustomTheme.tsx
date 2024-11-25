import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      100: "#e0e5ec",
      200: "#c6d0e0",
      300: "#adb8c9",
      400: "#94a3b8",
      500: "#7d8a9d",
      600: "#6a7b8e",
      700: "#4a5d6e",
      800: "#3c4c5e",
      900: "#2e3a4f",
    },
  },
});

export default theme;