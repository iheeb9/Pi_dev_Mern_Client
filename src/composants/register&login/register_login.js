import React, { useState } from 'react'
import Register from './register'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../../redux/action/authAction'
export default function Login() {


  const initialState = { email:'', password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData

  const handleChangeInput =e=>{
    const {name,value}=e.target
    setUserData({...userData,[name]:value})
    }
    const dispatch=useDispatch()
  const handleSubmit = e => {
      e.preventDefault()
      dispatch (login(userData))
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
                                            <a href="#"> Forgotten pasward?</a>
                                        </div>
                                        <div class="col-md-12">
                                            <button class="register-button mt-0"  >Login</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
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
