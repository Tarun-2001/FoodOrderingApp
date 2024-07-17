import { useDispatch, useSelector } from "react-redux";
import { RESTUARANT_IMAGE } from "../utils/Constants/constants";

const Cart = (props) => {
  const cartItems = useSelector((store) => store.cart.items);

  
  return (
    <div >
      <div className="row" >
          {cartItems.map((cartItem) => {
            const imageId = cartItem.card?.info?.imageId || "e6e9177035050d7a48393bb4edf30d61";
              return (
                <div className="col-6 col-md-3">
                <div className="card" style={{ width: "18rem" ,margin:"20px auto", marginLeft:"auto"}} key={cartItem.card.info.id} >
                  <img
                    src={RESTUARANT_IMAGE + imageId}
                    className="card-img-top"
                    style={{height:"200px"}}
                    alt={cartItem.card.info.name}
                  />
                  <div className="card-body" style={{height:"150px"}}>
                    <h5 className="card-title">{cartItem.card.info.name}</h5>
                    <p className="card-text">
                      {cartItem.card.info.description?.length>100?cartItem.card.info.description.slice(0,100)+'...':cartItem.card.info.description}
                    </p>
                  </div>
              </div>
                </div>
              );
            })}
      </div>  
    </div>
  );
};

export default Cart;
