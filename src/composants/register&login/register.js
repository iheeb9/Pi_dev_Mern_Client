import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { register } from '../../redux/action/authAction'

export default function Register() {
    const { auth, notif } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const initialState = { 
        fullname: '', username: '', email: '', password: '', cf_password: '', gender: 'male',mobile:''
    }
    const [userData, setUserData] = useState(initialState)

    
    const { fullname, username, email, password, cf_password ,mobile} = userData
    const [images,setimages]=useState([])
    const deleteImage=(index)=>{
        const newArr=[...images]
         newArr.splice(index,1)
         setimages(newArr) 
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
            setimages([...images,...newImages])
         }
  
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (images.length==0)
        return dispatch({type:'NOTIFY',payload:{error:"Please add you Photo"}})
        dispatch(register(userData,images))
     
    }
    useEffect(()=>{
        if ( auth.token) history.push("/")

    },[auth.token,history])
  return (
            <div class="col-sm-12 c ol-md-12 col-lg-6 col-xs-12">
                            <form onSubmit={handleSubmit}>
                                <div class="login-form">
                                    <h4 class="login-title">Register</h4>
                                    <div class="row">

                                        <div class="col-md-6 col-12 mb-20">
                                            <label>Full Name</label>
                                            <input class="mb-0" type="text" placeholder="Full Name" name="fullname"
                                            onChange={handleChangeInput} value={fullname}
                                            style={{background: `${notif.fullname ? '#fd2d6a14' : ''}`}} />
                                            
                                        <small className="form-text text-danger" style={{textAlign:"start"}}>
                                         {notif.fullname ? notif.fullname : ''}
                                        </small>
                                        </div>
                                        

                                        <div class="col-md-6 col-12 mb-20">
                                            <label>User Name</label>
                                            <input class="mb-0" type="text" placeholder="User Name" name="username"
                                            onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')}
                                               style={{background: `${notif.username ? '#fd2d6a14' : ''}`}}/>
                                            <small className="form-text text-danger" style={{textAlign:"start"}}>
                                         {notif.username ? notif.username : ''}
                                        </small>
                                        </div>


                                        <div class="col-md-12 mb-20">
                                            <label>Email Address*</label>
                                            <input class="mb-0" type="email" placeholder="Email Address" name="email"
                                             onChange={handleChangeInput} value={email}
                                            style={{background: `${notif.email ? '#fd2d6a14' : ''}`}}/>
                                            <small className="form-text text-danger" style={{textAlign:"start"}}>
                                         {notif.email ? notif.email : ''}
                                        </small>
                                        </div>


                                        <div class="col-md-6 mb-20">
                                            <label>Password</label>
                                            <input class="mb-0" type="password" placeholder="Password"
                                           onChange={handleChangeInput} value={password} name="password"
                                            style={{background: `${notif.password ? '#fd2d6a14' : ''}`}}/>
                                            <small className="form-text text-danger" style={{textAlign:"start"}}>
                                         {notif.password ? notif.password : ''}
                                        </small>
                                        </div>


                                        <div class="col-md-6 mb-20">
                                            <label>Confirm Password</label>
                                            <input class="mb-0" type="password" placeholder="Confirm Password"
                                            onChange={handleChangeInput} value={cf_password} name="cf_password"
                                            style={{background: `${notif.cf_password ? '#fd2d6a14' : ''}`}}/>
                                            <small className="form-text text-danger" style={{textAlign:"start"}}>
                                         {notif.cf_password ? notif.cf_password : ''}
                                        </small>
                                        </div>  
<br/> <br/>
                                        <div class="col-md-6 mb-20">
                                            <label>Mobile</label>
                                            <input class="mb-0" type="text" placeholder="mobile"
                                           onChange={handleChangeInput} value={mobile} name="mobile"
                                            />
                                            
                                        </div>
                                      
                                     
                                        <div class="col-lg-4 col-12">
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
                                   images.map((img,index)=>(
                                        <div key={index} id="file_img ">
                                              <button  onClick={()=>deleteImage(index)} type="button" class="close" aria-label="Close" style={{color:"#F7941D"}}>
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                    <img src={img.url ? img.url:URL.createObjectURL(img) }
                                             alt="images"></img>
                                         
                                             <hr></hr>
                                        </div>
                                    ))
                                }
								</div>
                                </div>
                                </div>


                                        <div class="col-md-6 mb-20">
                                        <div className="row justify-content-between mx-0 mb-1">
                                            <label>Gendre</label>
                                         <label htmlFor="male">
                                             
                        Male: <input class="malefelameradio" type="radio" id="male" name="gender"
                        value="male" defaultChecked onChange={handleChangeInput} />
                    </label>

                    <label htmlFor="female">
                        Female: <input type="radio" id="female" name="gender"
                        value="female" class="malefelameradio" onChange={handleChangeInput} />
                    </label>

                </div>
                           

                </div>            
                                        <div class="col-12">
                                            <button class="register-button mt-0">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
    
  )
}
