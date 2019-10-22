import React, {Component} from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import './Home.css'

class Home extends Component{
    render(){
        return (
            <ul className="flex-container">
                <li className="flex-item grow">D208</li>
                <li className="flex-item grow">D208</li>
                <li className="flex-item grow">D208</li>
                <li className="flex-item grow">D208</li>
                <li className="flex-item grow">D208</li>
                <li className="flex-item grow">D208</li>
            </ul>
        );
    }
}

export default Home;