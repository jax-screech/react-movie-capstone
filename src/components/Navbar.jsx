import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => navigate("/login"));
  };

  const linkClasses = ({ isActive }) =>
    isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300";

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex flex-wrap items-center justify-between">
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="logo" className="rounded-full h-12 w-12" />
        <p className="text-xl font-bold text-blue-400">NexTech</p>
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
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full md:flex md:items-center md:space-x-6 mt-2 md:mt-0`}
      >
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>
        {user && (
          <NavLink to="/movies" className={linkClasses}>
            Movies
          </NavLink>
        )}
        {!user ? (
          <>
            <NavLink to="/login" className={linkClasses}>
              Login
            </NavLink>
            <NavLink to="/signup" className={linkClasses}>
              Signup
            </NavLink>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="hover:text-red-400 font-semibold"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
