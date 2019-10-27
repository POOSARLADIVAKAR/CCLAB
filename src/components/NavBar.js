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
        let dispName
        dispName=this.state.Displayname
        
        return (
            <Navbar  bg="primary" expand="lg"  variant = "light">
            <Navbar.Brand>
                <span className="brandText">CC-LAB</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><NavLink to="Home">
                        <span className="navItems">Home</span>
                    </NavLink></Nav.Link>
                    <Nav.Link><NavLink to="Resources">
                        <span className="navItems">Resources</span>
                    </NavLink></Nav.Link>
                </Nav>
                
                <span className = "navigator">
                   <span className="navItems">{dispName}</span>
                    <img className = "img" src={this.state.photo}></img>                    
                </span>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;