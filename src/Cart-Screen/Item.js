import React, { useState } from "react";
import "./Item.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import pizza from "../resourses/pizza1.jpg";

const Item = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="cart-items">
      <div className="CartMaterialCard">
        <div className="image-item">
          <img
            className="cartImage"
            src={pizza}
            width="250"
            height="250"
            alt="cartImg"
          />
        </div>

        <div className="card-content1">
          <div>
            <h1>Double Cheese Margherita</h1>
          </div>
          <div>
            <h6>
              A classic delight loaded with extra 100% real mozzarella cheese
            </h6>
          </div>
          <div className="row1">
            <h6>₹ 355</h6>
            <h6>⭐ 5</h6>
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
      <div>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                Total Price:
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                ₹ 325
              </Typography>
              <Typography variant="body2">Proceed to checkout</Typography>
            </CardContent>
            <CardActions>
              <Button className="mb-2" variant="outlined">
                Checkout
              </Button>
            </CardActions>
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default Item;
