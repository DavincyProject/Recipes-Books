import AddItemsModal from "./AddItemsModal";

const FilterCard = () => {
  const CardFilter = [
    { label: "Main Course", value: "main-course" },
    { label: "Appetizer", value: "appetizer" },
    { label: "Dessert", value: "dessert" },
    { label: "Beverage", value: "beverage" },
    { label: "Snack", value: "snack" },
  ];

  const DifficultyFilter = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
  ];

  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-4 p-5">
      <div className="grow md:max-w-[310px]">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="grow "
            placeholder="Cari Resep, bahan, atau chef..."
          />
        </label>
      </div>
      {/* <div className="divider lg:divider-horizontal p-0 m-0" /> */}
      <div>
        <form className="filter">
          <input className="btn btn-square" type="reset" value="×" />
          {CardFilter.map((filter) => (
            <input
              key={filter.value}
              className="btn m-1 md:m-0 grow"
              type="radio"
              name="frameworks"
              aria-label={filter.label}
            />
          ))}
        </form>
      </div>
      <div className="divider lg:divider-horizontal p-0 m-0" />
      <div>
        <form className="filter">
          <input className="btn btn-square" type="reset" value="×" />
          {DifficultyFilter.map((filter) => (
            <input
              key={filter.value}
              className="btn mx-1 md:m-0 grow"
              type="radio"
              name="frameworks"
              aria-label={filter.label}
            />
          ))}
        </form>
      </div>
      <div className="divider lg:divider-horizontal p-0 m-0" />

      <AddItemsModal />
    </div>
  );
};

export default FilterCard;
