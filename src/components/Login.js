import React, { Component} from 'react'
import './../cssfiles/Login.css'
import {Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import App from './../App';
import axios from 'axios';
import { parse } from '@babel/parser';
var parser = require("url-parse") 

class Login extends Component{

    constructor(props){
      super(props)
      // console.log(props)
      this.token_exists = false;
      this.Button = ""
    }
    componentWillMount(){
      var URL_parsed = parser(window.location.href)
      // console.log(URL_parsed)
      const equal_to = URL_parsed.query.indexOf("=")
      // console.log(URL_parsed.query.substr(equal_to+1))
      if(URL_parsed.query.substr(equal_to+1)!=""){
          window.localStorage.setItem("cclab-token",URL_parsed.query.substr(equal_to+1))
          this.props.history.push("./Home")
      }

      const local_token = window.localStorage.getItem("cclab-token");
      if ((local_token!="" )&& (local_token!=null)){
        // console.log(local_token)
        this.token_exists = true;
        this.Button = <a href="./Home">
                        <Button  variant="primary" className="center" style = {{"fontSize":"20px"}}>Login with Bits Mail</Button>
                      </a>  
      }
      else{
        this.Button = <a href="http://localhost:4000/auth/google">
                        <Button  variant="primary" className="center" style = {{"fontSize":"20px"}}>Login with Bits Mail</Button>
                      </a>
      }
    }
    componentDidMount(){
      // var URL_parsed = parser(window.location.href)
      // console.log(URL_parsed)
      // var decoded_json = (decodeURI(URL_parsed.query)).substr(1)
      // console.log(decoded_json)

      // if(decoded_json!= ""){
      //   var json_obj = JSON.parse(decoded_json)
      //   console.log(json_obj)
      // } 
      console.log("Component has mounted"+JSON.stringify(this.props))
    }

    render() {
        // console.log('Called after ComponentWillMount')
        return (
          <div className='Login-component'>
            <div className="center-div">
              <h1 className="center" style = {{"wordSpacing":"2px","marginTop":"50px"}}>Welcome to CC Lab</h1>
              <br/>
              <h2 className="center" style = {{"letterSpacing":"2px"}}>Let's Get Started</h2>
              {this.Button}
            </div>
          </div>
         ); 
    }
}

export default Login;