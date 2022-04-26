
import { image } from 'fontawesome';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment'
import Inputcomment from './Inputcomment';
import Comment from './Comment';
import { Link } from 'react-router-dom';

export default function DetailAnnonce(props) {
    const id = props.match.params.id;
    const history=useHistory()

    const {post, auth}=useSelector (state=>state)
    

   const detailpost = post.posts.filter((post) => post._id === id)[0];

   const isActive = index => {
    if(index === 0) return "active";
}
  return (
    <div>
        <div class="breadcrumb-area">
                        <nav aria-label="breadcrumb ">
    <ol class="breadcrumb " >
                                    
        <li class="breadcrumb-item " style={{marginLeft:"175px"}}><Link to={'/annonce'}>annonce</Link></li>
        <li class="breadcrumb-item active " aria-current="page">userProfile</li>
    </ol>
    </nav>
            </div>
       <div class="li-main-blog-page li-main-blog-details-page pt-60 pb-60 pb-sm-45 pb-xs-45 " style={{textAlign:"start"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 order-lg-1 order-2">
                            <div class="li-blog-sidebar-wrapper">
                            <div  >
                        <div class="card-container  ">
	<span class="pro">New</span>
   
        	<img class="round" src={detailpost?.user.images} alt="user" style={{width:"100px  ",height:"100px"}}/>
  

	<h3>{detailpost?.user.fullname}</h3>
	
	<p>{detailpost?.user.email} </p>
    <button class="primary ghost"style={{border:"none"}} >
        {detailpost?.user.mobile}
		</button>
	<div class="buttons">
		
		<button class="primary " style={{border:"none"}}>
			 profil..
		</button>
	</div>
	<div class="skills">
	<h6>...</h6>
	</div>
    </div>
</div>

                                
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
                              
                            </div>
                        </div>
                        <div class=" offset-1 col-lg-7 order-lg-2 order-1">
                            <div class="row li-main-content">
                                <div class="col-lg-12">
                        <div class="li-blog-single-item pb-30">
                        <div class="li-blog-banner" >
                        <div class="preview-pic tab-content offset-4 col-lg-8">
                      {detailpost?.images.map((img,index)=>(
                          
      <div className={`tab-pane ${isActive(index)}`} id={`pic-${index}`}><img src={img.url} /></div>
                      ))}
						</div>
						<ul class="preview-thumbnail nav nav-tabs" style={{width:"300px   "}}>
					
                        {detailpost?.images.map((img,index)=>(
                          
                          <li class={isActive(index)}><a data-target={`#pic-${index}`} data-toggle="tab"><img src={img.url} style={{maxHeight:"50px",minHeight:"50px",minWidth:"50px",maxWidth:"100"}}/></a></li>
						                  ))}
							</ul>      </div>
                                        <div class="li-blog-content">
                                            <div class="li-blog-details">
                                                <h3 class="li-blog-heading pt-25"><a >{detailpost?.title}</a></h3>
                                                <div class="li-blog-meta">
                                                    
                                             <a class="post-time" href="#"><i class="fa fa-thumbs-up"></i>{detailpost?.likes.length}</a>
                                             <a class="comment" href="#"><i class="fa fa-comment-o"></i> {detailpost?.comments.length} comment</a> 
                                             
                                                <a class="post-time" href="#"><i class="fa fa-calendar"></i>{moment(detailpost?.createdAt).fromNow()}</a><br/>
                                                </div>
                                                
                                                <p>{detailpost?.cathegorie}</p>
                                                <div class="li-blog-blockquote">
                                                    <blockquote>
                                                        <p>{detailpost?.content}</p>
                                                    </blockquote>
                                                </div>
                                                <p>{detailpost?.location}</p>
                                              
                                              <div class="li-tag-line">
                                                    <h4>tag:</h4>
                                                    <a >{detailpost?.tags}</a>
                                                </div>
                              
                                            </div>
                                        </div>
                                    </div>
                                    <div class="li-comment-section">
                                        <h3>{detailpost?.comments.length} comments </h3>
                                        <ul>

                                            
                                            {detailpost &&<Comment post={detailpost} />}
                                            {detailpost &&<Inputcomment post={detailpost}/>}
                                            
                                            
                                        </ul>
                                    </div>
                              
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
