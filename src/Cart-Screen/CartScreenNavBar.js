import React from "react";
import "./CartScreenNavBar.css";
import backIcon from "../resourses/arrow.png";

const CartScreenNavBar = () => {
  return (
    <div
      className="CartScreen"
      
    >
      <div className="NavBar">
        <a href="/">
          <img className="NavBar-CartIcon" src={backIcon} alt="backIcon" />
        </a>
        <div className="NavBar-title">Your Cart</div>
      </div>
    </div>
  );
};

export default CartScreenNavBar;
