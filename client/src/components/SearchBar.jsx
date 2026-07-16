import React from "react";
import { Search } from "lucide-react";

function SearchBar({ searchInput, setSearchInput, handleSearch }) {
  return (
    <div className="bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4">

        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="
            w-full
            flex-1
            h-12
            px-5
            rounded-xl
            border
            border-gray-600
            bg-gray-800
            text-white
            placeholder:text-gray-400
            outline-none
            focus:ring-2
            focus:ring-yellow-400
            transition
          "
        />

        <button
          onClick={handleSearch}
          className="
            w-full
            sm:w-auto
            h-12
            px-6
            rounded-xl
            bg-yellow-400
            hover:bg-yellow-300
            text-black
            font-semibold
            flex
            justify-center
            items-center
            gap-2
            shadow-md
            transition-all
            duration-200
            active:scale-95
          "
        >
          <Search size={20} />
          Search
        </button>

      </div>
    </div>
  );
}

export default SearchBar;