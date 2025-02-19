import React, { Suspense } from "react";
import Dashboard from "../pages/ToolpadPages/Dashboard/Dashboard";
import { RoutesModel } from "../utils/types";
import { Login } from "@mui/icons-material";
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

export { Routes };
