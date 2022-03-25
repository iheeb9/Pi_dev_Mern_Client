import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { register,ForgotPassword } from '../../redux/action/authAction'

export default function Register() {
    const { auth, notif } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const initialState = { 
       email: ''
    }
    const [userData, setUserData] = useState(initialState)

    
    const {  email} = userData

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(ForgotPassword(userData))
     
    }
    // useEffect(()=>{
    //     if ( auth.token) history.push("/")

    // },[auth.token,history])
  return (
            
                            <form onSubmit={handleSubmit}>
                                <div class="login-form">
                                    <h4 class="login-title">FORGOT PASSWORD</h4>
                                    <div class="row">

                                        
                                        



                                        <div class="col-md-12 mb-20">
                                            <label>Email Address*</label>
                                            <input class="mb-0" type="email" placeholder="Email Address" name="email"
                                             onChange={handleChangeInput} value={email}
                                            style={{background: `${notif.email ? '#fd2d6a14' : ''}`}}/>
                                            <small className="form-text text-danger" style={{textAlign:"start"}}>
                                         {notif.email ? notif.email : ''}
                                        </small>
                                        </div>



                                      
                                     
                                
           
                                        <div class="col-12">
                                            <button class="register-button mt-0">Verify email </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        
    
  )
}
