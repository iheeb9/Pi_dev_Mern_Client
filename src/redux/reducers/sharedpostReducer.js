import { edit } from 'fontawesome'
import {SHARED_POST_TYPE} from '../action/sharedpostAction'


const initialState = {
    loading:false,
    posts:[],
    result:0
}

const sharedpostReducer = (state = initialState, action) => {
 
    switch (action.type){
        case SHARED_POST_TYPE.CREATE_SHAREPOST:
            return{
                ...state,
                posts:[action.payload,...state.posts]
                
            }
            case SHARED_POST_TYPE.LOADING_SHAREPOST:
            return{
                ...state,
                loading:action.payload
                
            }
            case SHARED_POST_TYPE.GET_SHAREPOSTS:
            return{ 
                ...state,
                posts: action.payload.sharepost,
                result: action.payload.result,
                
            }
        default:
            return state;
    }
}


export default sharedpostReducer 