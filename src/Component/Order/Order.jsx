import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Order = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
          .then(res => res.json())
          .then(data => setProducts(data))
    }, [])

    const handlerAddCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='grid lg:grid-cols-5 md:grid-cols-1 gap-8 container-lg mx-12'>
            <div className='col-span-4 grid lg:grid-cols-3 md:grid-cols-1 mt-10 gap-3'>
                {
                    products.slice(0,10).map(product => (
                        <Product key={product.id} product={product}
                        handlerAddCart={handlerAddCart}></Product>
                    ))
                }
            </div>
            <div className=' text-center bg-warning rounded-xl mt-2 sm:justify-content-center'>
            <p className='text-xl font-semibold'>Order Summary</p>
            <p className='font-medium'>Total Cart items: {cart.length}</p>
            {
                cart.map((item) => <Cart key={item.id} item={item}></Cart>)
            }
            </div>
        </div>
    );
};

export default Order;