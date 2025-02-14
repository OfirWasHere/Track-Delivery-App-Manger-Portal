import {
  ChevronLeft,
  ChevronRight,
  Menu,
  DoubleArrowRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Drawer,
  Typography,
  IconButton,
  AvatarGroup,
  Divider,
} from "@mui/material";
import { useState } from "react";
import theme from "../theme/theme";
import FoxLogo from "../../assets/logo.png";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const sideBarOpenWidth = 300;
  const sideBarClosedWidth = 150;

  const handleSideBarToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? sideBarOpenWidth : sideBarClosedWidth,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        "& .MuiDrawer-paper": {
          width: open ? sideBarOpenWidth : sideBarClosedWidth,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: "hidden",
          bgcolor: theme.palette.grey[900],
          color: theme.palette.common.white,
          borderRight: "none",
        },
      }}
    >
      <Box width={open ? sideBarOpenWidth : sideBarClosedWidth}>
        <Box sx={{ mx: 2, py: 2 }}>
          {open ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  gap: 2,
                }}
              >
                <Avatar src={FoxLogo} sx={{ width: 40, height: 40 }} />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ letterSpacing: 2 }}
                >
                  SoftFOX
                </Typography>
                <IconButton
                  onClick={handleSideBarToggle}
                  sx={{ color: "white" }}
                >
                  <DoubleArrowRounded sx={{ fontSize: 32 , transform:"scaleX(-1)"}} />
                </IconButton>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar src={FoxLogo} sx={{ width: 40, height: 40 }} />
                <IconButton
                  onClick={handleSideBarToggle}
                  sx={{ color: "white" }}
                >
                  <DoubleArrowRounded sx={{ fontSize: 32 }} />
                </IconButton>
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)" }} />
    </Drawer>
  );
}
