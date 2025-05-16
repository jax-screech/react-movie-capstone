import React from "react";

const ContinueWatchingList = ({ startedMovies, handleMovieClick, markAsFinished }) => (
  startedMovies.length > 0 && (
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
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
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
  )
);

export default ContinueWatchingList;
