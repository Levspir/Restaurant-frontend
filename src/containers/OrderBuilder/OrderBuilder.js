import React, { Component } from "react";
import axios from "../../axios-orders";
import Grid from "@material-ui/core/Grid";
import Dishes from "../../components/Order/Dishes/Dishes";
import classes from "./OrderBuilder.module.css";
import Button from "@material-ui/core/Button";
import * as restaurantActions from "../../store/actions/index";
import { connect } from "react-redux";

class OrderBuilder extends Component {
  state = {
    order: [
      {
        id: "1",
        orderItem: {
          dish: {
            title: "Ramen",
            description: ""
          }
        }
      },
      {
        id: "2",
        orderItem: {
          dish: {
            title: "Krevetki",
            description: ""
          }
        }
      }
    ]
  };

  componentDidMount() {
    this.props.onInitDishes();
    console.log(this.props);
  }
  addDishHandler = dish => {
    console.log("tututu");
    console.log(dish);
    this.props.addDish(dish);
  };
  postOrderHandler = () => {
    let order = { orderGroup: this.state.order };
    axios.post("/orders.json", order).then(response => console.log(response));
  };

  render() {
    let dishes = null;
    if (this.props.dishes) {
      dishes = (
        <Dishes dishes={this.props.dishes} clicked={this.addDishHandler} />
      );
    }
    console.log(this.props.dishes);

    return (
      <div className={classes.Menu}>
        {dishes}
        <Button onClick={this.postOrderHandler}>Send</Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    dishes: state.dishes.dishes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addDish: dishData => dispatch(restaurantActions.addDish(dishData)),
    onInitDishes: () => dispatch(restaurantActions.initDishes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderBuilder);
