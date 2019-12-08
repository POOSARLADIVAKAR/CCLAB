import React, {Component} from 'react'
import { Nav, Navbar} from 'react-bootstrap' ;
import {Link} from 'react-router-dom';
import "./../cssfiles/Navbar.css"

const jwt = require('jsonwebtoken')
class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            Displayname : "",
            photo : "",
            props: props,
            token : window.localStorage.getItem("cclab-token")
        }
        
    }
    UNSAFE_componentWillMount(){ 
        const token = window.localStorage.getItem("cclab-token")
        if(token!==""&& token!==null){
          const decoded_token  = jwt.decode(token)
          this.setState({Displayname :decoded_token.username, photo : decoded_token.photo})
        }
    }

    logOut = () =>{
            window.localStorage.removeItem("cclab-token")
            window.location.reload()
    }

    render(){

        return (
            <Navbar  expand="lg"  variant = "light" style={{"backgroundColor":"rgb(33,150,243)"}} >
                <Navbar.Brand as={Link} to="Home">
                    <span className="brandText" style={{"fontSize":"25px","verticalAlign":"center"}} >CC-LAB</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link to="Home" style={{"color": "rgb(255,255,255)"}}>
                            <span className="navItems" >Home</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="Resources" style={{"color": "rgb(255,255,255)"}}>
                            <span className="navItems">Resources</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="Complaints" style={{"color": "rgb(255,255,255)"}}>
                            <span className="navItems" >Complaints</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="History" style={{"color": "rgb(255,255,255)"}}>
                            <span className="navItems">Bookings</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="LostItems" style={{"color": "rgb(255,255,255)"}}>
                            <span className="navItems">Lost&Found</span>
                        </Nav.Link>
                        
                    </Nav>
                    <span className = "navigator" style={{"display": "in-line"}}>
                        <span className="navItems">{this.state.Displayname}</span>
                        <img className = "img" alt="User" src={this.state.photo}></img> 
                    </span>
                    <i className="fa fa-power-off fa-2x " alt="icon" style={{"paddingLeft":"20px","color":"#ddd"}} onClick={this.logOut}></i>            
                    
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
