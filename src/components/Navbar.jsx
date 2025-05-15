import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.jpeg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <img src={Logo} alt="" className='rounded-full h-12 w-12' />
      <h1 className="text-xl font-bold text-blue-400">NexTech</h1>

      {/* Desktop Links */}
      <div className="space-x-4 hidden md:flex">
        <Link to="/login" className="hover:text-blue-300">Login</Link>
        <Link to="/signup" className="hover:text-blue-300">Signup</Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden relative">
        <button
          className="text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-md z-50">
            <Link
              to="/login"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
