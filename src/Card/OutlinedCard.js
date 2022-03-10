import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function OutlinedCard(props) {
  console.log("props", props);
  const handleChecked = (e) => {
    console.log("e", e.target.value);
    var vegCheckBox = document.getElementById("veg");
    // console.log(vegCheckBox);
    var nonvegCheckBox = document.getElementById("nonVeg");
    if (vegCheckBox.checked == true) {
      props.setVegCat("veg");

      console.log(props.vegCat);
      console.log("Veg");
    } else if (nonvegCheckBox.checked == true) {
      props.setVegCat("non_veg");
      console.log(props.vegCat);
      console.log("Non-veg");
    } else {
      props.setVegCat("allData");
      console.log(props.vegCat);
      console.log("all data");
    }
    // const hero = props.responseData[e.target.dataset.id];
    // let newCheckedValues = props.checkedValues.filter((item) => item !== hero);
    // if (e.target.checked) newCheckedValues.push(hero);
    // props.setCheckedValues(newCheckedValues);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox id="veg" value="veg" onChange={handleChecked} />
              }
              label="Veg"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="nonVeg"
                  value="non_veg"
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
