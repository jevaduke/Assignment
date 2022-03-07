import React, { useEffect, useState } from "react";
import "./Category.css";
import Axios from "axios";
import backgroundImg from "../resourses/pizza2.jpg";
import MaterialCard from "../Card/MaterialCard";

const Category = () => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);
  // FETCHING JSON
  const getData = async () => {
    setLoading(true);
    const { data } = await Axios.get(
      "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
    );
    console.log(data);
    setResponseData(data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   const getResponse = async () => {
  //     setLoading(true);
  //     try {
  //       const result = await Axios.get(
  //         "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
  //       );
  //       console.log(result);
  //       setResponseData(result.data);
  //       console.log(setResponseData);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   getResponse();
  // }, []);
  // console.log(responseData);

  return (
    <div className="Category" styles={{ backgroundImage: { backgroundImg } }}>
      {loading && (
        <div>
          <h1>loading</h1>
        </div>
      )}
      {!loading && (
        <div>
          {responseData.map((item) => {
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
      )}
    </div>
  );
};

export default Category;
