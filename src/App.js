import React from "react";
import "./App.css";
import CartScreen from "./Cart-Screen/CartScreen";
import Home from "./HomePage/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
 
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<CartScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
