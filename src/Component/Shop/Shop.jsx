import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import OrderSm from "../Order-Summary/OrderSm";
import Product from "../Product/Product";

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
      <div className=" h-1/5 pt-5 bg-warning rounded-xl sm:justify-content-center">
        <OrderSm cart={cart}></OrderSm>
      </div>
    </div>
  );
};

export default Shop;
