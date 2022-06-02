import React from 'react'
import Blogo from '../../Images/Blogo.png'
import './style.css'
import { Link } from 'react-router-dom'
import { GrNotification } from 'react-icons/gr'
import { FaUserCircle } from 'react-icons/fa'

const Nav = () => {
  return (
    <>
      <div className='nav'>
        <div className='logo'>
          {/* <Link exact className="Link" to="/"> */}
          <img src={Blogo} alt='Logo' />
          {/* </Link> */}
        </div>

        <ul className='nav-right'>
          <li>
            <Link exact className='Link' to='/Home'>
              Home
            </Link>
          </li>
          <li>
            <Link exact className='Link' to='/services'>
              Services
            </Link>
          </li>
          <li>
            <Link exact className='Link' to='/notification'>
              <GrNotification />
            </Link>
          </li>
          <li>
            <Link exact className='Link' to='/user'>
              <FaUserCircle />
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav
