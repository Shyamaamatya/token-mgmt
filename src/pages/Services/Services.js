import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./style.css"

import { Select, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { TimePicker } from 'antd';
import moment from 'moment';
import { api } from '../../Helper/api';
import { toast } from 'react-toastify';

// const onChange = (time, timeString) => {
//   console.log(time, timeString);

// }


const Services = () => {
  const [data, setData] = useState({
    time: " ",
    purpose: " ",

  })

  const [selectedData, setSelectedData] = useState([]);

  const handleChange = (e) => {
    setSelectedData(e);
    console.log({e});
  }

  const handle= (e) => {
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  const format = 'HH:mm';
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
  const id = await localStorage.getItem("id")
  e.preventDefault();
  api.post(`/token/${id}`
  ).then((res)=>{
  console.log(res)
  })
  
  .catch((error)=>{
  toast.error(error?.message)
  })
  }
  const { TabPane } = Tabs;

const { Option } = Select;
  return (
    <div>
        <header>
            <Navbar />
            </header>
            <div className='services'>
            <div className='services-head'>
              <h2>Book A Token.</h2>
              </div>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Transaction" key="1">
                {/* <Select
                showSearch
                placeholder="Select a transaction"
                optionFilterProp="children"
                onChange={(e) => handleChange(e)} 
                id="purpose"
                value={data.purpose}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }
              > */}
              <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Select a transaction"
              defaultValue={['a10', 'c12']}
              onChange={handleChange} 
            >
                  <Option value="Withdraw">Withdraw</Option>
                  <Option value="Cash Renewal">Cash Renewal</Option>
                  <Option value="Deposit">Deposit</Option>
              </Select>
              </TabPane>
              <TabPane tab="Documentation" key="2">
                <Select
                showSearch
                placeholder="Select a documentation"
                optionFilterProp="children"
                // onChange={onChange}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }
              >
                  <Option value="Create a new account">Create a new account</Option>
                  <Option value="Loan">Loan</Option>
                  <Option value="Create credit card">Create credit card</Option>
                  <Option value="Create credit card">Create check book</Option>

              </Select>
              </TabPane>
            </Tabs>

            <div className='time'>
              <p>Time:</p>
              <div className='timepicker' onChange={(e) => handle(e)} value={data.time}><TimePicker defaultValue={moment('12:08', format)} format={format} /></div>
              {/* <TimePicker.RangePicker /> */}
  {/* <TimePicker onChange={onChange} defaultOpenValue={moment('00:00', 'HH:mm')} /> */}
{/* ); */}
            </div>

            
            
            <button onSubmit={generateToken} className='generate'>Generate Token</button>

            <p className='rush'>In a Rush? Get your work done right away by buying a token in the front lines.</p>

            <Link exact className="user" to="/buytoken"><button type="submit" className='buy'>Buy a Token</button></Link>

            </div>
  
    </div>
  )
}

export default Services