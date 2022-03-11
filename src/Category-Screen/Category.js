import React, { useEffect, useState } from "react";
import "./Category.css";
import Axios from "axios";
import backgroundImg from "../resourses/pizza2.jpg";
import MaterialCard from "../Card/MaterialCard";
import progressindicator from "../resourses/Spinner.svg";
import OutlinedCard from "../Card/OutlinedCard";

const Category = () => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const vegProducts = [];

  const nonVegProducts = [];
  const [vegCat, setVegCat] = useState("allData");
  console.log("nonVegProducts", nonVegProducts);
  const [checkedValues, setCheckedValues] = useState([]);

  const cvProps = {
    responseData,
    checkedValues,
    setCheckedValues,
    vegCat,
    setVegCat,
  };

  // FETCHING JSON
  const getData = async () => {
    setLoading(true);
    const { data } = await Axios.get(
      "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
    );

    setResponseData(data);
    localStorage.setItem("cartArray", JSON.stringify(data));
    setLoading(false);
  };
  responseData.map((item) => {
    if (item.isVeg === true) {
      return vegProducts.push(item);
    } else {
      return 0;
    }
  });
  let vProducts = [...new Set(vegProducts)];

  responseData.map((item) => {
    if (item.isVeg === false) {
      return nonVegProducts.push(item);
    } else {
      return 0;
    }
  });

  let nvProducts = [...new Set(nonVegProducts)];

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Category" styles={{ backgroundImage: { backgroundImg } }}>
      <OutlinedCard {...cvProps} />
      <br />
      {loading && (
        <img
          src={progressindicator}
          style={{ width: 100, height: 100 }}
          alt="progressImg"
        />
      )}
      {!loading && (
        <div className="container">
          <div className="row row-cols-auto">
            {vegCat === "allData" &&
              responseData.map((item) => {
                return (
                  <MaterialCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    isVeg={item.isVeg}
                    rating={item.rating}
                    price={item.price}
                    img_url={item.img_url}
                    size={item.size}
                    toppings={item.toppings}
                    id={item.id}
                  />
                );
              })}
            {vegCat === "veg" &&
              vProducts.map((item) => {
                return (
                  <MaterialCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    isVeg={item.isVeg}
                    rating={item.rating}
                    price={item.price}
                    img_url={item.img_url}
                    size={item.size}
                    toppings={item.toppings}
                    id={item.id}
                  />
                );
              })}
            {vegCat === "non_veg" &&
              nvProducts.map((item) => {
                return (
                  <MaterialCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    isVeg={item.isVeg}
                    rating={item.rating}
                    price={item.price}
                    img_url={item.img_url}
                    size={item.size}
                    toppings={item.toppings}
                    id={item.id}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
