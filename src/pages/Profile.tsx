import HeaderNav from "../components/organisms/HeaderNav/HeaderNav";
import BorderTitle from "../components/atoms/BorderTitle/BorderTitle";
import { useUser } from "@auth0/nextjs-auth0";
import ProfileCard from "../components/atoms/Cards/ProfileCard";
import MovieList from "../components/molecules/MovieList/MovieList";
const Profile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="">
      <HeaderNav />
      <BorderTitle title="Profile" />
      <div className="grid justify-center ">
        <ProfileCard />
      </div>
      <BorderTitle title="Watch Movie" />
      <MovieList />
      <BorderTitle title="Wont Movie" />
      <MovieList />
      <BorderTitle title="Favorite Movie" />
      <MovieList />
    </div>
  );
};

export default Profile;
