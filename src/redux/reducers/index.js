import { combineReducers } from "redux";
import auth from './authReducer'
import notif from './notifReducer'
import post from './postReducer'
export default combineReducers({
    auth,
    notif,
    post,

})