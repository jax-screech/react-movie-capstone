// components/LogedInNavbar.jsx
import React, { useState } from "react";
import Logo from "../assets/logo.jpeg";

const LogedInNavbar = ({
  genre,
  setGenre,
  search,
  setSearch,
  handleSearchClick,
  handleClearSearch,
  handleLogout,
  handleViewFavorites,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-50 px-4 flex items-center justify-between shadow h-15">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-10 w-10 rounded-full" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
          className="px-3 py-1 rounded bg-gray-700 text-white outline-none"
        />
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="bg-gray-700 text-white px-2 py-1 rounded ml-2"
        >
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <button onClick={handleSearchClick} className="ml-2 bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">
          Search
        </button>
        <button onClick={handleClearSearch} className="ml-2 text-sm text-gray-300 underline">
          Clear
        </button>
      </div>

      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Profile
        </button>
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
            <button
              onClick={() => {
                handleViewFavorites();
                setShowDropdown(false);
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              View Favorites
            </button>
            <button
              onClick={() => {
                handleLogout();
                setShowDropdown(false);
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LogedInNavbar;
