import React from "react";
import { RESTUARANT_IMAGE } from "../utils/Constants/constants";
import { description } from "../utils/MockData/mockData";
import { useDispatch } from "react-redux";
import { addtoCart, removeFromCart } from "../utils/Slice/CartSlice";
import SingleMenuItem from "./SingleMenuItem";
const MenuItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const imageId =
          item.card.info.imageId || "e6e9177035050d7a48393bb4edf30d61";
        return <SingleMenuItem key = {item.card?.info?.id} item={item} imageId={imageId} />;
      })}
    </div>
  );
};

export default MenuItems;
