import React from 'react';
import { Link } from "react-router-dom";
//import RegistrationForm from "../forms/RegistrationForm";
import axios from 'axios';
import { Button } from 'semantic-ui-react';

//import img3 from './user.jpg';
class Givevaccine extends React.Component {



  //Gets the data and sumbits it for a post request
  submit = data => {

    axios.post('http://localhost:3333/register', {
      name: data.username,
      email: data.email,
      password: data.password,
      admin: data.admin
    })
      .then(function (response) {


        //This is responsible for the page navigation.
        response.data.success
          ? (document.getElementById('status').innerHTML = "Registration Successfull! You are being redirected to login in 5 seconds.", setTimeout(() => { window.location.replace('/login') }, 5000))
          : document.getElementById('status').innerHTML = response.data.message
      });
  };



  render() {

    //alert("Response is : " + this.state.response);
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

        <div className="grid-container">
          <div className="grid-item">
            <button className="blue-btn"><Link to='/checkuserdetails'>Check User details</Link></button>
            <button className="blue-btn"><Link to='/givevaccine'>Give Vaccine</Link></button>
            <button className="blue-btn">Check Vaccination Stock</button>
            <button className="blue-btn">Analytics</button>
          </div>


          <div className="grid-item">

            <form id="contact" className="user-form">
            <div class="jumbotron jumbotron-fluid">
  <div className="container">
    
    <p className="lead"> Hey Developers....Display user details here with Vaccine Button to give vaccine to valid user...</p>
  </div>
</div>
              <button className = "btn-primary pull-left">Inject Dose 1</button>
<button className = "button btn-primary btn-sm ">Inject Dose 2</button>

            </form>

          </div>

        </div>

      </div>


    );

  }

}

export default Givevaccine;