import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'semantic-ui-react';
//import './beamlogo.png';
import img5 from '../assets/images/img5.jpg';

const IndexUser = () => (

  
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
	        <Link to="/register"> <button  className="blue-btn">Register for first Vaccine</button></Link> 
	          <button className="blue-btn">Register for Second Vaccine</button>
	          <button className="blue-btn">View Certificate</button>
	          <button className="blue-btn">Analytics</button>
          </div>  
          <div className="grid-item">
          <img src={img5} className="flgimg"/>
          
          </div>

          </div>
      
</div>
);

export default IndexUser;
 