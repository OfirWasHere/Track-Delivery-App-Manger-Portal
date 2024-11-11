import React from "react";
import RoutesModel from "../Models/RoutesModel";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";

const Routes: RoutesModel[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      // {
      //   path: "/about",
      //   element: <AboutPage />,
      // },
    ],
  },
];

export default Routes;
