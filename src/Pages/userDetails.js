import React from 'react'
import './userDetails.css';
import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";
import ApiService from "../service/ApiService";
import { withRouter } from 'react-router';
class Create extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],

        }
    }
    componentDidMount() {
      //this.setState({user:this.props.location.state.userDetails})  
    }

    


    render() {
            console.log(this.state.user)

        return (

            <div >
                <div className="container regist">

                    <Form onSubmit={this.handleSubmit}>
                        <Form>
                            <h1 className="pd">User Details</h1>&nbsp;

    <div className="regoneform">

                                <Row>
                                    <Col>
                                        <h6><Form.Label><span style={{ color: "red" }}>*  </span>First Name</Form.Label></h6>

                                        <Form.Control name="firstName" value={this.state.user.firstName} disabled={true}
                                        />
                                    </Col>
                                    <Col>
                                        <h6><Form.Label><span style={{ color: "red" }}>*  </span>Middle Name</Form.Label></h6>
                                        <Form.Control placeholder="Middle name" name="middleName" value={this.state.user.middleName} disabled={true}
                                        />
                                    </Col>
                                    <Col>
                                        <h6><Form.Label><span style={{ color: "red" }}>*  </span>Last Name</Form.Label></h6>
                                        <Form.Control placeholder="Last name" name="lastName" value={this.state.user.lastName} disabled={true}
                                        />
                                    </Col>
                                </Row>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Form>
                                    <Row>
                                        <Col>
                                            <div className="age"><h6><Form.Label>Age</Form.Label></h6></div>
                                            <div className="age_div">
                                                <Form.Control placeholder="Age" name="userAge"value={this.state.user.userAge} disabled={true}
                                                />
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className="birth"><h6><Form.Label>Birth</Form.Label></h6></div>
                                            <div className="birth_div">
                                                <Form.Control type="date" name="userDateOfBirth"value={this.state.user.userDateOfBirth} disabled={true}
                                                />
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
                                            <Form.Check type="radio" label="Male"  name="userGender" value={this.state.user.userGender} ids="formHoriRadios1" onChange={this.onChangeRadioBtn} disabled={true} />
                                            <Form.Check type="radio" label="Female" 
                                                name="userGender" ids="formHoriRadios1" value={this.state.user.userGender} disabled={true} />
                                        </h6>
                                    </div>

                                    <br></br>

                                    <div className="cate"><h6><Form.Label><span style={{ color: "red" }}>*  </span>Category</Form.Label></h6></div>
                                    <div className="cate_div">

                                        <Form.Control

                                            as="select"
                                            name="categoryid"
                                            value={this.state.user.categoryid}
                                            disabled={true}
                                        >   <option>Choose..</option>
                                            <option value="HEALTHCARE " name="category">HEALTH CARE</option>
                                            <option value="FRONTLINE" name="category">FRONTLINE WORKER</option>
                                            <option value="ABOVE50" name="category">ABOVE 50</option>
                                            <option value="BELOW50" name="category">BELOW 50</option>

                                        </Form.Control>
                                    </div>

                                    <Row>
                                        <div className="select_div">
                                            <div className="pass">   <h6><Form.Label>*Adhar Card No</Form.Label></h6></div>
                                            <Form.Control placeholder="Enter Adhar No" name="adharcard" value={this.state.user.adharcard}disabled={true} />
                                        </div>
                                    </Row>


                                    <Row>
                                        <div className="select_div">
                                            <div className="pass"><h6><Form.Label><span style={{ color: "red" }}>*  </span>Username</Form.Label></h6></div>
                                            <Form.Control placeholder="Set Username" name="username" value={this.state.user.username}
                                                disabled={true} />
                                        </div>

                                    </Row>


                                </Form>
                            </div>


                        </Form>
                    </Form>


                </div>
                <div className="container regist">

                    <Form onSubmit={this.handleSubmit}>
                        <Form>

                            <Form>
                                <h1 className="pd">Address Details</h1>&nbsp;
                <div className="Adform">
                                    <Row>
                                        <Col>
                                            <h6><Form.Label>State</Form.Label></h6>
                                            <Form.Control placeholder="Enter State" name="state" disabled={true} />
                                        </Col>

                                        <Col>
                                            <h6><Form.Label>City</Form.Label></h6>
                                            <Form.Control placeholder="Enter City" name="city" disabled={true} />
                                        </Col>

                                    </Row>
                                    <br></br><br></br>
                                    <Row>
                                        <Col>
                                            <h6><Form.Label>Area</Form.Label></h6>
                                            <Form.Control placeholder="Area" name="area" disabled={true} />
                                        </Col>
                                        <Col>
                                            <h6><Form.Label>Pin Code</Form.Label></h6>
                                            <Form.Control placeholder="Enter Pin Code" name="pincode" disabled={true} />
                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                            <br></br><br></br>

                            <Form>
                                <h1 className="pd">Contact Details</h1>&nbsp;
            <div className="Cdform">
                                    <Row>
                                        <Col>
                                            <h6><Form.Label>Phone No</Form.Label></h6>
                                            <Form.Control placeholder="Enter Phone No" name="phoneno" disabled={true} />
                                        </Col>
                                        <Col>
                                            <h6><Form.Label>*Mobile NO</Form.Label></h6>
                                            <Form.Control placeholder="Enter Mobile No" name="mobilno" disabled={true} />
                                        </Col>
                                        <Col>
                                            <h6><Form.Label>Email Id</Form.Label></h6>
                                            <Form.Control placeholder="Enter email" name="emailid" disabled={true} />
                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                            <br></br><br></br>

                            <Form>

                                <h1 className="pd">Medical Details</h1>&nbsp;
            <div className="Mdform">

                                    <Row>
                                        <Col>
                                            <div className="formblood">  <h6><Form.Label>Blood Group</Form.Label></h6></div>
                                            <div className="blood_div">

                                                <Form.Control
                                                    as="select"
                                                    disabled={true}


                                                >
                                                    <option>Choose...</option>
                                                    <option>AB+</option>
                                                    <option>O+</option>
                                                    <option>O-</option>
                                                    <option>A+</option>
                                                    <option>B+</option>
                                name="bloodgrp"
                                                </Form.Control>
                                            </div>
                                        </Col>
                                        <Col>

                                            <div className="dis_div">

                                                <h6><Form.Label>Disease</Form.Label></h6>

                                                <Form.Check
                                                    disabled={true}
                                                    type="radio"
                                                    label="Yes"
                                                    name="formHoriRadios"
                                                    ids="formHoriRadios1"
                                                />
                                                <Form.Check
                                                    disabled={true}
                                                    type="radio"
                                                    label="No"
                                                    name="formHoriRadios"
                                                    ids="formHoriRadios1"
                                                />
                            name="seldis"
                                            </div>
                                        </Col>


                                    </Row>


                                    <Row>
                                        <Col>


                                            <div className="dis">

                                                <h6><Form.Label>Disease</Form.Label></h6>
                                                <Form.Control placeholder="Enter Disease" name="enterdis" disabled={true} />

                                            </div>
                                        </Col>

                                        <br></br><br></br>

                                        <Col>
                                            <div className="corona">
                                                <h6><Form.Label>*Corono Infected</Form.Label></h6>
                                                <Form.Check
                                                    disabled={true}
                                                    type="radio"
                                                    label="Yes"
                                                    name="formHoriRadios"
                                                    ids="formHoriRadios1"
                                                />
                                                <Form.Check
                                                    disabled={true}
                                                    type="radio"
                                                    label="No"
                                                    name="formHoriRadios"
                                                    ids="formHoriRadios1"
                                                    name="coronaaff"
                                                />
                                            </div>
                                        </Col>
                                    </Row>

                                </div>

                            </Form>

                            <br></br><br></br>
                            <Form>

                                <h1 className="pd">KYC</h1>&nbsp;
            <div className="Kdform">
                                    <Row>

                                    
                                        {/* <Col>
                                            <div className="photo"><h6><Form.Label>Photo</Form.Label></h6></div>
                                            <div className="mb-1">

                                                Image <span className="font-css top">*</span>
                                                <div className="">
                                                    <input onChange={this.onImageChange} type="file" id="file-input" name="ImageStyle" />
                                                    <div className="image"><img src={this.state.image} style={{ width: 100, height: 100 }}></img></div>
                                                </div>
                                            </div>
                                        </Col> */}
                                    </Row>
                                </div>
                            </Form>
                        </Form>
                    </Form>
                    <br></br><br></br>
                    <Form>

                        <h1 className="pd">Booth Selection</h1>&nbsp;
                     <div className="Bdform">

                            <br></br><br></br>
                            <Row>
                                <div className="select_div">
                                    <h6><Form.Label>Select Your Vaccination Date</Form.Label></h6>
                                    <Form.Control type="date" name="selVD" disabled={true} />
                                </div>
                            </Row>
                            <br></br><br></br>
                            <Row>
                                <div className="select_div">
                                    <h6><Form.Label>Select Your Vaccination Time</Form.Label></h6>
                                    <Form.Control type="time" name="selVT" disabled={true} />
                                </div>
                            </Row>
                        </div>
                    </Form>
                    
                   

                </div>
            </div>
        )
    }


}

export default withRouter (Create);