import React from 'react'
import MovieCard from './MovieCard';

function MovieList({movies}) {
  

  return (
    <div className='max-w-7xl mx-auto mt-8 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {movies.map((movie, index) => {
        return (
        <MovieCard
        key={index}
        title={movie.title}
        year={movie.year}
        type={movie.type}
        poster={movie.poster}
        />
      )})}
    </div>
  )
}

export default MovieList
