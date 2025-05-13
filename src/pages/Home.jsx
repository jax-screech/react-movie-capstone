import React from "react";

import FeaturedMovie from '../assets/lucifer.jpeg';
import FeaturedMovie2 from '../assets/henry.jpeg';
import FeaturedMovie3 from '../assets/gs.jpeg';
import FeaturedMovie4 from '../assets/havoc.jpeg';
import FeaturedMovie5 from '../assets/p.break.jpeg';
import FeaturedMovie6 from '../assets/baby driver.jpeg';
import FeaturedMovie7 from '../assets/g&G.jpeg';
import FeaturedMovie8 from '../assets/miraculous.jpeg';

const Home = () => {
  const movieImages = [
    FeaturedMovie,
    FeaturedMovie2,
    FeaturedMovie3,
    FeaturedMovie4,
    FeaturedMovie5,
    FeaturedMovie6,
    FeaturedMovie7,
    FeaturedMovie8,
  ];

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to NexTech Movies</h1>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mb-6">
        Get Started
      </button>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Featured Movies</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {movieImages.map((movie, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={movie}
                alt={`Featured Movie ${index + 1}`}
                className="object-cover w-full h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
