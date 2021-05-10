import Link from "next/link";
import MovieAddButton from "../Button/MovieAddButton";
import HamburgerMenu from "./HamburgerMenu";

const HeaderNav = () => {
  interface HeaderNavTitle {
    title: string;
  }

  const HeaderNavTitle = [
    {
      title: "Watch Movie",
    },
    {
      title: "Wont Movie",
    },
    {
      title: "Favorite Movie",
    },
  ];

  const HeaderNavList = HeaderNavTitle.map((List) => (
    <li>
      <Link href="/">
        <a className="font-medium tracking-wide sm:text-gray-100 text-gray-900 transition-colors duration-200 hover:text-gray-600">
          {List.title}
        </a>
      </Link>
    </li>
  ));

  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link href="/">
            <a className="inline-flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-100 hover:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase hover:text-gray-600">
                LikeVideo?
              </span>
            </a>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {HeaderNavList}
            <li className="pl-8">
              <MovieAddButton />
            </li>
          </ul>
          <div className="lg:hidden">
            <HamburgerMenu HamburgerMenuItems={HeaderNavList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
