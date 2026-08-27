import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { MyAuth } from "../Context/MyAppAuthContext";

const PublicRoute = () => {
    console.log("PublicRoute renders...")
  const { loggedInUsers } = useContext(MyAuth);

  if (loggedInUsers) {
   return <Navigate to="/main"/>
  }
  return <Outlet />;
};

export default PublicRoute;
