import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import ApiService from "../service/ApiService";
//import './beamlogo.png';

//import img2 from './flag.jpg';

class SendStock extends React.Component {

    // const [boothId, setBoothId] = useState(' ');
    // const [stock, setStock] = useState(' ');
    constructor(props) {
        super(props);
        this.state = {
            boothid: '',
            sendstock: '',

        }
        this.Sendstock = this.Sendstock.bind(this);
    }

    Sendstock = (e) => {
        //e.preventDefault();
        let data = { boothid: this.state.boothid, sendstock: this.state.sendstock };
        console.log(data)

        ApiService.SendStock(data)
            .then(res => {
                console.log(res.data)
                alert("Successfull!!")

            }).catch(err => {
                alert("Failed")
            })
    }
    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="grid-item">
                <form id="contact" className="user-form">
                    <fieldset><h2><b>Send Vaccination Stock</b></h2></fieldset>
                    <fieldset>
                        <input placeholder="BOOTHID" type="text" required="" name="boothid" value={this.state.boothid} onChange={(e)=>this.onChange(e)} />
                    </fieldset>
                    <fieldset>
                        <input placeholder="VACCINATION STOCK" type="text" required="" name="sendstock" value={this.state.sendstock} onChange={(e)=>this.onChange(e)} />
                    </fieldset>

                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" onClick={(e)=>this.Sendstock(e)}>Send Stock</button>
                    </fieldset>
                </form>

            </div>
        )


    }
}



    export default SendStock;