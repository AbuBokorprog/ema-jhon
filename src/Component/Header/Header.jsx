import React from "react";
import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black flex md:flex-col-1 lg:flex md:justify-center lg:justify-between py-3 px-20 items-center">
      <img src={logo} alt="" />
      <div className="text-white">
        <Link className="px-5" to="/">
          Shop
        </Link>
        <Link className="px-5" to="/orders">
          Orders
        </Link>
        <Link className="px-5" to="/inventory">
          Manage Inventory
        </Link>
        <Link className="px-5" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
