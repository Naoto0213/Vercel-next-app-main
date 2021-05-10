import HeaderNav from "../component/HeaderNav/Nav";

export default function Home() {
  return (
    <div className="bg-gray-700 h-screen">
      <HeaderNav />
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-bold text-white dark:text-white sm:text-4xl">
          <span className="block">好きな映画を友達を共有</span>
          <span className="block text-2xl text-gray-100"></span>
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
