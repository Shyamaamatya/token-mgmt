import './App.css'
import { Route, Routes } from 'react-router-dom'
import Services from './pages/Services/Services'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Notification from './pages/Notification/Notification'
import { User } from './pages/User/User'

import Buytoken from './pages/Buytoken/Buytoken'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<Home />} />

        <Route path='/' element={<Login />} />
        <Route path='/user' element={<User />} />
        <Route path='/services' element={<Services />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/buytoken' element={<Buytoken />} />
        <Route exact path='/notification' element={<Notification />} />
      </Routes>
    </div>
  )
}

export default App
