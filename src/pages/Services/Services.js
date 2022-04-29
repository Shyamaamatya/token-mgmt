import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./style.css"

import { Input, Select, Tabs } from 'antd';
import { Link } from 'react-router-dom';
// import { TimePicker } from 'antd';
// import moment from 'moment';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { api } from '../../Helper/api';
import { toast, ToastContainer } from 'react-toastify'

// const onChange = (time, timeString) => {
//   console.log(time, timeString);

// }


const Services = () => {
  const [data, setData] = useState({
    time: " ",
    purpose: " ",

  })
  const [time, setTime] = useState("")
  const [purpose, setPurpose] = useState("")

  const [selectedData, setSelectedData] = useState([]);

  function handlePurposeChange(value) {
    setPurpose(value)
  }

  const handleTimeChange = (e) =>{
    setTime(e.target.value)
  }
  const format = 'HH:mm';

  const { RangePicker } = DatePicker;

  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }


  
// const generateToken = (e) => {
//   e.preventDefault();
//   api.post(`/token/${localStorage.getItem("id")}`
//       ).then((res)=>{
//         console.log(res)
//       })
      
//       .catch((error)=>{
//         toast.error(error?.message)
//       })
// }

const generateToken = async(e) => {
  e.preventDefault();

  const id = await localStorage.getItem("id")
  let bodydata = {"user":id,"purpose":purpose,time:time }
  api.post(`/token`, bodydata
  ).then((res)=>{
  console.log(res)
  })
  
  .catch((error)=>{
  toast.error(error?.message)
  })
  }

  const { TabPane } = Tabs;

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const purpose = purpose;

  //   // handleValidation();
  // }

  // const handleValidation = () => {
  //   const time = time;
  //   const purpose = purpose;
  //   if (purpose == '') {
  //     toast.error(
  //       "The confirm password should be same as password.", 
  //       toastOptions
  //       );
  //       return false;
  //   } else if (time == []) {
  //     toast.error("Username should be greater than 3 characters", toastOptions);
  //   }
  //   } else if (password.length < 8) {
  //     toast.error("Password should be equal or greater than 8 characters", toastOptions);
  //   return false;
  // } else if (email === "") {
  //   toast.error("email is required", toastOptions);
  //   return false;
  // }
  // }

const { Option } = Select;
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
            <Tabs defaultActiveKey="1">
              <TabPane tab="Transaction" key="1">
              <Select defaultValue="Select your purpose" style={{ width: 120 }} onChange={handlePurposeChange}>
              <Option value="deposite">Deposite</Option>
              <Option value="withdraw">Withdraw</Option>
              <Option value="Cash a check">Cash a check</Option>
            </Select>
            </TabPane>

            <TabPane tab="Others" key="2">
            <Select defaultValue="Select your purpose" style={{ width: 120 }} onChange={handlePurposeChange}>
              <Option value="create an account">Create an account</Option>
              <Option value="create checkbook">Create checkbook</Option>
              <Option value="create ATM card">Create ATM card</Option>
              <Option value="create online banking">Create online banking</Option>
              <Option value="problems with ATM card">Problems with ATM card</Option>
              <Option value="create checkbook">Create checkbook</Option>

          
            </Select>
              </TabPane>
            </Tabs>

            <div className='time'>
              <p>Time:</p>
              <input type="datetime-local" id="meeting-time"
              name="meeting-time" onChange={handleTimeChange} />
            </div>

            
            
            <button onClick={generateToken} className='generate'>Generate Token</button>

            <p className='rush'>In a Rush? Get your work done right away by buying a token in the front lines.</p>

            <Link exact className="user" to="/buytoken"><button type="submit" className='buy'>Buy a Token</button></Link>

            </div>
            {/* </form> */}
    </div>
  )
}

export default Services