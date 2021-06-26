import { createStore } from "redux";

import { products } from "../../data/products";

const INITIAL_STATE = {
  inventory: null
};

export function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INITIALIZE":
      return {
        ...state,
        inventory: products
      };
    default:
      return state;
  }
}

export const productStore = createStore(productReducer);
