import { SET_PIZZAS } from "./actionType";

const initialState = {
    data:  [],
  }

export const pizzaReducer = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
      case SET_PIZZAS:
        return { ...state, data: action.data };
      default:
        return state;
    }
  };