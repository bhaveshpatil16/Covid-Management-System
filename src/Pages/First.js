import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './First.css';
import ActsImg from '../assets/images/download.jpg';
import Family from '../assets/images/family.jpg';
import {Link} from 'react-router-dom' 
class First extends Component {

  state = {
    boothlogin: false,
    adminlogin: false,
    userlogin: true
  }
  boothlogin = () => {
    this.setState({
      boothlogin: true,
      adminlogin: false,
      userlogin: false 
    })
  }
  adminlogin = () => {
    this.setState({
      adminlogin: true,
      boothlogin: false,
      userlogin: false
    })
  }
  userlogin = () => {
    this.setState({
      adminlogin: false,
      boothlogin: false,
      userlogin: true
      
    })
  }
  render() {
    return (
      <>
        <h1 className="heading">COVID-19💉VACCINATION MANAGEMENT SYSTEM</h1>
        <div className="acts_img_div">
          <img src={ActsImg} alt="icon" />
        </div>
        <div className="container">
          <div className="family_div">
            <img className="fam_img" src={Family} alt="icon" />
          </div>
          {
            this.state.userlogin && 
            <div className="login_div">
              <div className="login_inner_div">
                <div>
                  <div><h3> USER LOGIN</h3></div>
                </div>
                <div>
                  <input type="text" className="mob_input" placeholder="Enter your number" />
                  <input type="text" className="pass_input" placeholder="Enter password" />
                </div>
                <button className="signin_btn">Sign in</button>
                <div>
                  <div>
                    <Link to="/Second" className="new_user"> new user</Link>
                    <a href=""> forgot passwd</a>
                  </div>
                  <button onClick={this.boothlogin} className="booth_btn">BOOTH LOGIN</button>
                  <button onClick={this.adminlogin} className="admini_btn">ADMINISTRATION LOGIN</button>
                </div>
              </div>
            </div>
          }
          {
            this.state.boothlogin && <div className="login_div">
              <div className="login_inner_div">
                <div>
                  <div><h3> BOOTH LOGIN</h3></div>
                </div>
                <div>
                  <input type="text" className="mob_input" placeholder="Enter your number" />
                  <input type="text" className="pass_input" placeholder="Enter password" />
                </div>
                <button className="signin_btn">Sign in</button>
                <div>
                  <button onClick={this.userlogin} className="booth_btn">USER LOGIN</button>
                  <button onClick={this.adminlogin} className="admini_btn">ADMINISTRATION LOGIN</button>
                </div>
              </div>
            </div>
          }
          {
            
              this.state.adminlogin && <div className="login_div">
                <div className="login_inner_div">
                  <div>
                    <div><h3>ADMINISTRATION LOGIN</h3></div>
                  </div>
                  <div>
                    <input type="text" className="mob_input" placeholder="Enter your number" />
                    <input type="text" className="pass_input" placeholder="Enter password" />
                  </div>
                  <button className="signin_btn">Sign in</button>
                  <div>
                    <button onClick={this.userlogin} className="booth_btn">USER LOGIN</button>
                    <button onClick={this.boothlogin} className="admini_btn">BOOTH LOGIN</button>
                  </div>
                </div>
              </div>
            }
        </div>
      </>
    );
  }


}

export default First


//<img src={img} className="App-logo" alt="logo" />

{/* function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if((inputtxt.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
} */}



{/* validate={values => {
    let errors = {};
  
    const passwordRegex = /(?=.*[0-9])/;
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters long.";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Invalid password. Must contain one number.";
    }
  
    return errors;
  }}*/}