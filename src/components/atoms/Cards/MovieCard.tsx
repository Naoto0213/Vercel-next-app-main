import Link from "next/link";
import Drapdown from "../Button/Drapdown";

const MovieCard = ({ title }) => {
  return (
    <div className="shadow-2xl bg-gray-800 text-center transform transition duration-300 ease-in-out hover:scale-110 focus:ring-2 focus:border-gray-100 ">
      <div className="Spiderman bg-cover bg-center py-28 sm:py-32">
        <h2 className="text-2xl text-gray-300 font-bold pt-2">{title}</h2>
        <div className="pt-4 flex justify-center items-center">
          <Drapdown />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
