import { postDataAPI } from "../../utils/AnnoncefetchData"
import valid from "../../utils/Valid"
import ValidPassword from "../../utils/ValidPassword"
import { imageUpload } from '../../utils/imageUpload'
import { upload } from "@testing-library/user-event/dist/upload"
import axios from 'axios'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
export const TYPES={
    AUTH:'AUTH'
}
const history=useHistory
export const login=(data)=>  async (dispatch)=> {
try {

    dispatch({type:'NOTIFY',payload:{loading:true}})
    const res = await   postDataAPI('login', data)
    localStorage.setItem("firstLogin",true)
    dispatch({
        type:'AUTH',

        payload:{
            token: res.data.access_token,
         user: res.data.user,
            
              
        }})
    dispatch({
        type:'NOTIFY',
        payload:{ 
            success: res.data.msg
            }})

           
}catch(err){ 
    dispatch({
        type:'NOTIFY',
        payload:{error:err.response.data.msg}})
}
}
export const faceId=(data)=>  async (dispatch)=> {
    try {
        dispatch({type:'NOTIFY',payload:{loading:true}})
        const res = await   postDataAPI('faceId', data)
        localStorage.setItem("firstLogin",true)
        dispatch({
            type:'AUTH',
            payload:{
                token: res.data.access_token,
             user: res.data.user,
                
                  
            }})
        dispatch({
            type:'NOTIFY',
            payload:{ 
                success: res.data.msg
                }})
             
                window.location.href = `/`
               
    }catch(err){ 
        dispatch({
            type:'NOTIFY',
            payload:{error:err.response.data.msg}})
    }
    }
    export const googlelogin=(data)=>  async (dispatch)=> {
        try {
            dispatch({type:'NOTIFY',payload:{loading:true}}) 
            localStorage.setItem("firstLogin",true)
            dispatch({
                type:'AUTH',
             payload:{
                    token: data.access_token,
                 user:data.user,
                    
                      
                }})
            dispatch({
                type:'NOTIFY',
                payload:{ 
                    success: data.msg
                    }})
        
                   
        }catch(err){ 
            dispatch({
                type:'NOTIFY',
                payload:{error:err.response.data.msg}})
        }
        }
    
export const facebooklogin=(data)=>  async (dispatch)=> {
    
    try {
        dispatch({type:'NOTIFY',payload:{loading:true}}) 
        localStorage.setItem("firstLogin",true)
        dispatch({
            type:'AUTH',
         payload:{
                token: data.access_token,
             user:data.user,
                
                  
            }})
        dispatch({
            type:'NOTIFY',
            payload:{ 
                success: data.msg
                }})
    
               
    }catch(err){ 
        dispatch({
            type:'NOTIFY',
            payload:{error:err.response.data.msg}})
    }
    }


export const refreshToken = () => async (dispatch) => {
    const firstLogin = localStorage.getItem("firstLogin")
    if(firstLogin){
        dispatch({ type: 'NOTIFY', payload: {loading: true} })

        try {
            const res = await postDataAPI('refresh_token')
            dispatch({ 
                type: 'AUTH', 
                payload: {
                    token: res.data.access_token,
                    user: res.data.user
                } 
            })

            dispatch({  type: 'NOTIFY', payload: {} })


        } catch (err) {
            dispatch({ 
                type: 'NOTIFY', 
                payload: {
                    error: err.response.data.msg
                } 
            })
        }
    }
}



export const register = (data,images) => async (dispatch) => {
    let media=[]
    let img=""
    const check = valid(data)
    console.log(check.errLength)
    if(check.errLength > 0)
    return dispatch({type: 'NOTIFY', payload: check.errMsg})
    if (images.length>0)
     media=await imageUpload(images)
  {media.map((i)=>img=i.url)}
 const newdata={fullname:data.fullname,username:data.username,email:data.email,password:data.password,gender:data.gender,mobile:data.mobile,images:img}
    try {
        dispatch({type: 'NOTIFY', payload: {loading: true}})

        const res = await postDataAPI('register',newdata )
        dispatch({ 
            type: 'AUTH', 
            payload: {
                // token: res.data.access_token,
                user: res.data.user
            } 
        })
        
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
    }
}

export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem('firstLogin')
        await postDataAPI('logout')
        window.location.href = "/register"
    } catch (err) {
        dispatch({ 
            type: 'NOTIFY', 
            payload: {
                error: err.response.data.msg
            } 
        })
    }
}
export const ForgotPassword = (email) => async (dispatch) => {
    try 
    
    {dispatch({type: 'NOTIFY', payload: {loading: true}})

       const res= await postDataAPI('forgotPassword',email)
       
        dispatch({ 
            type: 'NOTIFY', 
            payload: {
                success: res.data.msg
            }})
    } catch (err) {
        dispatch({ 
            type: 'NOTIFY', 
            payload: {
                error: err.response.data.msg
            } 
        })
    }
}



       