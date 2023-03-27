import React from 'react';
import logo from "../../assets/images/Logo.svg"

const Header = () => {
    return (
        <div className='bg-black flex justify-between py-3 px-20 items-center'>
            <img src={logo} alt="" />
            <div className='text-white'>
                <a className='px-5' href="/order">Order</a>
                <a className='px-5' href="/order-review">Order Review</a>
                <a className='px-5' href="/inventory">Manage Inventory</a>
                <a className='px-5' href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;