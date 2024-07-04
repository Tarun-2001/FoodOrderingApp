import React from "react";
import SingleCart from "./singleCart";
import { restaurantData } from "../utils/mockData";

const BodyComponent = () => {
  return (
    <div className="body-container">
      <div className="cart-container">
        {restaurantData.restaurants.map((resObj) => (
          <SingleCart key={resObj.info.id} resObj={resObj.info} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
