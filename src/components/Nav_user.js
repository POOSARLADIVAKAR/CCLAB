import React, {Component} from 'react'
import { Nav, Navbar} from 'react-bootstrap' ;
import {Link} from 'react-router-dom';
import "./../cssfiles/Navbar.css"

const jwt = require('jsonwebtoken')
class Nav_user extends Component{
    constructor(props){
        super(props)
        this.state = {
            Displayname : "",
            photo : ""
        }
        
    }
    UNSAFE_componentWillMount(){ 
        const token = window.localStorage.getItem("cclab-token")
        // console.log(token)
        if(token!==""&& token!==null){
          const decoded_token  = jwt.decode(token)
        //   console.log("Decoded token in Navbar.js")
        //   console.log(decoded_token)
          this.setState({Displayname :decoded_token.username, photo : decoded_token.photo})
        }
    }

    logOut = () =>{
        window.localStorage.removeItem("cclab-token")
        window.location.reload()
    }

    render(){
        // console.log("Inside Navbar")
        // console.log(this.state.Displayname)
        // console.log(this.state.photo)
        return (
            <Navbar  expand="lg"  variant = "light" style={{"backgroundColor":"rgb(33,150,243)"}} >
                <Navbar.Brand as={Link} to="Home">
                    <span className="brandText" style={{"fontSize":"20px"}} >CC-LAB</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="Home" style={{"color": "rgb(255,255,255)"}}>
                            <span className="navItems" >Home</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="Resources" style={{"color": "rgb(255,255,255)"}}>
                            <span className="navItems">Resources</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="UserComplaints" style={{"color": "rgb(255,255,255)"}}>
                            <span className="navItems">Complaints</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="UserHistory" style={{"color": "rgb(255,255,255)"}}>
                            <span className="navItems">My Bookings</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="UserLostItems" style={{"color": "rgb(255,255,255)"}}>
                            <span className="navItems">Lost&Found</span>
                        </Nav.Link>
                    </Nav>
                    <span className = "navigator">
                        <span className="navItems">{this.state.Displayname}</span>
                        <img className = "img" alt="" src={this.state.photo}></img>                    
                    </span>
                    <i className="fa fa-power-off fa-2x " style={{"paddingLeft":"20px","color":"#ddd"}} onClick={this.logOut}></i>            
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Nav_user;