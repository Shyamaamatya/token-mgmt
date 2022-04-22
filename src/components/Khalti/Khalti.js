import React from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import config from './KhaltiConfig';
const Khalti = () => {
    let checkout = new KhaltiCheckout(config);

    let buttonStyles = {
        backgroundColor: '#4D286D',
        padding: '10px',
        cursor: 'pointer',
        fontWeight: 'bold',
        border: '1px solid white',
        borderRadius: '10px',
        color: '#ffffff'
    }

  return (
    <div>
        <button onClick={() => checkout.show({amount: 5000})} style={buttonStyles}>Pay Via Khalti</button>
    </div>
  )
}

export default Khalti