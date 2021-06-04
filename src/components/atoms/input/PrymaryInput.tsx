const PrymaryInput = (props) => {
  return (
    <div className="flex justify-center">
      <div className="flex bg-white rounded-full shadow-xl w-52 py-4 px-4">
        <input
          className="rounded-l-full text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search"
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default PrymaryInput;
