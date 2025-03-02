import React, { lazy } from "react";

const AuthModalV2 = lazy(() => import("./AuthModalV2/AuthModalV2"));

export default function ModalProvider() {
  return <AuthModalV2 />;
}
