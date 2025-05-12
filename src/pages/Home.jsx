import React from "react";

import FeaturedMovie from '../assets/lucifer.jpeg';
import FeaturedMovie2 from '../assets/henry.jpeg';
import FeaturedMovie3 from '../assets/gs.jpeg';
import FeaturedMovie4 from '../assets/havoc.jpeg';
import FeaturedMovie5 from '../assets/p.break.jpeg';
import FeaturedMovie6 from '../assets/baby driver.jpeg';
import FeaturedMovie7 from '../assets/g&G.jpeg';
import FeaturedMovie8 from '../assets/miraculous.jpeg';

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Welcome to NexTech</h2>
            <p className="text-lg mb-6 text-gray-300">
              Discover and stream your favorite movies and TV shows, all in one place.
            </p>
            <a
              href="/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
            >
              Get Started
            </a>
          </div>

          {/* Movie Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[FeaturedMovie, FeaturedMovie2, FeaturedMovie3, FeaturedMovie4, FeaturedMovie5, FeaturedMovie6, FeaturedMovie7, FeaturedMovie8].map((movie, index) => (
              <img
                key={index}
                src={movie}
                alt={`Featured Movie ${index + 1}`}
                className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-12 bg-gray-800">
          <h3 className="text-3xl font-bold text-center mb-8">Why Choose NexTech?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-700 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-2">HD Streaming</h4>
              <p className="text-gray-300">
                Enjoy movies in high-definition quality for the ultimate viewing experience.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-2">Wide Selection</h4>
              <p className="text-gray-300">
                Access thousands of movies and shows from various genres.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-2">Watch Anywhere</h4>
              <p className="text-gray-300">
                Stream on your phone, tablet, laptop, or smart TV.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
