import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";
import Sidebar from "./SideBar";

type GuardedRouteProps = {
  children: React.ReactNode;
};

function GuardedRoute({ children }: GuardedRouteProps) {
  const { user, authChecked } = useAuth();
  if (!user && authChecked) {
    return <Navigate to="/login" replace />;
  }
  //TODO play a cute animation for when loading components
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: "16px" }}>{children}</main>
    </div>
  );
}

export default GuardedRoute;
