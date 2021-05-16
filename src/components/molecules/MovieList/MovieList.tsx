import react, { useState, useEffect } from "react";
import MovieCards from "../../atoms/Cards/MovieCard";

const MovieList = () => {
  interface MovieTitle {
    Title: number;
  }

  const [MovieTitle, setMovieTitle] = useState([]);

  const getMovieItems = async () => {
    const url =
      "http://www.omdbapi.com/?s=terminator&apikey=481b83fe&type=movie";
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovieTitle(responseJson.Search);
  };

  useEffect(() => {
    getMovieItems();
  }, []);

  const MovieItems = ({ image, title }) => (
    <MovieCards title={title} image={image} />
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 px-32 xl:px-56 pb-24 ">
      {MovieTitle.map((items) => (
        <MovieItems title={items.Title} image={items.Poster} />
      ))}
    </div>
  );
};

export default MovieList;
