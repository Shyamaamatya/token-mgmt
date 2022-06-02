import React, { useEffect, useState } from 'react'
import Khalti from '../../components/Khalti/Khalti'
import Navbar from '../../components/Navbar/Navbar'
// import Tabs from '../Logintab/Logintab';
import { message, Select, Tabs } from 'antd'

import './style.css'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const Buytoken = () => {
  const location = useLocation() //react router hooks
  const navigate = useNavigate()
  const [time, setTime] = useState('')
  const [purpose, setPurpose] = useState('')
  const [line, setLine] = useState('')

  //storing user selected line
  function handleLineChange(value) {
    setLine(value)
  }

  // const handelClickPay = () => {
  //   if (line) {
  //     navigate('/buytoken', { state: { time, purpose, line } })
  //   } else {
  //     message.error('Please select the line number!')
  //   }
  // }

  const { TabPane } = Tabs
  const { Option } = Select

  //getting state value from useLocation and redirecting user if state value is not found
  useEffect(() => {
    if (location?.state?.time && location?.state?.purpose) {
      setPurpose(location?.state?.purpose)
      setTime(location?.state?.time)
    } else {
      navigate('/services')
    }
  }, [location])
  console.log({ time, purpose })
  return (
    <>
      <Navbar />
      <div>
        <div className='services'>
          <div className='services-head'>
            <h2>Buy A Token.</h2>
            <p>Book tokens for transaction purpose or Documentation purpose.</p>
          </div>
          <Tabs defaultActiveKey='1'>
            <TabPane tab='Line Number' key='1'>
              <Select
                defaultValue='Select the line number you want to buy a token for'
                style={{ width: 268 }}
                onChange={handleLineChange}
              >
                <Option value='linenumber2'>Line number 2</Option>
                <Option value='linenumber4'>Line number 4</Option>
              </Select>
            </TabPane>
          </Tabs>
          <p>The following spot in the queue are available to be bought.</p>

          <div className='pay'>
            {/* <button onClick={handelClickBuyToken}> */}
            <Khalti line={line} time={time} purpose={purpose} />
            {/* </button>{' '} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Buytoken
