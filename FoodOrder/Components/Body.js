import React, { useState, useEffect } from "react";
import SingleCart from "./singleCart";
import ShimmerUi from "./ShimmerUI";
import { useRestaurants } from "../utils/CustomHooks/useRestaurants";
import { Link } from "react-router-dom";
import Recommeded from "./Recommeded";

const BodyComponent = () => {
  const restaurants = useRestaurants();
  const [filterRestaurant, setFilterRestaurant] = useState(restaurants);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const RecommendedRestaurant = Recommeded(SingleCart)
  useEffect(() => {
    setFilterRestaurant(restaurants);
  }, [restaurants]);

  const handleFilter = () => {
    const res = restaurants.filter((resObj) => resObj.info.avgRating > 4);
    setFilterRestaurant(res);
  };

  const clearFilters = async () => {
    setFilterRestaurant(restaurants);
  };

  const handleSearch = () => {
    const searchResult = restaurants.filter((resObj) =>
      resObj.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
    );
    setFilterRestaurant(searchResult);
  };

  return restaurants.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body-container">
      <div className="filter">
        <input
          className="search-box"
          type="text"
          value={searchRestaurant}
          placeholder="Search Restaurant"
          onChange={(e) => {
            setSearchRestaurant(e.target.value);
          }}
        />
        <button className="filter-btn" onClick={handleSearch}>
          Search Restaurant
        </button>
        <button className="filter-btn" onClick={handleFilter}>
          Rating Above 4
        </button>
        <button className="filter-btn" onClick={clearFilters}>
          Clear All Filters
        </button>
      </div>
      <div className="cart-container">
        {filterRestaurant.map((resObj) => (
          <Link className="cart-container" to={`/restaurant/${resObj.info.id}`} key={resObj.info.id}>
            {
              // Higher Order component - RecommendedRestaurant
              resObj.info.avgRating>4.2?
                <RecommendedRestaurant resObj={resObj.info} />:<SingleCart resObj={resObj.info}/>
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
