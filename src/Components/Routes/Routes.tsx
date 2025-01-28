import React, { Suspense } from "react";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Root from "../Pages/Root/Root";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { type Navigation } from "@toolpad/core";
import Login from "../Pages/login/Login";
import WelcomePage from "../Pages/WelcomePageLayout/WelcomePage";
import GuardedRoute from "../common/GuardedRoute";
import { RoutesModel } from "../types/types";
import Toolpad from "../Pages/ToolpadPages/Toolpad";

// Lazy-loaded components
const Dashboard = React.lazy(
  () => import("../Pages/ToolpadPages/Dashboard/Dashboard")
);
const Main = React.lazy(() => import("../Pages/ToolpadPages/Main/Main"));

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
            <Suspense fallback={<div>Loading...</div>}>
              <Toolpad>
                <Dashboard />
              </Toolpad>
            </Suspense>
          </GuardedRoute>
        ),
      },
      {
        path: "/Main",
        element: (
          <GuardedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <Toolpad>
                <Main />
              </Toolpad>
            </Suspense>
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
];

const BRANDING = {
  title: "",
  logo: "",
};

export { Routes, NAVIGATION, BRANDING };
