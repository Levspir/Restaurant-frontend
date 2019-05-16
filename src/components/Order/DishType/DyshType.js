import React from "react";
import Dish from "../Dish/Dish";
import Grid from "@material-ui/core/Grid";

const dishType = props => {
  console.log(props.dishtypeArray[0]);
  const dishes = props.dishtypeArray.map(dish => (
    <Grid item key={dish.name}>
      <Dish
        title={dish.name}
        description={dish.description}
        weight={dish.weight}
        clicked={props.clicked}
        dish={dish}
      />
    </Grid>
  ));
  console.log(dishes);
  return <React.Fragment>{dishes}</React.Fragment>;
};
export default dishType;
