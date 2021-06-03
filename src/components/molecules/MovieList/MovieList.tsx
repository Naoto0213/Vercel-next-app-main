import react, { useState, useEffect } from "react";
import MovieCards from "../../atoms/Cards/Movie";

const MovieList = () => {
  interface MovieTitle {
    Title: string;
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-24 px-20 sm:px-24 md:px-30 lg:px-36 xl:px-60 pb-24 ">
        {MovieTitle.map((items) => (
          <MovieItems title={items.Title} image={items.Poster} />
        ))}
      </div>

  );
};

export default MovieList;
