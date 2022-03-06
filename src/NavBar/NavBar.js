import React from "react";
import "./NavBar.css";
import cartIcon from "../resourses/cart.png";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar-title">Tom's Pizzas</div>
      <a href="/cart">
        <img className="NavBar-CartIcon" src={cartIcon} alt="cartIcon" />
      </a>
    </div>
  );
};

export default NavBar;
