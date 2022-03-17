import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createPost, getPosts } from '../../redux/action/postAction'

export default function AddAnnonce() {
    const history=useHistory()
    const initialState = { 
        title: '', content: '', price: '', cathegorie: '', tags: '', location: ''
    }
    const [annonceData, setannonceData] = useState(initialState)
    const {title, content, price, cathegorie, tags ,location} = annonceData

    const {auth}=useSelector(state=>state)

    const [images,setimages]=useState([])
    const [Stream,setStream]=useState(false)
    const refCanvas=useRef()
    const videoRef=useRef()
    const [track,setTrack]=useState()
    const handleChangeInput = e => {
        const { name, value } = e.target
        setannonceData({...annonceData, [name]:value})
     
    }

const handleStream =()=>{
    setStream(true)
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video:true})
        .then(MediaStream=>{
            videoRef.current.srcObject=MediaStream
            videoRef.current.play()
            const track=MediaStream.getTracks()
            setTrack(track[0])
        }).catch(err=>console.log(err))
    }
}
    
const handleCapture =()=>{
    const width=videoRef.current.clientWidth
    const height=videoRef.current.clientHeight


    refCanvas.current.setAttribute("width",width)
    refCanvas.current.setAttribute("height",height)
    const ctx= refCanvas.current.getContext('2d')
    ctx.drawImage(videoRef.current,0,0,width,height)
    let URL=refCanvas.current.toDataURL()
    setimages([...images,{camera:URL}])
}
const deleteImage=(index)=>{
const newArr=[...images]
 newArr.splice(index,1)
 setimages(newArr) 
}

const handleStopStream=()=>{
    track.stop()
    setStream(false)
}

const dispatch = useDispatch()
const  handleChangeImages=e=>{
   const files=[...e.target.files]
   let err=""
   let newImages=[]

   files.forEach(file=>{
    if(!file) return err="Files does not exist."
    // if (file.type !=='image/jpg '&& file.type !=='image/png'){
    //     return err="Image format is incorrect"
    // }
    return newImages.push(file)
   })
   if (err) {dispatch({type:'NOTIFY',payload:{error:err}})}
   setimages([...images,...newImages])
}

const handlesubmit = (e)=>{
    e.preventDefault()
    if (images.length==0)
    return dispatch({type:'NOTIFY',payload:{error:"Please add you Photo"}})
    dispatch(createPost({annonceData,images,auth,history}))

}
    
  return (
    <div>
        <section id="contact-us" class="contact-us section">
		<div class="container">
				<div class="contact-head">
					<div class="row">
						<div class="col-lg-8 col-12">
							<div class="form-main">
								<div class="title">
									<h4>Get in touch</h4>
									<h3>Sell your Product</h3>
								</div>
								<form class="form" method="post" onSubmit={handlesubmit}>
									<div class="row">
										<div class="col-lg-6 col-12">
											<div class="form-group">
												<label> title<span>*</span></label>
												<input name="title" type="text" placeholder=""
                                                 onChange={handleChangeInput}/>
											</div>
										</div>
										<div class="col-lg-6 col-12" >

											<div class="form-group" >
                                                
												<label>Cathegorie<span>*</span></label>
                                                <select class="custom-select" name="cathegorie" id="inputGroupSelect01"
                                                 onChange={handleChangeInput} >
                                                    <option selected value='....'>Choose...</option>
                                                      <option value="Véhicules">Véhicules</option>
                                                      <option value="Informatique">Informatique</option>
                                                      <option value="Immobilier">Immobilier</option>
                                                      <option value="Maison">Maison</option>
                                                      <option value="Multimédia">Multimédia</option>
                                                      <option value="Loisirs">Loisirs</option>
                                                      <option value="Animaux">Animaux</option>
                                                      <option value="Matériel Professionnel">Matériel Professionnel</option>
                                                      <option value="Other">Other</option>
                                                 
                                                  </select>
                                               	</div>
										</div>
										<div class="col-lg-6 col-12">
											<div class="form-group">
												<label>Your Price  <span>*</span></label>
												<input name="price" type="text" placeholder=""
                                                 onChange={handleChangeInput}/>
											</div>	
										</div>
										<div class="col-lg-6 col-12">
											<div class="form-group">
												<label>location<span>*</span></label>
												<input name="location" type="text" placeholder=""
                                                 onChange={handleChangeInput}/>
											</div>	
										</div>
										<div class="col-12">
											<div class="form-group message">
												<label>Content<span>*</span></label>
												<textarea name="content" placeholder=""
                                                 onChange={handleChangeInput}></textarea>
											</div>
                                            
										</div>
                                        
                                        <div class="col-lg-6 col-12">
											<div class="form-group">
												<label>Tags<span>*</span></label>
												<input name="tags" type="text" placeholder=""
                                                 onChange={handleChangeInput}/>
											</div>	
										</div>
                                        <div class="col-lg-6 col-12">
									
										</div>
                                        <div class="col-lg-6 input_images" style={{position:"relative", display:"flex"}}>
											<i className='fas fa-camera' style={{fontSize:"2rem",cursor:"pointer",color:"#F7941D"}} onClick={handleStream}/>
                                            <div className='file_upload' style={{overflow:"hidden",margin:"0 10px",position:"relative"}} >
                                            <i className='fas fa-image' style={{fontSize:"2rem",cursor:"pointer",color:"#F7941D"}}/>
                                            <input type='file' name='file' id='file'
                                            multiple accept='image/*'style={{position:"absolute",top:"0",left:"0",opacity:"0",}} 
                                            onChange={handleChangeImages}/>
                                            </div>
                                            
										</div>
                                        <div class="col-lg-6 col-12">
                                        </div>
                                        <div class=" col-12">
                                    {Stream &&
                                            <div className='stream'>
                                                <video src='' autoPlay muted ref={videoRef} width="100%"/>
                                              
                                                <canvas ref={refCanvas} style={{display:"none"}}/>
                                            </div>
                                            }
                                        </div >
                                        <div className='col-12'>
                                        {
                                            Stream
                                            ?<div style={{fontSize:"2rem",cursor:"pointer" }}  ><i className='fas fa-camera' onClick={handleCapture}/>
                                      
                                            <i class="fa fa-window-close" aria-hidden="true" onClick={handleStopStream}></i>
                                            </div>
                                            :<></>
                                            
                                        }</div>
                                        
                                        
										<div class="col-12">
											<div class="form-group button">
												<button type="submit" class="btn ">Send Message</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div class="col-lg-4 col-12">
							<div class="single-head">
                               <div class="single-info">
							  		<i class="fa fa-picture-o"></i>
									<h4 class="title"> Add photo</h4>
									<ul>
										<li>Your photo will display here...</li>
									</ul>
								</div>
								<div class="show_images " >
								{ 
                                   images.map((img,index)=>(
                                        <div key={index} id="file_img ">
                                              <button  onClick={()=>deleteImage(index)} type="button" class="close" aria-label="Close" style={{color:"#F7941D"}}>
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                    <img src={img.camera? img.camera :URL.createObjectURL(img) }
                                             alt="images"></img>
                                         
                                             <hr></hr>
                                        </div>
                                    ))
                                }
								</div>
							
								
							</div>
						</div>
					</div>
				</div>
			</div>
	</section>
    </div>
  )
}
