

import React, { useState } from 'react';
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import "../login.css"


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword]  = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <center>
    <form onSubmit={handleSubmit} className="Login">
        <h3 className='loginh3'>Sign in</h3>
        <div className="form-group">
          <label>Email:</label>
          <div className="input-wrapper">
            <FaGoogle className="input-icon" />
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <div className="input-wrapper">
            <FaApple className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <div className="form-footer">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#forgot-password" className="forgot-password">Forgot password?</a>
        </div>
        <button type="submit" className="login-button">Sign in</button>
        <div className="signup-link">
          <p>Don't have an account? <a href="#signup">Sign Up</a></p>
          <p>Or with</p>
          <button type="button" onClick={handleGoogleLogin} className="social-login">
            <FaGoogle /> Sign in with Google
          </button>
        </div>
      </form> 
      </center>
  );
};

export default LoginForm;