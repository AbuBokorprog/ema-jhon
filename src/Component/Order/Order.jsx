import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Order = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
          .then(res => res.json())
          .then(data => setProducts(data))
    }, [])

    const handlerAddCart = (product) =>{
        console.log(product);
    }
    return (
        <div className='grid grid-cols-5 gap-5 py-12'>
            <div className='col-span-4 grid grid-cols-3 gap-3'>
                {
                    products.map(product => (
                        <Product key={product.id} product={product}
                        handlerAddCart={handlerAddCart}></Product>
                    ))
                }
            </div>
            <div>
            <p>oder summary</p>
            </div>
        </div>
    );
};

export default Order;