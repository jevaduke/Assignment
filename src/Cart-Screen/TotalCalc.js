import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./TotalCalc.css";

const TotalCalc = () => {
  return (
    <div className="TotalCalc">
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
  );
};

export default TotalCalc;
