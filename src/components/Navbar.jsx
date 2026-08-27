import React, { useContext } from "react";
import { NavLink } from "react-router";
import { MyAuth } from "../Context/MyAppAuthContext";

const linkClasses = ({ isActive }) =>
  `px-4 py-3 rounded-lg ${
    isActive ? "bg-blue-600 text-white" : "text-gray-300"
  }`;

const Navbar = () => {
  let { loggedInUsers, setloggedInUsers } = useContext(MyAuth);

  const logOut = () => {
    localStorage.removeItem("loggedInUsers");
    setloggedInUsers(null);
  };

 return <aside className="flex h-screen w-64 flex-col gap-2 bg-gray-900 p-4">
    <h1 className="mb-6 text-xl font-bold text-white">Dashboard</h1>

    <NavLink to="/main" end className={linkClasses}>
      Home
    </NavLink>

    <NavLink to="/main/users" className={linkClasses}>
      Users
    </NavLink>

    <NavLink to="/main/Products" className={linkClasses}>
      Products
    </NavLink>

    {/* Logout Button */}
    <button
      onClick={logOut}
      className="mt-auto rounded-lg bg-red-600 px-4 py-3 text-left text-white transition hover:bg-red-700"
    >
      Logout
    </button>
  </aside>;
};

export default Navbar;
