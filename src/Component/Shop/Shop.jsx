import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderSm from '../Order-Summary/OrderSm';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])



    useEffect(() => {
        fetch('products.json')
          .then(res => res.json())
          .then(data => setProducts(data))
    }, [])

    useEffect( ()=>{
        const storedCard = getShoppingCart();
        const saveCart = []
        // step 1S
        if(products.length){
            for(const id in storedCard){
                // step 2
                const addedProduct = products.find((product) => product.id === id);

                const quantity = storedCard[id];
                addedProduct.quantity = quantity
                saveCart.push(addedProduct);
                //console.log(addedProduct);
            }
        }
        setCart(saveCart)
    } , [products])



    const handlerAddCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
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

export default Shop;