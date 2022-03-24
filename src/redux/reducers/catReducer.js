import { ALL_CATEGORY_FAIL, ALL_CATEGORY_REQUEST, ALL_CATEGORY_SUCCESS } from "../../constants/productConstants";

const initialState = {
    categories: [],
    loading: false,
    error:null
};
 export const CategoryReducer = (state = initialState, action ) => {
     switch(action.type){
         case ALL_CATEGORY_SUCCESS:
             state = {
                 ...state,
                 categories:action.payload.categories
             }
             break;
             case ALL_CATEGORY_REQUEST:
                 state={
                     ...state,
                     loading:false
                 }
            break;
            case ALL_CATEGORY_SUCCESS:
                state={
                    ...state,
                    loading:false
                }
            break;
            case ALL_CATEGORY_FAIL:
                state={
                    ...initialState
                }
                break;
     }
     return state;
 }