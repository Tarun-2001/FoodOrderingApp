import { RESTUARANT_IMAGE } from "../utils/Constants/constants";
import { description } from "../utils/MockData/mockData";
import { useDispatch } from "react-redux";
import { addtoCart, removeFromCart } from "../utils/Slice/CartSlice";
import { useContext, useState, useTransition } from "react";
import { CartContext } from "../utils/Context/CartContext";

const SingleMenuItem = ({ item, imageId }) => {
  const cartDispatch = useDispatch();
  const { cartObject, setCartObject } = useContext(CartContext);
  const addtoCartSlice = (item) => {
    const id = item.card?.info?.id;
    if (!cartObject[id]) {
      setCartObject({ ...cartObject, [id]: 1 });
      cartDispatch(addtoCart(item));
    } else setCartObject({ ...cartObject, [id]: cartObject[id] + 1 });
  };
  const removeFromCartSlice = (id) => {
    if (cartObject[id])
      setCartObject({ ...cartObject, [id]: cartObject[id] - 1 });
    if (cartObject[id] === 1) cartDispatch(removeFromCart(id));
  };
  return (
    <div key={item.card?.info?.id} className="list-items">
      <div>
        <div>
          <h3
            onClick={() => {
              cartDispatch(removeFromCart());
            }}
          >
            {item.card?.info?.name} - ₹{(item.card?.info?.price || 4900) / 100}{" "}
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
        <img className="list-items-image" src={RESTUARANT_IMAGE + imageId} />
        {
          cartObject[item.card?.info?.id] > 0 ? (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button
                onClick={() => {
                  addtoCartSlice(item);
                }}
              >
                <b>+</b>
              </button>
              <h5>
                {cartObject[item.card?.info?.id] > 0
                  ? cartObject[item.card?.info?.id]
                  : null}
              </h5>
              <button
                onClick={() => {
                  removeFromCartSlice(item.card?.info?.id);
                }}
              >
                <b>-</b>
              </button>
            </div>
          ) : (
            <button
              style={{ display: "flex", justifyContent: "space-between" ,width:"100%"}}
              type="button"
              className="btn btn-success"
              onClick={() => {
                addtoCartSlice(item);
              }}
            >
              Add Cart
            </button>
          )
          // null
        }
      </div>
    </div>
  );
};

export default SingleMenuItem;
