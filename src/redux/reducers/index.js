import { combineReducers } from "redux";
import auth from './authReducer'
import notif from './notifReducer'
import allproductr from './productReducers'

export default combineReducers({
    auth,
    notif,
    allproductr

    

})
