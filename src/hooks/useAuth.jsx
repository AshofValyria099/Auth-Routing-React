import React, { useContext } from "react";
import { MyAuth } from "../Context/MyAppAuthContext";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export const useAuth = () => {
  let Navigate = useNavigate();
  const { registeredUsers, setregisteredUsers } = useContext(MyAuth);
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // login logic
  let loginSubmit = (data) => {
    let foundedUser = registeredUsers.find((val) => {
      return val.Email === data.Email && val.Password === data.Password;
    });

    if (!foundedUser) {
      alert("User not found or invalid credentials");
      reset();
      return;
    }

    setloggedInUsers(foundedUser);
    localStorage.setItem("loggedInUsers", JSON.stringify(foundedUser));
    alert("User logged IN");
    Navigate("/main");
    reset();
  };

  //   register logic
  let registerSubmit = (data) => {
    let registerdUserarr = [...registeredUsers, data];
    setregisteredUsers(registerdUserarr);
    alert("User registered successfully");
    localStorage.setItem("registeredUsers", JSON.stringify(registerdUserarr));
    reset();
  };

  return {
    registerSubmit,
    loginSubmit,
    handleSubmit,
    Navigate,
    errors,
    register,
  };
};

export default useAuth;
