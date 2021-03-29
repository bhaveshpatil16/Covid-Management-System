import React from 'react'
import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";
import './Create.css';
import ApiService from "../service/ApiService";
import Dropdown from "./dropdown"
class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            bFirstName: "",
            bLastName: "",
            boothState: "",
            boothCity: '',
            boothArea: '',
            boothPincode: '',
            vaccinationStock: '',
            admin: '',
            message: null,
            booth: [],
            states : [],
            city : [],
			areas : [],
        }
        this.saveUser = this.saveUser.bind(this);
    }
    componentDidMount() {
		this.setState({
			states : [
            { name: 'MAHARASHTRA', 
                    city: [ {name: 'MUMBAI ', areas: ['KURLA', 'ANDHERI', 'BORIVALI',]},
                        {name: 'PUNE', areas: ['HINJEWADI', 'HADAPSAR', 'AUNDH',]},
                        {name: 'NAGPUR', areas: ['DHARAMPETH', 'RAMDASPETH', 'MOMINPURA',]} ] },
            
            { name: 'GUJARAT', 
                    city: [ {name: 'AHMEDABAD', areas: ['CHANDKHEDA', 'MANI NAGAR','PRAHLAD NAGAR',]},
                        {name: 'SURAT', areas: ['PIPLOD', 'VARACHHA ROAD' ,'RING ROAD',]},
                        {name: 'VADODARA', areas: ['CHAMPANER', 'SAYAJI BAUG', 'BARODA',]} ] },
            
            { name: 'RAJASTHAN', 
                    city: [ {name: 'JAIPUR  ', areas: ['MANSAROVAR', 'JAGATPURA', 'DURGAPURA',]},
                            {name: 'JODHPUR ', areas: ['JASWANT THADA', 'MANDORE GARDENS', 'KAILANA LAKE',]},
                            {name: 'KOTA', areas: ['BORKHERA', 'KUNHARI', 'BUNDI ROAD',]} ] },
            
            { name: 'TELANGANA', 
                    city: [ {name: 'HYDERABAD  ', areas: ['BANJARA HILLS', 'ABIDS', 'MIYAPUR',]},
                                    {name: 'WARANGAL ', areas: ['GIRMAJIPET', 'MAMNOOR', 'SHAMBUNIPET',]},
                                    {name: 'NIZAMABAD', areas: ['AMRAD', 'ANAND NAGAR', 'MADHAV NAGAR',]} ] },
            
            { name: 'ASSAM', 
                    city: [ {name: 'GUWAHATI ', areas: ['BHANGAGARH','BHARLUMUKH','DISPUR',]},
                        {name: 'SILCHAR', areas: ['KHASPUR','JATINGA','UMRANGSHU',]},
                        {name: 'DIBRUGARH', areas: ['CHOSKIDINGEE', 'AMOLAPATTY', 'JYOTI NAGAR',]} ] },
              
			]
		});
	}
    saveUser = (e) => {
        e.preventDefault();
        let booth = {
            username: this.state.username, password: this.state.password, bFirstName: this.state.bFirstName, bLastName: this.state.bLastName, boothState: this.state.boothState, boothCity: this.state.boothCity,
            boothArea: this.state.boothArea, boothPincode: this.state.boothPincode, vaccinationStock: this.state.vaccinationStock,admin:this.state.admin
        };
        ApiService.regbooth(booth)
            .then(res => {
                this.setState({ message: 'User login successfully.' });
                // this.props.history.push('/indexuser');
                alert("successfull!!")
            }).catch(err=>{
                alert("failed!!")
                
            })
    }

    onChange = (e) => {
        e.preventDefault();
        console.log("onchnage")
        
        this.setState({ [e.target.name]: e.target.value });
        if(e.target.name === "boothState"){
            this.setState({city : this.state.states.find(cntry => cntry.name === e.target.value).city});
        }
        else if(e.target.name === "boothCity"){
            console.log(e.target.value)
            console.log(e.target.name)
            const stats = this.state.states.find(cntry => cntry.name === this.state.boothState).city;
            this.setState({areas : stats.find(stat => stat.name === e.target.value).areas});
        }
    }
    render() {
        console.log(this.state.username, this.state.password, this.state.bFirstName, this.state.bLastName,
            this.state.boothState, this.state.boothCity, this.state.boothArea, this.state.boothPincode, this.state.vaccinationStock, this.state.admin

        )
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

                <div class="container create">

                    <div>
                        <h1 >Create Vaccination Booth</h1>&nbsp;
                            <div class="containerBooth">
                            <h2>Vaccination Booth Details</h2>
                            <Form>
                                <Row>
                                    <Col>
                                        <div className="booth_div">
                                            <h3 style={{ color: "black" }}><Form.Label>Booth UserName</Form.Label></h3>
                                            <Form.Control placeholder="Enter Username" name="username" value={this.state.username} onChange={this.onChange} />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="booth_div">
                                            <h3 style={{ color: "black" }}><Form.Label>Set Password</Form.Label></h3>
                                            <Form.Control type="password" placeholder="Password"  name="password" value={this.state.password} onChange={this.onChange} />
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                            <Form>
                                <Row>
                                    <Col>
                                        <div className="booth_div">
                                            <h3 style={{ color: "black" }}><Form.Label>FirstName</Form.Label></h3>
                                            <Form.Control placeholder="Enter FirstName" name="bFirstName" value={this.state.bFirstName} onChange={this.onChange} />
                                        </div>
                                    </Col>

                                    <Col>
                                        <div className="booth_div">
                                            <h3 style={{ color: "black" }}><Form.Label>LastName</Form.Label></h3>
                                            <Form.Control placeholder="Enter LastName" name="bLastName" value={this.state.bLastName} onChange={this.onChange} />
                                        </div>
                                    </Col>
                                </Row>
                            </Form>

                            <Form>
                                
                                        <Dropdown
                                            onChange={this.onChange}
                                            boothState={this.state.boothState}
                                            boothCity ={this.state.boothCity}
                                            boothArea={this.state.boothArea}
                                            states ={this.state.states}
                                            city ={this.state.city}
                                            areas ={this.state.areas}
                                        />
                                        
                                

                            </Form>
                            
                            <Form>
                                <Row>
                                {/* <Col>
                                        <div className="booth_div">
                                            <h3 style={{ color: "black" }}><Form.Label>Street/Area</Form.Label></h3>
                                            <Form.Control placeholder="Enter Street" name="boothArea" value={this.state.boothArea} onChange={this.onChange} />
                                        </div>
                                    </Col> */}
                                    <Col>
                                        <div className="booth_div">
                                            <h3 style={{ color: "black" }}><Form.Label>PinCode</Form.Label></h3>
                                            <Form.Control placeholder="Enter Pincode" name="boothPincode" value={this.state.boothPincode} onChange={this.onChange} />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="booth_div">
                                            <h3 style={{ color: "black" }}><Form.Label> Send Vaccination Stock</Form.Label></h3>
                                            <Form.Control placeholder=" Enter Vaccination Stock" name="vaccinationStock" value={this.state.vaccinationStock} onChange={this.onChange} />
                                        </div>
                                    </Col>
                                </Row>

                            </Form>
                            <Form>
                                <Row>
                                    

                                    <Col>
                                        <div className="booth_div2">
                                            <h3 style={{ color: "black" }}><Form.Label>Admin Id</Form.Label></h3>
                                            <Form.Control placeholder="Enter adminID = 1" name="admin" value={this.state.admin} onChange={this.onChange} />
                                        </div>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Form>

                            <br></br><br></br>

                            <Form>
                                <div className ="booth_div1">
                                <button type="button" class="btn btn-success" onClick={this.saveUser}>Create Booth</button>
                                </div>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Create