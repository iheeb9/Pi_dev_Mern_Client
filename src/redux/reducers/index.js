import { combineReducers } from "redux";
import auth from './authReducer'
import notif from './notifReducer'
import productReducers from './productReducers'
import cartReducer from './cartReducers'
import { orderReducer } from "./orderReducers";


export default combineReducers({
    auth,
    notif,
    products: productReducers,
    cart: cartReducer,
    order : orderReducer,

})