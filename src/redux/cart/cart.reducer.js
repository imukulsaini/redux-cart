const INITIAL_STATE = {
  cartItems: []
};

export function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };

    case "REMOVE_FROM_CART":{
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload)
      }}
    case "INCREMENT_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        )
      };

    case "DECREMENT_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
        )
      };
    default:
      return state;
  }
}
