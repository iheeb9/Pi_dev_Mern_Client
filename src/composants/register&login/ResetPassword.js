import React, {useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {isLength, isMatch} from '../../utils/validation/Validation'


const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function ResetPassword() {
    const [data, setData] = useState(initialState)
    const {token} = useParams()

    const {password, cf_password, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }


    const handleResetPass = async () => {
        if(isLength(password))
            return setData({...data, err: "Password must be at least 6 characters.", success: ''})

        if(!isMatch(password, cf_password))
            return setData({...data, err: "Password did not match.", success: ''})
        
        try {
            const res = await axios.post('/api/resetPassword', {password}, {
                headers: {Authorization: token}
            })

            return setData({...data, err: "", success: res.data.msg})

        } catch (err) {
            err.response.data.msg && setData({...data, err: err.response.data.msg, success: ''})
        }
        
    }


    return (
        
        <div className="fg_pass">
               {err && showErrMsg(err)}
                                   {success && showSuccessMsg(success)}
                                <div class="login-form">
                                    <h4 class="login-title">RESET PASSWORD</h4>
                                    <div class="row">
                                    


                                        <div class="col-md-6 mb-20">
                                            <label>New Password</label>
                                            <input class="mb-0" type="password" placeholder="Password"
                                           onChange={handleChangeInput} value={password} name="password"
                                            style={{background: `${err ? '#fd2d6a14' : ''}`}}/>
                                            <small className="form-text text-danger" style={{textAlign:"start"}}>
                                         {err ? err : ''}
                                        </small>
                                        </div>


                                        <div class="col-md-6 mb-20">
                                            <label>Confirm Password</label>
                                            <input class="mb-0" type="password" placeholder="Confirm Password"
                                            onChange={handleChangeInput} value={cf_password} name="cf_password"
                                            style={{background: `${err? '#fd2d6a14' : ''}`}}/>
                                            <small className="form-text text-danger" style={{textAlign:"start"}}>
                                         {err ? err : ''}
                                        </small>
                                        </div>  

                                      
                                     
                                      


                                   
                                        <div class="col-12">
                                            <button class="register-button mt-0" onClick={handleResetPass}>Reset</button>
                                        </div>
                                   
                                    </div>
                                </div>
{/*                             
                        
            <h2>Reset Your Password</h2>

            <div className="row">
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password}
                onChange={handleChangeInput} />

                <label htmlFor="cf_password">Confirm Password</label>
                <input type="password" name="cf_password" id="cf_password" value={cf_password}
                onChange={handleChangeInput} />         

                <button onClick={handleResetPass}>Reset Password</button>
            </div> */}
        </div>
    )
}

export default ResetPassword
