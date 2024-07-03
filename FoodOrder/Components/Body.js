import React from 'react';
import SingleCart from './singleCart';

const BodyComponent = () => {
  return (
    <div className='body-container'>
      <div className='cart-container'>
        <SingleCart/>
        <SingleCart/>
        <SingleCart/>
        <SingleCart/>
        <SingleCart/>
        <SingleCart/>
        <SingleCart/>
        <SingleCart/>
      </div>
    </div>
  );
}

export default BodyComponent;
