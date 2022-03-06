import React from "react";
import Category from "../Category-Screen/Category";
import NavBar from "../NavBar/NavBar";
import backgroundImg from "../resourses/pizza2.jpg";

const Home = () => {
 
  return (
    <div
      style={{
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <div className="Components">
        <NavBar />
        <Category />
      </div>
    </div>
  );
};

export default Home;
