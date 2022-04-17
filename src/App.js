import './App.css';
import {Route, Routes} from 'react-router-dom';


import Logintab from './pages/Logintab/Logintab';
import Services from './pages/Services/Services';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { User } from './pages/User/User';



function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/home" element={<Home />}/>

      
      <Route path="/" element={<Login />}/>
      <Route path="/user" element={<User />}/>

      {/* <Route exact path="/" element={ <Logintab />} /> */}
      <Route path="/services" element={ <Services />} />
      <Route exact path="/signup" element={ <Signup />} />



      </Routes>
    </div>
  );
}

export default App;
