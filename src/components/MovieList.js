import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      )}
    </div>
  );
};

export default MovieList;