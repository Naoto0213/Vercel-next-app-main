const MovieData = () => {
  const getNowPlayingURL =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=e545c1818d20aa96cfeb790ebbbb5156";

  fetch(getNowPlayingURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.results.map((movie) => {
        console.log(movie);
      });
    })
    .catch((error) => {
      console.log("error");
    });
  return <div></div>;
};

export default MovieData;
