import React from "react";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Root from "../Pages/Root/Root";
import Main from "../Pages/ToolpadPages/Main/Main";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { type Navigation } from "@toolpad/core";
import Dashboard from "../Pages/ToolpadPages/Dashboard/Dashboard";
import Login from "../Pages/login/Login";
import WelcomePage from "../Pages/WelcomePageLayout/WelcomePage";
import Toolpad from "../common/Toolpad";
import GuardedRoute from "../common/GuardedRoute";
import { RoutesModel } from "../types/types";

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
            <Toolpad>
              <Dashboard />
            </Toolpad>
          </GuardedRoute>
        ),
      },
      {
        path: "/Main",
        element: (
          <GuardedRoute>
            <Toolpad>
              <Main />
            </Toolpad>
          </GuardedRoute>
        ),
      },
    ],
  },
];

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "Main",
    title: "Main",
    icon: <DashboardIcon />,
  },
  // {
  //   segment: "",
  //   title: "welcomePage",
  //   icon: <HomeIcon />,
  // },
];

const BRANDING = {
  title: "",
  logo: "",
};

export { Routes, NAVIGATION, BRANDING };
