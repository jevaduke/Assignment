import React from "react";
import Category from "../Category-Screen/Category";
import NavBar from "../NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <div className="Components">
        <NavBar />
        <Category />
      </div>
    </div>
  );
};

export default Home;
