import React, { useEffect, useState } from 'react';

const Home = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const url = 'https://streaming-availability.p.rapidapi.com/shows/series/tt0944947'; // Replace with desired ID
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '179562b284msh8b3cfccdbb3aef2p1844bejsn9578a4a06f6a',
          'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : movie ? (
        <div>
          <h3>{movie.title || movie.originalTitle || 'No Title'}</h3>
          <p>{movie.overview || 'No description available.'}</p>
          {movie.posterURLs?.original && (
            <img src={movie.posterURLs.original} alt={movie.title} style={{ width: '200px' }} />
          )}
        </div>
      ) : (
        <p>Movie not found.</p>
      )}
    </div>
  );
};

export default Home;
