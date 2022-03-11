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
  const [vegProducts, setVegProducts] = useState([]);

  const [nonVegProducts, setNonVegProducts] = useState([]);
  const [vegCat, setVegCat] = useState("allData");
  console.log("nonVegProducts", nonVegProducts);
  const [checkedValues, setCheckedValues] = useState([]);
  const [above3, setAbove3] = useState([]);
  const [above4, setAbove4] = useState([]);

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
  let vegFilteredProducts = responseData.map((item) => {
    if (item.isVeg === true) {
      vegProducts.push(item);
    }
  });
  let vProducts = [...new Set(vegProducts)];

  let nonVegFilteredProducts = responseData.map((item) => {
    if (item.isVeg === false) {
      nonVegProducts.push(item);
    }
  });

  let nvProducts = [...new Set(nonVegProducts)];

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Category" styles={{ backgroundImage: { backgroundImg } }}>
      <OutlinedCard {...cvProps} />

      {loading && (
        <img src={progressindicator} style={{ width: 100, height: 100 }} />
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
