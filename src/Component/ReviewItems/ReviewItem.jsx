import React from "react";

const ReviewItem = (props) => {
  const { id, name, img, quantity, price } = props.cart;
  const handleDeleteCart = props.handleDeleteCart;
  return (
    <div className="grid grid-cols-4 font-medium gap-5 items-center w-2/3 m-4 py-2 h-32 px-1 border border-spacing-1 border-indigo-700">
      <img className="w-24 h-28 rounded-lg" src={img} alt="" />
      <div className="col-span-2 w-48">
        <h3>{name}</h3>
        <h4>
          Price: <span className="text-orange-400">{price}</span>
        </h4>
        <p>
          Shipping Charge: <span className="text-orange-400">{5}</span>
        </p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="text-red-500 bg-red-300 text-center rounded-full mx-auto">
        <button onClick={() => handleDeleteCart(id)} className="">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
