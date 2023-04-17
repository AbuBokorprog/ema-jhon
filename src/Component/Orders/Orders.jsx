import React, { useState } from "react";
import OrderSm from "../Order-Summary/OrderSm";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItems/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);

  const handleDeleteCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handlerClearCart = () => {
    setCart([]);
    deleteShoppingCart();
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
        <OrderSm cart={cart} handlerClearCart={handlerClearCart}>
          <Link to="/orders">
            <button className="btn bg-green-500 flex justify-between">
              <span>Proceed Checkout</span>{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </OrderSm>
      </div>
    </div>
  );
};

export default Orders;
