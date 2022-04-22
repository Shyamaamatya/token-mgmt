// 

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navlogin } from '../../components/Navlogin/Navlogin'
import { api } from '../../Helper/api'
import Blogo from '../../Images/Blogo.png'
import axios from 'axios'
import './style.css'

function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [values, setValues] = useState({
    email: '',
    password: '',
    remember: false,
  })
  const [error, setError] = useState({ email: '', password: '' });
  const [responseMsg , setResponseMsg] = useState("")


  const handelChange = (e) => {
    setValues({ ...values, [e?.target?.name]: e?.target?.value })
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log({ values })
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   api.get('.login', {
  //   params: {
  //   email: values.email,
  //   password: values.password,
  //   },
  //   })
  //   console.log({ values })
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault()

api.post('/user/login', {
    email: values.email,
    password: values.password,
    },
    ).then((res)=>{
      setResponseMsg("success")
    })
    .catch((error)=>{
      setResponseMsg("Email or password incorrect")
    })
// const article = { title: 'React POST Request Example' };
// const response = await axios.post('https://reqres.in/api/articles', article);
    }

  return (
    <>
      <Navlogin />
      <div className='login-page'>
        <form onSubmit={handleSubmit} className='login-form'>
          <div className='form-head'>
            <div className='Blogo'>
              <img src={Blogo} alt='Blogo' />
            </div>
            <h2>Login</h2>
          </div>
            {responseMsg.length>0 && <div>{responseMsg}</div>}
          <div className='inner-form'>
            <label for='uname'>Username or Email:</label>
            <br />
            <input
              type='email'
              name='email'
              onChange={handelChange}
              value={values.email}
              placeholder='email'
            />
            {error.email && <span className='error'>{error.email}</span>}
            <br />
            <label for='psw'>Password:</label>
            <br />
            <input
              type='password'
              name='password'
              required
              onChange={handelChange}
              value={values.password}
              placeholder='Password'
            />
            {error.password && <span className='error'>{error.password}</span>}
            <Link to='#' className='forgot'>
              Forgot password?
            </Link>
            <button type='submit' disabled={isSubmitting}>
              Login
            </button>

            <div className='links-button'>
              <div className='links'>
                <h5>Don't have an account?</h5>
                <Link to='signup' className='signup'>
                  Sign up now.
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
