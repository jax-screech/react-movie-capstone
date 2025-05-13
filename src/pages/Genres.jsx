import React from 'react';

const Genres = () => {
  return (
    <div className="text-white p-4">
      <h1 className="text-2xl font-bold">Genres Page</h1>
      <ul className="mt-4 ">
        {['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Thriller'].map((genre) => (
          <li key={genre} className="py-1">
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
