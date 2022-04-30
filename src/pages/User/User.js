import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './style.css'
import { FaUserCircle } from 'react-icons/fa'
import UserData from './UserData'
import { api } from '../../Helper/api'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

export const User = () => {
  const [tokenData, setTokenData] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    const id = localStorage.getItem('id')
    if (!id) {
      message.error('You are not authoriced to visit this page')
      navigate('/')
    }
  }, [])

  useEffect(() => {
    try {
      api.get(`/user/${localStorage.getItem('id')}`).then((res) => {
        console.log({ res })
        setTokenData(res?.data)
      })
    } catch (error) {
      message.error("Couldn't fetch your data")
      console.log({ error })
    }
  }, [])
  return (
    <div>
      <Navbar />
      <div className='main'>
        <h2>Congratulations!</h2>
        <h5>Welcome to Online Bank Token Bookings!</h5>

        <div className='dp'>
          <FaUserCircle fontSize={40} />
        </div>
        <ul className='user__details'>
          {UserData.map((item, index) => {
            return (
              <li key={index} className='user__list'>
                <span className='user__title'>{item.title}</span>:{item.value}
              </li>
            )
          })}
          {/* <li>Name:</li>
              <li>Email:</li>
              <li>Account No.:</li>
              <li>Token No.:</li>
              <li>Time:</li>
              <li>Line No.:</li>
              <li>Counter No.:</li> */}
        </ul>
        <div className='line-buttons'>
          <button type='submit' className='line'>
            Quit Line
          </button>
          <button type='submit' className='line'>
            Snooze
          </button>
        </div>
      </div>
    </div>
  )
}
