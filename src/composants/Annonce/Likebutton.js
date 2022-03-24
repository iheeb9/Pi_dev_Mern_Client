import React from 'react'

export default function Likebutton({isLike,handleLike,handleUnLike}) {
  return (
    <>
    {isLike
    ? <i class="fas fa-heart text-danger" onClick={handleUnLike} style={{fontSize:"1.5rem"}}></i>
    : <i class="far fa-heart" onClick={handleLike} style={{fontSize:"1.5rem"}}></i>
    }
                                      
    </>
  )
}