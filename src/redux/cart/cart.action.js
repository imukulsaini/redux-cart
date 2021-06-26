export const INCREMENT_QTY = "INCREMENT_QTY";
export const DECREMENT_QTY = "DECREMENT_QTY";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function incrementQuantity(id) {
  return { type: INCREMENT_QTY, payload: id };
}
export function decrementQuantity(id) {
  return { type: DECREMENT_QTY, payload: id };
}

export function addToCart(item) {
  return { type: ADD_TO_CART, payload: item };
}
export function removeFromCart(id) {
  return { type: REMOVE_FROM_CART, payload: id };
}
