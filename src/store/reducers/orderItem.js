import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orderItems: [],
  totalCount: 0
};

const orderItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DISH:
      return {
        ...state,
        orderItems: state.orderItems.concat(action.dishData),
        totalCount: state.totalCount + 1
      };
    default:
      return state;
  }
};

export default orderItemsReducer;
