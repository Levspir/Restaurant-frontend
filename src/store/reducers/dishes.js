import * as actionTypes from "../actions/actionTypes";

const initialState = {
  dishes: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DISHES:
      return {
        ...state,
        dishes: action.dishes
      };
    default:
      return state;
  }
};

export default reducer;
