import React from "react";
import RoutesModel from "../Models/RoutesModel";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Root from "../Pages/Root/Root";
import Main from "../Pages/Main/Main";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from '@mui/icons-material/Home';
import { type Navigation } from "@toolpad/core";
import Dashboard from "../Pages/Dashboard/Dashboard";
import WelcomePage from "../Pages/WelcomePageLayout/WelcomePage";

const Routes: RoutesModel[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/LandingPage",
        element: <WelcomePage />,
      },
      {
        path: "/Main",
        element: <Main />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
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
    segment: "Main",
    title: "Main",
    icon: <DashboardIcon />,
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "",
    title: "welcomePage",
    icon: <HomeIcon />,
  },
];

export { Routes, NAVIGATION };
