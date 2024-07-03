const SingleCart = (props) => {
  return (
    <div className="cart">
        <div className="cart-image">
      <img
        style={{ height: "200px", borderRadius: "15px", width:"200px" }}
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
      />
      </div>
      <div className="cart-details"> 
        <div style={{width:"100%",fontSize:"30px"}}>
          <b>Pizza hurt</b>
        </div>
        <div>Rating : 4.5 ⭐</div>
        <div>Location : Attapur</div>
        <div>cuisines</div>
      </div>
    </div>
  );
};

export default SingleCart;
