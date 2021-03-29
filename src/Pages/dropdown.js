import React from 'react';
import { Container, Col, Row, Jumbotron, Form, Button } from "react-bootstrap";
import './dropdown.css';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			states : [],
			city : [],
			areas : [],
			selectedCountry : '--Choose Country--',
			selectedState : '--Choose State--'
			
		};
		this.changeCountry = this.changeCountry.bind(this);
		this.changeState = this.changeState.bind(this);
	}
  
	componentDidMount() {
		this.setState({
			states : [
                { name: 'Maharshtra', city: [ {name: 'Pune', areas: ['Kothrud', 'Deccan', 'Hijewadi',]},
				{name: 'Mumbai', areas: ['Marine', 'Bandra', 'Bhivndi',]} ] },
                { name: 'Gujrat', city: [ {name: 'Ahmedabad', areas: ['Ambawadi', 'Anandnagar', 'Aslali',]},
				{name: 'Surat', areas: ['Aman Nagar', 'Begampura', ' Athwa Gate',]} ] },
                { name: 'Chennai', city: [ {name: 'Adambakkam', areas: ['Velachery', 'Alandur', 'Nanganallur',]},
				{name: 'Kattivakkam', areas: ['Anaiyur', 'Nelliyalam', ' Salem',]} ] },
              
			]
		});
	}
  
	changeCountry(event) {
		this.setState({selectedCountry: event.target.value});
		this.setState({city : this.state.states.find(cntry => cntry.name === event.target.value).city});
	}

	changeState(event) {
		this.setState({selectedState: event.target.value});
		const stats = this.state.states.find(cntry => cntry.name === this.state.selectedCountry).city;
		this.setState({areas : stats.find(stat => stat.name === event.target.value).areas});
	}
	
	render() {
		return (
			<div id="container">
			<Form>	
			<Row>
				
				
				<Col>
				<div className="booth_div">
				<h3 style={{ color: "black" }}><Form.Label>State</Form.Label></h3>
					<select placeholder="State" name="boothState" value={this.props.boothState} onChange={this.props.onChange}>
						<option>--Choose State--</option>
						{this.props.states.map((e, key) => {
							return <option value={e.name} name="boothState" key={key}>{e.name}</option>;
						})}
					</select>
					</div>
				</Col>
			
                        <br></br>

				
				
				<Col>
				<div className="booth_div">
				<h3 style={{ color: "black" }}><Form.Label>City</Form.Label></h3>
					<select placeholder="City" name="boothCity" value={this.props.boothCity} onChange={this.props.onChange}>
					<option>--Choose City--</option>
						{this.props.city.map((e, key) => {
							<option>{e.name}</option>
							return <option value={e.name} name="boothCity" key={key}>{e.name}</option>;
						})}
					</select>
					</div>
				</Col>	
				
				<br></br>
				<Col>
				<div className="booth_div">
				<h3 style={{ color: "black" }}><Form.Label>Area</Form.Label></h3>
					<select placeholder="Area" name="boothArea" value={this.props.boothArea} onChange={this.props.onChange}>
					<option>--Choose Area--</option>
						{this.props.areas.map((e, key) => {
							<option>{e}</option>
							return <option value={e.name} name="boothArea" key={key}>{e}</option>;
						})}
					</select>
					</div>
				</Col>
			</Row>
			</Form>

		</div>	
		)
	}
}

export default Dropdown