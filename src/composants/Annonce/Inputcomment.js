import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createComment } from '../../redux/action/commentAction'

export default function Inputcomment(post) {
    const [content,setcontent]=useState('')
    const {auth} = useSelector(state=>state)
    const dispatch=useDispatch()
    const history=useHistory()
 const handlesubmit=async(e)=>{
     e.preventDefault()
     if (!content.trim()) return
     setcontent('')
     const newComment={
         content,
         user:auth.user,
         createdAt:new Date().toDateString()
     }
     
    dispatch({type:'NOTIFY',payload:{warning:" check for comment"}})
     const res=await axios.get(`/python/detection/${content}`)

     if ( res.data[1]){
        dispatch({type:'NOTIFY',payload:{error:` your comment:(${res.data[0]}) cant be added`}})
     }else{

        dispatch(createComment(post.post,newComment,auth))
        dispatch({type:'NOTIFY',payload:{success:" comment added"}})
     }
 }
  return (
    <div>
        <form >
        <li>
                                             
    <div class="comment-body pl-15 d-flex" >
           
       <input type="text-area" placeholder='add your comment 'style={{width:"100%",border:"none",outline:"none",flex:"1",overflow:"auto"}}
       onChange={e=>setcontent(e.target.value)} value={content}/>
      {auth.token?<span class="reply-btn pt-15 pt-xs-5"><a onClick={handlesubmit} style={{margin:"20px"}}>Send</a></span>:
      <span class="reply-btn pt-15 pt-xs-5"><a onClick={()=>{ dispatch({ type: "NOTIFY", payload: {error:"Login to comment"} })
     history.push('/register') }} style={{margin:"20px"}}>Send</a></span>} 
      
    </div>
    
</li>
</form></div>
  )
}
