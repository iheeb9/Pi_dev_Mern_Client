import {
  FETCH_PRODUCTS,

} from "../../type";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    
    case FETCH_PRODUCTS:
      return { items: action.payload, filteredItems: action.payload };
    default:
      return state;
  }
};export default productsReducer

