import MovieCard from "../atoms/Cards/MovieCard";

interface MovieTitle {
  title: string;
}

const MovieTitle = [
  {
    title: "Spiderman",
  },
  {
    title: "Avangers",
  },
  {
    title: "RoneSavivar",
  },
  {
    title: "Guitar",
  },
  {
    title: "Spiderman",
  },
];

const MovieItems = ({ items }) => <MovieCard title={items} />;

const MovieList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-36 pb-24">
      {MovieTitle.map((items) => (
        <MovieItems items={items.title} />
      ))}
    </div>
  );
};

export default MovieList;
