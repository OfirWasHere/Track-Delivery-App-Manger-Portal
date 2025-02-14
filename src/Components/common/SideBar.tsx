import { Menu, DoubleArrowRounded } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Drawer,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { useState } from "react";
import theme from "../theme/theme";
import FoxLogo from "../../assets/logo.png";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const sideBarWidth = { open: 300, closed: 100 };

  const handleSideBarToggle = () => setOpen(!open);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? sideBarWidth.open : sideBarWidth.closed,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.standard,
        }),
        "& .MuiDrawer-paper": {
          width: open ? sideBarWidth.open : sideBarWidth.closed,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.standard,
          }),
          overflowX: "hidden",
          bgcolor: theme.palette.grey[900],
          color: theme.palette.common.white,
          borderRight: "none",
        },
      }}
    >
      <Box width={open ? sideBarWidth.open : sideBarWidth.closed}>
        <Box sx={{ mx: 2, py: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: open ? "space-around" : "center",
              gap: 2,
            }}
          >
            {open && <Avatar src={FoxLogo} sx={{ width: 40, height: 40 }} />}
            {open && (
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ letterSpacing: 2 }}
              >
                SoftFOX
              </Typography>
            )}
            <IconButton onClick={handleSideBarToggle} sx={{ color: "white" }}>
              {open ? (
                <DoubleArrowRounded
                  sx={{ fontSize: 32, transform: "scaleX(-1)" }}
                />
              ) : (
                <Menu sx={{ fontSize: 32 }} />
              )}
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)" }} />
    </Drawer>
  );
}
