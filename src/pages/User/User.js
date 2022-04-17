import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./style.css"
import {FaUserCircle} from "react-icons/fa";
import UserData from './UserData';


export const User = () => {
  return (
    <div>
        <Navbar />
        <div className='main'>
            <h2>Congratulations!</h2>
            <h5>Welcome to Online Bank Token Bookings!</h5>

            <div className='dp'><FaUserCircle fontSize={40} /></div>
            <ul className='user__details'>
              {
                UserData.map((item, index) => {
                  return (
                    <li key={index} className= 'user__list'><span className='user__title'>{item.title}</span>:{item.value}</li>
                  )
                })
              }
              {/* <li>Name:</li>
              <li>Email:</li>
              <li>Account No.:</li>
              <li>Token No.:</li>
              <li>Time:</li>
              <li>Line No.:</li>
              <li>Counter No.:</li> */}
            </ul>
            <div className='line-buttons'>
            <button type="submit" className='line'>Quit Line</button>
            <button type="submit" className='line'>Snooze</button>
            </div>
        </div>
    </div>
  )
}
