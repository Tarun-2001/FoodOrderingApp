import React, { useState, useEffect, useContext } from "react";
import SingleCart from "./singleCart";
import ShimmerUi from "./ShimmerUI";
import { Link } from "react-router-dom";
import Recommeded from "./Recommeded";
import { RestaurantApi } from "../utils/Context/RestaurantsApiContext";

const BodyComponent = () => {
  const { restaurants } = useContext(RestaurantApi);
  const [filterRestaurant, setFilterRestaurant] = useState(restaurants);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const RecommendedRestaurant = Recommeded(SingleCart);
  useEffect(() => {
    setFilterRestaurant(restaurants);
  }, [restaurants]);

  const handleFilter = () => {
    const res = restaurants.filter((resObj) => resObj.info.avgRating > 4.2);
    setFilterRestaurant(res);
  };

  const clearFilters = async () => {
    setFilterRestaurant(restaurants);
    setSearchRestaurant("");
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
          Recommend Restaurants
        </button>
        <button className="filter-btn" onClick={clearFilters}>
          Clear All Filters
        </button>
      </div>
      <div className="cart-container">
        {filterRestaurant.map((resObj) => (
          <Link
            className="cart-container"
            to={`/restaurant/${resObj.info.id}`}
            key={resObj.info.id}
          >
            {
              // Higher Order component - RecommendedRestaurant
              resObj.info.avgRating > 4.2 ? (
                <RecommendedRestaurant resObj={resObj.info} />
              ) : (
                <SingleCart resObj={resObj.info} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
