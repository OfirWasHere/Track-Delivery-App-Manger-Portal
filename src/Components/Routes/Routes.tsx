import React, { Suspense } from "react";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Root from "../Pages/Root/Root";
import Login from "../Pages/login/Login";
import WelcomePage from "../Pages/WelcomePageLayout/WelcomePage";
import GuardedRoute from "../common/GuardedRoute";
import { RoutesModel } from "../types/types";
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

export { Routes };
