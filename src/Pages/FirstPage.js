import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './FirstPage.css';
import img from '../assets/images/img.png';
import img3 from '../assets/images/img3.png';
import ApiService from "../service/ApiService";
import { Link, withRouter } from 'react-router-dom';
class FirstPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: null,
            boothlogin: false,
            adminlogin: false,
            userlogin: true,
            data: []

        }
        //this.AdminLogin = this.AdminLogin.bind(this);
    }
    componentDidMount() {

        // .then(res => {
        //     // this.setState({message : 'User login successfully.'});
        //     // this.props.history.push('/indexuser');
        //     console.log(res)
        // });
    }
    userLogin = (e) => {
        e.preventDefault();
        let data = {username: this.state.username, password: this.state.password};
        console.log(data)

        ApiService.UserLogin(data)
        .then(res => {
            console.log(res.data)
            if(res.data=="User Login Sucessfull"){
                this.props.history.push('/indexuser');
            }else{
                alert("User Login Failed")
            }}).catch(err=>{
                alert("Failed")
            })  
        }

    // reguser = (e) => {
    //     e.preventDefault();
    //         let data = {username: this.state.username, password: this.state.password};
    //         console.log(data) 

    //     ApiService.regUser(user)
    //     .then(res => {
    //         console.log(res.data)
    //         if(res.data=="User Login Sucessfull"){
    //             this.props.history.push('/indexadmin');
    //         }else{
    //             alert("User Login Failed")
    //         }}).catch(err=>{
    //             alert("Failed")
    //         })
    //     }

    boothLogin = (e) => {
        e.preventDefault();
        let data = {username: this.state.username, password: this.state.password};
        console.log(data)

        ApiService.BoothLogin(data)
        .then(res => {
            console.log(res.data)
            if (res.data == "Booth Login Sucessfull" ) {
            this.props.history.push('/boothindex');
            alert("Booth Login Sucessfull");
        } else{
            alert("Booth Login Failed")
        }   
        }).catch(err=>{
            alert("Failed")
        })  
    }
    adminLogin = (e) => {
        e.preventDefault();
        let data = { username: this.state.username, password: this.state.password };
        console.log(data)

        ApiService.AdminLogin(data)
            .then(res => {
                console.log(res.data)
                if (res.data == "Admin Login Sucessfull" ) {
                    this.props.history.push('/indexadmin');
                }else{
                    alert("Admin Login Failed")
                }   
            }).catch(err=>{
                alert("Failed")
            })
    }
    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
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
        console.log(this.state.username, this.state.password)
        return (
            <div>

                <h1 className="heading">COVID-19 VACCINE MANAGEMENT SYSTEM</h1>
                <nav class="navbar navbar-expand-lg bg-white ">
                    <div>
                        <ul class="navbar-nav">

                            <li class="nav-item">
                                <a class="nav-link" href="#"><button onClick={this.adminlogin} type="button" class="btn btn-dark"><i class="fas fa-user-tie fa-lg">    Administration Login</i>  </button></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><button onClick={this.userlogin} type="button" class="btn btn-dark"><i class="fas fa-user-tie fa-lg">    User Login</i>  </button></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><button onClick={this.boothlogin} type="button" class="btn btn-dark"><i class="fas fa-syringe fa-lg">  Vaccination Booth Login</i></button></a>
                            </li>

                        </ul>
                    </div>

                </nav>
                <div class="jumbotron jumbotron">
                    <table cellspacing="70">
                        <td>
                            <div class="img_container">
                                <h1 style={{ color: "grey" }}>Vaccine Drive</h1>
                                <img src={img} alt="icon" width="600" height="400" />

                                <p style={{ fontSize: "x-large" }}> This platform is for the citizens of India to Register for COVID-19
                                         vaccination and schedule their vaccination slots at the nearest vaccination centers.</p>
                            </div>
                        </td>
                        {
                            this.state.userlogin &&


                            <div>

                                <td>
                                    <form class="loginform">

                                        <h1><i class="fas fa-user" ></i>  User Login</h1>
                                        <div form="form-group">

                                            <br></br>
                                            <div class="input-container">
                                                <i class="fas fa-user-edit fa-lg icon "></i>
                                                <input class="input-field" type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.onChange} />
                                            </div>

                                            <br></br>

                                            <div class="input-container">
                                                <i class="fa fa-key fa-lg icon"></i>
                                                <input class="input-field" type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.onChange} />
                                            </div>

                                            <div class="btn-group ">
                                                <Link to="/regone"> <button type="submit" class="button btn-secondary btn-sm  " onClick={this.reguser}>REGISTER </button></Link>

                                                <button type="submit" class="button btn-primary btn-sm "  onClick={this.userLogin}> <b>LOGIN</b> </button>
                                                <br></br>
                                            </div>

                                            <br></br>
                                            <br></br>
                                            <div>
                                                <span class="psw">Forgot <a href="#">password?</a></span>
                                            </div>
                                        </div>
                                    </form>
                                </td>
                            </div>

                        }
                        {
                            this.state.boothlogin &&


                            <div>

                                <td>
                                    <form class="loginform">

                                        <h1><i class="fas fa-user" ></i> Booth Login</h1>
                                        <div form="form-group">

                                            <br></br>
                                            <div class="input-container">
                                                <i class="fas fa-user-edit fa-lg icon "></i>
                                                <input class="input-field" type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.onChange} />
                                            </div>

                                            <br></br>
                                            <div class="input-container">
                                                <i class="fa fa-key fa-lg icon"></i>
                                                <input class="input-field" type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.onChange} />
                                            </div>

                                            <div class="btn-group " style={{ width: "350px", textAlign: "center" }}>


                                                <button type="submit" class="button btn-primary btn-sm " onClick={this.boothLogin}> <b>LOGIN</b> </button>
                                                <br></br>
                                            </div>

                                            <br></br>
                                            <br></br>

                                        </div>
                                    </form>
                                </td>
                            </div>

                        }

                        {
                            this.state.adminlogin &&


                            <div className="booth_div">

                                <td>
                                    <form class="loginform">

                                        <h1><i class="fas fa-user" ></i>  Administration Login</h1>
                                        <div form="form-group">

                                            <br></br>
                                            <div class="input-container">
                                                <i class="fas fa-user-edit fa-lg icon "></i>
                                                <input class="input-field" name="userName" value={this.state.userName} type="text" placeholder="Enter Username" name="username" onChange={this.onChange} value={this.state.username} />
                                            </div>

                                            <br></br>
                                            <div class="input-container">
                                                <i class="fa fa-key fa-lg icon"></i>
                                                <input class="input-field" name="password" type="password" placeholder="Enter Password" onChange={this.onChange} name="password" value={this.state.password} />
                                            </div>

                                            <div class="btn-group " style={{ width: "350px", textAlign: "center" }}>

                                                <button type="submit" class="button btn-primary btn-sm " onClick={this.adminLogin}> <b>LOGIN</b> </button>
                                                <br></br>
                                            </div>

                                            <br></br>
                                            <br></br>

                                        </div>
                                    </form>
                                </td>
                            </div>

                        }
                    </table>
                </div>


                <h1 className="htag_div"><i class="fas fa-viruses"></i>  YOU CAN CHECK LIVE CORONA CASES TRACKER   <i class="fas fa-viruses"></i></h1>

                <div className="tracker_div">
                    <iframe src="https://www.coronatracker.com/country/india/" name="iframe_a" height="450px" width="100%" title="Iframe Example"></iframe>
                </div>

                <br></br><br></br>

                <div>
                    <img src={img3} alt="icon" width="1200" height="400" />
                </div>


            </div>
        )
    }
}

export default withRouter(FirstPage)




//class="col-lg-6 col-md-6"
