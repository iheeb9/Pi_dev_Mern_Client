import React, { useEffect } from 'react'
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
import { getDataAPI } from '../../utils/AnnoncefetchData'
import Notfound from '../Notfound/Notfound'


export default function Annonce() {
  const history=useHistory()
  const dispatch=useDispatch()
  const {auth}=useSelector(state=>state)
  const {post} =useSelector(state=>state)
  const [search, setSearch] = useState('')
  

    
  const handleSearch = async (e) => {
   
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
                                    <div class="li-sidebar-search-form">
                                        <form action="#">
                                            <input type="text" class="li-search-field" placeholder="search here" onChange={e => setSearch(e.target.value.toLowerCase().replace(/ /g, ''))} />
                                            <button type="submit"  class="li-search-btn" onClick={()=>handleSearch()}><i class="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
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
                                        <div class="li-recent-post-thumb">
                                            <a >
                                            {post.images.map((img,index) =>(index==0&&
                                                <img class="img-full" src= {img.url} alt="Li's Product Image"/> ))}
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
        
            {post.posts.map((post,index) =>(<div class="col-lg-4 col-md-6">
           <div style={{display:"flex",justifyContent:"end"}} >
        {/* <button style={{margin:"2px",backgroundColor:"yellow" , fontSize:"10px"}}>Copy..</button> */}
         {
        auth.token
        ?auth.user._id==post.user._id
        ? <> <button style={{margin:"2px",backgroundColor:"yellow" , fontSize:"10px"}} onClick={() => history.replace("/updateAnnonce/" + post._id)} >edit</button>
        <button style={{margin:"2px",backgroundColor:"yellow" , fontSize:"10px"}} onClick={()=>dispatch(deletePost({post,auth}))}  > delete </button>
         </>:null:null
    
        }
        
         </div>
             <div class="li-blog-single-item pb-25">
          
             <Carousel images={post.images} id={post._id} />
                                       
                <div class="li-blog-content">
                    <div class="li-blog-details">
                         <div style={{display:"flex" ,justifyContent:"space-between"}}>
                         <h3 class="li-blog-heading pt-25"> <Link to={`detailannonce/${post._id}`} >{post.title} </Link></h3>
                                          {auth.token&&  <Oneannonce post={post}></Oneannonce>}   
                                                </div>
                        <div style={{color:"#F7941D",fontWeight:"bold"}}> {post.price} dt</div>
                                                <div class="li-blog-meta">
                                                    
                                                {post.user?.images.map((img)=>( <a class="author" href="#">  <img src={img.url}  id="avatar"alt="User"  />_{post.user.fullname}</a>
                                                 ))}
                                                   
                                                    
                                                    <a class="post-time" href="#"><i class="fa fa-calendar"></i>{moment(post.createdAt).fromNow()}</a><br/>
                                             
                                                    <a class="post-time" href="#"><i class="fa fa-thumbs-up"></i>{post.likes.length}</a>
                                                    <a class="comment" href="#"><i class="fa fa-comment-o"></i> {post.comments.length} comment</a> 
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
  
  )
}
