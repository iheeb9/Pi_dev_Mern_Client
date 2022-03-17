import { edit } from 'fontawesome'
import {POST_TYPE} from '../action/postAction'


const initialState = {
    loading:false,
    posts:[],
    result:0,
    vehicule:{}
}

const postReducer = (state = initialState, action) => {
 
    switch (action.type){
        case POST_TYPE.CREATE_POST:
            return{
                ...state,
                posts:[action.payload,...state.posts]
                
            }
            case POST_TYPE.LOADING_POST:
            return{
                ...state,
                loading:action.payload
                
            }
            case POST_TYPE.GET_POSTS:
            return{ 
                ...state,
                posts: action.payload.posts,
                result:action.payload.result,
                vehicule:action.payload.vehicule
                
            }
            case POST_TYPE.UPDATE_POST:
                   return {
                    ...state,
                    posts: EditData(state.posts, action.payload._id, action.payload)
                    
                };
            case POST_TYPE.DELETE_POST:
                return {
                   
                    ...state,
                    posts: DeleteData(state.posts, action.payload._id)
                };
        default:
            return state;
    }
}


export default postReducer 


export const EditData = (data, id, post) => {
    const newData = data.map(item => 
        (item._id === id ? post : item)
    )
    return newData;
}

export const DeleteData = (data, id) => {
    const newData = data.filter(item => item._id !== id)
    return newData;
}