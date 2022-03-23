import { combineReducers } from "redux";
import auth from './authReducer'
import notif from './notifReducer'
import allproductr from './productReducers'
import {productDetailReducer} from'./productReducers'
import {productAddReducer} from './productReducers'
import {CategoryReducer} from  './catReducer'
import {productReducerPage} from './productReducers'

export default combineReducers({
    auth,
    notif,
    allproductr,
    productDetailReducer,
    productAddReducer,
    CategoryReducer,
    productReducerPage
   

    

})
