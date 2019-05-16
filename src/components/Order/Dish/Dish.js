import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import classes from "./Dish.module.css";

const dish = props => {
  return (
    <Card className={classes.Card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.title}
        </Typography>

        <Typography component="p">{props.description}</Typography>
        <Typography component="p">{props.weight}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => props.clicked(props.dish)}>
          ADD
        </Button>
      </CardActions>
    </Card>
  );
};

export default dish;
