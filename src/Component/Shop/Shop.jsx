import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import OrderSm from "../Order-Summary/OrderSm";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCard = getShoppingCart();
    const saveCart = [];
    // step 1S
    for (const id in storedCard) {
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        const quantity = storedCard[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
        //console.log(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  const handlerAddCart = (product) => {
    let newCart = [];
    //const newCart = [...cart, product]
    const exist = cart.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exist];
    }
    setCart(newCart);
    addToDb(product.id);
  };

  const handlerClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-8 container-lg mx-12">
      <div className="col-span-4 grid lg:grid-cols-3 md:grid-cols-1 mt-10 gap-3">
        {products.slice(0, 10).map((product) => (
          <Product
            key={product.id}
            product={product}
            handlerAddCart={handlerAddCart}
          ></Product>
        ))}
      </div>
      <div className=" h-1/5 pt-5 sticky top-0 bg-warning rounded-xl sm:justify-content-center">
        <OrderSm cart={cart} handlerClearCart={handlerClearCart}>
          <Link to="/orders">
            <button className="btn bg-green-500 flex justify-between">
              <span>Review Order</span>{" "}
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

export default Shop;
