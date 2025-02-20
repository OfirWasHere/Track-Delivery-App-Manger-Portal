import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { RouteModel } from "../../../utils/types";
import useIsMobile from "../../../hooks/useIsMobile";

type NavbarContentPropsV2 = {
  routes?: RouteModel[];
  buttonText?: string;
  handleButtonClick?: () => void;
};
export function NavbarContentV2({ routes }: NavbarContentPropsV2) {
  const isMobile = useIsMobile();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        flex: 1,
        pr: 2,
      }}
    >
      {routes
        ? routes
            .slice()
            .reverse()
            .map((route, index) => {
              const originalIndex = routes.length - 1 - index;
              return (
                <Link
                  key={originalIndex}
                  sx={{
                    textDecoration: "none",
                    mx: "16px",
                    cursor: "pointer",
                    color: "text.primary",
                    fontWeight: "normal",
                  }}
                >
                  <Typography variant="h6">{route.routeName}</Typography>
                </Link>
              );
            })
        : null}
    </Box>
  );
}
