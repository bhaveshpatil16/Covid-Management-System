import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import SendStock from './SendStock';

//import './beamlogo.png';
import flag from '../assets/images/flag.jpg';

function IndexAdmin() {

  const [sendStock, setSendStock] = useState(false);
  return (
    <div>


      <h1 className="header">COVID-19 VACCINE MANAGEMENT SYSTEM</h1>
      <nav className="navbar navbar-expand-lg bg-white icon-logo">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#"><button type="button" className="btn btn-outline-dark"><i className="fas fa-home fa-lg">   Home</i></button></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><button type="button" className="btn btn-outline-dark"><i className="fas fa-sign-out-alt fa-lg">   Logout</i></button></a>
            </li>

          </ul>
        </div>

      </nav>
      {/* <Link to='/login' className="button"> Login </Link><br/>
<Link to='/registration' className ="button"> Registration</Link> */}

      <div className="grid-container">
        <div className="grid-item">
          <Link to="/create"> <button className="blue-btn">Create Vaccination Booth</button></Link>
          <Link to="/adminform"> <button className="blue-btn">Check Vaccination Booths</button></Link>
          <button className="blue-btn" onClick={() => setSendStock(true)}>Send Vaccination Stock </button>
          <button className="blue-btn">Analytics</button>
        </div>
        <div className="grid-item">
        {
          !sendStock && <img src={flag} className="flgimg" />
        }
          
        {
          sendStock && <SendStock/>
        }
          
        </div>

      </div>

    </div>
  )


}
export default IndexAdmin;
