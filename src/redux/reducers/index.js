import { combineReducers } from "redux";
import auth from './authReducer'
import notif from './notifReducer'
import user from './userReducer'
export default combineReducers({
    auth,
    notif,
    user

})
