import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg"
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <div className="flex">
        <img src={Logo} alt="logo" className="rounded-full h-12 w-12" />
        <p className="text-xl font-bold text-blue-400">NexTech</p>
      </div>
      <Searchbar />
      <div className="space-x-4">
        <Link to="/login" className="hover:text-blue-300">Login</Link>
        <Link to="/signup" className="hover:text-blue-300">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
