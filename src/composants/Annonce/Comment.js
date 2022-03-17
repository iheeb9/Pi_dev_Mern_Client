import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CommentCard from './CommentCard'

export default function Comment( post) {



  return (
   <div>

       {
           post.post.comments.map(comment=>(
            <li >
           <CommentCard comment={comment}  post={post}></CommentCard>
        </li> 
           ))
       }
   </div>
  )
}
