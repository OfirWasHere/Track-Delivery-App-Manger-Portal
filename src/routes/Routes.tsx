import React, { Suspense } from "react";
import Dashboard from "../pages/ToolpadPages/Dashboard/Dashboard";
import { RoutesModel } from "../utils/types";
import {
  BarChart,
  CalendarToday,
  CheckCircle,
  Description,
  FlashOn,
  Group,
  Headset,
  Inventory,
  Login,
  Person,
  Settings,
} from "@mui/icons-material";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Root from "../pages/Root/Root";
import Main from "../pages/ToolpadPages/Main/Main";
import WelcomePage from "../pages/WelcomePageLayout/WelcomePage";
import GuardedRoute from "../components/wrappers/GuardedRoute/GuardedRoute";

const Routes: RoutesModel[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Dashboard",
        element: (
          <GuardedRoute>
            <Dashboard />
          </GuardedRoute>
        ),
      },
      {
        path: "/Main",
        element: (
          <GuardedRoute>
            <Main />
          </GuardedRoute>
        ),
      },
    ],
  },
];

const sidebarNavigation = [
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

export { Routes, sidebarNavigation };
