import * as actionTypes from "./actionTypes";

export const addDish = dishData => {
  return {
    type: actionTypes.ADD_DISH,
    dishData: dishData
  };
};
