import React, { useState } from "react";
import "./Item.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "react-responsive";

const Item = ({ name, description, price, isVeg, rating, img_url }) => {
  const [count, setCount] = useState(0);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div>
      {isTabletOrMobile && (
        <div className="Cart_MaterialCard">
          <div className="MaterialCard">
            <Card sx={{ maxWidth: 550 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="100"
                image={img_url}
              />
              <CardContent>
                <div className="row row-cols-2">
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <div className="ml-2">
                    {isVeg && <span className="badge bg-success">Veg</span>}
                    {!isVeg && <span className="badge bg-danger">Non-Veg</span>}
                  </div>
                </div>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>

              <div className="row row-cols-2">
                <h3 className="mt-2">₹ {price}</h3>{" "}
                <h3 className="mt-2">⭐ {rating}</h3>
              </div>

              <div className="RemoveButton">
                <Button className="mb-2" variant="outlined">
                  Remove From Cart
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}
      {isDesktopOrLaptop && (
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
      )}
    </div>
  );
};

export default Item;
