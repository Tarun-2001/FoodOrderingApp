import React from "react";

// Higher order component 
const Recommeded = (SingleCart) => {
  return (props) => {
    return (
      <div>
        <label className='hoc-container'>Recommeded</label>
        <SingleCart {...props} />
      </div>
    );
  };
};

export default Recommeded;
