import React, { useState, useEffect } from "react";
import SingleCart from "./singleCart";
import { fetchSwigyApi } from "../utils/fetchApiData";
import ShimmerUi from "./ShimmerUI";

const BodyComponent = () => {
  const [restaurant, setrestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");

  const handleFilter = () => {
    const res = restaurant.filter((resObj) => resObj.info.avgRating > 4);
    setFilterRestaurant(res);
  };

  const clearFilters = () => {
    setFilterRestaurant(restaurant);
  };

  const handleSearch = ()=>{
    const searchResult = restaurant.filter((resObj)=>resObj.info.name.toLowerCase().includes(searchRestaurant.toLowerCase()))
    setFilterRestaurant(searchResult)
  }
  useEffect(() => {
    handlePromise();
  }, []);
  const handlePromise = async () => {
    // const fetchRestaurents = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    // const res = await fetchRestaurents.json()
    const res = await fetchSwigyApi(); // Calling mock data due to cors issue..
    setrestaurant(res);
    setFilterRestaurant(res);
  };
  return restaurant.length === 0 ? (
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
        <button className="filter-btn" onClick={handleSearch}>Search Restaurant</button>
        <button className="filter-btn" onClick={handleFilter}>
          Rating Above 4
        </button>
        <button className="filter-btn" onClick={clearFilters}>
          Clear All Filters
        </button>
      </div>
      <div className="cart-container">
        {filterRestaurant.map((resObj) => (
          <SingleCart key={resObj.info.id} resObj={resObj.info} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;