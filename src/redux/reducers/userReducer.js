import {TYPES} from '../action/userAction'

const initialState = {
    loading:false,
    users :[]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.GET_ALL_USERS_REQUEST:
            return{
                ...state,
                loading:action.payload
                
            }
        case TYPES.GET_ALL_USERS_SUCCESS:
            return{ 
                ...state,
                users: action.payload.users
                
            } 
         case TYPES.UPDATE_USER_INFO:
            return{ 
                ...state,
                users: action.payload.user
                
            }
        default:
            return state
    }
}

export default usersReducer