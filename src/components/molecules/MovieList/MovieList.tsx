import react, { useState, useEffect } from "react";
import MovieCards from "../../atoms/Cards/Movie";
import PrymaryInput from "../../atoms/input/PrymaryInput";

const MovieList = () => {
  interface MovieTitle {
    Title: string;
  }
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieItems = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=481b83fe&type=movie`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieItems();
  }, [searchValue]);

  const MovieItems = ({ image, title }) => (
    <MovieCards title={title} image={image} />
  );

  return (
    <>
      <PrymaryInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-24 px-20 sm:px-24 md:px-30 lg:px-36 xl:px-60 pb-24 mt-10">
        {movies.map((items) => (
          <MovieItems title={items.Title} image={items.Poster} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
