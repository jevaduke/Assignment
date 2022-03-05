import React from "react";
import "./CartScreen.css";
import backgroundImg from "../resourses/pizza1.jpg";
import backIcon from "../resourses/arrow.png";

const CartScreen = () => {
  return (
    <div
      className="CartScreen"
      style={{
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <div className="NavBar">
        <img className="NavBar-CartIcon" src={backIcon} />
        <div className="NavBar-title">Your Cart</div>
      </div>
    </div>
  );
};

export default CartScreen;
