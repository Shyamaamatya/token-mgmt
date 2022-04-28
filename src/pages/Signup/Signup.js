import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { Navlogin } from '../../components/Navlogin/Navlogin'
import Blogo from "../../Images/Blogo.png"


const Signup = () => {
  
  const [values, setValues] = useState({
    username: " ",
    email: " ",
    password: " ",
    phonenumber: " ",
    address: "",
    password: "",
    confirmpassword: "",
    remember: false,
  })

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  }

  const handleChange = (e) => {
    setValues({ ...values, [e?.target?.name]: e?.target?.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleValidation();
  }

  const handleValidation = () => {
    const {password, confirmpassword, username, email} = values;
    if (password !== confirmpassword) {
      toast.error(
        "The confirm password should be same as password.", 
        toastOptions
        );
        return false;
    } else if (username.length < 3) {
      toast.error("Username should be greater than 3 characters", toastOptions);
    } else if (password.length < 8) {
      toast.error("Password should be equal or greater than 8 characters", toastOptions);
    return false;
  } else if (email === "") {
    toast.error("email is required", toastOptions);
    return false;
  }
  }

  return (
    <>
      
          <Navlogin/>
          <div className="login-page">
            <form onSubmit={handleSubmit} className="login-form">
              <div className='form-head'>
              <div className="Blogo">
                <img src={Blogo} alt="Blogo" />
            </div>
            <h2>Sign Up</h2>
              </div>
              
            <div className='inner-form'>
                <label htmlFor="username">Full Name:</label><br/>
                <input type="text" placeholder='Shyama Amatya' name="username" required={true} minLength={2} maxLength={20} /><br />
                <label htmlfor="email">Email Id:</label><br/>
                <input type="email" 
                name="email" required 
                onChange={handleChange}
                value={values.email}
                placeholder='email' 
                />
                <br />

                <label for="phonenumber">Phone Number:</label><br/>
                <input type="phonenumber" placeholder='Phone Number' name="phonenumber" required 
                onChange={handleChange}
                value={values.phonenumber}
                /><br />

                <label for="address">Address:</label><br/>
                <input type="text" placeholder='Address' name="address" required 
                onChange={handleChange}
                value={values.address}
                /><br />

                <label for="createpassword">Create Password:</label><br/>
                <input type="password" name="password" required 
                onChange={handleChange}
                value={values.password}
                placeholder='Password'
                />
                <br />
                <label for="psw">Confirm password:</label><br/>
                <input type="password" name="confirmpassword" required 
                onChange={handleChange}
                value={values.confirmpassword}
                placeholder='Confirm Password'

                />
                <button type="submit">Sign Up</button>
                
            <div className="links-button">
                <div className="links">
                    <h5>Already have an account?</h5>
                    <Link to="/" className='signup'>Sign In.</Link>

                   
                </div>
                
            </div>

            </div>
            </form>
            <ToastContainer />
                       
        </div>

    </>
  )
}


export default Signup