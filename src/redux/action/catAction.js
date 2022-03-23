import axios from "axios";
import { ALL_CATEGORY_FAIL, ALL_CATEGORY_REQUEST, ALL_CATEGORY_SUCCESS } from "../../constants/productConstants";

export const getAllCategory = () => {
    return async dispatch => {
        dispatch({
            type : ALL_CATEGORY_REQUEST,

        })
        const res = await axios.get('/category/get');
       
        if(res.status === 200){
            const {categoryList}= res.data 
          
            dispatch ({
                type:ALL_CATEGORY_SUCCESS,
                payload: {categories : categoryList}  ,
            });

        }else{
            dispatch({
                type:ALL_CATEGORY_FAIL,
                payload: {error: res.data.error}
            })
        }
    }

}

export const AddCategory =  (categoryName,parentCategoryId) =>async (dispatch)=> {
    console.log("weslo",categoryName,parentCategoryId)
    return async dispatch => {
        dispatch({type:ALL_CATEGORY_REQUEST})
    const res = await axios.post(`/category/create`,{name:categoryName,parentId:parentCategoryId})
    console.log("neww categ",res)
            if(res.status === 201 ){
                dispatch({
                    type:ALL_CATEGORY_SUCCESS,
                    payload: res.data.category
                })
            }else{
                dispatch({
                    type :ALL_CATEGORY_FAIL,
                    payload:res.data.error
                })
            }
    
    }
}