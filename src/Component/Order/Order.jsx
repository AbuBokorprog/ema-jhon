import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import OrderSm from '../Order-Summary/OrderSm';
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
            <div className=' h-1/5 pt-5 bg-warning rounded-xl sm:justify-content-center'>
                <OrderSm cart={cart}></OrderSm>
            </div>
        </div>
    );
};

export default Order;