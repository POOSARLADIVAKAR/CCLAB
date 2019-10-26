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
    render(){
        return (
            <div>
                <NavBar/>
            </div>
        )
    }
}

export default Complaints