import React, { useContext } from "react";
import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const logOutHandler = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

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
        <Link className="px-5" to="/register">
          Register
        </Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={logOutHandler} className="btn btn-sm">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-sm">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
