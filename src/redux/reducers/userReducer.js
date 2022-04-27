import {TYPES} from '../action/userAction'

const initialState = {
    loading:false,
    users :[],
   
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
            case TYPES.DELETE_USER:
                return {
                    ...state,
                    users: DeleteData(state.users, action.payload._id)
                };
        default:
            return state
    }
}

export const DeleteData = (data, id) => {
    const newData = data.filter(item => item._id !== id)
    return newData;
}

export default usersReducer