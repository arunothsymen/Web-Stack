// src/components/PopularMovies.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const apiKey = 'd37d86d5';

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=fast&apikey=${apiKey}`) // You can adjust the search query for popular movies
      .then((response) => {
        setPopularMovies(response.data.Search || []);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [apiKey]);

  return (
    <div className="popular-movies">
      <h2>Top Movies</h2>
      <div className="movie-grid">
        {popularMovies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;