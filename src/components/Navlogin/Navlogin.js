import React from 'react'
import { Link } from 'react-router-dom'
import Blogo from "../../Images/Blogo.png"
import "./style.css";
import {FaUserCircle} from "react-icons/fa";



export const Navlogin = () => {
  return (
    <>
    <div className="navlogin">
      <div className="logologin">
          <img src={Blogo} alt="Blogo" />
      </div>

    <ul className="navlogin-right">
      <Link exact className="Linklogin" to="/">
        <li>Login</li>
      </Link>
      <Link exact className="Linklogin" to="/signup">
        <li>Sign Up</li>
      </Link>
      <Link exact className="user" to="/user">
        <li><FaUserCircle/></li>
      </Link>
      
    </ul>
  </div>
  </>
  )
}
