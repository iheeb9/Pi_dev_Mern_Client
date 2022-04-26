import React, { useEffect, useState,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { faceId } from '../../redux/action/authAction'
import * as faceapi from 'face-api.js'

export default function FaceId(props) {
    const [stream, setStream] = useState();
const myVideo = useRef();
const [face, setFace] = useState(false)
const initialState = { email:'', password: '' }
const [userData, setUserData] = useState(initialState)
const {notif,auth,user}=useSelector (state=>state) 
const a=props.match.params.mail
    const profile = user.users.filter((u) => u.email ==a)[0];
  const img=profile.images;
  const emails=profile.email;

  const dispatch=useDispatch()
var input = document.getElementById('myImg');
const handleSubmit =async () => {
  setInterval(async () => { 
    let detections = await faceapi
    .detectSingleFace(myVideo.current, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceDescriptor()
    
    if (detections) {
      let faceMatcher = new faceapi.FaceMatcher(detections)
      let detections1 = await faceapi
      .detectSingleFace(input, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor()
      if (detections1) {
     const match = faceMatcher.findBestMatch(detections1.descriptor)
     if (match.distance < 0.6) {  
        console.log(userData)
                dispatch (faceId(userData))  
              }else{
                dispatch({
                  type:'NOTIFY',
                  payload:{error:'Authentification failed'}})
               }
     }
        
    }
  },500)
}
useEffect(() => {

  setUserData({...userData,email:emails})
  const loadmodels = async () =>{
  const Models =process.env.PUBLIC_URL + '/models';
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri(Models),
  faceapi.nets.faceLandmark68Net.loadFromUri(Models),
  faceapi.nets.faceRecognitionNet.loadFromUri(Models),
  faceapi.nets.faceExpressionNet.loadFromUri(Models)
]).then(checkVideo);
}
loadmodels()

  
}, [])


const  checkVideo=()=> {
  navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
  setStream(stream);
  myVideo.current.srcObject = stream;
  });
}

return (
<>
<video
crossOrigin='anonymous'
playsInline
muted
ref={myVideo}
width={"600"}
height={"300"}
autoPlay
onPlay={handleSubmit}

/>
<img  id="myImg"  hidden  src={img} crossOrigin='anonymous' />
</>
);
}
