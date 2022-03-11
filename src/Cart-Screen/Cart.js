import React from "react";
import CartScreenNavBar from "./CartScreenNavBar";
import Item from "./Item";
import TotalCalc from "./TotalCalc";
import "./Cart.css";

export const cart = [];
const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
const cartArray = JSON.parse(localStorage.getItem("cartArray"));
console.log("CP", cartProducts);
console.log("CA", cartArray);

const cartArr = cartArray.map((ca) => {
  cartProducts.map((cp) => {
    if (ca.id === cp) {
      console.log("CAID", ca.id);
      cart.push(ca);
    }
  });
});

export const Cart = () => {
  console.log(cart);
  return (
    <div className="Cart">
      <CartScreenNavBar />
      <div className="row row-cols-auto">
        {cart.length !== 0 &&
          cart.map((item) => {
            return (
              <Item
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                isVeg={item.isVeg}
                rating={item.rating}
                img_url={item.img_url}
              />
            );
          })}
        <TotalCalc />
      </div>
    </div>
  );
};
