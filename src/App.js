import React from "react";
import "./App.css";
import Home from "./HomePage/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart } from "./Cart-Screen/Cart";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
