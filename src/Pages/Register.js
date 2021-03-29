import React from "react";
import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";
import './Register.css';
import ApiService from "../service/ApiService";
import Dropdown from "./dropdown"
class Register extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            state: '',
            city: '',
            area: '',
            pincode: '',
            phoneNo: '',
            mobileNo: '',
            emailId: '',
            bloodGroup: '',
            diseasestatus: '',
            diseasename: '',
            coronastatus: '',
            adharcard: '',
            vaccinationDate: "",
            vaccinationTime: "",
            message: null,
            image: null,
            user: [],
            states: [],
            city: [],
            areas: [],
            message: null

        }

        //this.saveUser = this.saveUser.bind(this);
    }
    componentDidMount() {
        this.setState({
            states: [
                {
                    name: 'MAHARASHTRA',
                    city: [{ name: 'MUMBAI ', areas: ['KURLA', 'ANDHERI', 'BORIVALI',] },
                    { name: 'PUNE', areas: ['HINJEWADI', 'HADAPSAR', 'AUNDH',] },
                    { name: 'NAGPUR', areas: ['DHARAMPETH', 'RAMDASPETH', 'MOMINPURA',] }]
                },

                {
                    name: 'GUJARAT',
                    city: [{ name: 'AHMEDABAD', areas: ['CHANDKHEDA', 'MANI NAGAR', 'PRAHLAD NAGAR',] },
                    { name: 'SURAT', areas: ['PIPLOD', 'VARACHHA ROAD', 'RING ROAD',] },
                    { name: 'VADODARA', areas: ['CHAMPANER', 'SAYAJI BAUG', 'BARODA',] }]
                },

                {
                    name: 'RAJASTHAN',
                    city: [{ name: 'JAIPUR  ', areas: ['MANSAROVAR', 'JAGATPURA', 'DURGAPURA',] },
                    { name: 'JODHPUR ', areas: ['JASWANT THADA', 'MANDORE GARDENS', 'KAILANA LAKE',] },
                    { name: 'KOTA', areas: ['BORKHERA', 'KUNHARI', 'BUNDI ROAD',] }]
                },

                {
                    name: 'TELANGANA',
                    city: [{ name: 'HYDERABAD  ', areas: ['BANJARA HILLS', 'ABIDS', 'MIYAPUR',] },
                    { name: 'WARANGAL ', areas: ['GIRMAJIPET', 'MAMNOOR', 'SHAMBUNIPET',] },
                    { name: 'NIZAMABAD', areas: ['AMRAD', 'ANAND NAGAR', 'MADHAV NAGAR',] }]
                },

                {
                    name: 'ASSAM',
                    city: [{ name: 'GUWAHATI ', areas: ['BHANGAGARH', 'BHARLUMUKH', 'DISPUR',] },
                    { name: 'SILCHAR', areas: ['KHASPUR', 'JATINGA', 'UMRANGSHU',] },
                    { name: 'DIBRUGARH', areas: ['CHOSKIDINGEE', 'AMOLAPATTY', 'JYOTI NAGAR',] }]
                },

            ]
        });
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            state: this.state.state, city: this.state.city, area: this.state.area, pincode: this.state.pincode, phoneNo: this.state.phoneNo, mobileNo: this.state.mobileNo, emailId: this.state.emailId,
            bloodGroup: this.state.bloodGroup, diseasestatus: this.state.diseasestatus, diseasename: this.state.diseasename, coronastatus: this.state.coronastatus, adharcard: this.state.adharcard, vaccinationDate: this.state.vaccinationDate,
            vaccinationTime: this.state.vaccinationTime
        };



        ApiService.addUser(user)
            .then(res => {
                console.log(res.user)
                if (res.data == "Fist Vaccine registration Completed Sucessfully") {
                    this.props.history.push('/indexuser');
                } else {
                    alert("UserDetails save sucessfully")
                }
            }).catch(err => {
                alert("Failed")
            })
    }

    onChange = (e) => {
        e.preventDefault();
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.name === "boothState") {
            this.setState({ city: this.state.states.find(cntry => cntry.name === e.target.value).city });
        }
        else if (e.target.name === "boothCity") {
            console.log(e.target.value)
            console.log(e.target.name)
            const stats = this.state.states.find(cntry => cntry.name === this.state.boothState).city;
            this.setState({ areas: stats.find(stat => stat.name === e.target.value).areas });
        }
    }



    onImageChange = event => {
        if
            (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });

            ApiService.sendpic(this.state.image)
                .then(res => {
                    console.log(res)
                })
        }

    };



    searchbooth(e) {
        e.preventDefault()
        console.log("bhaavv")
        ApiService.fetchbooth()
            .then((res) => {
                console.log(res)
                this.setState({ user: res.data })
                //console.log(this.state.users);

            });
    }

    render() {
        console.log(this.state.diseasestatus)

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

                            <Form>
                                <h1 className="pd">Address Details</h1>&nbsp;
                                    <div className="Adform">
                                    <Row>
                                        <Form>

                                            <Dropdown
                                                onChange={this.onChange}
                                                boothState={this.state.boothState}
                                                boothCity={this.state.boothCity}
                                                boothArea={this.state.boothArea}
                                                states={this.state.states}
                                                city={this.state.city}
                                                areas={this.state.areas}
                                            />



                                        </Form>
                                    </Row>
                                    <br></br><br></br>
                                    <Row>

                                        <Col>
                                            <h6><Form.Label>Pin Code</Form.Label></h6>
                                            <Form.Control placeholder="Enter Pin Code" name="pincode" value={this.state.pincode} onChange={this.onChange} />
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
                                            <Form.Control placeholder="Enter Phone No" name="phoneNo" value={this.state.phoneNo} onChange={this.onChange} />
                                        </Col>
                                        <Col>
                                            <h6><Form.Label>*Mobile NO</Form.Label></h6>
                                            <Form.Control placeholder="Enter Mobile No" name="mobileNo" value={this.state.mobileNo} onChange={this.onChange} />
                                        </Col>
                                        <Col>
                                            <h6><Form.Label>Email Id</Form.Label></h6>
                                            <Form.Control placeholder="Enter email" name="emailId" value={this.state.emailId} onChange={this.onChange} />
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
                                            <div className="formblood">  <h6><Form.Label>Blood Gruoup</Form.Label></h6></div>
                                            <div className="blood_div">

                                                <Form.Control
                                                    as="select"
                                                    name="bloodGroup" value={this.state.bloodGroup} onChange={this.onChange}

                                                >
                                                    <option >Choose...</option>
                                                    <option value="AB_POSITIVE" name="bloodGroup">AB+</option>
                                                    <option value="O_POSITIVE" name="bloodGroup">O+</option>
                                                    <option value="O_NEGATIVE" name="bloodGroup">O-</option>
                                                    <option value="A_POSITIVE" name="bloodGroup">A+</option>
                                                    <option value="B_positive" name="bloodGroup">B+</option>

                                                </Form.Control>
                                            </div>
                                        </Col>
                                        <Col>

                                            <div className="dis_div">

                                                <h6><Form.Label>Disease</Form.Label></h6>

                                                <Form.Check
                                                    name="diseasestatus" value="true" onChange={this.onChange}
                                                    type="radio"
                                                    label="Yes"

                                                    ids="formHoriRadios1"
                                                />
                                                <Form.Check
                                                    name="diseasestatus" value="false" onChange={this.onChange}
                                                    type="radio"
                                                    label="No"

                                                    ids="formHoriRadios1"
                                                />

                                            </div>
                                        </Col>


                                    </Row>


                                    <Row>
                                        <Col>


                                            <div className="dis">

                                                <h6><Form.Label>Disease</Form.Label></h6>
                                                <Form.Control placeholder="Enter Disease" name="diseasename" value={this.state.diseasename} onChange={this.onChange} />

                                            </div>
                                        </Col>

                                        <br></br><br></br>

                                        <Col>
                                            <div className="corona">
                                                <h6><Form.Label>*Corono Infected</Form.Label></h6>
                                                <Form.Check
                                                    name="coronastatus" value="true" onChange={this.onChange}
                                                    type="radio"
                                                    label="Yes"

                                                    ids="formHoriRadios1"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="No"

                                                    ids="formHoriRadios1"
                                                    name="coronastatus" value="false" onChange={this.onChange}
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

                                        <Col>
                                            <div className="adhar">
                                                <h6><Form.Label>*Adhar Card No</Form.Label></h6>
                                                <Form.Control placeholder="Enter Adhar No" name="adharcard" value={this.state.adharcard} onChange={this.onChange} />
                                            </div>
                                        </Col>


                                        <Col>
                                            <div className="photo"><h6><Form.Label>Photo</Form.Label></h6></div>
                                            <div className="mb-1">

                                                Image <span className="font-css top">*</span>
                                                <div className="">
                                                    <input onChange={this.onImageChange} type="file" id="file-input" name="ImageStyle" />
                                                    <div className="image"><img src={this.state.image} style={{ width: 100, height: 100 }}></img></div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                        </Form>
                    </Form>
                    <br></br><br></br>
                    <Form>

                        <h1 className="pd">Booth Selection</h1>&nbsp;
                        <div className="Bdform">
                            <Row>
                                <Col>
                                    <div className="sel_div">
                                        <Button variant="primary" type="Check Booth" onClick={(e) => this.searchbooth(e)}>
                                            Search Booth
                                    </Button>

                                    </div>
                                </Col>
                                <Col>
                                    <select placeholder="City" name="boothCity" value={this.state.selectbooth}>
                                        <option>Choose Booth</option>
                                        {this.state.user.map((e, key) => {
                                            <option>{e.bFirstName}</option>
                                            return <option value={e.bFirstName} name="boothCity" key={key}>{e.bFirstName}</option>;
                                        })}
                                    </select>
                                </Col>
                                <br></br><br></br>
                            </Row>
                            <br></br><br></br>
                            <Row>
                                <div className="select_div">
                                    <h6><Form.Label>Select Your Vaccination Date</Form.Label></h6>
                                    <Form.Control type="date" name="vaccinationDate" value={this.state.vaccinationDate} onChange={this.onChange} />
                                </div>
                            </Row>
                            <br></br><br></br>
                            <Row>
                                <div className="select_div">
                                    <h6><Form.Label>Select Your Vaccination Time</Form.Label></h6>
                                    <Form.Control type="time" name="vaccinationTime" value={this.state.vaccinationTime} onChange={this.onChange} />
                                </div>
                            </Row>
                        </div>
                    </Form>

                    <br></br>
                    <Button variant="primary" type="submit" onClick={this.saveUser}> Submit </Button>

                </div>
            </div>

        );
    }
}


export default Register;