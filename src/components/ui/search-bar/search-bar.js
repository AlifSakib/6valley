const SearchBar = () => {
  return (
    <div className="join">
      <select className="select select-bordered join-item rounded-full">
        <option disabled selected>
          All Categories
        </option>
        <option>Sci-fi</option>
        <option>Drama</option>
        <option>Action</option>
      </select>
      <div>
        <div>
          <input
            className="input input-bordered join-item w-60"
            placeholder="Search for items or Store"
          />
        </div>
      </div>

      <div className="indicator">
        <button className="btn join-item rounded-full bg-blue-500 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
