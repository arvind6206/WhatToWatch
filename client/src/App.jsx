import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";

function App() {
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const [darkMode, setDarkMode] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showAllMovies, setShowAllMovies] = useState(false);
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const url = `https://www.omdbapi.com/?s=${searchQuery || "Batman"}&apikey=${API_KEY}&page=${page}`;

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setTotalResults(Number(data.totalResults) || 0)

        const formattedMovies = (data.Search || []).map((movie) => ({
          title: movie.Title,
          year: movie.Year,
          type: movie.Type,
          poster: movie.Poster,
        }));
        setMovies(formattedMovies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [searchQuery, page]);

  function handleClipboard() {
    setShowAllMovies(true);
  }

  const handleSearch = () => {
  setSearchQuery(searchInput);
  setPage(1);
  setShowAllMovies(false);
};

  const displayedMovies = movies;

  return (
    
    <div
      className={`min-h-screen flex flex-col transition-all duration-300 ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-gradient-to-br from-slate-100 via-white to-gray-200 text-black"
      }`}
    >

      <Navbar
        handleClipboard={handleClipboard}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />

      {loading ? (
        <Loader darkMode={darkMode} />
      ) : displayedMovies.length > 0 ? (
        <MovieList movies={displayedMovies} darkMode={darkMode} />
      ) : (
        <div className="flex flex-col items-center justify-center mt-20">
          <h2
            className={`text-3xl font-bold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            No Movies Found 🎬
          </h2>

          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Try searching for another movie.
          </p>
        </div>
      )}

      {!loading && displayedMovies.length > 0 && (
  <Pagination
    page={page}
    setPage={setPage}
    totalResults={totalResults}
    darkMode={darkMode}
  />
)}

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
