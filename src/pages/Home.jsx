import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
  const [Favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("Favourites")) || [],
  );

  useEffect(() => {
    localStorage.setItem("Favourites", JSON.stringify(Favourites));
  }, [Favourites]);

  const toggleFavorite = (movie) => {
    setFavourites((prev) => {
      const exists = prev.find((fav) => fav.id === movie.id);

      if (exists) {
        return prev.filter((fav) => fav.id !== movie.id);
      }

      return [...prev, movie];
    });
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    const showMovies = async () => {
      try {
        const getMovies = await getPopularMovies();
        console.log(getMovies);
        setMovies(getMovies);
      } catch (err) {
        console.log(err, "Error Occured...");
      }
    };
    showMovies();
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
    } catch (err) {
      console.log(err, "Error Occured...");
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {Movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            Favourites={Favourites}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
