import React from "react";

const MovieCard = ({ movie, onClick, toggleFavorite, isFavorite }) => {
  if (!movie || !movie.Poster || !movie.Title) {
    return null; // Don't render anything if movie data is missing
  }

  return (
    <li
      className="bg-gray-800 p-4 rounded shadow hover:scale-105 transition-transform cursor-pointer relative"
      onClick={() => onClick(movie)}
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
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className="absolute top-2 right-2 text-xl p-1 rounded bg-transparent"
      >
        {isFavorite ? (
          <span role="img" aria-label="Star" className="text-yellow-400">★</span>
        ) : (
          <span role="img" aria-label="Star outline" className="text-gray-400">☆</span>
        )}
      </button>
    </li>
  );
};

export default MovieCard;
