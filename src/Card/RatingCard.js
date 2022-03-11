import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function RatingCard(props) {
  console.log("props", props);
  const handleChecked = (e) => {
    console.log("e", e.target.value);
    var vegCheckBox = document.getElementById("veg");
    // console.log(vegCheckBox);
    var nonvegCheckBox = document.getElementById("nonVeg");
    if (vegCheckBox.checked === true) {
      props.setVegCat("veg");

      console.log(props.vegCat);
      console.log("Veg");
    } else if (nonvegCheckBox.checked === true) {
      props.setVegCat("non_veg");
      console.log(props.vegCat);
      console.log("Non-veg");
    } else {
      props.setVegCat("allData");
      console.log(props.vegCat);
      console.log("all data");
    }

  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox id="above3" value="above3" onChange={handleChecked} />
              }
              label="Veg"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="4andAbove"
                  value="4andAbove"
                  onChange={handleChecked}
                />
              }
              label="Non-Veg"
            />
          </FormGroup>
        </CardContent>
      </Card>
    </Box>
  );
}
