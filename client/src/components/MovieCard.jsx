import React from "react";

function MovieCard({ title, year, type, poster}) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        cursor-pointer
      "
    >
      <img
        src={poster}
        alt={title}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 line-clamp-1">
          {title}
        </h2>

        <div className="flex items-center justify-between mt-3">
          <p className="text-gray-500 font-medium">{year}</p>

          <span
            className="
              bg-blue-500
              text-white
              text-sm
              px-3
              py-1
              rounded-full
            "
          >
            {type}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;