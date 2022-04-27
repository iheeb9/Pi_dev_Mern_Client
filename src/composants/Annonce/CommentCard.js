import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteComment, updateComment } from '../../redux/action/commentAction'
export default function CommentCard({comment,post}) {

const {auth}=useSelector(state=>state) 
const dispatch=useDispatch()
  useEffect(() => {
    setContent(comment.content)

},[comment])
const [Edit,seEdit]=useState(false)
const [content,setContent]=useState('')
const handleupdate =async () => {
  if(comment.content !== content){

    dispatch({type:'NOTIFY',payload:{warning:" check for comment"}})
    const res=await axios.get(`/python/detection/${content}`)

    if ( res.data[1]){
       dispatch({type:'NOTIFY',payload:{error:` your comment:(${res.data[0]}) cant be updated`}})
    }else{

      dispatch(updateComment({comment, post, content, auth}))
       dispatch({type:'NOTIFY',payload:{success:" comment updated"}})
       
    
      seEdit(false)
    }
  }else{
      seEdit(false)
  }
}
const handleRemove = () => {
  if(post.post.user._id === auth.user._id || comment.user._id === auth.user._id){
      dispatch(deleteComment({post, auth, comment, }))
      
      dispatch({type:'NOTIFY',payload:{success:" comment delete"}})
  }
}
  return ( <>
    <div class="author-avatar pt-15">
             

 <img src={comment.user.images}  id="avatar"alt="User"  />
           
    </div>
    <div class="comment-body pl-15">
        {/* <span class="reply-btn pt-15 pt-xs-5" style={{margin:"20px"}}><a href="#">reply</a></span> */}
        <h5 class="comment-author pt-15">{comment.user.fullname}</h5>
        <div class="comment-post-date">
           <small>{comment.createdAt}</small> 
        </div>
        <div style={{wordWrap:"break-word",width:"500px"}} >
           {Edit? <textarea style={{border:"none",outline:"none"}}rows="4" value={content} onChange={e=>setContent(e.target.value)}></textarea>:
           <span> 
               {comment.content}
            </span>
           }
           {Edit? <>
            <span class="reply-btn pt-15 pt-xs-5"  onClick={()=>{seEdit(false);setContent(comment.content)}}><a >cancel</a></span>
            <span class="reply-btn pt-15 pt-xs-5"onClick={handleupdate}><a >update</a></span></>:null
           }
         
        </div>
    </div>
    
    <div  >
    {auth.token? comment.user._id ==auth.user._id &&
          <div class="dropdown" style={{fontSize:"11px"}}>

          <a  type="button" id="dropdownMenu2" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-v"></i></a>
            
        
          <div class="dropdown-menu dropdown-primary" style={{fontSize:"11px"}} >
            <a class="dropdown-item" onClick={()=>seEdit(true)}><i class="fas fa-edit" ></i>&nbsp;&nbsp;Edit</a>
            <a class="dropdown-item" onClick={handleRemove}><i class="fa fa-trash"></i>&nbsp;&nbsp;Remove</a>
          </div>
        </div>
        :null

        }
    </div></>
  )}
