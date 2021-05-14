import MovieCards from "../../atoms/Cards/MovieCard";

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
  {
    title: "Spiderman",
  },
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
  {
    title: "Spiderman",
  },
];

const MovieItems = ({ items }) => <MovieCards title={items} />;

const MovieList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-24 pb-24">
      {MovieTitle.map((items) => (
        <MovieItems items={items.title} />
      ))}
    </div>
  );
};

export default MovieList;
