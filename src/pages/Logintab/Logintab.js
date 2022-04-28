// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../../components/Navbar/Navbar';
// import './style.css';


// function Tabs() {
//     const [toggleState, setToggleState] = useState(1);

//   const toggleTab = (index) => {
//     setToggleState(index);
//   };
//     return (
//          <div className="container">
//              <header> <Navbar /> </header>
//             <div className="bloc-tabs">
//                 <button
//                 className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
//                 onClick={() => toggleTab(1)}
//                 >
//                  Login
//                 </button>
//                 <button
//                 className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
//                 onClick={() => toggleTab(2)}
//                 >
//                  Register
//                 </button>
//             </div>

//       <div className="content-tabs">
//         <div
//           className={toggleState === 1 ? "content  active-content" : "content"}
//         >
//             <form>
//                 <input type="text" placeholder="Username or Email" required /><br/>
//                 <input type="email" placeholder="Email" /><br/>
//                 <button className="submit-btn">Login</button><br/>
//                 <Link to="#" className="forgot-psw">Forgot Password?</Link>
//             </form>
//         </div>

//         <div
//           className={toggleState === 2 ? "content  active-content" : "content"}
//         >
//             <form>
//                 <input type="text" placeholder="Username" required /><br/>
//                 <input type="email" placeholder="Email (no confirmation needed)" /><br />
//                 <input placeholder="Password"/><br/>  
//                 <input placeholder="Confirm Password" /><br />
//                 <p>By clicking Register, you agree to our <Link to="#" className="termsandcondin">Terms and Conditions.</Link>  </p>  
//                 <button className="submit-btn"> Register</button>
//             </form>
//         </div>
//       </div>
//         </div>
//     )
// }

// export default Tabs;
