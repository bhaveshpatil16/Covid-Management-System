import React, { Component } from 'react';
import './certificate.css';
import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";
import ApiService from "../service/ApiService";
class Certificate extends Component{
    constructor(props) {
        super(props)
        this.state = {
           cert : [],
            
        }
    }
    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchCert()
            .then((res) => {
                console.log(res)
                this.setState({cert: res.data})
                //console.log(this.state.users);
    });
    }
    render(){

        
        
        return(
            <Container className="container1">
            <div className="logo">
                An Organization
            </div>

            <div className="marquee">
                Certificate of Completion
            </div>

            <div className="assignment">
                This certificate is presented to
            </div>

            <div className="person">
                Joe Nathan
            </div>

            <div className="reason">
                For deftly defying the laws of gravity<br/>
                and flying high
            </div>
        </Container>

        )
    }
}

export default Certificate;