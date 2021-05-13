import GreenButton from "../Button/GreenButton";
import Link from "next/link";
const MovieCards = () => {
  return (
    <Link href="/">
      <button>
        <div className="shadow-2xl bg-gray-800 text-center transform transition duration-300 ease-in-out hover:scale-110 focus:ring-2 focus:border-gray-100 ">
          <div className="Spiderman bg-cover bg-center py-28 sm:py-32">
            <h2 className="text-2xl text-gray-300 font-bold pt-2">Spiderman</h2>
            <div className="pt-4 flex justify-center items-center">
              <GreenButton src="/" title="12/3" />
              <button className="ml-4 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </button>
    </Link>
  );
};

export default MovieCards;
