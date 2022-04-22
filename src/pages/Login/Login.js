import React from 'react';
import { Link } from 'react-router-dom';
import { Navlogin } from '../../components/Navlogin/Navlogin';
import Blogo from "../../Images/Blogo.png"

import { Formik, Form, withFormik } from "formik";
import * as Yup from "yup";

import './style.css';

function Login() {
  const values = {
    email: '',
    password: '',
    remember: false
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("can't be empty"),
    password: Yup.string()
      .min(8)
      .required("can't be empty")
  });

  const errors = {};
 
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
  
  
    return (
        <>
        
          <Navlogin/>
          <div className="login-page">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              alert("login success");
            }}
          >
          {({
              
              handleChange,
              handleBlur,
              touched,
              handleSubmit,
              isSubmitting
            }) => (
            <form onSubmit={handleSubmit} className="login-form">
              <div className='form-head'>
              <div className="Blogo">
                <img src={Blogo} alt="Blogo" />
            </div>
            <h2>Login</h2>
              </div>

             
              
            <div className='inner-form'>
                <label for="uname">Username or Email:</label><br/>
                <input type="text" name="uname"   
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="email"
                    />
                    {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                    )}
                  <br />
                <label for="psw">Password:</label><br/>
                <input type="password" name="psw" required 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
                />
                {errors.password && touched.password && (
                    <span className="error">{errors.password}</span>
                )}
                <Link to="#" className='forgot'>Forgot password?</Link>
                <button type="submit" disabled={isSubmitting}>Login</button>
                
            <div className="links-button">
                <div className="links">
                    <h5>Don't have an account?</h5>
                <Link to="signup" className='signup'>Sign up now.</Link>

                   
                </div>
                
            </div>

            </div>
            </form>
            )}
            </Formik>
                       
        </div>
        </>
    )
}

export default Login;