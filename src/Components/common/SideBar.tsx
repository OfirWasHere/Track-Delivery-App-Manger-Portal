import { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
  Badge,
  Avatar,
} from "@mui/material";
import {
  CheckCircle,
  FlashOn,
  GridView,
  CalendarToday,
  Description,
  Inventory,
  BarChart,
  Group,
  Person,
  Settings,
  Headset,
  MoreVert,
} from "@mui/icons-material";

export default function Sidebar() {
  const [selected, setSelected] = useState("Tasks");
  return (
    <Box
      sx={{
        width: 300,
        height: "100vh",
        bgcolor: "#f4f4f4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Box>
        <Typography variant="h6" gutterBottom>
          Ofir Software
        </Typography>
        <List>
          <ListItemButton
            selected={selected === "Tasks"}
            onClick={() => setSelected("Tasks")}
          >
            <ListItemIcon>
              <CheckCircle color="primary" />
            </ListItemIcon>
            <ListItemText primary="Tasks" />
            <Badge badgeContent={16} color="primary" sx={{ mr: 1 }} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <FlashOn />
            </ListItemIcon>
            <ListItemText primary="Activites" />
          </ListItemButton>
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="caption" color="textSecondary">
          MAIN
        </Typography>
        <List>
          {[
            { icon: GridView, text: "Dashboard" },
            { icon: CalendarToday, text: "Schedule" },
            { icon: Description, text: "Note" },
            { icon: Inventory, text: "Products" },
            { icon: BarChart, text: "Report" },
          ].map(({ icon: Icon, text }) => (
            <ListItemButton
              key={text}
              selected={selected === text}
              onClick={() => setSelected(text)}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="caption" color="textSecondary">
          RECORDS
        </Typography>
        <List>
          {[
            { icon: Group, text: "Team" },
            { icon: Person, text: "Clients" },
          ].map(({ icon: Icon, text }) => (
            <ListItemButton
              key={text}
              selected={selected === text}
              onClick={() => setSelected(text)}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box>
        <List>
          {[
            { icon: Settings, text: "Settings" },
            { icon: Headset, text: "Support" },
          ].map(({ icon: Icon, text }) => (
            <ListItemButton
              key={text}
              selected={selected === text}
              onClick={() => setSelected(text)}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 2,
            p: 1,
            bgcolor: "white",
            borderRadius: 2,
          }}
        >
          <Avatar sx={{ bgcolor: "gray", width: 40, height: 40, mr: 2 }} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body2" fontWeight="bold">
              Brooklyn Simmons
            </Typography>
            <Typography variant="caption" color="textSecondary">
              simmons@gamil.com
            </Typography>
          </Box>
          <Box>
              <MoreVert sx={{ color: "gray", cursor: "pointer" }} />
            </Box>
        </Box>
      </Box>
    </Box>
  );
}
