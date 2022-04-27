import React from 'react'
import Khalti from '../../components/Khalti/Khalti';
import Navbar from '../../components/Navbar/Navbar';
// import Tabs from '../Logintab/Logintab';
import { Select, Tabs } from 'antd';

import "./style.css"

const Buytoken = () => {
    const { TabPane } = Tabs;
    const { Option } = Select;
    
  return (
      <>
      <Navbar />
      <div>

      <div className='services'>
            <div className='services-head'>
              <h2>Buy A Token.</h2>
              <p>Book tokens for transaction purpose or Documentation purpose.</p>
              </div>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Transaction" key="1">
                <Select
                showSearch
                placeholder="Select a transaction"
                optionFilterProp="children"
                // onChange={onChange}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }
              >
                  <Option value="Withdraw">Withdraw</Option>
                  <Option value="Cash Renewal">Cash Renewal</Option>
                  <Option value="Deposit">Deposit</Option>
              </Select>
              </TabPane>
              <TabPane tab="Others" key="2">
                <Select
                showSearch
                placeholder="Select an option"
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
            <p>The following spot in the queue are available to be bought.</p>
            <ul>
                <div className='pay'><li className='lineno'>Line number: 2 </li> <Khalti /> </div>
                <div className='pay'><li className='lineno'>Line number: 4 </li> <Khalti /> </div>

            </ul>

            {/* <div className='buypage'>
              <div className='card'>
                  <Khalti />
                  </div>
          </div> */}

            </div>
  
    </div>
      </>
    
  )
}

export default Buytoken