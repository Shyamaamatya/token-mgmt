import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './style.css'
import { FaUserCircle } from 'react-icons/fa'
// import UserData from './UserData'
import { api } from '../../Helper/api'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

export const User = () => {
  const [tokenData, setTokenData] = useState({})
  const [userDetail, setUserDetail] = useState({})

  const navigate = useNavigate()

  //redirecting user if user is not logged in
  useEffect(() => {
    const id = localStorage.getItem('id')
    if (!id) {
      message.error('You are not authoriced to visit this page')
      navigate('/')
    }
  }, [])

  //for logging out
  const handleLogOut = () => {
    localStorage.clear()
    navigate('/')
  }

  const handleQuit = () => {
    try {
      api.post(`/token/quit/${localStorage.getItem('tokenid')}`).then((res) => {
        fetchUserData()
      })
    } catch (error) {
      message.error("Couldn't fetch your data")
      console.log({ error })
    }
  }

  const fetchUserData = () => {
    try {
      api.get(`/user/${localStorage.getItem('id')}`).then((res) => {
        console.log('res', res)
        // console.log({ res })
        setUserDetail({ user: res?.data?.user, token: res?.data?.token[0] })
        setTokenData(res?.data)
        localStorage.setItem('tokenid', res?.data?.token[0]?._id)
      })
    } catch (error) {
      message.error("Couldn't fetch your data")
      console.log({ error })
    }
  }

  //getting user data
  useEffect(() => {
    fetchUserData()
    // try {
    //   api.get(`/user/${localStorage.getItem('id')}`).then((res) => {
    //     console.log('res', res)
    //     // console.log({ res })
    //     setUserDetail({ user: res?.data?.user, token: res?.data?.token[0] })
    //     setTokenData(res?.data)
    //     localStorage.setItem('tokenid', res?.data?.token[0]?._id)
    //   })
    // } catch (error) {
    //   message.error("Couldn't fetch your data")
    //   console.log({ error })
    // }
  }, [])
  return (
    <div>
      <Navbar />
      <div className='main'>
        <h2>Welcome to Online Bank Token Bookings!</h2>

        <div className='dp'>
          <FaUserCircle fontSize={40} />
        </div>
        <ul className='user__details'>
          {/* {UserData.map((item, index) => {
            return (
              <li key={index} className='user__list'>
                <span className='user__title'>{item.title}</span>:{item.value}
              </li>
            )
          })} */}
          <li className='user__list'>
            <span className='user__title'>Name</span>:{userDetail?.user?.name}
          </li>
          <li className='user__list'>
            <span className='user__title'>Email</span>:{userDetail?.user?.email}
          </li>
          <li className='user__list'>
            <span className='user__title'>Phone Number</span>:
            {userDetail?.user?.phone_number}
          </li>
          <li className='user__list'>
            <span className='user__title'>Address</span>:
            {userDetail?.user?.address}
          </li>

          <li className='user__list'>
            <span className='user__title'>Token Status</span>:
            {userDetail?.token?.status}
          </li>
          <li className='user__list'>
            <span className='user__title'>Token Number</span>:
            {userDetail?.token?.code}
          </li>
        </ul>
        <div className='line-buttons'>
          <button onClick={handleQuit} type='submit' className='line'>
            Quit Line
          </button>
        </div>
        <div>
          <button onClick={handleLogOut} type='submit' className='logout'>
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}
