//Booth index
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import './BoothIndex.css';
import flag from '../assets/images/flag.jpg';
import ApiService from "../service/ApiService";
import { withRouter } from 'react-router';
class BoothIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            boothId: '',
            message: null,
            checkuserdetails: false,
            givevaccine: false,
            checkvacstock: false,
            firstvaccine: false,
            secondvaccine: false,
            statusdiv: false,
            data: [],
            image: true


        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = { userId: this.state.userId };

        ApiService.fetchuser(user)
            .then(res => {

                console.log(res)
                this.props.history.push({
                    pathname: "/userdetails",
                    state: { userDetails: res.data }
                })
            }).catch(err => {
                alert("Failed")
            })

    }

    vaccStatus = (e) => {
        e.preventDefault();
        let user = { userId: this.state.userId };
        ApiService.fetchuser(user)
            .then(res => {

                console.log(res)
                this.setState({ statusdiv: true,  givevaccine: false, firstvaccine: res.data.firstvaccinestatus, secondvaccine: res.data.secondvaccinestatus })

            }).catch(err => {
                alert("Failed")
            })
    }

    fisrstVaccStatus = (e) => {
        e.preventDefault();
        let user = { userId: this.state.userId };
        ApiService.firstvacc(user)
            .then(res => {

                console.log(res)
                alert("Inject 1 Successfull")

            }).catch(err => {
                alert("Failed")
            })
    }

    secondVaccStatus = (e) => {
        e.preventDefault();
        let user = { userId: this.state.userId };
        ApiService.secondvacc(user)
            .then(res => {

                alert("Inject 2 Successfull")

            }).catch(err => {
                alert("Failed")
            })
    }



    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }


    checkuserdetails = () => {
        this.setState({
            checkuserdetails: true,
            givevaccine: false,
            checkvacstock: false,
            image: false

        })

    }

    givevaccine = () => {
        this.setState({
            checkuserdetails: false,
            givevaccine: true,
            checkvacstock: false,
            image: false
        })
    }

    checkvacstock = () => {
        this.setState({
            checkuserdetails: false,
            givevaccine: false,
            checkvacstock: true,
            image: false

        })
    }

    image = () => {
        this.setState({
            checkuserdetails: false,
            givevaccine: false,
            checkvacstock: false,
            image: true

        })


    }
    render() {
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
                        <button onClick={this.checkuserdetails} className="blue-btn" >Check User Details</button>
                        <button onClick={this.givevaccine} className="blue-btn">Give Vaccine</button>
                        <button onClick={this.checkvacstock} className="blue-btn">Check Vaccination Stock</button>
                        <button className="blue-btn">Analytics</button>
                    </div>


                   {
                       this.state.image &&
                        <div className="grid-item">
                            <img src={flag} className="flgimg" />

                        </div>
                   }
                    

                   
                        
            
                    {this.state.checkuserdetails &&

                        <div className="grid-item">

                            <form id="contact" className="user-form">
                                <fieldset><h2>Check user details</h2></fieldset>

                                <fieldset>
                                    <input placeholder="User Reference No" type="text" required="" name="userId" value={this.state.userId} onChange={this.onChange} />
                                </fieldset>

                                <fieldset>
                                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" onClick={this.saveUser}>Submit</button>
                                </fieldset>
                            </form>

                        </div>



                    }



                    {
                        this.state.givevaccine &&
                        <div className="grid-item">

                            <form id="contact" className="user-form">
                                <fieldset><h2>Give Vaccine</h2></fieldset>

                                <fieldset>
                                    <input placeholder="User Reference No" type="text" required="" name="userId" value={this.state.userId} onChange={this.onChange} />
                                </fieldset>

                                <fieldset>
                                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" onClick={this.vaccStatus}>Submit</button>
                                </fieldset>
                            </form>

                        </div>



                    }
                    {
                        this.state.statusdiv &&

                        <div className="grid-item">

                            <form id="contact" className="user-form">
                                <div class="jumbotron jumbotron-fluid">
                                    <div className="container">

                                        <p className="lead"> Hey Developers....Display</p>
                                    </div>
                                </div>
                                {
                                    !this.state.firstvaccine && <button className="button btn-primary btn-sm" onClick={(e)=>this.fisrstVaccStatus(e)}>Inject Dose 1 </button>
                                }
                                {
                                    !this.state.secondvaccine &&  <button className="button btn-primary btn-sm " onClick={(e)=>this.secondVaccStatus(e)}>Inject Dose 2</button>
                                }
                               

                            </form>

                        </div>
                        
                    }


                    {this.state.checkvacstock &&

                        <div class="grid-container">
                            <form id="contact" className="user-form">
                                <div class="grid-item flex-100 ">
                                    <div class="form-container">

                                        <h3>Enter Vaccination Booth Id No.</h3>
                                        <div class="form-group">
                                            <input type="text" placeholder="202534545345" />
                                        </div>
                                        <button class="submit-btn w-200">Check Vaccination Stock</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    }
                </div>

            </div>
        );
    }
}
export default withRouter(BoothIndex);