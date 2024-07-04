import {RESTUARANT_IMAGE} from '../utils/constants'

const SingleCart = (props) => {
    const {name,locality,avgRating,cloudinaryImageId} = props.resObj
   return (
    <div className="cart">
        <div className="cart-image">
      <img
        style={{ height: "200px", borderRadius: "15px", width:"200px" }}
        src={RESTUARANT_IMAGE+cloudinaryImageId}    
      />
      </div>
      <div className="cart-details"> 
        <div style={{width:"100%",fontSize:"20px"}}>
          <b>{name}</b>
        </div>
        <div>Rating : {avgRating} ⭐</div>
        <div>Location : {locality}</div>
      </div>
    </div>
  );
};

export default SingleCart;
