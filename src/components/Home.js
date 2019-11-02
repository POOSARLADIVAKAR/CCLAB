import React, {Component} from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import './../cssfiles/Home.css'
import Login from './Login';
import NavBar from './NavBar'
import Nav_user from "./Nav_user"
import Axios from 'axios'
var jwt = require("jsonwebtoken");

class Home extends Component{
    constructor(props){
        super(props)
        this.state = { Nav_bar : <Nav_user/> }   
    }
    
    componentWillMount(){
        // console.log("IN home component")
        const token = window.localStorage.getItem("cclab-token")
        if((token=="")||(token==null)){
            this.props.history.push("/")
        }
        else{
            const decode_token = jwt.decode(token)
            // console.log("in resources page")
            // console.log(decode_token)
            if(decode_token.email == "f20170225@hyderabad.bits-pilani.ac.in"){
                this.setState({Nav_bar : <NavBar/>})
            }
        }
    }
    
    render(){
        // also see if it has expired if necessary
        //not necessary because don't let loose his session 
        //remove token
        // if((window.localStorage.getItem('cclab-token')=="")||(window.localStorage.getItem('cclab-token')==null)){
        //     this.props.history.push("/")
        // }
        

        return (
            <div>
                {this.state.Nav_bar}
                <ul className="flex-container">
                    <li className="flex-item grow">D208</li>
                    <li className="flex-item grow">D208</li>
                    <li className="flex-item grow">D208</li>
                    <li className="flex-item grow">D208</li>
                    <li className="flex-item grow">D208</li>
                    <li className="flex-item grow">D208</li>
                </ul>
            </div>
        );
    }
}

export default Home;



    
    
    