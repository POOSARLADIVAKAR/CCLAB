import React, {Component} from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import './../cssfiles/Home.css'
import Login from './Login';
import NavBar from './NavBar'

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        // also see if it has expired if necessary
        //not necessary because don't let loose his session 
        //remove token
        if((window.localStorage.getItem('cclab-token')=="")||(window.localStorage.getItem('cclab-token')==null)){
            this.props.history.push("/")
        }
        return (
            <div>
                <NavBar/>     
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