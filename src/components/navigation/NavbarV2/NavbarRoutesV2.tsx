import { Box, Button, Typography } from "@mui/material";
import { NavbarLinksModel } from "../../../utils/types";

type NavbarRoutesPropsV2 = {
  NavbarRoutes: NavbarLinksModel[];
  handleRouteClick: (routeName: string) => void;
};
export function NavbarRoutesV2({
  NavbarRoutes,
  handleRouteClick,
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
      {NavbarRoutes
        ? NavbarRoutes.slice()
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
                  <Typography variant="h6">{route.routeName}</Typography>
                </Button>
              );
            })
        : null}
    </Box>
  );
}
