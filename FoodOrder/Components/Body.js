import React, { useState,useEffect } from "react";
import SingleCart from "./singleCart";
import { fetchSwigyApi } from "../utils/fetchApiData";
import ShimmerUi from "./ShimmerUI";

const BodyComponent = () => {
  const [restaurant, setrestaurant] = useState([]);
  const handleFilter = () => {
    const res = restaurant.filter((resObj) => resObj.info.avgRating > 4);
    setrestaurant(res);
  };
  useEffect(() => {
    handlePromise()
  }, []);

  const handlePromise = async ()=>{
    // const fetchRestaurents = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const res = await fetchSwigyApi() // Calling mock data due to cors issue..
    setrestaurant(res)
  }
  return restaurant.length===0?<ShimmerUi/>:(
    <div className="body-container">
      <div className="search">
        <button className="search-btn" onClick={handleFilter}>
          Rating Above 4
        </button>
      </div>
      <div className="cart-container">
        {restaurant.map((resObj) => (
          <SingleCart key={resObj.info.id} resObj={resObj.info} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
