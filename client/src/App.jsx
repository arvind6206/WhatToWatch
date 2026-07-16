import React, { useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import MovieList from './components/MovieList'

function App() {
  const [search, setSearch] = useState("")
    const movies = [
  {
    title: "Jack Reacher",
    year: "2012",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg"
  },
  {
    title: "John Wick",
    year: "2014",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
  },
  {
    title: "Extraction",
    year: "2020",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg"
  },
  {
    title: "The Equalizer",
    year: "2014",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg"
  },
  {
    title: "Nobody",
    year: "2021",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg"
  },
  {
    title: "The Accountant",
    year: "2016",
    type: "Movie",
    poster: "https://banner2.cleanpng.com/20180612/aok/aa8zfu63l.webp"
  },
  {
    title: "Mission: Impossible - Fallout",
    year: "2018",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg"
  },
  {
    title: "Top Gun: Maverick",
    year: "2022",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
  },
  {
    title: "Mad Max: Fury Road",
    year: "2015",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg"
  },
  {
    title: "The Dark Knight",
    year: "2008",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    title: "The Batman",
    year: "2022",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
  },
  {
    title: "Inception",
    year: "2010",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
  },
  {
    title: "Interstellar",
    year: "2014",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    title: "Tenet",
    year: "2020",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg"
  },
  {
    title: "Avengers: Endgame",
    year: "2019",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
    title: "Avengers: Infinity War",
    year: "2018",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
  },
  {
    title: "Iron Man",
    year: "2008",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"
  },
  {
    title: "Captain America: Civil War",
    year: "2016",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg"
  },
  {
    title: "Spider-Man: No Way Home",
    year: "2021",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
  },
  {
    title: "Black Panther",
    year: "2018",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
  },
  {
    title: "The Gray Man",
    year: "2022",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg"
  },
  {
    title: "The Tomorrow War",
    year: "2021",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg"
  },
  {
    title: "Gladiator",
    year: "2000",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
  },
  {
    title: "The Matrix",
    year: "1999",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    title: "300",
    year: "2006",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/h6gChwKByq8Y4p3A7rXK3s6J4QG.jpg"
  },
  {
    title: "Dune",
    year: "2021",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
  },
  {
    title: "The Wolf of Wall Street",
    year: "2013",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg"
  },
  {
    title: "Joker",
    year: "2019",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  {
    title: "Oppenheimer",
    year: "2023",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg"
  },
  {
    title: "The Shawshank Redemption",
    year: "1994",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  }
];

const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <Navbar/>
      <SearchBar 
      search={search}
      setSearch={setSearch}/>
      <MovieList movies={filteredMovies}/>
     
    </>
  )
}

export default App
