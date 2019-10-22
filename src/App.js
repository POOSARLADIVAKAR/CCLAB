import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js'
import Resources from './components/Resources.js'
import { tsConstructorType } from '@babel/types';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


axios.defaults.baseURL = process.env.REACT_APP_API_URI_LOCAL;

class App extends Component{
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Route exact path='/' component={Home}/>
          <Route path='/Home' component={Home}/>
          <Route path='/Resources' component={Resources}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
