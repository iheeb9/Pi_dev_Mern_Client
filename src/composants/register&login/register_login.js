import React, { useState } from 'react'
import Register from './register'
import { useDispatch, useSelector } from 'react-redux'
import {login,register} from '../../redux/action/authAction'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login';
import { Link, useHistory } from 'react-router-dom'
import Navbar from "../Navbar/Navbar";  

const initialStateg = {
  email: '',
  password: ''
}
export default function Login() {

  const [user, setUser] = useState(initialStateg)
  const initialState = { email:'', password: '',err: '', success: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData
  const history = useHistory()
 
  const handleChangeInput =e=>{
    const {name,value}=e.target
    setUserData({...userData,[name]:value})
    }
    const dispatch=useDispatch()
  const handleSubmit = e => {
      e.preventDefault()
      dispatch (login(userData))
    }

    const responseGoogle = async (response) => {
      try {
         // const res = await axios.post('/api/google_login', {tokenId: response.tokenId})
             
         
          
          //  dispatch (register(res.data.user,res.data.user.images))
        
            localStorage.setItem('firstLogin', true)
           
          

      } catch (err) {
          err.response.data.msg && 
          setUserData({...userData, err: err.response.data.msg, success: ''})
      }
  }
  return (

    <div>
          <nav aria-label="breadcrumb ">
  <ol class="breadcrumb " >
                                
    <li class="breadcrumb-item " style={{marginLeft:"175px"}}><a href="#">Home</a></li>
    <li class="breadcrumb-item active " aria-current="page">register_login</li>
  </ol>
</nav>

        <div class="page-section mb-60">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                            <form  onSubmit={handleSubmit}>
                                  <div class="login-form">
                                    <h4 class="login-title">Login</h4>
                                    <div class="row">
                                        <div class="col-md-12 col-12 mb-20">
                                            <label>Email Address*</label>
                                            <input class="mb-0" type="email" placeholder="Email Address" 
                                            onChange={handleChangeInput} value={email} name="email"/>
                                        </div>
                                        <div class="col-12 mb-20">
                                            <label>Password</label>
                                            <input class="mb-0" type="password" placeholder="Password"
                                            onChange={handleChangeInput} value={password} name="password" />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="check-box d-inline-block ml-0 ml-md-2 mt-10">
                                                <input type="checkbox" id="remember_me"/>
                                                <label for="remember_me">Remember me</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mt-10 mb-20 text-left text-md-right">
                                        <Link to="/ForgotPassword">Forgot your password?</Link>
                                        </div>
                                        <div class="col-md-12">
                                            <button class="register-button mt-0"  >Login</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                                    <div className="social">
                <GoogleLogin
                    clientId="945006872248-2sj5j0e6eu1ungefd3fnpo0k1mrgsu64.apps.googleusercontent.com"
                    buttonText="Login with google"
                    onSuccess={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            

            </div>
                        </div>
                
                     <Register/>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
           
    </div>
  )
}
