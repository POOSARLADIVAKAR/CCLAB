import React, {Component} from 'react'
import { Nav, NavDropdown, Button, Navbar} from 'react-bootstrap' ;
import {NavLink} from 'react-router-dom';

class NavBar extends Component{
    render(){
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand>CC-LAB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><NavLink to="Home">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="Resources">Resources</NavLink></Nav.Link>
                </Nav>
                {/*<h1>F2017A7PS0225H</h1>*/}
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;