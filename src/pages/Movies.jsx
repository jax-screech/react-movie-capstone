// src/pages/Movies.jsx
import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Footer from '../components/Footer';

const sampleMovies = [
  'Inception',
  'Interstellar',
  'Avengers: Endgame',
  'The Matrix',
  'Black Panther',
  'Joker',
  'The Batman',
  'Guardians of the Galaxy',
];

const Movies = () => {
  const [search, setSearch] = useState('');

  const filteredMovies = sampleMovies.filter((movie) =>
    movie.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">🎬 NexTech Movies</h1>
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
        <h2 className="text-2xl font-semibold mb-4">Available Movies</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <li
                key={index}
                className="bg-gray-800 p-4 rounded shadow hover:scale-105 transition-transform"
              >
                {movie}
              </li>
            ))
          ) : (
            <p className="text-gray-400">No movies found.</p>
          )}
        </ul>
      </div>

      {/* Footer */}
      <Footer />
    </div> // 👈 This was missing!
  );
};

export default Movies;
