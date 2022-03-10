import React from "react";
import "./NavBar.css";
import cartIcon from "../resourses/cart.png";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar-title">Tom's Pizzas</div>
      <div className="navbar-rightSection">
        <button type="button" class="btn btn-light">
          Filter
        </button>
        <a href="/cart">
          <img className="NavBar-CartIcon" src={cartIcon} alt="cartIcon" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
