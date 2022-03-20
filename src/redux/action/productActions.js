import { FETCH_PRODUCTS } from "../../type";
export const fetchProducts = () => async (dispatch) => {
  const res = []; //fetch("/api/products");
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};



