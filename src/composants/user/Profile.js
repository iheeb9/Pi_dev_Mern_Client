import React, {useState, useEffect}  from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import { refreshToken} from '../../redux/action/authAction'
import { UpdateUser} from '../../redux/action/userAction'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import ProgressBar from 'react-bootstrap/ProgressBar'
import moment from 'moment'
import Carousel from '../Annonce/Carousel'
import { deletePost, getPosts, likePost, POST_TYPE } from '../../redux/action/postAction'

import Likebutton from '../Annonce/Likebutton'
import Oneannonce from '../Annonce/oneannonce'
import { Link } from 'react-router-dom'
import { getDataAPI } from '../../utils/AnnoncefetchData'
import Notfound from '../Notfound/Notfound'


export default function UserProfile(props) {
   
   
    const {notif,auth,user}=useSelector (state=>state) 
    const Myuser = auth.user
    const {post} =useSelector(state=>state)
    const a=props.match.params.id
    const profile = user.users.filter((u) => u._id ==a)[0];
   // console.log(profile)
    const history = useHistory()
 
    const [egale,setegale]=useState(false)
    const [i,seti]=useState(false)
    const dispatch=useDispatch()

   

        useEffect(()=>{
           
             },[auth])
      
       
 
  
  return (
    <div style={{textAlign:"left"}}>
      <div class="breadcrumb-area">
                    <nav aria-label="breadcrumb ">
  <ol class="breadcrumb " >
                                
    <li class="breadcrumb-item " style={{marginLeft:"175px"}}><a href="#">Home</a></li>
    <li class="breadcrumb-item active " aria-current="page">userProfile </li>
  </ol>
</nav>
            </div>
            <div class="li-main-blog-page pt-60 pb-55">
      
                <div class="container">
               
              
                    <div class="row">
                        
                    <div className='col-lg-5'>
                        <div class="card-container  ">
<span class="pro">  <h6>Account</h6></span>  <br/>
<img class="round" src={profile.images} alt="user" style={{width:"170px  ",height:"200px"}}/>
   
   <br/>   
	
          <div>
             <h3>{profile.fullname}</h3>
	<h6>{profile.username}</h6>
	<p>{profile.email}<br/>{profile.mobile}</p>
    
   

    
              </div>
             
              
              
             
    
   
	
	<div class="skills">
		<h6>...</h6>
		<ul>
			
		</ul>
	</div>
    </div>
</div>


                        <div class="col-lg-7 order-lg-2 order-1">
                           
                         
                           {post.posts.map((post,index) =>(
                               <div>
                            {post.user._id==profile._id ?  
                           <div class="col-lg-12 col-md-6">
                                
                           <div style={{display:"flex",justifyContent:"end"}} >

                        
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
                                                                    
                                                                <a class="author" href="#">  <img src={post.user?.images}  id="avatar"alt="User"  />_{post.user.fullname}</a>
                                                               
                                                                   
                                                                    
                                                                    <a class="post-time" href="#"><i class="fa fa-calendar"></i>{moment(post.createdAt).fromNow()}</a>
                                                             
                                                                    <a class="post-time" href="#"><i class="fa fa-thumbs-up"></i>{post.likes.length}</a>
                                                                    <a class="comment" href="#"><i class="fa fa-comment-o"></i> {post.comments.length} comment</a> 
                                                                </div>
                                                                
                                                                <h6 style={{fontWeight:"inherit"}}>description:</h6>
                                                                <p>{post.content.slice(0, 40)}</p>
                                                               
                                                                    <Link to={`/detailannonce/${post._id}`} style={{color:"#333",fontWeight:"bold"}}>More info...  </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                  
                                                </div>
                                                  : <h2> </h2>} 
                                               </div>
                                        
                            ))}
                        </div>

                    </div>

                </div>
  </div>
  </div>
  
  )
}
