import React from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import config from './KhaltiConfig';
import { api1 } from '../../Helper/api';
const Khalti = () => {
  
  const handleCheckout = () => {
    let checkout = new KhaltiCheckout(config);
    checkout.show({amount: 5000})
    console.log(checkout)
  }
    

    let buttonStyles = {
        backgroundColor: '#4D286D',
        padding: '10px',
        cursor: 'pointer',
        fontWeight: 'bold',
        border: '1px solid white',
        borderRadius: '10px',
        color: '#ffffff'
    }

    // let data = {
    //   token: payload.token,
    //   amount: payload.amount,
    // };

    // api1.get('/payment/paymentVerify', data, config
    //   ).then((res)=>{
    //     console.log(res.data);
    //     alert("Thankyou!")
    //     // setResponseMsg("success")
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //     // setResponseMsg("Email or password incorrect")
    //   })

  return (
    <div>
        <button onClick={() => handleCheckout()} style={buttonStyles}>Pay Via Khalti</button>
    </div>
  )
}

export default Khalti