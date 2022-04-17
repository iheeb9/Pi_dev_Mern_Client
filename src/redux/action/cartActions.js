import axios from "axios";
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEMS } from "../../type";

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  
    cartItems.forEach((x) => {
    if (x._id === product._id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x._id !== product._id);
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const decreaseItemCount = (product) => (dispatch, getState) => {
  let cartItems = getState().cart.cartItems.slice();
  const targetItem = cartItems.find((item) => item._id === product._id);
  if (targetItem.count > 1) {
    targetItem.count--;
  } else {
    cartItems = cartItems.filter((item) => item._id !== product._id);
  }
  dispatch({ type: UPDATE_CART_ITEMS, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const increaseItemCount = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  const targetItem = cartItems.find((item) => item._id === product._id);
  targetItem.count++;
  dispatch({ type: UPDATE_CART_ITEMS, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
