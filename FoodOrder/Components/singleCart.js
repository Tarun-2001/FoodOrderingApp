import { useContext } from 'react';
import {RESTUARANT_IMAGE} from '../utils/constants'
import { UserContext } from '../utils/Context/UserContext';

const SingleCart = (props) => {
    const data = useContext(UserContext) 
    const {name,locality,avgRating,cloudinaryImageId} = props.resObj
   return (
    <div className="cart">
        <div className="cart-image">
      <img
        style={{ height: "200px", borderRadius: "15px",width:"190px" }}
        src={RESTUARANT_IMAGE+cloudinaryImageId}    
      />
      </div>
      <div className="cart-details"> 
        <div style={{width:"100%",fontSize:"20px"}}>
          <b>{name}</b>
        </div>
        <div>Rating : {avgRating} ⭐</div>
        <div>Location : {locality?locality:'NA'}</div>
      </div>
    </div>
  );
};

export default SingleCart;
