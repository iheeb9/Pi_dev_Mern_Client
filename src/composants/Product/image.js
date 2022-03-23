import React from 'react'

export default function Image({ img,index }) {
    console.log(index)
  return (
    <div >
      {index==0? 
      <img class="default-img" src={img.url} alt="#"/>:
      <img class="hover-img"  src={img.url} alt="#"/>
    } 
        
      
        </div>
  )
}
