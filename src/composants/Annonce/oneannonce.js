import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { likePost, unLikePost } from '../../redux/action/postAction'
import Likebutton from './Likebutton'


export default function Oneannonce({post}) {
 const [isLike,setIsLike]=useState(false)
const [loadLike,setLoadlike]=useState(false)
const history=useHistory()
const dispatch=useDispatch()
const {auth}=useSelector(state=>state)

useEffect(()=>{
 if (post.likes.find(like=>like._id==auth.user._id))
    setIsLike(true)
    
    },[])
    
const handleLike= async()=>{
    if (loadLike) return; 
    setIsLike(true)
    setLoadlike(true)
    await dispatch (likePost({post,auth}))
    setLoadlike(false)
    
    console.log("like ")
    console.log(isLike)

}
const handlUnLike= async()=>{  
    if (loadLike) return;  
    setIsLike(false)
    setLoadlike(true)
    await dispatch (unLikePost({post,auth}))
    setLoadlike(false) 
    console.log("dislike ")
    console.log(isLike)
}

  return (
    <Likebutton 
    isLike={isLike}
    handleLike={handleLike}
    handleUnLike={handlUnLike}
    />
  )
}
