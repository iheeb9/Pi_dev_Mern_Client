import {getDataAPI, postDataAPI,patchDataAPI, deleteDataAPI} from '../../utils/AnnoncefetchData'
import { imageUpload } from '../../utils/uploadimage'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


export const POST_TYPE ={
    CREATE_POST:'CREATE_POST',
    LOADING_POST:'LOADING_POST',
    GET_POSTS:'GET_POSTS',
    UPDATE_POST:'UPDATE_POST',
    DELETE_POST:'DELETE_POST'

    
}

export const createPost=({annonceData,images,auth,history})=>async(dispatch)=>{

    let media=[]
    try{
    dispatch({type:'NOTIFY',payload:{loading:true}})
    if (images.length>0 ) media= await imageUpload(images)
    {
      const post ={
        content:annonceData.content,images:media,title:annonceData.title,price:annonceData.price,tags:annonceData.tags,location:annonceData.location,cathegorie:annonceData.cathegorie 
      }
        const res=await postDataAPI('posts',post,auth.token)
      
        dispatch({ 
          type: POST_TYPE.CREATE_POST, 
          payload: {...res.data.newPost, user: auth.user} 
      })
      
     
    }
  
    history.push('/annonce')
    {dispatch({type:'NOTIFY',payload:{loading:false}})}
    dispatch({ type:'NOTIFY', payload: {success: "Post Created"} })

} catch(err){
  if (auth.token)
    {dispatch({type:'NOTIFY',payload:{error:err.response.data.msg}})}
    else{
      
    dispatch({type:'NOTIFY',payload:{error:"Please_Login"}})
   
    }
}
}


export const getPosts =()=>async(dispatch)=>{
 
  try{
    dispatch({type:POST_TYPE.LOADING_POST,payload:true})
    const res=await getDataAPI('posts')
    dispatch({type:POST_TYPE.GET_POSTS,payload:res.data
    })

   
    dispatch({type:POST_TYPE.LOADING_POST,payload:false})
  
  }
  catch(err){
    dispatch({type:'NOTIFY',payload:{error:err.response.data.msg}})
  }
  

}


export const updatePost = ({annonceData, images, auth, id,history}) => async (dispatch) => {
  let media = []
  const imgNewUrl = images.filter(img => !img.url)
  const imgOldUrl = images.filter(img => img.url)

  try {
      dispatch({ type: 'NOTIFY', payload: {loading: true} })
      if(imgNewUrl.length > 0) media = await imageUpload(imgNewUrl)
     
      const res = await patchDataAPI(`post/${id}`, { 
        content:annonceData.content,images: [...imgOldUrl, ...media] ,title:annonceData.title,price:annonceData.price,tags:annonceData.tags,location:annonceData.location,cathegorie:annonceData.cathegorie 
 
      }, auth.token)
      dispatch({ type: POST_TYPE.UPDATE_POST, payload: res.data.post })
      
      dispatch({ type:'NOTIFY', payload: {success: res.data.msg} })
      history.push('/annonce')
  } 
   catch (err) {
      dispatch({
          type: 'NOTIFY',
          payload: {error: err.response.data.msg}
      })
  }
}

export const deletePost = ({post, auth}) => async (dispatch) => {
 

  try {
    
    dispatch({ type: 'NOTIFY', payload: {loading: true} })
      const res = await deleteDataAPI(`post/${post._id}`, auth.token)
      dispatch({ type: POST_TYPE.DELETE_POST, payload: post })
   
      dispatch({ type: 'NOTIFY', payload: {loading: false} })
      
    dispatch({ type:'NOTIFY', payload: {success: "Post supprimer"} })
  } catch (err) {
      dispatch({
          type: "NOTIFY",
          payload: {error: err.response.data.msg}
      })
  }
}