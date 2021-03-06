import ParpleStandartButton from "../../atoms/Button/Parple";

const TopPageMain = () => {
  return (
    // ファーストビュー
    <>
      <main className="spiderman text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-8 z-20 bg-center ">
        <h2 className="text-xl font-bold text-gray-300 dark:text-white sm:text-4xl ">
          <span className="block ">好きな映画を友達と共有</span>
          <span className="block text-2xl text-gray-300">
            Welocome to LikeVideo
          </span>
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <ParpleStandartButton src="/" title="Get Start" />
          </div>
        </div>
      </main>
    </>
  );
};

export default TopPageMain;
