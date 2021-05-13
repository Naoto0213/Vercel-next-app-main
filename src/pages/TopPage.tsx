import BorderTitle from "../components/atoms/BorderTitle/BorderTitle";
import MovieList from "../components/molecules/MovieList/MovieList";
import Profile from "../components/molecules/UserProfile/Profile";
import TopPageMain from "../components/organisms/TopPage/TopPageMain";

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
