import React from 'react'
import Khalti from '../../components/Khalti/Khalti';
import Navbar from '../../components/Navbar/Navbar';
import "./style.css"

const Buytoken = () => {
  return (
      <>
      <Navbar />
      <div>
          <div className='buypage'>
              <div className='card'>
                  <Khalti />
                  </div>
          </div>
      </div>
      </>
    
  )
}

export default Buytoken