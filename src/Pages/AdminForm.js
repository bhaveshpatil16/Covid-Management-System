import React, { Component } from 'react'
import ApiService from "../service/ApiService";
import './AdminForm.css';

class AdminForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        // this.deleteUser = this.deleteUser.bind(this);
        // this.editUser = this.editUser.bind(this);
        // this.addUser = this.addUser.bind(this);
        // this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchbooth()
            .then((res) => {
                console.log(res)
                this.setState({users: res.data})
                //console.log(this.state.users);
    });
    }

    deletebooth(boothId,e) {
        console.log(boothId)
        e.preventDefault()
        ApiService.deletebooth(boothId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.id !== boothId)});
               console.log(res)
           })

    }

    
    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/create');
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
                        <h2 className="text-center"><b>Booth Details</b></h2>
                    </div>
                    
                </nav>
                <div className="grid-item" className="user-adminform">
                    
                    <button className="btn btn-danger" className="btnadmin" style={{ width: '100px'}} onClick={() => this.addUser()}> Add Booth</button>
                    <table className="table table-striped" >
                        <thead>
                            <tr>
                                <th className="hidden">Id</th>
                                <th>Booth user name</th>
                                <th>Booth password</th>
                                <th>First Name</th>
                                <th>Lastname</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Area</th>
                                <th>Pincode</th>
                                <th>vaccinationStock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.password}</td>
                                            <td>{user.bFirstName}</td>
                                            <td>{user.bLastName}</td>
                                            <td>{user.boothState}</td>
                                            <td> {user.boothCity}</td>
                                            <td> {user.boothArea}</td>
                                            <td>{user.boothPincode}</td>
                                            <td> {user.vaccinationStock}</td>
                                            <td>
                                                <button className="btn btn-success" onClick={(e)=>this.deletebooth(user.id,e)}> Delete</button>
                                                
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
</div>

                </div>

           
        );
    }

}

export default AdminForm;