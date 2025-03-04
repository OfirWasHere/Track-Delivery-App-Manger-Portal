import React, { useState } from "react";
import useIsMobile from "../../../hooks/useIsMobile";
import { Box, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useAppDispatch } from "../../../hooks/useReduxStore";
import { openDrawer } from "../../../store/reducers/NavbarDrawerReducer";

type NavbarBodyPropsV2 = {
  isResponsive?: boolean;
  children: React.ReactNode;
};

function NavbarBodyV2({ isResponsive = true, children }: NavbarBodyPropsV2) {
  const isMobile = useIsMobile();
  const dispatch = useAppDispatch();

  return (
    <>
      {isMobile && isResponsive ? (
        <>
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
              onClick={() => dispatch(openDrawer())}
            >
              <Menu fontSize={"large"} sx={{ color: "grey.900" }} />
            </IconButton>
            {children}
          </Box>
        </>
      ) : (
        children
      )}
    </>
  );
}

export default NavbarBodyV2;
