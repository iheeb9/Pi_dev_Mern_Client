import { TYPES } from '../action/notifAction'

const initialState = {}

const notifReducer = (state = initialState, action) => {
    switch (action.type){
        case TYPES.NOTIFY:
            return action.payload;  
        default:
            return state;
    }
}


export default notifReducer