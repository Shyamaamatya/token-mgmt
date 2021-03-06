import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './style.css'

import { Input, message, Modal, Select, Tabs } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { DatePicker, Space } from 'antd'
import moment from 'moment'
import { api } from '../../Helper/api'
import { toast, ToastContainer } from 'react-toastify'

const Services = () => {
  const [data, setData] = useState({})
  const [ismodelopen, setIsmodelopen] = useState(false)
  const [time, setTime] = useState('')
  const [purpose, setPurpose] = useState('')
  const navigate = useNavigate()

  //Redirectig user to login page if user is not logged in
  useEffect(() => {
    const id = localStorage.getItem('id')
    if (!id) {
      message.error('You are not authoriced to visit this page')
      navigate('/')
    }
  }, [])

  //Storing user input value
  function handlePurposeChange(value) {
    setPurpose(value)
  }

  //handle click buy token
  const handelClickBuyToken = () => {
    //checking if user entered correct value
    if (purpose && time) {
      navigate('/buytoken', { state: { time, purpose } })
    } else {
      message.error('Please select all the value!')
    }
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value)
  }

  const { RangePicker } = DatePicker

  // function range(start, end) {
  //   const result = []
  //   for (let i = start; i < end; i++) {
  //     result.push(i)
  //   }
  //   return result
  // }

  //For generating token
  const generateToken = async (e) => {
    e.preventDefault()

    const id = await localStorage.getItem('id')
    let bodydata = { user: id, purpose: purpose, time: time }
    api
      .post(`/token`, bodydata)
      .then((res) => {
        setData(res.data)
        setIsmodelopen(true)
        console.log(res)
      })

      .catch((error) => {
        toast.error(error?.message)
      })
  }

  const { TabPane } = Tabs

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
  }

  const { Option } = Select
  return (
    <div>
      <header>
        <Navbar />
      </header>
      {/* <form onSubmit={handleSubmit} className="services-form"> */}
      <div className='services'>
        <div className='services-head'>
          <h2>Book A Token.</h2>
        </div>
        <Tabs defaultActiveKey='1'>
          <TabPane tab='Transaction' key='1'>
            <Select
              defaultValue='Select your purpose'
              style={{ width: 248 }}
              onChange={handlePurposeChange}
            >
              <Option value='deposite'>Deposite</Option>
              <Option value='withdraw'>Withdraw</Option>
              <Option value='Cash a check'>Cash a check</Option>
            </Select>
          </TabPane>

          <TabPane tab='Others' key='2'>
            <Select
              defaultValue='Select your purpose'
              style={{ width: 120 }}
              onChange={handlePurposeChange}
            >
              <Option value='create an account'>Create an account</Option>
              <Option value='create checkbook'>Create checkbook</Option>
              <Option value='create ATM card'>Create ATM card</Option>
              <Option value='create online banking'>
                Create online banking
              </Option>
              <Option value='problems with ATM card'>
                Problems with ATM card
              </Option>
              <Option value='create checkbook'>Create checkbook</Option>
            </Select>
          </TabPane>
        </Tabs>

        <div className='time'>
          <p>Time:</p>
          <input
            type='datetime-local'
            id='meeting-time'
            name='meeting-time'
            onChange={handleTimeChange}
          />
        </div>

        <button onClick={generateToken} className='generate'>
          Generate Token
        </button>

        <p className='rush'>
          In a Rush? Get your work done right away by buying a token in the
          front lines.
        </p>

        <button type='submit' className='buy' onClick={handelClickBuyToken}>
          Buy a Token
        </button>
      </div>
      {/* </form> */}

      {/* //Shown if token is successfully generated */}
      <Modal
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        visible={ismodelopen}
        onCancel={() => {
          setIsmodelopen(false)
        }}
      >
        <p>Token Generated Successfully!</p>
        <p>Your Token: {data?.token?.code}</p>
      </Modal>
    </div>
  )
}

export default Services
