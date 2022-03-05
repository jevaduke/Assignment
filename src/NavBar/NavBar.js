import React, { Fragment } from "react";
import "./NavBar.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import cartIcon from "../resourses/cart.png";
import CartScreen from "../Cart-Screen/CartScreen";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar-title">Tom's Pizzas</div>
      <Router>
        <a href="/cart">
          <img className="NavBar-CartIcon" src={cartIcon} alt="cartIcon" />
        </a>
        {/* <Route path="/cart" component={CartScreen} /> */}
      </Router>
    </div>
  );
};

export default NavBar;
