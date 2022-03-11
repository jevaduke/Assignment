import React, { useState } from "react";
import "./Item.css";

import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const Item = ({ name, description, price, isVeg, rating, img_url }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="cart-items">
      <div className="CartMaterialCard">
        <div className="image-item">
          <img
            className="cartImage"
            src={img_url}
            width="250"
            height="250"
            alt="cartImg"
          />
        </div>

        <div className="card-content1">
          <div>
            <h1>{name}</h1>
          </div>
          <div>
            <h6>{description}</h6>
          </div>
          <div className="row1">
            <h6>₹ {price}</h6>
            <h6>⭐ {rating}</h6>
            <div className="row1-c">
              <Button
                className="mb-1"
                variant="contained"
                onClick={() => setCount(count - 1)}
              >
                -1
              </Button>
              <div className="countVar">
                <h4>{count}</h4>
              </div>

              <Button
                className="mb-1"
                variant="contained"
                onClick={() => setCount(count + 1)}
              >
                +1
              </Button>
            </div>
          </div>
          <CardActions>
            <Button className="mb-2" variant="contained">
              Remove from cart
            </Button>
          </CardActions>
        </div>
      </div>
    </div>
  );
};

export default Item;
