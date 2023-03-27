import React, { useState } from "react";

const Cart = (props) => {
  console.log(props.item);


  return (
    <div>
      <p>Price: {props.item.price}</p>
    </div>
  );
};

export default Cart;
