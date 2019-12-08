import React, { Component} from 'react'
import './../cssfiles/Login.css'
import {Button} from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
const jwthandler = require("./../config/token")
var parser = require("url-parse") 


class Login extends Component{

    constructor(props){
      super(props)
      // console.log(props)
      this.token_exists = false;
      this.Button = ""
    }
    
    alreadyPresent = ()=>{
      this.props.history.push("./Home")
    }

    UNSAFE_componentWillMount(){
      var URL_parsed = parser(window.location.href)
      // console.log(URL_parsed)
      const equal_to = URL_parsed.query.indexOf("=")
      // console.log(URL_parsed.query.substr(equal_to+1))
      if(URL_parsed.query.substr(equal_to+1)!==""){
          window.localStorage.setItem("cclab-token",URL_parsed.query.substr(equal_to+1))
          this.props.history.push("./Home")
      }
      
      const local_token = window.localStorage.getItem("cclab-token");
      if ((local_token!=="" )&& (local_token!==null)){
        // console.log(local_token)
        this.token_exists = true;
        // this.Button = <a href="./Home">
        //                 <Button variant="primary" className="center" style = {{"fontSize":"20px"}}>Login with Bits Mail</Button>
        //               </a>
        this.Button =  <Button onClick={this.alreadyPresent} variant="primary" className="center" style = {{"fontSize":"20px"}}>Login with Bits Mail</Button>

      }
      else{
        // this.Button = <a href="http://localhost:4000/auth/google">
        //               {/*<a href="http://172.16.34.215:4000/auth/google">*/}
        //                 <Button  variant="primary" className="center" style = {{"fontSize":"20px"}}>Login with Bits Mail</Button>
        //               </a>
        this.Button = <div>
            <GoogleLogin
            clientId="1001879371780-aj1qsmeog20nhr8d719hffcn9n8kia4e.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          {document.getElementById('googleButton')}
        </div>
      }
    }
    componentDidMount(){
      console.log("Called Did mount")
    }

    responseGoogle = (response) => {
      // console.log(response);
      const user = {username : response.profileObj.givenName , email : response.profileObj.email , photo : response.profileObj.imageUrl}
      const user_token = jwthandler.generate_token(user);
      console.log(user_token)
      var bitsMail = /bits-pilani.ac.in/;
      if(!bitsMail.test(user.email)){
          // res.redirect('http://localhost:3000');
          console.log("Not present")
          this.props.history.push("./")
      }
      else{
        this.props.history.push('./?user-token='+user_token)
      }
      // res.redirect('http://localhost:3000/?user-token='+user_token);
      this.render()
    }

    render() {
        // console.log('Called again')
        var URL_parsed = parser(window.location.href)
        const equal_to = URL_parsed.query.indexOf("=")
        if(URL_parsed.query.substr(equal_to+1)!==""){

          // console.log("This is called here")
            window.localStorage.setItem("cclab-token",URL_parsed.query.substr(equal_to+1))
            this.props.history.push("./Home") 
        }
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