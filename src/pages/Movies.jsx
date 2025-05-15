import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import axios from "axios";
import Logo from "../assets/logo.jpeg";

// Debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovieTitle, setSelectedMovieTitle] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [startedMovies, setStartedMovies] = useState([]);

  const debouncedSearch = useDebounce(search, 500);

  const fetchMovies = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=4abbaf29`
      );
      if (response.data.Response === "True") {
        let fetched = response.data.Search;
        if (genre) {
          // Fake filtering (OMDB doesn't support real genre filtering here)
          fetched = fetched.filter((m) =>
            m.Title.toLowerCase().includes(genre.toLowerCase())
          );
        }
        setMovies(fetched);
        setError("");
      } else {
        setMovies([]);
        setError(response.data.Error || "No movies found.");
      }
    } catch {
      setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedSearch || genre) {
      fetchMovies(debouncedSearch || "movie");
    }
  }, [debouncedSearch, genre]);

  const handleLogout = () => {
    signOut(auth);
  };

  const handleSearchClick = () => {
    if (search || genre) {
      fetchMovies(search || "movie");
    }
  };

  const handleMovieClick = (movie) => {
    const youtubeLink = `https://www.youtube.com/watch?v=${movie.imdbID}`;
    setSelectedMovieTitle(youtubeLink);

    if (!startedMovies.some((m) => m.imdbID === movie.imdbID)) {
      setStartedMovies([...startedMovies, movie]);
    }
  };

  const closePlayer = () => {
    setSelectedMovieTitle(null);
  };

  const handleClearSearch = () => {
    setSearch("");
    setGenre("");
    setMovies([]);
  };

  const toggleFavorite = (movie) => {
    if (favorites.some((m) => m.imdbID === movie.imdbID)) {
      setFavorites(favorites.filter((m) => m.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const markAsFinished = (imdbID) => {
    setStartedMovies(startedMovies.filter((movie) => movie.imdbID !== imdbID));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 flex justify-between items-center fixed top-0 w-full p-2 z-50">
        <img src={Logo} alt="logo" className="rounded-full h-12 w-12" />
        <h1 className="text-xl font-bold">NexTech Movies</h1>
        <div className="flex items-center gap-2 mr-4">
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="px-3 py-1 rounded bg-gray-700 text-white"
          >
            <option value="">All Genres</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-1 rounded bg-gray-700 text-white"
          />
          <button
            onClick={handleSearchClick}
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white font-semibold"
          >
            Search
          </button>
          <button
            onClick={handleClearSearch}
            className="bg-white px-3 py-1 rounded text-blue-500 font-semibold"
          >
            Clear
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white font-semibold"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="flex-1 p-6 mt-20">
        {/* Continue Watching */}
        {startedMovies.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Continue Watching</h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {startedMovies.map((movie) => (
                <li
                  key={movie.imdbID}
                  className="bg-gray-700 p-4 rounded relative cursor-pointer"
                  onClick={() => handleMovieClick(movie)}
                >
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-60 object-cover rounded"
                  />
                  <p className="mt-2 font-semibold">{movie.Title}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      markAsFinished(movie.imdbID);
                    }}
                    className="absolute top-2 right-2 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded"
                  >
                    Mark as Finished
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Movie List */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4">Results</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {movies.map((movie) => (
                <li
                  key={movie.imdbID}
                  className="bg-gray-800 p-4 rounded shadow hover:scale-105 transition-transform cursor-pointer relative"
                  onClick={() => handleMovieClick(movie)}
                >
                  <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
                    alt={movie.Title}
                    className="rounded-md w-full h-72 object-cover"
                  />
                  <h3 className="mt-2 text-lg font-semibold">{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(movie);
                    }}
                    className={`absolute top-2 right-2 text-sm px-2 py-1 rounded ${
                      favorites.some((m) => m.imdbID === movie.imdbID)
                        ? "bg-yellow-500 text-black"
                        : "bg-gray-500 text-white"
                    }`}
                  >
                    {favorites.some((m) => m.imdbID === movie.imdbID)
                      ? "★"
                      : "☆"}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Trailer Player */}
      {selectedMovieTitle && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl aspect-video p-4">
            <button
              onClick={closePlayer}
              className="absolute top-2 right-2 text-white text-sm bg-red-600 px-2 py-1 rounded"
            >
              Close
            </button>
            <iframe
              className="rounded-lg"
              width="100%"
              height="100%"
              src={`${selectedMovieTitle}?autoplay=1&mute=0`}
              title="Trailer"
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
