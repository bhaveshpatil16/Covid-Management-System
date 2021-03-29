import React from "react";
import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";
import './SecondBut.css';

class SecondBut extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         user: [],
            
    //     }
    // }
    // componentDidMount() {
    //     this.reloadUserList();
    // }

    // reloadUserList() {
    //     ApiService.fetchuser()
    //         .then((res) => {
    //             console.log(res)
    //             this.setState({user: res.data})
    //             //console.log(this.state.users);
    // });
    // }

    render() {

        return (
            <div className="maindiv">
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
                    <Form>

                        <h1 className="pd">Booth Selection</h1>&nbsp;
                        <div className="Bdform">
                            <Row>
                                <Col>
                                    <div className="sel_div">
                                        <Button variant="primary" type="Check Booth">
                                            Search Booth
                                    </Button>
                                    </div>
                                </Col>
                                <br></br>
                            </Row>
                            
                            <Row>
                                <div className="select_div">
                                    <h6><Form.Label>Select Your Vaccination Date</Form.Label></h6>
                                    <Form.Control type="date" />
                                </div>
                            </Row>
                            
                            <Row>
                                <div className="select_div">
                                    <h6><Form.Label>Select Your Vaccination Time</Form.Label></h6>
                                    <Form.Control type="time" />
                                </div>
                            </Row>
                        </div>
                    </Form>
                    
                    <br></br>
                    <Button variant="primary" type="submit">
                        Submit
                  </Button>

                </div>
            </div>
        );
    }
}

export default SecondBut;
