import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./style.css"

const Notification = () => {
  return (
    <>
    <Navbar />
    <div className='notif-page'>
        <div className='inner-notif'>
    <div className='notification'>
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
            </div>
            </div>
            </div>
    </>
  )
}

export default Notification