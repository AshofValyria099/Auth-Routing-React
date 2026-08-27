import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { MyAuth } from "../Context/MyAppAuthContext";

const ProtectedRoute = () => {
  const { loggedInUsers } = useContext(MyAuth);

  if (!loggedInUsers) {
   return <Navigate to="/" />
  }
  return <Outlet />;
};

export default ProtectedRoute;
