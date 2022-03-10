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
    setLoading(false);
  };
  let vegFilteredProducts = responseData.map((item) => {
    // console.log(item.isVeg);

    if (item.isVeg === true) {
      // console.log("I am veg");
      vegProducts.push(item);
    }
    // return item;
  });
  let vProducts = [...new Set(vegProducts)];
  // console.log("v-products", vProducts);

  let nonVegFilteredProducts = responseData.map((item) => {
    // console.log(item.isVeg);

    if (item.isVeg === false) {
      // console.log("I am non-veg");
      nonVegProducts.push(item);
    }
    // return item;
  });

  let nvProducts = [...new Set(nonVegProducts)];
  // console.log("nv-products", nvProducts);
  // const productsFilter = (responseData) => {
  //   let vegFilter = responseData.map((item) => {
  //     console.log(item.isVeg);
  //   });
  // };
  useEffect(() => {
    getData();
    // productsFilter();
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
