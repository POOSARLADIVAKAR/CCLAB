import React, { Component} from 'react'
import './Login.css'
import {Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import App from './../App';
import axios from 'axios';


class Login extends Component{

    func=(props)=>{
        //use oAuth here and find admin or user
        console.log("function called jn");
        axios.get('/auth/google')
          .then((res)=>{
            console.log(res);
          });
        // ReactDOM.render(<App />, document.getElementById('root'));
        
    }
    render() {
        return (
          <div className='Login-component'>
          <div className="center-div">
            <h1 className="center">Welcome to CC Lab Website</h1>
            <br></br>
            <h2 className="center">Let's Get Started</h2>
            <Button onClick={this.func} variant="primary" className="center">Login with Bits Mail</Button>
          </div>
          </div>
        );
    }
}

export default Login;