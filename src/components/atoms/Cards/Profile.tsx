import { useUser } from "@auth0/nextjs-auth0";
const ProfileCard = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      {user && (
        <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3 ring-white ring-2">
          <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
          <div className="flex justify-center -mt-8">
            <img
              src={user.picture}
              className="rounded-full border-solid border-white border-2 -mt-3"
            />
          </div>
          <div className="text-center px-3 pb-6 pt-2">
            <h3 className="text-white text-lg font-bold font-sans">
              {user.name}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
