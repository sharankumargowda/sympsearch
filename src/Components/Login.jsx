import React from 'react'
import "../login.css"

function Login() {
  return (
  <center><div  className="form-group">

    <h1>Login</h1>

    <input className="input-wrapper" type='Email' placeholder='Enter email' name='email'/>
    <input  className="input-wrapper" placeholder='Enter password' name='password'/>

    </div>
    </center>
  )
}

export default Login