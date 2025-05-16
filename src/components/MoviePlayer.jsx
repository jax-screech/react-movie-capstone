import React from "react";

const MoviePlayer = ({ videoUrl, onClose }) => {
  // Default fallback to a working YouTube embed URL
  const fallbackVideo = "https://ww4.fmovies.co/film/the-flash-1630855332/";

  const [movie, setMovie] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=4abbaf29")
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative bg-gray-900 rounded-lg shadow-lg p-4 w-full max-w-3xl aspect-video">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl hover:text-red-500"
          aria-label="Close player"
        >
          &times;
        </button>
        <iframe
          src={videoUrl || fallbackVideo}
          title="Movie Trailer"
          className="w-full h-full rounded"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MoviePlayer;
