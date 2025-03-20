import React, { Suspense } from "react";
import Dashboard from "../pages/ToolpadPages/Dashboard/Dashboard";
import { RoutesModel } from "../utils/types";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Root from "../pages/Root/Root";
import Main from "../pages/ToolpadPages/Main/Main";
import GuardedRoute from "../components/wrappers/GuardedRoute/GuardedRoute";
import Login from "../pages/Login/Login";
import WelcomePageV2 from "../pages/WelcomePageV2/WelcomePageV2";

const Routes: RoutesModel[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <WelcomePageV2 />,
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
