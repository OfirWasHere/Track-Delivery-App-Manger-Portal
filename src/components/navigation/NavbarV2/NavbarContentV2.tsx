import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { RouteModel } from "../../../utils/types";
import useIsMobile from "../../../hooks/useIsMobile";

type NavbarContentPropsV2 = {
  routes: RouteModel[];
};
export function NavbarContentV2({ routes }: NavbarContentPropsV2) {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Desktop Navigation */}
      {!isMobile && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              flex: 1,
              pr: 2,
            }}
          >
            {routes
              .slice()
              .reverse()
              .map((route, index) => {
                const originalIndex = routes.length - 1 - index;
                return (
                  <Link
                    key={originalIndex}
                    // onClick={() => moveToSection(originalIndex)}
                    // color={
                    //   currentSection === originalIndex ? "primary" : "inherit"
                    // }
                    // sx={{
                    //   textDecoration: "none",
                    //   mx: "16px",
                    //   cursor: "pointer",
                    //   color:
                    //     currentSection === originalIndex
                    //       ? "primary.500"
                    //       : "text.primary",
                    //   fontWeight:
                    //     currentSection === originalIndex ? "bold" : "normal",
                    // }}
                  >
                    <Typography variant="h6">{route.routeName}</Typography>
                  </Link>
                );
              })}
          </Box>
          <Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#212121",
                color: "#fff",
                "&:hover": {
                  bgcolor: "#323232",
                },
              }}
              //   onClick={handleOpenAuthModal}
            >
              התחברות
            </Button>
          </Box>
        </>
      )}

      {/* Mobile Drawer Menu Button (Burger) */}
      {isMobile && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            // onClick={toggleBurgerMenu}
          >
            <Menu fontSize={"large"} sx={{ color: "grey.900" }} />
          </IconButton>
        </Box>
      )}
    </>
  );
}
