import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEMS } from "../../type";

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
    case UPDATE_CART_ITEMS:
      return { cartItems: action.payload.cartItems };
    default:
      return state;
  }
};
export default cartReducer;
