import React from 'react';
import { Link } from 'react-router-dom';
import { Navlogin } from '../../components/Navlogin/Navlogin';
import Blogo from "../../Images/Blogo.png"

import './style.css';

function Login() {
    return (
        <>
        {/* <div className="nav">
        <div className="nav-left">
          <div className="logo">
            <Link exact className="Link" to="/">
              <img src={B} alt="B" />
            </Link>
          </div>
          <div className="input">
            <input
              className="search"
              type="text"
              placeholder="type to search"
            />
          </div>
        </div>
        <ul className="nav-right">
          <Link exact className="Link" to="/Home">
            <li>Home</li>
          </Link>
          <Link exact className="Link" to="/services">
            <li>Services</li>
          </Link>
          
        </ul>
      </div> */}

        <div className="login-page">
          <Navlogin/>
            
            <form className="login-form">
              <div className='form-head'>
              <div className="Blogo">
                <img src={Blogo} alt="Blogo" />
            </div>
            <h2>Login</h2>
              </div>
              
            <div className='inner-form'>
                <label for="uname">Username or Email:</label><br/>
                <input type="text" name="uname" required /><br />
                <label for="psw">Password:</label><br/>
                <input type="password" name="psw" required />
                <Link to="#" className='forgot'>Forgot password?</Link>
                <button type="submit">Login</button>
                
            <div className="links-button">
                <div className="links">
                    <h5>Don't have an account?</h5>
                <Link to="signup" className='signup'>Sign up now.</Link>

                   
                </div>
                
            </div>

            </div>
            </form>
                       
        </div>
        </>
    )
}

export default Login;