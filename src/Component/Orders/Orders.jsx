import React, { useState } from "react";
import OrderSm from "../Order-Summary/OrderSm";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItems/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);

  const handleDeleteCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-8 container-lg mx-12">
      <div className=" col-span-4 mt-10">
        {cart.map((c) => (
          <ReviewItem
            cart={c}
            key={c.id}
            handleDeleteCart={handleDeleteCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="pt-5 bg-warning rounded-xl sm:justify-content-center">
        <OrderSm cart={cart}></OrderSm>
      </div>
    </div>
  );
};

export default Orders;
