import { Box, Button, Typography } from "@mui/material";
import { NavbarLinksModel } from "../../../utils/types";

type NavbarRoutesPropsV2 = {
  navbarRoutes: NavbarLinksModel[];
  handleRouteClick: (RouteID: string) => void;
  activeRoute?: string;
};

export function NavbarRoutesV2({
  navbarRoutes,
  handleRouteClick,
  activeRoute,
}: NavbarRoutesPropsV2) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        flex: 1,
        pr: 2,
      }}
    >
      {navbarRoutes
        ? navbarRoutes
            .slice()
            .reverse()
            .map((route, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => handleRouteClick(route.RouteID)}
                  sx={{
                    mx: "8px",
                    color: "grey.900",
                    fontWeight: "normal",
                  }}
                >
                  <Typography
                    variant="h6"
                    color={activeRoute === route.RouteID ? "primary.500" : ""}
                  >
                    {route.routeName}
                  </Typography>
                </Button>
              );
            })
        : null}
    </Box>
  );
}
