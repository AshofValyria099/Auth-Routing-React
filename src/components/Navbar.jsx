import React from "react";
import { NavLink } from "react-router";

const linkClasses = ({ isActive }) =>
  `px-4 py-3 rounded-lg ${isActive ? "bg-blue-600 text-white" : "text-gray-300"}`;

const Navbar = () => (
  <aside className="flex flex-col h-screen w-64 bg-gray-900 p-4 gap-2">
    <h1 className="text-white text-xl font-bold mb-6">Dashboard</h1>
    <NavLink to="/main" end className={linkClasses}>
      Home
    </NavLink>
    <NavLink to="/main/users" className={linkClasses}>
      Users
    </NavLink>
    <NavLink to="/main/Products" className={linkClasses}>
      Products
    </NavLink>
  </aside>
);

export default Navbar;
