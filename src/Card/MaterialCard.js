import React from "react";
import "./MaterialCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { cart } from "../Cart-Screen/Cart";

const MaterialCard = ({
  id,
  name,
  description,
  isVeg,
  rating,
  price,
  img_url,
}) => {
  const addToCart = (id) => {
    console.log(id);
    cart.push(id);
    localStorage.setItem("cartProducts", JSON.stringify(cart));
    console.log(cart);
  };
  return (
    <div className="MaterialCard">
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="160"
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
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Choose Size
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <ul className="bulletIcons">
                  <li className="pb-2">
                    <input
                      type="radio"
                      class="btn-check"
                      value="regular"
                      name="size"
                      id="regular"
                      autocomplete="off"
                      checked
                    />
                    <label class="btn btn-outline-danger" for="regular">
                      Regular
                    </label>
                  </li>
                  <li className="pb-2">
                    <input
                      type="radio"
                      class="btn-check"
                      name="size"
                      value="medium"
                      id="medium"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-danger" for="medium">
                      Medium
                    </label>
                  </li>
                  <li className="pb-2">
                    <input
                      type="radio"
                      class="btn-check"
                      name="size"
                      value="large"
                      id="large"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-danger" for="large">
                      Large
                    </label>
                  </li>
                </ul>
              </div>
            </ul>
          </div>

          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Toppings
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <ul className="bulletIcons">
                  <li className="pb-2">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck1"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck1">
                      Red Pepper
                    </label>
                  </li>

                  <li className="pb-2">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck2"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck2">
                      Onion
                    </label>
                  </li>
                  <li className="pb-2">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck3"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck3">
                      G-Mushroom
                    </label>
                  </li>

                  <li className="pb-2">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck4"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck4">
                      Extra Cheese
                    </label>
                  </li>

                  <li className="pb-2">
                    <input
                      type="checkbox"
                      class="btn-check"
                      id="btncheck5"
                      autocomplete="off"
                    />
                    <label class="btn btn-outline-primary" for="btncheck5">
                      Black Olive
                    </label>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
        <div className="row row-cols-2">
          <h3 className="mt-2">₹ {price}</h3>{" "}
          <h3 className="mt-2">⭐ {rating}</h3>
        </div>

        <div key={id}>
          <Button
            className="mb-2"
            variant="outlined"
            onClick={() => addToCart(id)}
          >
            Add To Cart
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MaterialCard;
