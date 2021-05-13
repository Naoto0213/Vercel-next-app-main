import MovieCards from "../../atoms/Cards/MovieCards";

const MovieList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-36 pb-24">
      <MovieCards />
      <MovieCards />
      <MovieCards />
    </div>
  );
};

export default MovieList;
