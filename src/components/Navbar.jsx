import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg"
import Searchbar from "./Searchbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex flex-wrap items-center justify-between">
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="logo" className="rounded-full h-12 w-12" />
        <p className="text-xl font-bold text-blue-400">NexTech</p>
      </div>
      <div className="w-full md:w-auto mt-2 md:mt-0">
        <Searchbar />
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full md:flex md:items-center md:space-x-4 mt-2 md:mt-0`}
      >
        <Link to="/login" className="block md:inline hover:text-blue-300">
          Login
        </Link>
        <Link to="/signup" className="block md:inline hover:text-blue-300">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
