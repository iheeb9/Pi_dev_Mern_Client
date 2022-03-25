import { combineReducers } from "redux";
import auth from './authReducer'
import notif from './notifReducer'
import productReducers from './productReducers'
import cartReducer from './cartReducers'
import { orderReducer } from "./orderReducers";


import allproductr from './productReducers'
import { productDetailReducer } from './productReducers'
import { productAddReducer } from './productReducers'
import { CategoryReducer } from './catReducer'
import { productReducerPage } from './productReducers'

import post from './postReducer'
import sharedpost from './sharedpostReducer'
import user from './userReducer'

export default combineReducers({
    auth,
    notif,
    products: productReducers,
    cart: cartReducer,
    order: orderReducer,

    allproductr,
    productDetailReducer,
    productAddReducer,
    CategoryReducer,
    productReducerPage,
    post,
    sharedpost,
    user

})
