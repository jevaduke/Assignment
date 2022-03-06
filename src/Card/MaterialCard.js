import React, { useState } from "react";
import Axios from "axios";
import Popup from "reactjs-popup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MaterialCard = () => {
  // FETCHING JSON
  const getResponse = () => {
    Axios.get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
      });
  };
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://upload.wikimedia.org/wikipedia/commons/6/6f/Pizza_on_stone.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Margherita
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A classic delight with 100% Real mozzarella cheese
          </Typography>
        </CardContent>
        <Popup
          trigger={<button> Click to open popup </button>}
          position="right center"
        >
          <div>GeeksforGeeks</div>
          <button>Click here</button>
        </Popup>
        <CardActions className="CartButton">
          <h3>₹ 238</h3>
          <Button variant="outlined">Add To Cart</Button>
        </CardActions>

        <CardActions>
          <h3>⭐ 3.5</h3>
        </CardActions>
      </Card>
    </div>
  );
};

export default MaterialCard;
