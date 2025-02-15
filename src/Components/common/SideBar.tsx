import {
  Menu,
  DoubleArrowRounded,
  BarChart,
  CalendarToday,
  CheckCircle,
  Dashboard,
  Description,
  FlashOn,
  Group,
  Headset,
  Inventory,
  Person,
  Settings,
  ChevronRight,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Drawer,
  Typography,
  IconButton,
  Divider,
  List,
  Badge,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import theme from "../theme/theme";
import FoxLogo from "../../assets/logo.png";
import React from "react";

const sidebarItems = [
  {
    title: "TASKS",
    items: [
      { icon: <CheckCircle />, text: "Tasks", badge: 16 },
      { icon: <FlashOn />, text: "Activities" },
    ],
  },
  {
    title: "MAIN",
    items: [
      { icon: <Dashboard />, text: "Dashboard" },
      { icon: <CalendarToday />, text: "Schedule" },
      { icon: <Description />, text: "Note" },
      { icon: <Inventory />, text: "Products" },
      { icon: <BarChart />, text: "Report" },
    ],
  },
  {
    title: "RECORDS",
    items: [
      { icon: <Group />, text: "Team" },
      { icon: <Person />, text: "Clients" },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { icon: <Settings />, text: "Settings" },
      { icon: <Headset />, text: "Support" },
    ],
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const sideBarWidth = { open: 300, closed: 100 };

  const handleSideBarToggle = () => setOpen(!open);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? sideBarWidth.open : sideBarWidth.closed,
        transition: `0.5s ease-in-out`,
        "& .MuiDrawer-paper": {
          width: open ? sideBarWidth.open : sideBarWidth.closed,
          transition: `0.5s ease-in-out`,
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
      <List sx={{ px: open ? 2 : 1, py: 1 }}>
        {sidebarItems.map((section) => (
          <React.Fragment key={section.title}>
            <ListItem sx={{ py: 2 }}>
              <Typography
                variant="overline"
                color="rgba(255,255,255,0.7)"
                fontWeight="bold"
              >
                {section.title}
              </Typography>
            </ListItem>

            {section.items.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                <ListItemButton sx={{ display: "flex" }}>
                  <ListItemIcon
                    sx={{
                      color: theme.palette.primary.main,
                      minWidth: open ? 40 : "auto",
                      mr: open ? 2 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <Typography>{item.text}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}
