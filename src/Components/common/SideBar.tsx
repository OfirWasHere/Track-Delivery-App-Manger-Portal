import {
  Menu as MenuIcon,
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
  MoreVert,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Drawer,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import theme from "../theme/theme";
import FoxLogo from "../../assets/logo.png";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const sideBarWidth = { open: 280, closed: 70 };
  const [open, setOpen] = useState<boolean>(true);
  const [selected, setSelected] = useState("Tasks");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleUserMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

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
        },
      }}
    >
      <Box width={open ? sideBarWidth.open : sideBarWidth.closed}>
        <Box sx={{ mx: 2, py: 2 }}>
          <Box
            sx={{
              transition: `0.5s ease-in-out`,
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
            <IconButton
              onClick={handleSideBarToggle}
              sx={{ color: "white", padding: 0 }}
            >
              <MenuIcon sx={{ fontSize: 32, transform: "scaleX(-1)" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)" }} />

      <List sx={{ px: 2, py: 1 }}>
        {sidebarItems.map((section) => (
          <React.Fragment key={section.title}>
            <AnimatePresence>
              {open && section.title !== "TASKS" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ListItem sx={{ py: 2 }}>
                    <Typography
                      variant="overline"
                      color="rgba(255,255,255,0.7)"
                      fontWeight="bold"
                    >
                      {section.title}
                    </Typography>
                  </ListItem>
                </motion.div>
              )}
            </AnimatePresence>

            {section.items.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                <Tooltip title={open ? "" : item.text} placement="right" arrow>
                  <ListItemButton
                    selected={selected === item.text}
                    onClick={() => setSelected(item.text)}
                    sx={{
                      borderRadius: 2,
                      justifyContent: open ? "initial" : "center",
                      px: 2,
                      "&.Mui-selected": {
                        bgcolor: "rgba(255,255,255,0.08)",
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.12)",
                        },
                      },
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.04)",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color:
                          selected === item.text
                            ? theme.palette.primary.main
                            : "inherit",
                        minWidth: 40,
                        mr: open ? 2 : 0,
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                        >
                          <Typography>{item.text}</Typography>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            ))}
            {open && section.title !== "SETTINGS" && (
              <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.1)" }} />
            )}
          </React.Fragment>
        ))}
      </List>

      <Box sx={{ mt: "auto", p: 2 }}>
        <Tooltip
          title={open ? "" : "simmons@gmail.com"}
          placement="right"
          arrow
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: open ? 2 : 1,
              bgcolor: open ? "rgba(255,255,255,0.05)" : "inherent",
              borderRadius: 2,
              justifyContent: open ? "flex-start" : "center",
            }}
          >
            {open ? (
              <>
                <Avatar sx={{ width: 40, height: 40, mr: open ? 2 : 0 }}>
                  BS
                </Avatar>

                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    Brooklyn Simmons
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    simmons@gmail.com
                  </Typography>
                </Box>
                <IconButton
                  onClick={handleUserMenuClick}
                  size="small"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  <MoreVert />
                </IconButton>
              </>
            ) : (
              <IconButton onClick={handleUserMenuClick}>
                <Avatar sx={{ width: 40, height: 40, mr: open ? 2 : 0 }}>
                  BS
                </Avatar>
              </IconButton>
            )}
          </Box>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleUserMenuClose}
          sx={{ transform: "translate(50px)" }}
          MenuListProps={{
            sx: {
              bgcolor: theme.palette.grey[800],
              color: theme.palette.common.white,
              boxShadow: theme.shadows[3],
              p: 1,
            },
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleUserMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleUserMenuClose}>My account</MenuItem>
          <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </Drawer>
  );
}
