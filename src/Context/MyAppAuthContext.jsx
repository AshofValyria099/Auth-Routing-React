import React from 'react'
import { createContext, useState } from "react";

export const MyAuth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setregisteredUsers] = useState(JSON.parse(localStorage.getItem('registeredUsers')) || []);
  const [loggedInUsers, setloggedInUsers] = useState( JSON.parse(localStorage.getItem("loggedInUsers")) || null);

  return (
    <MyAuth.Provider
      value={{
        registeredUsers,
        setregisteredUsers,
        loggedInUsers,
        setloggedInUsers,
      }}
    >
      {children}
    </MyAuth.Provider>
  );
};
