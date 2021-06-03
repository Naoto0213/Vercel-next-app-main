import Drapdown from "../../molecules/Drapdown/Drapdown";

const MovieCard = (props) => {
  const title: string = props.title;
  const image: string = props.image;

  return (
    <>
      <div className="shadow-2xl bg-gray-700 text-center transform transition duration-300 ease-in-out hover:scale-110 bg-gray-100 border-4 border-gray-300 ">
        <img
          src={image}
          alt=""
          className="relative bg-cover min-w-full h-80 "
        />
        <div className="absolute inset-x-0 CardImg px-2 pt-24 opacity-100 sm:opacity-0 hover:opacity-100">
          <h2 className="flex justify-center items-center text-2xl text-gray-100 font-bold pt-2 h-12 ">
            {title}
          </h2>
        </div>
        <div className="flex justify-center pb-6 bg-opacity">
          <Drapdown />
        </div>
      </div>
    </>
  );
};

export default MovieCard;
