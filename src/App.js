import React , {Component} from 'react';
import logo from './logo.svg';
import './cssfiles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js'
import Resources from './components/Resources.js'
import { tsConstructorType } from '@babel/types';
import axios from 'axios';
import dotenv from 'dotenv';
import Login from './components/Login';
import Complaints from './components/Complaints'
var jwt = require("jsonwebtoken");
dotenv.config();


axios.defaults.baseURL = process.env.REACT_APP_API_URI_LOCAL;

class App extends Component{
  componentWillMount(){ //local storage not default cleaned so explicitly deleated
    // every refresh loads this so every backend request or user force refresh calls this
    const token = window.localStorage.getItem("cclab-token")
    console.log(token)
    if(token!=""&& token!=null){
      const decoded_token  = jwt.decode(token)
      console.log("Decoded token in App.js")
      console.log(decoded_token)
      console.log(Date.now())
      const present_time = Math.round(Date.now()/1000)
      const expiry_time = decoded_token.exp

      if(present_time > expiry_time ){
        console.log("Removing token")
        window.localStorage.removeItem("cclab-token")
      }
    }
  }
  componentDidMount(){
    // axios.get('/').then((res)=>{
    //   console.log(res)
    //   console.log(res.data)
    //   window.localStorage.setItem('cclab-token',JSON.stringify(res.data))
    // });
    console.log("cc-lab token is"+window.localStorage.getItem('cclab-token'))
    // axios.get('/query',{params:{token: window.localStorage.getItem('cclab-token') }}).then((res)=>{
    //   console.log(res)
    // });
  }
  render(){
    
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/' component={Login}/>
          <Route path='/Home' component={Home}/>
          <Route path='/Resources' component={Resources}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
