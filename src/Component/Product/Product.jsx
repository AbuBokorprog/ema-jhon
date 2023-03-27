import React from 'react';

const Product = (props) => {
    console.log();
    const {img, name, seller, price, ratings} = props.product
    return (
        <div className=''>
            <div className="card card-compact w-full h-full bg-base-100 shadow-xl">
            <img className='p-3 rounded-3xl image-full' src={img} alt="product image" />
  <div className="card-body">
    <h6 className="card-title">{name}</h6>
    <p className=' font-semibold '>Price: ${price}</p>
    <p className=' font-medium '>Manufactured: {seller}</p>
    <p className=' font-medium '>Ratings: {ratings} star</p>
    <div className="card-actions justify-center">
      <button className="btn w-full btn-warning hover:bg-orange-500">Buy Now <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
</span> </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;