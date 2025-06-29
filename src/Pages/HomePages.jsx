import React from "react";
import MiniDashboard from "../Components/MiniDashboard";
import FilterCard from "../Components/FilterCard";

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
        <MiniDashboard />
        <FilterCard />
      </div>
    </div>
  );
};

export default HomePages;
