import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Navbar from '../../components/Navbar/Navbar';
import { api } from '../../Helper/api';
import "./style.css"

const Notification = () => {
  const [notification, setNotification] = useState([])
  useEffect(() => {
    api.get(`/notification/${localStorage.getItem("id")}`
      ).then((res)=>{
        setNotification(res.data.notifications)
        console.log(res.data.notifications)
        console.log(notification)
      })
      
      .catch((error)=>{
        toast.error(error?.message)
      })
  }, [])
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
                  {notification.map((item) => {
                  return <li className='notification__list'>{item.message} </li>
                  })}
                </ul>
            </div>
            </div>
            </div>
    </>
  )
}

export default Notification