import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("avengers");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovieTitle, setSelectedMovieTitle] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=${search}&apikey=4abbaf29`
        );
        if (response.data.Response === "True") {
          setMovies(response.data.Search);
          setError("");
        } else {
          setMovies([]);
          setError(response.data.Error || "No movies found.");
        }
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [search]);

  const handleLogout = () => {
    signOut(auth);
  };

  const handleMovieClick = (title) => {
    setSelectedMovieTitle(`${title} full movie`);
  };

  const closePlayer = () => {
    setSelectedMovieTitle(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">NexTech Movies</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-1 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white font-semibold"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Movies List */}
      <div className="flex-1 p-6">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4">Results for "{search}"</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {movies.map((movie) => (
                <li
                  key={movie.imdbID}
                  onClick={() => handleMovieClick(movie.Title)}
                  className="bg-gray-800 p-4 rounded shadow hover:scale-105 transition-transform cursor-pointer"
                >
                  <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
                    alt={movie.Title}
                    className="rounded-md w-full h-80 object-cover"
                  />
                  <h3 className="mt-2 text-lg font-semibold">{movie.Title}</h3>
                  <p>{movie.Year}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* YouTube Embed Player */}
      {selectedMovieTitle && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl aspect-video p-4">
            <button
              onClick={closePlayer}
              className="absolute top-2 right-2 text-white text-sm z-10"
            >
              Back
            </button>
            <iframe
              className="rounded-lg"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed?autoplay=1&mute=0&origin=https://www.youtube.com/=search&list=${encodeURIComponent(
                selectedMovieTitle
              )}`}
              title={selectedMovieTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
