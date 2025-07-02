import React from "react";
import MiniDashboard from "../Components/MiniDashboard";
import FilterCard from "../Components/FilterCard";
import MobileFilter from "../Components/Responsive/MobileFilter";
import ItemCard from "../Components/ItemCard";

const HomePages = () => {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-4xl font-bold">Welcome to Recipes Books!</h1>
        <p className="text-gray-500 opacity-95">
          Find your Favourites Recipes here.
        </p>
      </div>

      {/* dashboard start here */}
      <div>
        <div className="hidden md:block">
          <MiniDashboard />
        </div>
        <FilterCard />
      </div>

      {/* card items will be shown here */}
      <ItemCard />
    </div>
  );
};

export default HomePages;
