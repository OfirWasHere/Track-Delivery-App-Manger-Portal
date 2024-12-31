import React, { useMemo } from "react";
import RoutesModel from "../Models/RoutesModel";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Root from "../Pages/Root/Root";
import Main from "../Pages/Main/Main";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import { type Navigation } from "@toolpad/core";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/login/Login";
import WelcomePage from "../Pages/WelcomePageLayout/WelcomePage";
import Toolpad from "../Pages/Root/Toolpad";

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
          <Toolpad>
            <Dashboard />
          </Toolpad>
        ),
      },
      {
        path: "/Main",
        element: (
          <Toolpad>
            <Main />
          </Toolpad>
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
  {
    segment: "",
    title: "welcomePage",
    icon: <HomeIcon />,
  },
];

const BRANDING = {
  title: "My Toolpad Core App",
};

export { Routes, NAVIGATION, BRANDING };
