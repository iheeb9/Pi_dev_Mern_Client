import { getDataAPI,putDataAPI,deleteDataAPI} from "../../utils/AnnoncefetchData"
import valid from "../../utils/ValidUpdate"
import axios from "axios"
import { imageUpload } from '../../utils/imageUpload'
export const TYPES={
GET_ALL_USERS_REQUEST:'GET_ALL_USERS_REQUEST',
GET_ALL_USERS_SUCCESS:'GET_ALL_USERS_SUCCESS',
GET_ALL_USERS_FAILED:'GET_ALL_USERS_FAILED',
UPDATE_USER_INFO_:'UPDATE_USER_INFO',
MAKE_ADMIN:'MAKE_ADMIN',
DELETE_USER:'DELETE_USER'
}


export const GetAllUsers=()=>  async (dispatch)=> {
    try {
        dispatch({type:'GET_ALL_USERS_REQUEST',payload:{loading:true}})
        const res = await   getDataAPI('getuser')
        console.log(res)
      
    
        dispatch({
            type:'GET_ALL_USERS_SUCCESS',
            payload:{
                users:res.data
            }})
     dispatch({type:'GET_ALL_USERS_REQUEST',payload:{loading:false}})
    }catch(err){ 
        dispatch({
            type:'GET_ALL_USERS_FAILED',
            payload:{error:err.res.data.msg}})
    }

    }
    export const deleteUser = (id) => async (dispatch) => {
 

        try {
           
          const { res } = await axios.delete(`/api/DeleteUser/${id}`)
          const dat = await   getDataAPI('getuser')
          console.log("res")
          dispatch({
              type:'GET_ALL_USERS_SUCCESS',
              payload:{
                  users:dat.data
              }})
          dispatch({ type:'NOTIFY', 
          payload:
           {success: "User Deleted"} 
          })
          
          
        } catch (err) {
            dispatch({
                type: "NOTIFY",
                payload: {error: err.response.data.msg}
            })
        }
      }

    export const UpdateUser=(data,images, auth,a)=>  async (dispatch)=> {
        let media=[]
        const check = valid(data)
        console.log(check.errLength)

       if(check.errLength > 0)

       return dispatch({type: 'NOTIFY', payload: check.errMsg})
       if (images.length>0) 
       media=await imageUpload(images)
       const imageUpdate=media
       console.log(imageUpdate)
  
        try {
            dispatch({type: 'NOTIFY', payload: {loading: true}})
          
         const id=data._id
           
            const res = await putDataAPI(`updateUser/${id}`, {fullname:data.fullname,username:data.username,mobile:data.mobile,images:imageUpdate},auth.token)
            console.log(res)
            dispatch({ 
                type: 'UPDATE_USER_INFO', 
                payload: {
                     
                    user: res.data.user
                } 
            })
            
            // localStorage.setItem("firstLogin", true)
            dispatch({ 
                type: 'NOTIFY', 
                payload: {
                    success: res.data.msg
                }})
                window.location.href = `/userprofil/${a}`
                
        }
         catch (err) {
            dispatch({ 
                type: 'NOTIFY', 
                payload: {
                    error: err.response.data.msg
                } 
            })
        }  }  
        export const MakeAdmin=(id)=>  async (dispatch)=> {
        
      
            try {
                dispatch({type: 'NOTIFY', payload: {loading: true}})
              
           
               
                const res = await putDataAPI(`MakeAdmin/${id}`, {role:"admin"})
                const dat = await   getDataAPI('getuser')
                console.log("res")
                dispatch({
                    type:'GET_ALL_USERS_SUCCESS',
                    payload:{
                        users:dat.data
                    }})
                
                // localStorage.setItem("firstLogin", true)
                dispatch({ 
                    type: 'NOTIFY', 
                    payload: {
                        success: res.data.msg
                    }})
                   
                    
            }
             catch (err) {
                dispatch({ 
                    type: 'NOTIFY', 
                    payload: {
                        error: err.response.data.msg
                    } 
                })
            }  }  