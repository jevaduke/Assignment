import React from "react";
import CartScreenNavBar from "./CartScreenNavBar";
import Item from "./Item";

export const Cart = () => {
  return (
    <div className="Cart">
      <CartScreenNavBar />
      <Item />
    </div>
  );
};
