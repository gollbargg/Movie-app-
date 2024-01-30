import React, { useState, useEffect } from "react";
import Movies from "./container/Movie";
import Header from "./components/Header/Header";
import { movies$ } from "./service/movies"

function App() {
  const [movieList, setMovielist] = useState([]);
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    movies$.then((data) => {
      setMovielist(data)
      setMovies(data)
      setLoading(false)
    }).catch((error) => {
      console.error(error)
    })
  }, [movieList, loading])

  const handleSearch = (param) => {
    const allmovie = [...movieList];
    const newList = allmovie.filter((m) =>
      m.category.toUpperCase().includes(param.toUpperCase())
    );
    setMovies(newList);
    if (param.length === 0) {
      setMovies(movieList);
    }
  };

  if(loading) {
    return <div>Loading ...</div>
  }

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <Movies list={movies} />
    </div>
  );
}

export default App;
