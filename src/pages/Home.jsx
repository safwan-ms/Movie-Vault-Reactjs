import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import { getPopularMovies, searchMovies } from "../services/api.js";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    try {
      setLoading(true);
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult);
      setErrorMsg(null);
    } catch (err) {
      setErrorMsg(err);
      console.log("Failed to search movies");
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };
  const loadPopularMovies = async () => {
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    } catch (e) {
      errorMsg(e);
      console.log("Error Loading Movie ");
    }
  };
  useEffect(() => {
    loadPopularMovies();
  }, []);
  return (
    <div className="home">
      <div>
        <form onSubmit={handleSearch} className="flex justify-center mt-7">
          <input
            type="text"
            placeholder="Type here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-xs mr-3 rounded-full input input-bordered input-warning"
          />
          <button className="px-4 py-2 font-bold bg-red-700 rounded-full ">
            Search
          </button>
        </form>
      </div>
      {loading ? (
        <div className="flex justify-center mt-48">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="movies-grid  mt-10 gap-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-4 place-items-center">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
