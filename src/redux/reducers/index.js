import { combineReducers } from "redux";
import auth from './authReducer'
import notif from './notifReducer'
export default combineReducers({
    auth,
    notif,

})