import "../css/MovieCard.css";

function MovieCard({ movie, Favourites, toggleFavorite, removeFavorite }) {
  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-overlay">
            <button
              className="favorite-btn"
              onClick={() => {
                toggleFavorite(movie);
                if (removeFavorite) {
                  removeFavorite(movie.id);
                }
              }}
            >
              {Favourites.some((fav) => fav.id === movie.id) ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
