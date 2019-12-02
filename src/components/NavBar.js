import React, {Component} from 'react'
import { Nav, NavDropdown, Button, Navbar} from 'react-bootstrap' ;
import {NavLink} from 'react-router-dom';
import "./../cssfiles/Navbar.css"
import Pagination from 'react-bootstrap'

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
    componentWillMount(){ 
        const token = window.localStorage.getItem("cclab-token")
        if(token!=""&& token!=null){
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
                <Navbar.Brand>
                    <span className="brandText" style={{"fontSize":"25px"},{"verticalAlign":"center"}} >CC-LAB</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link ><NavLink to="Home" style={{"color": "rgb(255,255,255)"}}>
                            <span className="navItems" >Home</span>
                        </NavLink></Nav.Link>
                        <Nav.Link><NavLink to="Resources" style={{"color": "rgb(255,255,255)"}}>
                            <span className="navItems">Resources</span>
                        </NavLink></Nav.Link>
                        <Nav.Link ><NavLink to="Complaints" style={{"color": "rgb(255,255,255)"}}>
                            <span className="navItems" >Complaints</span>
                        </NavLink></Nav.Link>
                        <Nav.Link><NavLink to="History" style={{"color": "rgb(255,255,255)"}}>
                            <span className="navItems">Bookings</span>
                        </NavLink></Nav.Link>
                        <Nav.Link><NavLink to="LostItems" style={{"color": "rgb(255,255,255)"}}>
                            <span className="navItems">Lost&Found</span>
                        </NavLink></Nav.Link>
                        
                    </Nav>
                    <span className = "navigator" style={{"display": "in-line"}}>
                        <span className="navItems">{this.state.Displayname}</span>
                        <img className = "img" src={this.state.photo}></img> 
                    </span>
                    <i className="fa fa-power-off fa-2x " style={{"padding-left":"20px","color":"#ddd"}} onClick={this.logOut}></i>            
                    
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;