
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProgressBar from 'react-bootstrap/ProgressBar'
import moment from 'moment'
import Carousel from './Carousel'
import { useHistory } from 'react-router-dom'
import { deletePost, getPosts, likePost, POST_TYPE } from '../../redux/action/postAction'
import { useState } from 'react'
import Likebutton from './Likebutton'
import Oneannonce from './oneannonce'
import { Link } from 'react-router-dom'
import { getDataAPI, postDataAPI } from '../../utils/AnnoncefetchData'
import Notfound from '../Notfound/Notfound'
import { imageUpload } from '../../utils/uploadimage'
import axios from 'axios'

export default function Annonce() {
  const history=useHistory()
  const dispatch=useDispatch()
  const {auth}=useSelector(state=>state)
  const {post} =useSelector(state=>state)
  const [search, setSearch] = useState('')
  const [image, setimage] = useState()
  const [Stream,setStream]=useState(false)
  const refCanvas=useRef()
  const videoRef=useRef()
  const [track,setTrack]=useState()
  
const searchwithimage= async()=>{
    dispatch({type: "NOTIFY", payload: {warning: "this operation take a few minutes"}})
    dispatch({type:POST_TYPE.LOADING_POST,payload:true})
    let media=[]
    if (image) {media= await imageUpload(image)}else{
    
        dispatch({type:'NOTIFY',payload:{error:"please add a photo"}})
    }
    console.log(media[0].url)
    try {
        
        const res=await axios.post("/python/search/",{url:media[0].url})
        console.log(res.data)
        const data=await axios.post("/api/searchimage/",res.data)
        console.log(data)
        dispatch({type:POST_TYPE.GET_POSTS,payload:data.data})
        dispatch({type:POST_TYPE.LOADING_POST,payload:false})
        dispatch({type: "NOTIFY", payload: {success: "finished"}})
    }
    catch (err) {
        dispatch({type: "NOTIFY", payload: {error: err.response.data.msg}})
        dispatch({type:POST_TYPE.LOADING_POST,payload:false})
    }
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
    }}
    const handleCapture =()=>{
        const width=videoRef.current.clientWidth
        const height=videoRef.current.clientHeight
    
    
        refCanvas.current.setAttribute("width",width)
        refCanvas.current.setAttribute("height",height)
        const ctx= refCanvas.current.getContext('2d')
        ctx.drawImage(videoRef.current,0,0,width,height)
        let URL=refCanvas.current.toDataURL()
        setimage([{camera:URL}])
    }
   
    
    const handleStopStream=()=>{
        track.stop()
        setStream(false)
    }
  const handleSearch = async (e) => {
    e.preventDefault();
    if(!search) dispatch(getPosts())
    try {
        dispatch({type:POST_TYPE.LOADING_POST,payload:true})
        const res = await getDataAPI(`search?title=${search}`)
        console.log(res.data)
        dispatch({type:POST_TYPE.GET_POSTS,payload:res.data
        })
        dispatch({type:POST_TYPE.LOADING_POST,payload:false})
    }
    catch (err) {
        dispatch({
            type: "NOTIFY", payload: {error: err.response.data.msg}
        })
    }
}
const handleChangeImages = e => {
    const files = [...e.target.files]
    let err = ""
    let newImages = []

    files.forEach(file => {
      if (!file) return err = "Files does not exist."
      // if (file.type !=='image/jpg '&& file.type !=='image/png'){
      //     return err="Image format is incorrect"
      // }
      return newImages.push(file)
    })
    if (err) { dispatch({ type: 'NOTIFY', payload: { error: err } }) }
    setimage(newImages)
  }
const handleCatSearch=async(e)=>{
    try {
        dispatch({type:POST_TYPE.LOADING_POST,payload:true})
        const res = await getDataAPI(`catsearch?cathegorie=${e}`)
        console.log(res.data)
        dispatch({type:POST_TYPE.GET_POSTS,payload:res.data
        })
        dispatch({type:POST_TYPE.LOADING_POST,payload:false})
    }
    catch (err) {
        dispatch({
            type: "NOTIFY", payload: {error: err.response.data.msg}
            
        })
        
    }
}


  return (
      <div>


    <div style={{textAlign:"left"}}>
      <div class="breadcrumb-area">
                    <nav aria-label="breadcrumb ">
  <ol class="breadcrumb " >
                                
    <li class="breadcrumb-item " style={{marginLeft:"175px"}}><Link to={'/'}>Home</Link></li>
    <li class="breadcrumb-item active " aria-current="page">Annonce</li>
  </ol>
</nav>


            </div>
            <div class="li-main-blog-page pt-60 pb-55">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 order-lg-1 order-2">
                            <div class="li-blog-sidebar-wrapper">
                                <div class="li-blog-sidebar">
                                <div class="col-12">
											<div class="form-group button">
                                          
	<a class="button" className='btn btn-warning' href="#popup1">search with image</a>
</div>
										</div>
                                        
                                    <div class="li-sidebar-search-form">
                                        <form >
                                            <input type="te xt" class="li-search-field" placeholder="search here" onChange={e => setSearch(e.target.value.toLowerCase().replace(/ /g, ''))} />
                                            <button  class="li-search-btn" onClick={(e)=>handleSearch(e)}><i class="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div><br></br>
                                
                                <div class="li-blog-sidebar pt-25">
                                    <h4 class="li-blog-sidebar-title">Categories</h4>
                                    <ul class="li-blog-archive">
                                        <li><a style={{cursor:"pointer"}} onClick={()=>handleCatSearch("Véhicules")}>Véhicules </a></li>
                                        <li><a style={{cursor:"pointer"}} onClick={()=>handleCatSearch("Informatique")}>Informatique </a></li>
                                        <li><a style={{cursor:"pointer"}} onClick={()=>handleCatSearch("Immobilier")}>Immobilier </a></li>
                                        <li><a style={{cursor:"pointer"}} onClick={()=>handleCatSearch("Maison")}>Maison </a></li>
                                        <li><a style={{cursor:"pointer"}} onClick={()=>handleCatSearch("Multimédia")}>Multimédia </a></li>
                                        <li><a style={{cursor:"pointer"}} onClick={()=>handleCatSearch("Loisirs")}>Loisir </a></li>
                                        <li><a style={{cursor:"pointer"}} onClick={()=>handleCatSearch("Animaux")}>Animaux </a></li>
                                        <li><a style={{cursor:"pointer"}} onClick={()=>handleCatSearch("Matériel Professionnel")}>Matériel Professionnel </a></li>
                                        <li><a style={{cursor:"pointer"}} onClick={()=>handleCatSearch("Other")}>Other </a></li>
                                    </ul>
                                </div>
                                {/* <div class="li-blog-sidebar">
                                    <h4 class="li-blog-sidebar-title">Blog Archives</h4>
                                    <ul class="li-blog-archive">
                                        <li><a href="#">January (10)</a></li>
                                        <li><a href="#">February (08)</a></li>
                                        <li><a href="#">March (07)</a></li>
                                        <li><a href="#">April (14)</a></li>
                                        <li><a href="#">May (10)</a></li>
                                        <li><a href="#">June (06)</a></li>
                                    </ul>
                                </div> */}
                                <div class="li-blog-sidebar">
                                    <h4 class="li-blog-sidebar-title"></h4>
                                      {post.posts.map((post,index) =>(index<3?<div class="li-recent-post pb-30">
                                        <div class="li-recent-post-thumb" >
                                            <a >
                                            {post.images.map((img,index) =>(index==0&&
                                                <img   style={{minHeight:"70px"}}class="img-full" src= {img.url} alt="Li's Product Image"/> ))}
                                            </a>
                                        </div>
                                        <div class="li-recent-post-des">
                                            <span><Link to={`/detailannonce/${post._id}`} >{post.title} </Link></span>
                                            <span class="li-post-date" style={{fontSize:"10px"}}>{post.createdAt}</span>
                                        </div>
                                    </div>:null))}
                              
                                
                                </div>
                                {/* <div class="li-blog-sidebar">
                                    <h4 class="li-blog-sidebar-title">Tags</h4>
                                    <ul class="li-blog-tags">
                                        <li><a href="#">Gaming</a></li>
                                        <li><a href="#">Chromebook</a></li>
                                        <li><a href="#">Refurbished</a></li>
                                        <li><a href="#">Touchscreen</a></li>
                                        <li><a href="#">Ultrabooks</a></li>
                                        <li><a href="#">Sound Cards</a></li>  
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                      
                        <div class="col-lg-9 order-lg-5 order-1">
                        { post.loading?<ProgressBar animated now={50} striped variant="warning"  />:
        <div class="row li-main-content">
        
            {post.posts.map((post,index) =>(<div class="col-lg-6 col-md-6">
           <div style={{display:"flex",justifyContent:"end"}} >
        <button style={{margin:"2px" , fontSize:"10px"  }}>Copy..</button>
         {
        auth.token
        ?auth.user._id==post.user._id
        ? <> <button style={{margin:"2px" , fontSize:"10px"}} onClick={() => history.replace("/updateAnnonce/" + post._id)} >edit</button>
        <button style={{margin:"2px", fontSize:"10px"}} onClick={()=>dispatch(deletePost({post,auth}))}  > delete </button>
         </>:null:null

        }
        
         </div>
             <div class="li-blog-single-item pb-25">
          
             <Carousel images={post.images} id={post._id} />
                                       
                <div class="li-blog-content">
                    <div class="li-blog-details">
                         <div style={{display:"flex" ,justifyContent:"space-between"}}>
                         <h3 class="li-blog-heading pt-25"> <Link to={`detailannonce/${post._id}`} >{post.title} </Link></h3>
                                          {auth.token &&  <Oneannonce post={post}></Oneannonce>}   
                                                </div>
                        <div style={{color:"#333",fontWeight:"bold"}}> {post.price} dt</div>
                                                <div class="li-blog-meta d-flex" >

                                               <img src={post?.user.images[0]}  id="avatar"alt="User"  />
                                                                                

                                              { auth.token
        ?auth.user._id==post.user._id?
                                               <Link to={`/userprofil/${post?.user._id}`}>
                                               <a class="author" href="#">  <img src={post.user?.images}  id="avatar"alt="User"  />
                                               </a>      </Link>
                                              
                                              :<Link to={`/Profile/${post?.user._id}`}>
                                              <a class="author" href="#">  <img src={post.user?.images}  id="avatar"alt="User"  />
                                              </a>      </Link>:null }                                                    

                                                  
                                                    <a class="post-time" href="#"><i class="fa fa-calendar"></i>{moment(post.createdAt).fromNow()}</a>
                                                    
                                                   <a class="comment" href="#"><i class="fa fa-comment-o"></i> {post.comments.length} comment</a> 
                                             
                                                    <a class="post-time" href="#"><i class="fa fa-thumbs-up"></i>{post.likes.length}</a>
                                                </div>
                                                
                                                <h6 style={{fontWeight:"inherit"}}>description:</h6>
                                                <p>{post.content.slice(0, 40)}</p>
                                               
                                                    <Link to={`detailannonce/${post._id}`} style={{color:"#333",fontWeight:"bold"}}>More info...  </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                         ))}
          
        {post.result==0&&  <div>
        
        <nav aria-label="breadcrumb ">
   
 </nav>
 <div class="error404-area pt-30 pb-60">
     <div class="container">
         <div class="row">
             <div class="col-lg-12">
                 <div class="error-wrapper text-center ptb-50 pt-xs-20">
                     <div class="error-text">
                         <h1>0</h1>
                         <h2>Opps! No Annonce FOUND</h2>
                         <p>Sorry but the Product you are looking for does not exist, have been removed</p>
                     </div>
                     <div class="error-button">
                         <a onClick={()=>dispatch(getPosts())}>go back</a>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
 </div>}

                                {/* <div class="col-lg-12">
                                    <div class="li-paginatoin-area text-center pt-25">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <ul class="li-pagination-box">
                                                    <li><a class="Previous" href="#">Previous</a></li>
                                                    <li class="active"><a href="#">1</a></li>
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li><a class="Next" href="#">Next</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                         

                                
                            </div>}
                        </div>
                    </div>
                </div>
  </div>
  </div>
 


                                <div></div>

<div id="popup1" class="overlay ">
	<div class="popup">
		<h2>Search with your Photo</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
        <div className='row'><div className='col-6'>
                      {image ? <div>{image.map((img) => (
                     <img src={img.camera? img.camera :URL.createObjectURL(img) }
                     alt="images"></img>

                ))}</div> : <div><img src="https://ssr-releases-cdn.paperlesspost.com/_next/static/images/MobileMediaPoster-553a691ac40df070a04c82b601a117ec.jpg" class="img-fluid" alt='Post photo' style={{ maxHeight: "400px" }} /> </div>}
                     </div >
                   <div class=" col-6">
                                    {Stream?
                                            <div className='stream'>
                                                <video src='' autoPlay muted ref={videoRef} width="100%" />
                                              
                                                <canvas ref={refCanvas} style={{display:"none"}}/>
                                            </div>:
                                            <img src='/images/webcam.jpg'></img>

                                            }
                                        </div >
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

                          
                        <a href='#a' class="button" className='btn btn-warning' onClick={searchwithimage}>search</a>
                      </div>
                    </div>  
		</div>
	</div>
</div>




  </div>
  )
}
