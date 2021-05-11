import BorderTitle from "../../atoms/BorderTitle/BorderTitle";
import MovieList from "../../molecules/MovieList";
import TopPageMain from "./TopPageMain";
const TopPage = () => {
  return (
    <div className="">
      <TopPageMain />
      <BorderTitle title="Movie" />
      <MovieList />
    </div>
  );
};

export default TopPage;
