import React from "react";
import { createBrowserRouter } from "react-router";
import {  RouterProvider } from "react-router";
import Authlayout from "../layouts/Authlayout";
import Mainlayout from "../layouts/Mainlayout";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Userspage from "../Pages/Userspage";
import Productpage from "../Pages/Productpage";
import Homepage from "../Pages/Homepage";

const Approutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <Authlayout />,
          children: [
            {
              path: "/",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <Mainlayout />,
          children: [
            {
              path: "",
              element: <Homepage />,
            },
            {
              path: "users",
              element: <Userspage />,
            },
            {
              path: "Products",
              element: <Productpage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Approutes;
