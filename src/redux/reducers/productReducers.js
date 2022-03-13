import { ALL_PRODUCTS_REQUEST,ALL_PRODUCTS_SUCCESS,ALL_PRODUCTS_FAIL, CLEAR_ERRORS } from "../../constants/productConstants";
const initialState = {}

 const productReducer = (state =  { products: [] }, action )=>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return{
                loading:true,
                products:[]
            }
        case ALL_PRODUCTS_SUCCESS:
             return{
                 loading:false,
                 products:action.payload.data,
                 productCount:action.payload.productCount
            }   
        case ALL_PRODUCTS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        default:
            return state;
    }
} 

export default productReducer