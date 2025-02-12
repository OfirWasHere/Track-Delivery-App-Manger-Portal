import React, { Suspense } from "react";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Root from "../Pages/Root/Root";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HelpIcon from "@mui/icons-material/Help";
import { type Navigation } from "@toolpad/core";
import Login from "../Pages/login/Login";
import WelcomePage from "../Pages/WelcomePageLayout/WelcomePage";
import GuardedRoute from "../common/GuardedRoute";
import { RoutesModel } from "../types/types";
import Toolpad from "../Pages/ToolpadPages/Toolpad";
import Main from "../Pages/ToolpadPages/Main/Main";
import Dashboard from "../Pages/ToolpadPages/Dashboard/Dashboard";

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
const NAVIGATION = [
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    isFooter: false,
  },
  {
    segment: "deliveries",
    title: "Deliveries",
    icon: <HelpIcon />,
    isFooter: false,
  },
  {
    segment: "drivers",
    title: "Drivers",
    icon: <HelpIcon />,
    isFooter: false,
  },
  {
    segment: "members",
    title: "Members",
    icon: <HelpIcon />,
    isFooter: false,
  },
  {
    segment: "support",
    title: "Support",
    icon: <HelpIcon />,
    isFooter: true,
  },
  {
    segment: "settings",
    title: "Settings",
    icon: <HelpIcon />,
    isFooter: true,
  },
];

const BRANDING = {
  title: "",
  logo: "",
};

export { Routes, NAVIGATION, BRANDING };
