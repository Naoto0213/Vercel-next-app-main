import Link from "next/link";

const MovieAddButton = ({ src, title }) => {
  return (
    <div>
      <Link href={src}>
        <a href="">
          <button
            type="button"
            className="flex inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
          >
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pl-2 h-6 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </a>
      </Link>
    </div>
  );
};

export default MovieAddButton;
