import React from "react";
import "./App.css";
import Home from "./HomePage/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart } from "./Cart-Screen/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
