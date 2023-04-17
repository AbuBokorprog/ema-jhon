import React, { Children } from "react";

const OrderSm = (props) => {
  const [cart] = [props.cart];
  const handlerClearCart = props.handlerClearCart;
  const children = props.children;
  console.log(children);
  //console.log(cart);
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (let product of cart) {
    total = total + product.price * product.quantity;
    totalShipping += product.shipping * product.quantity;
    quantity += product.quantity;
    //console.log(quantity);
  }
  const tax = (total * 5) / 100;
  const grandTotal = total + totalShipping + tax;
  //console.log(grandTotal);
  return (
    <div className="sticky">
      <p className="text-xl font-semibold py-5 text-center">Order Summary</p>
      <p className="font-medium pl-2 pb-5">Selected items: {quantity}</p>
      <p className="pl-2 pb-3">Total Price:{total}</p>
      <p className="pl-2 pb-3">Total Shipping Charge:{totalShipping} </p>
      <p className="pl-2 pb-3">Tax:{tax.toFixed(2)}</p>
      <p className="pl-2 pb-3 font-medium">
        Grand Total:{grandTotal.toFixed(2)}
      </p>

      <div className="">
        <button onClick={handlerClearCart} className="btn bg-orange-600 my-5">
          <span>Clear Card</span>{" "}
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </span>
        </button>
        <div className="mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default OrderSm;
