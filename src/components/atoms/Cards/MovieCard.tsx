import GreenButton from "../Button/GreenButton";
import Link from "next/link";
import ParpleStandartButton from "../Button/ParpleButton";

import Profile from "../../molecules/UserProfile/Profile";
const MovieCard = ({ title }) => {
  return (
    <Link href="/">
      <button>
        <div className="shadow-2xl bg-gray-800 text-center transform transition duration-300 ease-in-out hover:scale-110 focus:ring-2 focus:border-gray-100 ">
          <div className="Spiderman bg-cover bg-center py-28 sm:py-32">
            <h2 className="text-2xl text-gray-300 font-bold pt-2">{title}</h2>
            <div className="pt-4 flex justify-center items-center"></div>
          </div>
        </div>
      </button>
    </Link>
  );
};

export default MovieCard;
