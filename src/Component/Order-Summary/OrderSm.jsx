import React from 'react';
import Cart from '../Cart/Cart';

const OrderSm = (props) => {
    const [cart] = [props.cart]
    //console.log(cart);
    let total = 0;
    let totalShipping= 0;
    for(let product of cart){
        total += product.price;
        totalShipping += product.shipping
        //console.log(product);
    }
    const tax = total * 5 /100
    const grandTotal = total + totalShipping + tax
    //console.log(grandTotal);
    return (
        <div className='sticky'>
            <p className='text-xl font-semibold py-5 text-center'>Order Summary</p>
            <p className='font-medium pl-2 pb-5'>Selected items: {cart.length}</p>
            <p className='pl-2 pb-3'>Total Price:{total}</p>
            <p className='pl-2 pb-3'>Total Shipping Charge:{totalShipping} </p>
            <p className='pl-2 pb-3'>Tax:{tax.toFixed(2)}</p>
            <p className='pl-2 pb-3 font-medium'>Grand Total:{grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default OrderSm;