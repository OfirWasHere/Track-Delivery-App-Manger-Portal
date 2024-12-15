import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./Components/Store/Store";
import { Provider } from "react-redux";
import { Routes } from "./Components/Routes/Routes";
import { CssBaseline } from "@mui/material";
import theme from "./Components/theme/theme";
import { ThemeContextProvider } from "./Components/theme/ThemeContextProvider";
import "./Components/Hooks/useFirebase";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <CssBaseline />
        <RouterProvider router={createBrowserRouter(Routes)} />
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
