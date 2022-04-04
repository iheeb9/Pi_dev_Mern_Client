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
const initialState = {
    fullname: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

export default function UserProfile(props) {
   
   
    const {notif,auth,user}=useSelector (state=>state) 
    const Myuser = auth.user
    const {post} =useSelector(state=>state)
    const a=props.match.params.id
    const profile = user.users.filter((u) => u._id ===a)[0];
   // console.log(profile)
    const history = useHistory()

    const [imageUpdate,setimageUpdate]=useState([])
    
    const initialState = { 
        _id:'',fullname: '', username: '', email: '', password: '', cf_password: '', gender: 'male',mobile:'',images:[]
    }
  
    const [userData, setUserData] = useState(initialState)
    const {_id,fullname, username, email, mobile,images} = userData
    let k=''+_id 
    const [egale,setegale]=useState(false)
    const [i,seti]=useState(false)
    const dispatch=useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
       dispatch (UpdateUser(userData,imageUpdate,auth,a,history))  
      }
      const deleteImage=(index)=>{
        const newArr=[...images]
         newArr.splice(index,1)
         setimageUpdate(newArr) 
        }
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
            setimageUpdate([...imageUpdate,...newImages])
         }

    const handleChangeInput =e=>{
        const {name,value}=e.target
        setUserData({...userData,[name]:value})
        }

        useEffect(()=>{
        if (auth.token)      
                setUserData(Myuser)        
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
<span class="pro"> {k==a? <h6>My Account</h6> : <h6>Account</h6>} </span>  <br/>
{userData.images.map((image)=><img class="round" src={image.url} alt="user" style={{width:"170px  ",height:"200px"}}/>
   )}
   <br/>   
	 { i==true ?
     <form  onSubmit={handleSubmit}>
	           <div className="form-group">
                    <label htmlFor="name">fullname </label>
                    <input type="text" name="fullname" id="fullname" 
                    placeholder="Your fullname" onChange={handleChangeInput} value={fullname}
                    style={{background: `${notif.fullname ? '#fd2d6a14' : ''}`}} />
                                            
                    <small className="form-text text-danger" style={{textAlign:"start"}}>
                     {notif.fullname ? notif.fullname : ''}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="name">username</label>
                    <input type="text" name="username" id="username" 
                    placeholder="Your username" onChange={handleChangeInput}
                    value={username.toLowerCase().replace(/ /g, '')}
                    style={{background: `${notif.username ? '#fd2d6a14' : ''}`}}/>
                 <small className="form-text text-danger" style={{textAlign:"start"}}>
              {notif.username ? notif.username : ''}
             </small>
                </div>
                <div className="form-group">
                    <label htmlFor="name">mobile</label>
                    <input type="text" name="mobile" id="mobile" 
                    placeholder="Your mobile" onChange={handleChangeInput} value={mobile}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" 
                    placeholder="Your email address"disabled  value={email}
                    style={{background: `${notif.email ? '#fd2d6a14' : ''}`}}/>
                                            <small className="form-text text-danger" style={{textAlign:"start"}}>
                                         {notif.email ? notif.email : ''}
                                        </small>
                </div>
                        <div class="form-group">
							<div class="single-head">
                               <div class="single-info">
                               <h4 class="title"> Add photo</h4>
									
                                    <div class="col-lg-6 input_images" style={{position:"relative", display:"flex"}}>
                                            <div className='file_upload' style={{overflow:"hidden",margin:"0 10px",position:"relative"}} >
                                            <i className='fas fa-image' style={{fontSize:"2rem",cursor:"pointer",color:"#F7941D"}}/>
                                            <input type='file' name='file' id='file'
                                            multiple accept='image/*'style={{position:"absolute",top:"0",left:"0",opacity:"0",}} 
                                            onChange={handleChangeImages}/>
                                            </div>
                                            
										</div>
                                      
									<ul>
										<li>Your photo will display here...</li>
									</ul>
								</div>
								<div class="show_images " >
								{ 
                                   imageUpdate.map((img,index)=>(
                                        <div key={index} id="file_img ">
                                              <button  onClick={()=>deleteImage(index)} type="button" class="close" aria-label="Close" style={{color:"#F7941D"}}>
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                    <img src={img.url ? img.url:URL.createObjectURL(img)  }
                                             alt="images"  style={{width:"250px  "}} ></img>
                                         
                                             <hr></hr>
                                        </div>
                                    ))
                                }
								</div>
                                </div>
                                </div>


               
	<div class="buttons">
		<button class="primary">
			update
		</button>
		
	</div>
    </form>  :

          <div>
             <h3>{fullname}</h3>
	<h6>{username}</h6>
	<p>{email}<br/>{mobile}</p>
    { k==a ?
    <div class="buttons">
		<button class="primary" onClick={() => seti(true)}>
			update
		</button>
	</div> : null }

    
              </div>
             
              
              
             }
    
   
	
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
                            {post.user._id==auth.user._id ?  
                           <div class="col-lg-12 col-md-6">
                                
                           <div style={{display:"flex",justifyContent:"end"}} >
              
                         {
                        auth.token
                        ?a==post.user._id
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
                                                  : <h2></h2>} 
                                               </div>
                                        
                            ))}
                        </div>

                    </div>

                </div>
  </div>
  </div>
  
  )
}
