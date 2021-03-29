import React from "react";
import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";
import './RegOne.css';
import ApiService from "../service/ApiService";
class Reg extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstName: '',
            middleName: '',
            lastName: '',
            userAge: '',
            userDateOfBirth: '',
            userGender: '',
            adharcard: '',
            categoryid:'',
            message: null,


        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            username: this.state.username, password: this.state.password,firstName:this.state.firstName,middleName:this.state.middleName, lastName: this.state.lastName,
            userAge: this.state.userAge, userDateOfBirth: this.state.userDateOfBirth, userGender: this.state.userGender, categoryid: this.state.categoryid, adharcard: this.state.adharcard,
        };

        ApiService.regUser(user)
            .then(res => {
                 if(res.data=="User signup sucessfull"){
                this.props.history.push('/firstpage');
            }else{
                alert("User signup sucessfull")
            }}).catch(err=>{
                alert("Failed")
            })  
                 //this.props.history.push('/indexuser');
            
    }


    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    onChangeRadioBtn = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        console.log(this.state.firstName, this.state.middleName, this.state.lastName, this.state.userAge, this.state.useruname, this.state.password, this.state.userDateOfBirth, this.state.userGender, this.state.categoryid)
        return (
            <div>
                <h1 className="heading">COVID-19 VACCINE MANAGEMENT SYSTEM</h1>

                <nav class="navbar navbar-expand-lg bg-white ">
                    <div>
                        <ul class="navbar-nav">

                            <li class="nav-item">
                                <a class="nav-link" href="#"><button type="button" class="btn btn-outline-dark"><i class="fas fa-sign-out-alt fa-lg">   Logout</i></button></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container regist">

                    <Form onSubmit={this.handleSubmit}>
                        <Form>
                            <h1 className="pd">Personal Details</h1>&nbsp;

                        <div className="regoneform">

                                <Row>
                                    <Col>
                                        <h6><Form.Label><span style={{ color: "red" }}>*  </span>First Name</Form.Label></h6>

                                        <Form.Control placeholder="First name" name="firstName"
                                            value={this.state.firstName} onChange={this.onChange} />
                                    </Col>
                                    <Col>
                                        <h6><Form.Label><span style={{ color: "red" }}>*  </span>Middle Name</Form.Label></h6>
                                        <Form.Control placeholder="Middle name" name="middleName"
                                            value={this.state.middleName} onChange={this.onChange} />
                                    </Col>
                                    <Col>
                                        <h6><Form.Label><span style={{ color: "red" }}>*  </span>Last Name</Form.Label></h6>
                                        <Form.Control placeholder="Last name" name="lastName"
                                            value={this.state.lastName} onChange={this.onChange} />
                                    </Col>
                                </Row>

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Form>
                                    <Row>
                                        <Col>
                                            <div className="age"><h6><Form.Label>Age</Form.Label></h6></div>
                                            <div className="age_div">
                                                <Form.Control placeholder="Age" name="userAge"
                                                    value={this.state.userAge} onChange={this.onChange} />
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="birth"><h6><Form.Label>Birth</Form.Label></h6></div>
                                            <div className="birth_div">
                                                <Form.Control type="date" name="userDateOfBirth"
                                                    value={this.state.userDateOfBirth} onChange={this.onChange} />
                                            </div>
                                        </Col>
                                        <Col>

                                        </Col>

                                    </Row>
                                </Form>
                                <Form>
                                    <br></br><br></br>

                                    <div className="gender_div">
                                        <h6><Form.Label>Gender</Form.Label>
                                            <Form.Check type="radio" label="Male" value="male" name="userGender" ids="formHoriRadios1" onChange={this.onChangeRadioBtn} />
                                            <Form.Check type="radio" label="Female" value="female"
                                                onChange={this.onChangeRadioBtn} name="userGender" ids="formHoriRadios1" />
                                        </h6>
                                    </div>

                                    <br></br>

                                    <div className="cate"><h6><Form.Label><span style={{ color: "red" }}>*  </span>Category</Form.Label></h6></div>
                                    <div className="cate_div">

                                    <Form.Control
                                             
                                             as="select"
                                             name="categoryid" value={this.state.categoryid} onChange={this.onChange}
                                           
                                         >   <option>Choose..</option>
                                             <option value="HEALTHCARE " name="categoryid">HEALTH CARE</option>
                                             <option value="FRONTLINE" name="categoryid">FRONTLINE WORKER</option>
                                             <option value="ABOVE50" name="categoryid">ABOVE 50</option>
                                             <option value="BELOW50" name="categoryid">BELOW 50</option>
                                         
                                         </Form.Control>
                                    </div>

                                        <Row>
                                            <div className="select_div">
                                            <div className="pass">   <h6><Form.Label>*Adhar Card No</Form.Label></h6></div>
                                                <Form.Control placeholder="Enter Adhar No" name="adharcard" value={this.state.adharcard} onChange={this.onChange} />
                                            </div>
                                        </Row>


                                    <Row>
                                        <div className="select_div">
                                            <div className="pass"><h6><Form.Label><span style={{ color: "red" }}>*  </span>Username</Form.Label></h6></div>
                                            <Form.Control placeholder="Set Username" name="username" 
                                            value={this.state.username} onChange={this.onChange} />
                                        </div>

                                    </Row>
                                    <br></br><br></br>
                                    <Row>
                                        <div className="select_div1">
                                            <div className="pass"><h6><Form.Label><span style={{ color: "red" }}>*  </span>password</Form.Label></h6></div>
                                            <Form.Control type="password" placeholder="Set Password" name="password" 
                                            value={this.state.password} onChange={this.onChange} />
                                        </div>
                                    </Row>
                                </Form>
                            </div>
                            <br></br><br></br>

                        </Form>
                    </Form>
                    <br></br><br></br>
                    <Button variant="primary" type="submit" onClick={this.saveUser}> Submit </Button>

                </div>
            </div>
        );
    }
}

export default Reg;