import { useDispatch, useSelector } from "react-redux";
import { RESTUARANT_IMAGE } from "../utils/Constants/constants";
import MenuItems from "./MenuItems";
import SingleMenuItem from "./SingleMenuItem";
import { current } from "@reduxjs/toolkit";

const Cart = (props) => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="card-container">
      <div className="card-title">{cartItems.length > 0?<h1>Hurray 🥳🥂 !!!! Lets Go.......</h1>:<h1>Cart is Epmty Please buy something...🙂</h1>}</div>
      <div>
        {cartItems.length > 0 && (
          <div className="card-items">
            {cartItems.map((cartItem) => {
              const imageId =
                cartItem.card.info.imageId ||
                "e6e9177035050d7a48393bb4edf30d61";
              return (
                <SingleMenuItem
                  key={cartItem.card?.info?.id}
                  item={cartItem}
                  imageId={imageId}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
