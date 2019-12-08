import React , {Component} from 'react';
import './cssfiles/App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.js'
import Resources from './components/Resources.js'
import axios from 'axios';
import dotenv from 'dotenv'; //dotenv is a module that loads variables from a .env file into process.env 
import Login from './components/Login';
// import History from './components/History';
import Complaints from './components/Complaints'
import History from './components/History/History';
import UserComplaints from './components/UserComplaints'
import LostItems from './components/LostItems'
import UserLostItems from './components/UserLostItems'
import UserHistory from './components/History/UserHistory'
var jwt = require("jsonwebtoken");
dotenv.config();


axios.defaults.baseURL = process.env.REACT_APP_API_URI_LOCAL; //dotenv is a module that loads variables from a .env file into process.env 
// axios.defaults.baseURL = process.env.REACT_APP_API_URI_GLOBAL;
//and is ideal for storing usernames, passwords, URL's and other sensitive bits and bobs.

class App extends Component{
  UNSAFE_componentWillMount(){ //local storage not default cleaned so explicitly deleated
    // every refresh loads this so every backend request or user force refresh calls this
    const token = window.localStorage.getItem("cclab-token")
    // console.log(token)
    if(token!==""&& token!==null){
      const decoded_token  = jwt.decode(token)
      // console.log("Decoded token in App.js")
      // console.log(decoded_token)
      // console.log(Date.now())
      const present_time = Math.round(Date.now()/1000)
      const expiry_time = decoded_token.exp

      if(present_time > expiry_time ){
        // console.log("Removing token")
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
    // console.log("cc-lab token is"+window.localStorage.getItem('cclab-token'))
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
          <Route path='/Complaints' component={Complaints}/>
          <Route path='/History' component={History}/>
          <Route path='/UserComplaints' component={UserComplaints}/>
          <Route path='/LostItems' component={LostItems}></Route>
          <Route path='/UserLostItems' component={UserLostItems}/>
          <Route path='/UserHistory' component={UserHistory}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
