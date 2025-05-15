import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="flex justify-center flex-col">
        <h2 className="text-3xl font-bold text-center text-white md:text-4xl mb-6 relative inline-block before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-1 before:bg-indigo-500 my-10">
          Your Favorites
        </h2>
        <div className="px-5 movies-grid  mt-10 gap-6  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-6 place-items-center">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="justify-center flex flex-col">
        <h2 className="text-3xl font-bold text-center text-white md:text-4xl mb-6 relative inline-block before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-1 before:bg-indigo-500 my-10">
          No Favorite Movies Yet
        </h2>
        <p className="text-center">
          Start adding movies to your favorites and they will appear here!
        </p>
      </div>
    );
  }
}

export default Favorites;
