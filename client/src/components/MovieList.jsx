import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-white mb-8">
        Popular Movies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            year={movie.year}
            type={movie.type}
            poster={movie.poster}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;