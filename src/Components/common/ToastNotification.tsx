import React from "react";
import { Bounce, toast, ToastContainer, ToastOptions } from "react-toastify";
import { useThemeContext } from "../theme/ThemeContextProvider";

export type ToastyProps = {
  message: string;
  type: "info" | "success" | "warning" | "error" | "default";
  toastOptions?: ToastOptions;
};

function ToastNotification() {
  const { direction, mode } = useThemeContext();

  return (
    <ToastContainer
      position={direction === "rtl" ? "top-left" : "top-right"}
      autoClose={6000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={direction === "rtl"}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={mode}
      transition={Bounce}
      style={{ fontSize: 18, margin: 4 }}
    />
  );
}

function useToasty() {
  return ({ message, type, toastOptions }: ToastyProps) => {
    toast(message, { type, ...toastOptions });
  };
}

export { ToastNotification, useToasty };
