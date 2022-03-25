import { CLEAR_CART, CREATE_ORDER ,CLEAR_ORDER,FETCH_ORDERS} from "../../type";


export const createOrder = (order) => (dispatch) => {
    fetch("/order/add", {
      method: "POST",
      headers: {
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: CREATE_ORDER, payload: data });
        localStorage.clear("cartItems");
        dispatch({ type: CLEAR_CARTAR_CART });
      });
  };
  export const clearOrder = () => (dispatch) => {
    dispatch({ type: CLEAR_ORDER });
  };
  export const fetchOrders = () => (dispatch) => {
    fetch("/order")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: FETCH_ORDERS, payload: data });
      });
  };
  