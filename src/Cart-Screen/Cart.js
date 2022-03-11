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
let total = 0;

cartArray.map((ca) =>
  cartProducts.map((cp) => {
    if (ca.id === cp) {
      total = total + ca.price;
      console.log("CAID", ca.id);
      return cart.push(ca);
    } else {
      return 0;
    }
  })
);

export const Cart = () => {
  // const [total, setTotal] = useState(0);
  // cart.map((item) => {
  //   return setTotal(total + item.price);
  // });
  console.log(cart);
  return (
    <div className="Cart">
      <CartScreenNavBar />
      <div className="content">
        <div>
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
        </div>

        <div className="Category">
          <TotalCalc total={total} />
        </div>
      </div>
    </div>
  );
};
