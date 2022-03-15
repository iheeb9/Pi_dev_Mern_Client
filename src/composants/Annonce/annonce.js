import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProgressBar from 'react-bootstrap/ProgressBar'
import moment from 'moment'
import Carousel from './Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { deletePost } from '../../redux/action/postAction'

export default function Annonce() {
  const history=useHistory()
  const dispatch=useDispatch()
  const {auth}=useSelector(state=>state)
    const {post} =useSelector(state=>state)
const handleEditPost =(post)=>{
console.log(post)
  }
  
  return (
      
    <div style={{textAlign:"left"}}>
      <div class="breadcrumb-area">
                    <nav aria-label="breadcrumb ">
  <ol class="breadcrumb " >
                                
    <li class="breadcrumb-item " style={{marginLeft:"175px"}}><a href="#">Home</a></li>
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
                                            <input type="text" class="li-search-field" placeholder="search here"/>
                                            <button type="submit" class="li-search-btn"><i class="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div class="li-blog-sidebar pt-25">
                                    <h4 class="li-blog-sidebar-title">Categories</h4>
                                    <ul class="li-blog-archive">
                                        <li><a href="#">Laptops (10)</a></li>
                                        <li><a href="#">TV & Audio (08)</a></li>
                                        <li><a href="#">reach (07)</a></li>
                                        <li><a href="#">Smartphone (14)</a></li>
                                        <li><a href="#">Cameras (10)</a></li>
                                        <li><a href="#">Headphone (06)</a></li>
                                    </ul>
                                </div>
                                <div class="li-blog-sidebar">
                                    <h4 class="li-blog-sidebar-title">Blog Archives</h4>
                                    <ul class="li-blog-archive">
                                        <li><a href="#">January (10)</a></li>
                                        <li><a href="#">February (08)</a></li>
                                        <li><a href="#">March (07)</a></li>
                                        <li><a href="#">April (14)</a></li>
                                        <li><a href="#">May (10)</a></li>
                                        <li><a href="#">June (06)</a></li>
                                    </ul>
                                </div>
                                <div class="li-blog-sidebar">
                                    <h4 class="li-blog-sidebar-title">Recent Post</h4>
                                    <div class="li-recent-post pb-30">
                                        <div class="li-recent-post-thumb">
                                            <a href="blog-details-left-sidebar.html">
                                                <img class="img-full" src="images/2.jpg" alt="Li's Product Image"/>
                                            </a>
                                        </div>
                                        <div class="li-recent-post-des">
                                            <span><a href="blog-details-left-sidebar.html">First Blog Post</a></span>
                                            <span class="li-post-date">25.11.2018</span>
                                        </div>
                                    </div>
                                    <div class="li-recent-post pb-30">
                                        <div class="li-recent-post-thumb">
                                            <a href="blog-details-left-sidebar.html">
                                                <img class="img-full" src="images/2.jpg" alt="Li's Product Image"/>
                                            </a>
                                        </div>
                                        <div class="li-recent-post-des">
                                            <span><a href="blog-details-left-sidebar.html">First Blog Post</a></span>
                                            <span class="li-post-date">25.11.2018</span>
                                        </div>
                                    </div>
                                    <div class="li-recent-post pb-30">
                                        <div class="li-recent-post-thumb">
                                            <a href="blog-details-left-sidebar.html">
                                                <img class="img-full" src="images/2.jpg" alt="Li's Product Image"/>
                                            </a>
                                        </div>
                                        <div class="li-recent-post-des">
                                            <span><a href="blog-details-left-sidebar.html">First Blog Post</a></span>
                                            <span class="li-post-date">25.11.2018</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="li-blog-sidebar">
                                    <h4 class="li-blog-sidebar-title">Tags</h4>
                                    <ul class="li-blog-tags">
                                        <li><a href="#">Gaming</a></li>
                                        <li><a href="#">Chromebook</a></li>
                                        <li><a href="#">Refurbished</a></li>
                                        <li><a href="#">Touchscreen</a></li>
                                        <li><a href="#">Ultrabooks</a></li>
                                        <li><a href="#">Sound Cards</a></li>  
                                    </ul>
                                </div>
                            </div>
                        </div>
                      
                        <div class="col-lg-9 order-lg-2 order-1">
                        { post.loading?<ProgressBar animated now={50} striped variant="warning"  />:
        <div class="row li-main-content">
        
            {post.posts.map((post,index) =>(<div class="col-lg-6 col-md-6">
           <div style={{display:"flex",justifyContent:"end"}} >
        <button style={{margin:"2px",backgroundColor:"yellow" , fontSize:"10px"}}>Copy..</button> 
        <button style={{margin:"2px",backgroundColor:"yellow" , fontSize:"10px"}} onClick={() => history.replace("/updateAnnonce/" + post._id)} >edit</button>
        <button style={{margin:"2px",backgroundColor:"yellow" , fontSize:"10px"}} onClick={()=>dispatch(deletePost({post,auth}))}  > delete </button>
           </div>
           
             <div class="li-blog-single-item pb-25">
          
             <Carousel images={post.images} id={post._id} />
                                       
                <div class="li-blog-content">
                    <div class="li-blog-details">
                        <h3 class="li-blog-heading pt-25"><a href="blog-details-left-sidebar.html">{post.title}</a></h3>
                        <div style={{color:"#F7941D",fontWeight:"bold"}}> {post.price} dt</div>
                                                <div class="li-blog-meta">
                                                    
                                               
                                                    <a class="author" href="#">  <img src={post.user.avatar}  id="avatar"alt="User"  />_{post.user.fullname}</a>
                                                    <a class="comment" href="#"><i class="fa fa-comment-o"></i> 3 comment</a>
                                                    <a class="post-time" href="#"><i class="fa fa-calendar"></i>{moment(post.createdAt).fromNow()}</a>
                                                </div>
                                                <h6 style={{fontWeight:"inherit"}}>description:</h6>
                                                <p>{post.content.slice(0, 40)}</p>
                                                     <a class="read-more" href="blog-details-left-sidebar.html" style={{color:"#333",fontWeight:"bold"}}>More detail...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                         ))}
          
                                <div class="col-lg-12">
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
                                </div>
                         

                                
                            </div>}
                        </div>
                    </div>
                </div>
  </div>
  </div>
  
  )
}
