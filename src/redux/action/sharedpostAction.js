import {getDataAPI, postDataAPI,patchDataAPI, deleteDataAPI, getDataAPIToken} from '../../utils/AnnoncefetchData'
import { imageUpload } from '../../utils/uploadimage'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


export const SHARED_POST_TYPE ={
    CREATE_SHAREPOST:'CREATE_SHAREPOST',
    LOADING_SHAREPOST:'LOADING_SHAREPOST',
    GET_SHAREPOSTS:'GET_SHAREPOSTS',

    
}

export const createsharedpost=({title,content,media,auth,history,idpost})=>async(dispatch)=>{
  dispatch({ type:'NOTIFY', payload: {warning: "Post shared please wait to add it in your list ...!"} })
    try{
    
    
    
    {
      const post ={
        content:content,image:media,title:title,idreviw:idpost
      }
        const res=await postDataAPI('sharedpost',post,auth.token)
      console.log(res)
      
      dispatch({ 
        type: SHARED_POST_TYPE.CREATE_SHAREPOST, 
        payload: {...res.data.newPost, user: auth.user} 
    })
}

    dispatch({ type:'NOTIFY', payload: {success: "Post added with success ...!"} })

} catch(err){
  if (auth.token)
    {dispatch({type:'NOTIFY',payload:{error:err.response.data.msg}})}
    else{
      
    dispatch({type:'NOTIFY',payload:{error:"Please_Login"}})
    history.push('/register')
    }
}

}
export const getsharedpost =(token)=>async(dispatch)=>{
    
    try{
      dispatch({type:SHARED_POST_TYPE.LOADING_SHAREPOST,payload:true})
     
      const res=await getDataAPIToken('sharedpost',token)
      
      dispatch({type:SHARED_POST_TYPE.GET_SHAREPOSTS,payload:res.data
      })
  
     
      dispatch({type:SHARED_POST_TYPE.LOADING_SHAREPOST,payload:false})
    
    }
    catch(err){
      dispatch({type:'NOTIFY',payload:{error:err.response.data.msg}})
    }
    
  
  }