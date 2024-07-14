import React from "react";
import { RESTUARANT_IMAGE } from "../utils/constants";
import { description } from "../utils/mockData";
const MenuItems = ({ items }) => {
    
  return (
    <div>
      {items.map((item) => {
        const imageId = item.card.info.imageId||'e6e9177035050d7a48393bb4edf30d61'
        return (
          <div key={item.card?.info?.id} className="list-items">
            <div>
              <div>
                <h3>
                  {item.card?.info?.name} - ₹{item.card?.info?.price / 100}{" "}
                </h3>
              </div>
              <div>
                <p>
                  {item.card?.info?.description === "Category Item"
                    ? description
                    : item.card?.info?.description}
                </p>
              </div>
            </div>
            <div>
              <img
                className="list-items-image"
                src={RESTUARANT_IMAGE +imageId }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
