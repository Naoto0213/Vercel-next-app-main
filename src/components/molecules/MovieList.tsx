import MovieCards from "../atoms/Cards/MovieCards";

const MovieList = () => {
  return (
    <div className="grid sm:grid-cols-4 gap-12 px-24 pb-24">
      <MovieCards />
    </div>
  );
};

export default MovieList;
