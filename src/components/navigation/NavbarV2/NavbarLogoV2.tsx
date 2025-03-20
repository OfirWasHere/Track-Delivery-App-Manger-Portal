import { Box, Typography } from "@mui/material";

type NavbarLogoPropsV2 = {
  icon: JSX.Element;
  subtitle?: string;
  title: string;
};

export function NavbarLogoV2({ icon, title, subtitle }: NavbarLogoPropsV2) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Box>{icon}</Box>
      <Typography
        variant="h6"
        component="a"
        href="/"
        sx={{
          textDecoration: "none",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: "1px",
          color: "text.primary",
        }}
      >
        {title}
      </Typography>
      <Typography>{subtitle}</Typography>
    </Box>
  );
}
