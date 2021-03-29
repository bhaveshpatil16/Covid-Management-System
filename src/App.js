import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//npm install react-bootstrap bootstrapimport FirstPage from './component/FirstPage'
 import FirstPage from './Pages/FirstPage';
 import RegOne from './Pages/RegOne';
 import IndexUser from './Pages/IndexUser';
 //import Register from './Pages/Register';
 import Create from './Pages/Create';
import SecondBut from './Pages/SecondBut';
import IndexAdmin from './Pages/IndexAdmin';
import AdminForm from './Pages/AdminForm';
import BoothIndex from './Pages/BoothIndex';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import userDetails from './Pages/userDetails';
import Certificate from './Pages/certificate';
import Register from './Pages/Register';
import Givevaccine from './Pages/Givevaccine';


class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">

           <Switch>
           <Route  path="/" exact component={FirstPage}/>
            <Route  path="/regone" component={RegOne}/>
            <Route  path="/register" component={Register}/> 
            <Route  path="/indexuser" component={IndexUser}/> 
            <Route  path="/boothindex" component={BoothIndex}/> 
            <Route  path="/indexadmin" component={IndexAdmin}/>
            <Route  path="/create" component={Create}/>
            <Route  path="/adminform" component={AdminForm}/> 
            <Route  path="/userdetails" component={userDetails}/>
            <Route  path="/certificate" component={Certificate}/>
            <Route  path="/givevaccine" component={Givevaccine}/>
           </Switch>
         </div>
       </Router>
    );
  }

}

export default App;

{/*  
         
      <Third/>  */ }

{/*<First/>*/ }
    //<Signup/>
