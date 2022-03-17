import { postDataAPI, patchDataAPI, deleteDataAPI } from '../../utils/AnnoncefetchData'
import {POST_TYPE} from './postAction'
import {EditData} from '../reducers/postReducer'
export const createComment=(post,newComment,auth)=>async(dispatch)=>{

    const newPost={...post,comments:[...post.comments,newComment]}
   dispatch({type:POST_TYPE.UPDATE_POST,payload:newPost})



   try{
    const data ={...newComment,postId:post._id}
    const res = await postDataAPI('comment',data,auth.token)
    console.log(res)
      }catch (err) {
      dispatch({
          type: "NOTIFY",
          payload: {error: err.response.data.msg}
      })
    }
    }

    export const updateComment = ({comment, post, content, auth}) => async (dispatch) => {
      
      console.log(comment,post.post,auth,content)
      const newComments = EditData(post.post.comments, comment._id, {...comment, content})
      const newPost = {...post.post, comments: newComments}
      
      dispatch({ type: POST_TYPE.UPDATE_POST, payload: newPost })
      try {
          patchDataAPI(`comment/${comment._id}`, { content }, auth.token)
      } catch (err) {
          dispatch({ type:"NOTIFY", payload: {error: err.response.data.msg} })
      }
  }
    
  export const deleteComment = ({post, comment, auth}) => async (dispatch) => {
    const newPost = {...post.post, comments: post.post.comments.filter(comm => comm._id!== comment._id)}
 console.log(newPost  )
    dispatch({ type: POST_TYPE.UPDATE_POST, payload: newPost })

    try {      
         deleteDataAPI(`comment/${comment._id}`, auth.token)

        
    
    } catch (err) {
        dispatch({ type: "NOTIFY", payload: {error: err.response.data.msg} })
    }

}
