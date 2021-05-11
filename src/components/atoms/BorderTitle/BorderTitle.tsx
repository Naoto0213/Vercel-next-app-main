const BorderTitle = ({ title }) => {
  return (
    // Border付きの見出し
    <div className="flex items-center justify-center my-8 sm:my-16 ">
      <h2 className="border-b border-green-500 text-xl  sm:text-4xl font-bold text-gray-100">
        {title}
      </h2>
    </div>
  );
};

export default BorderTitle;
