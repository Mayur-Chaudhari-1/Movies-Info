import "../css/Favourite.css";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";

function Favourite() {
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

  const removeFavorite = (movieId) => {
    const updatedFavourites = Favourites.filter(
      (movie) => movie.id !== movieId,
    );

    setFavourites(updatedFavourites);

    localStorage.setItem("Favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div className="favorites">
      {Favourites.length > 0 ? (
        <div className="movies-grid">
          {Favourites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              Favourites={Favourites}
              toggleFavorite={toggleFavorite}
              removeFavorite={removeFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <h2>No Favorite Movies Yet</h2>
          <p>Add a movie to your favorites to see it here.</p>
        </div>
      )}
    </div>
  );
}

export default Favourite;
