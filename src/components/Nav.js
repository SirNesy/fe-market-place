import React, { useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User";

function Nav() {
  const {  setUser } = useContext(UserContext);


  return (
    <Menu>
      <Link id="home" className="menu-item" to={"/"}>
        <i className="fa-solid fa-right-to-bracket">Login</i>
      </Link>

      <Link id="about" className="menu-item" to={"/items"}>
        <i className="fa-solid fa-house"> Home</i>
      </Link>
      <Link className="menu-item--large" to={"/users/:username/basket"}>
        <i className="fa-sharp fa-solid fa-basket-shopping">My Basket</i>
      </Link>

      <Link className="menu-item--large" to={`/users/:username/orders`}>
        <i className="fa-sharp fa-solid fa-cart-shopping">Orders</i>
      </Link>
      <Link className="menu-item--small" onClick={() => setUser("")} to={"/"}>
        <i className="fa-solid fa-right-from-bracket">Logout</i>
      </Link>
    </Menu>
  );
}

export default Nav;
