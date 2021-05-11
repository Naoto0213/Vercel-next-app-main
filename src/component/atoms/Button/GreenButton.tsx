import Link from "next/link";
const GreenButton = ({ src, title }) => {
  return (
    <div>
      <Link href={src}>
        <a href="">
          <button
            type="button"
            className="flex inline-block px-6 py-1 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
          >
            {title}
          </button>
        </a>
      </Link>
    </div>
  );
};

export default GreenButton;
