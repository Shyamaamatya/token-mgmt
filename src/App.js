import './App.css';
import {Route, Routes} from 'react-router-dom';


import Logintab from './pages/Logintab/Logintab';
import Services from './pages/Services/Services';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { User } from './pages/User/User';

import OneSignal from 'react-onesignal';
import { useEffect } from 'react';
import Buytoken from './pages/Buytoken/Buytoken';



function App() {

  useEffect(() => {
    OneSignal.init({
    appId: "613eeda4-370c-48a8-92ba-525fe9b5e25f"
    });
    }, []);

  return (
    <div className="App">
      <Routes>

      <Route path="/home" element={<Home />}/>

      
      <Route path="/" element={<Login />}/>
      <Route path="/user" element={<User />}/>

      {/* <Route exact path="/" element={ <Logintab />} /> */}
      <Route path="/services" element={ <Services />} />
      <Route exact path="/signup" element={ <Signup />} />
      <Route exact path="/buytoken" element={ <Buytoken />} />




      </Routes>
    </div>
  );
}

export default App;
