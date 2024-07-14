import React, { useState } from "react";
import MenuItems from "./MenuItems";

const RestaurantMenu = (props) => {

  const name = props?.data?.card?.card?.title
  return (
    <div>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={()=>{props.setShowIndex()}}>
            <h3>{name} ({props?.data?.card?.card?.itemCards?.length})</h3>
            <h4>🔻</h4>
          </div>
          <div className="accordian-body">
            {props.showItems&&<MenuItems items ={props?.data?.card?.card?.itemCards} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
