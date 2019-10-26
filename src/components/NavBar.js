import React, {Component} from 'react'
import { Nav, NavDropdown, Button, Navbar} from 'react-bootstrap' ;
import {NavLink} from 'react-router-dom';
import "./../cssfiles/Navbar.css"

const jwt = require('jsonwebtoken')
class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            Displayname : "",
            photo : ""
        }
        
    }
    componentWillMount(){ 
        const token = window.localStorage.getItem("cclab-token")
        console.log(token)
        if(token!=""&& token!=null){
          const decoded_token  = jwt.decode(token)
          console.log("Decoded token in Navbar.js")
          console.log(decoded_token)
          this.setState({Displayname :decoded_token.username, photo : decoded_token.photo})
        }
      }
    render(){
        console.log("Inside Navbar")
        console.log(this.state.Displayname)
        console.log(this.state.photo)
        return (
            <Navbar  bg="primary" expand="lg"  variant = "light">
            <Navbar.Brand>CC-LAB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><NavLink to="Home">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="Resources">Resources</NavLink></Nav.Link>
                </Nav>
                <div className = "navigator">
                <img className = "img" src={this.state.photo}></img>
                    <p>{this.state.Displayname}</p>
                    
                </div>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;