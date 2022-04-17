import React from 'react'
import { Link } from 'react-router-dom'
import { Navlogin } from '../../components/Navlogin/Navlogin'
import Blogo from "../../Images/Blogo.png"


const Signup = () => {
  return (
    <>
      <div className="login-page">
          <Navlogin/>
            
            <form className="login-form">
              <div className='form-head'>
              <div className="Blogo">
                <img src={Blogo} alt="Blogo" />
            </div>
            <h2>Sign Up</h2>
              </div>
              
            <div className='inner-form'>
                <label for="uname">Full Name:</label><br/>
                <input type="text" placeholder='Shyama Amatya' name="uname" required /><br />
                <label for="email">Email Id:</label><br/>
                <input type="text" placeholder='shyama@gmail.com' name="emal" required /><br />
                <label for="uname">Phone Number:</label><br/>
                <input type="text" placeholder='phone number' name="uname" required /><br />
                <label for="uname">Address:</label><br/>
                <input type="text" placeholder='Pepsicola, Kathmandu' name="uname" required /><br />
                <label for="uname">Create Password:</label><br/>
                <input type="text" placeholder='.........' name="uname" required /><br />
                <label for="psw">Confirm password:</label><br/>
                <input type="password" placeholder='.........' name="psw" required />
                <button type="submit">Sign Up</button>
                
            <div className="links-button">
                <div className="links">
                    <h5>Already have an account?</h5>
                <Link to="/" className='signup'>Sign In.</Link>

                   
                </div>
                
            </div>

            </div>
            </form>
                       
        </div>

    </>
  )
}

export default Signup