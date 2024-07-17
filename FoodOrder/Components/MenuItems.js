import React from "react";
import { RESTUARANT_IMAGE } from "../utils/Constants/constants";
import { description } from "../utils/MockData/mockData";
import { useDispatch } from "react-redux";
import { addtoCart, removeFromCart } from "../utils/Slice/CartSlice";
const MenuItems = ({ items }) => {
  const cartDispatch = useDispatch();
  const addtoCartSlice = (item) => {
    cartDispatch(addtoCart(item));
  };
  const removeFromCartSlice = (id) => {
    cartDispatch(removeFromCart(id));
  };
  return (
    <div>
      {items.map((item) => {
        const imageId =
          item.card.info.imageId || "e6e9177035050d7a48393bb4edf30d61";
        return (
          <div key={item.card?.info?.id} className="list-items">
            <div>
              <div>
                <h3
                  onClick={() => {
                    cartDispatch(removeFromCart());
                  }}
                >
                  {item.card?.info?.name} - ₹
                  {(item.card?.info?.price || 4900) / 100}{" "}
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
                src={RESTUARANT_IMAGE + imageId}
              />
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <button
                  onClick={() => {
                    addtoCartSlice(item);
                  }}
                >
                  <b>+</b>
                </button>
                <button
                  onClick={() => {
                    removeFromCartSlice(item.card?.info?.id);
                  }}
                >
                  <b>-</b>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
