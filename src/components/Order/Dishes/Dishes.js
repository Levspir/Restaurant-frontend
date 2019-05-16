import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import classes from "./Dishes.module.css";

import Dish from "../Dish/Dish";
import DishType from "../DishType/DyshType";

const dishes = props => {
  console.log(props);
  const DISHTYPES = ["soup", "drinks"];

  const dishtypes = DISHTYPES.map(dishtype => {
    console.log(dishtype);
    return props.dishes.filter(type => {
      console.log(type);
      return type.dishType === dishtype;
    });
  }).map((dishtypeArray, index) => {
    console.log(dishtypeArray);
    return (
      <DishType
        dishtypeArray={dishtypeArray}
        key={index}
        type={dishtypeArray[index].dishType}
        clicked={props.clicked}
      />
    );
  });

  console.log(dishtypes);

  return (
    <Grid container className={classes.Root} spacing={40} justify="center">
      {dishtypes}
    </Grid>
  );
};

export default dishes;
