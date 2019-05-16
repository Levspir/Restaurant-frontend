import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const setDishes = dishes => {
  return {
    type: actionTypes.SET_DISHES,
    dishes: dishes
  };
};

export const initDishes = () => {
  return dispatch => {
    axios
      .get("https://restaurant-2484c.firebaseio.com/dishes.json")
      .then(response => {
        const fetchedDishes = [];
        for (let key in response.data) {
          fetchedDishes.push(response.data[key]);
        }
        dispatch(setDishes(fetchedDishes));
      })
      .catch(error => {});
  };
};
