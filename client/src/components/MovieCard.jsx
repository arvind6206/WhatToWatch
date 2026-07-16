import React from "react";

function MovieCard({title, year, type, poster}) {
     
  return (
    <div className="bg-white w-80 m-2 rounded-xl shadow-lg overflow-hidden ">
        <img className='w-full h-60 object-cover'
          src={poster}/>
        <div className='p-2'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='text-gray-600 text-md'>{year}</p>
        <p className='bg-blue-500 mt-2 inline-block px-3 rounded-full text-white'>{type}</p>
        </div>
      </div>
  );
}

export default MovieCard;
