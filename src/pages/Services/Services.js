import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./style.css"

import { Select, Tabs } from 'antd';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;

const { Option } = Select;

const Services = () => {
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

            
            
            <Link exact className="user" to="/user"><button type="submit" className='generate'>Generate Token</button></Link>

            <p className='rush'>In a Rush? Get your work done right away by buying a token in the front lines.</p>

            <button type="submit" className='buy'>Buy a Token</button>

            </div>
  
    </div>
  )
}

export default Services