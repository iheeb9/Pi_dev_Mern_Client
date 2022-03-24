import { combineReducers } from "redux";
import auth from './authReducer'
import notif from './notifReducer'
import post from './postReducer'
import sharedpost from './sharedpostReducer'
export default combineReducers({
    auth,
    notif,
    post,
    sharedpost,

})