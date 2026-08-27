import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Approutes from "./Routes/Approutes.jsx";
import { AuthProvider, MyAuth } from "./Context/MyAppAuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Approutes />
  </AuthProvider>,
);
