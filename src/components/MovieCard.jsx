import { FaHeart } from "react-icons/fa";
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }
  return (
    <div className="hover:glass hover:-translate-y-2  ease-in-out duration-100 bg-black rounded-2xl  relative  ">
      <div className="card   ">
        <figure className="w-full">
          <img
            className="w-[200px]"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
        </figure>
        <div className="px-3 py-5">
          <h2 className="card-title text-xs">{movie.title}</h2>
          <p className="text-xs">{movie.release_date.split("-")[0]}</p>
          <div className="justify-end card-actions">
            <button
              className={`btn btn-white absolute top-2 right-2 ${
                favorite ? "text-red-800" : ""
              }`}
              onClick={onFavoriteClick}
            >
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
