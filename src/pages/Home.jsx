import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeaturedMovie from "../assets/lucifer.jpeg";
import FeaturedMovie2 from "../assets/henry.jpeg";
import FeaturedMovie3 from "../assets/havoc.jpeg";
import FeaturedMovie4 from "../assets/p.break.jpeg";
import FeaturedMovie5 from "../assets/gs.jpeg";
import FeaturedMovie6 from "../assets/miraculous.jpeg";
import FeaturedMovie7 from "../assets/baby driver.jpeg";
import FeaturedMovie8 from "../assets/g&G.jpeg";


const movieData = [
  { img: FeaturedMovie, trailer: "https://www.youtube.com/embed/X4bF_quwNtw" },
  { img: FeaturedMovie2, trailer: "https://www.youtube.com/embed/fn-06vvRebo" },
  { img: FeaturedMovie3, trailer: "https://www.youtube.com/embed/6txjTWLoSc8" },
  { img: FeaturedMovie4, trailer: "https://www.youtube.com/embed/AL9zLctDJaU" },
  { img: FeaturedMovie5, trailer: "https://www.youtube.com/embed/nTjQYQiROR0" },
  { img: FeaturedMovie6, trailer: "https://www.youtube.com/embed/vFMUEThkDC4" },
  { img: FeaturedMovie7, trailer: "https://www.youtube.com/embed/z2z857RSfhk" },
  { img: FeaturedMovie8, trailer: "https://www.youtube.com/embed/e34_mMhe4WQ" },
];

const Home = () => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);

  const openTrailer = (url) => {
    setTrailerUrl(url);
    setShowTrailer(true);
  };

  const closeTrailer = () => {
    setShowTrailer(false);
    setTrailerUrl("");
  };

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      {/* Hero Section */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">Welcome to NexTech Movies</h1>
        <p className="mb-5 text-gray-300">
          Join us today to explore a world of amazing entertainment.
        </p>
        <Link
          to="/signup"
          className="bg-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-500 transition"
        >
          Get Started
        </Link>
      </div>

      {/* Featured Movies */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Featured Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {movieData.map((movie, index) => (
            <div
              key={index}
              onClick={() => openTrailer(movie.trailer)}
              className="cursor-pointer rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={movie.img}
                alt={`Featured Movie ${index + 1}`}
                className="object-cover w-full h-64"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Trailer */}
      {showTrailer && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-4 rounded-md max-w-3xl w-full relative">
            <button
              onClick={closeTrailer}
              className="absolute top-2 right-2 text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
            >
              Close
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={trailerUrl}
                title="Movie Trailer"
                allowFullScreen
                className="w-full h-96 rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
