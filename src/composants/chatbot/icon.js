import React, { useEffect, useState } from 'react'
import Cbot from '../chatbot.js/Cbot'

export default function Icon() {
    const [act,setAct]=useState(false)
    useEffect(()=>{
            console.log("actbot",act)
    },[act])
  return (
    <div>
    <a
      style={{ position: "fixed", bottom: "3%", right: 0 , zIndex:"100" }}
      onClick={()=>setAct(!act)}
    >
      <img
      style={{width:'90px',borderRadius:'100%'}}
      src="https://res.cloudinary.com/socila-marketing/image/upload/v1650208223/istockphoto-1073043572-612x612_e3mpom.jpg" />
    </a>
    {act && <Cbot closer = {setAct}/>}
  </div>
  
  )
}
