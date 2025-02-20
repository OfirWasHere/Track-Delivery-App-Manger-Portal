import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/Store";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { ThemeContextProvider } from "./theme/ThemeContextProvider";
import { Routes } from "./routes/Routes";

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
