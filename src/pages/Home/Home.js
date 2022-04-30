import React, { useEffect } from 'react'
import Blogo from '../../Images/Blogo.png'
import qu from '../../Images/qu.png'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'

import Navbar from '../../components/Navbar/Navbar'
import { message } from 'antd'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const id = localStorage.getItem('id')
    if (!id) {
      message.error('You are not authoriced to visit this page')
      navigate('/')
    }
  }, [])
  return (
    <>
      <Navbar />
      <div className='home-page'>
        <div className='banner'>
          <div className='home'>
            <div className='form-head'>
              <div className='Blogo'>
                <img src={Blogo} alt='Blogo' />
              </div>
              <h2>Welcome to Online Bank Token Bookings!</h2>
            </div>

            <div className='inner-ban'>
              <div className='ban-img'>
                <img src={qu} alt='qu' />
              </div>

              <div className='qu'>
                <p>
                  Tired of staying on lines?
                  <br />
                  Book your token from anywhere and anytime!{' '}
                </p>
              </div>
              {/* <div className='notification'>
              <p>You have no bookings, yet</p>
            </div>
            <div className='notifications'>
                <ul className='notification__lists'>
                  <li className='notification__list'>you have appointent at 12:30 pm </li>
                  <li className='notification__list'>you have appointent at 1:30 pm</li>
                  <li className='notification__list'>you have appointent at 2:30 pm</li>
                  <li className='notification__list'>you have appointent at 3:30 pm</li>
                  <li className='notification__list'>you have appointent at 11:30 am</li>
                </ul>
            </div> */}

              <div className='home-button'>
                <div className='links'>
                  <h5>Click here to generate token.</h5>
                  {/* <Link to="services" className='services'>Generate Token</Link> */}
                </div>
              </div>

              <Link exact className='services' to='/services'>
                <button type='submit'>Generate Token</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
