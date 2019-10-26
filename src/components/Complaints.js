import React, {Component} from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import NavBar from './NavBar'
import axios from 'axios'

class Complaints extends Component{
    componentDidMount(){
        console.log("in complaints")
        axios.get('http://localhost:4000/').then((res)=>{
            console.log(res);
        })        
    }

    // componentDidUpdate(){
    //     document.addEventListener('DOMContentLoaded', function() {
    //         var elems = document.querySelectorAll('.sidenav');
    //         var instances = navbar-fixed.Sidenav.init(elems, options);
    //     });

    // }
    
    render(){
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">Logo</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a className="active" href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul> 
            </div>
        )
    }
}

export default Complaints