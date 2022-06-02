import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Navbar from '../../components/Navbar/Navbar'
import { api } from '../../Helper/api'
import './style.css'

const Notification = () => {
  const [notification, setNotification] = useState([])
  const [loading, setLoading] = useState(false)

  //fetching notification data
  useEffect(() => {
    setLoading(true)
    api
      .get(`/notification/${localStorage.getItem('id')}`)
      .then((res) => {
        //storing data in state
        setNotification(res.data.notifications)
        setLoading(false)
      })

      .catch((error) => {
        setLoading(false)

        toast.error(error?.message)
      })
  }, [])
  return (
    <>
      <Navbar />
      <div className='notif-page'>
        <div className='inner-notif'>
          {/* //shown if user doesnt have notification */}
          {notification.length === 0 && !loading && (
            <div className='notification'>
              <p>You have no bookings, yet</p>
            </div>
          )}

          {/* //shown while fetching data */}
          {loading && <Spin />}
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
