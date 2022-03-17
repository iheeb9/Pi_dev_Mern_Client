import { postDataAPI } from "../../utils/AnnoncefetchData"
import valid from "../../utils/Valid"

export const TYPES={
    AUTH:'AUTH'
}



export const login=(data)=>  async (dispatch)=> {
try {
    dispatch({type:'NOTIFY',payload:{loading:true}})
    const res = await   postDataAPI('login', data)
    console.log(res)
    localStorage.setItem("firstLogin",true)

    dispatch({
        type:'AUTH',
        payload:{token:res.data.access_token,
            user: res.data.user}})
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



export const register = (data) => async (dispatch) => {

    const check = valid(data)
    console.log(check.errLength)
    if(check.errLength > 0)
    return dispatch({type: 'NOTIFY', payload: check.errMsg})

    try {
        dispatch({type: 'NOTIFY', payload: {loading: true}})

        const res = await postDataAPI('register', data)
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
        window.location.href = "/"
    } catch (err) {
        dispatch({ 
            type: 'NOTIFY', 
            payload: {
                error: err.response.data.msg
            } 
        })
    }
}

    