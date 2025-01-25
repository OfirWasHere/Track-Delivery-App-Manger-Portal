import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

type GuardedRouteProps = {
  children: React.ReactNode;
};

function GuardedRoute({ children }: GuardedRouteProps) {
  const { user, authChecked } = useAuth();
  if (!user && authChecked) {
    return <Navigate to="/login" replace />;
  }
  // play a cute animation for fake loading
  return <div>{children}</div>;
}

export default GuardedRoute;
