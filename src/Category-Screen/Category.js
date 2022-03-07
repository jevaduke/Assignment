import React from "react";
import "./Category.css";
import backgroundImg from "../resourses/pizza2.jpg";
import MaterialCard from "../Card/MaterialCard";

const Category = () => {
  return (
    <div className="Category" styles={{ backgroundImage: { backgroundImg } }}>
      <MaterialCard />
    </div>
  );
};

export default Category;
