import React, { useState } from 'react'
import { api } from '../../Helper/api'
import myKey from './KhaltiKeys'
import axios from 'axios'
import KhaltiCheckout from 'khalti-checkout-web'
import { message, Modal } from 'antd'
import { toast } from 'react-toastify'

const Khalti = ({ line, time, purpose }) => {
  const [data, setData] = useState({})
  const [ismodelopen, setIsmodelopen] = useState(false)

  let config = {
    // replace this key with yours
    publicKey: myKey.publicTestKey,
    productIdentity: '1234567890',
    productName: 'Bank Token Management System',
    productUrl: 'http://localhost:3000',
    eventHandler: {
      onSuccess(payload) {
        generateToken()
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error)
      },
      onClose() {
        console.log('widget is closing')
      },
    },
    paymentPreference: [
      'KHALTI',
      'EBANKING',
      'MOBILE_BANKING',
      'CONNECT_IPS',
      'SCT',
    ],
  }

  const generateToken = async () => {
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

  const handleCheckout = () => {
    if (line) {
      let checkout = new KhaltiCheckout(config)
      checkout.show({ amount: 5000 })
      console.log(checkout)
    } else {
      message.error('Please select the line number!')
    }
  }

  let buttonStyles = {
    backgroundColor: '#4D286D',
    padding: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    border: '1px solid white',
    borderRadius: '10px',
    color: '#ffffff',
  }

  return (
    <div>
      <button onClick={() => handleCheckout()} style={buttonStyles}>
        Pay Via Khalti
      </button>
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

export default Khalti
