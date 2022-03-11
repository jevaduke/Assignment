import React from "react";
import CartScreenNavBar from "./CartScreenNavBar";
import Item from "./Item";

export const cart = [];
const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
const cartArray = JSON.parse(localStorage.getItem("cartArray"));
console.log("CP", cartProducts);
console.log("CA", cartArray);

// cartArray.map((ca) => {
//   cartProducts.map((cp) => {
//     if (ca.id === cp) {
//       console.log("CAID", ca.id);
//     }
//   });
// });

export const Cart = () => {
  console.log(cart);
  return (
    <div className="Cart">
      <CartScreenNavBar />
      <Item />
    </div>
  );
};
