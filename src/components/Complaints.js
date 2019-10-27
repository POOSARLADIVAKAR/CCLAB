import React, {Component} from 'react'
import NavBar from './NavBar'
import {Nav} from 'react-bootstrap'
import axios from 'axios'
import M from 'materialize-css';
import './../cssfiles/Complaints.css'
class Complaints extends Component{
  //add code for token removal
    componentDidMount(){
        console.log("in complaints")  
        // axios.get('http://localhost:4000/').then((res)=>{
        //     console.log(res);
        // })
    }
    
  render(){
    return (
      <div>
        <NavBar/>
        <div className="parent"> 
          <div className="tab">
              <button className="tablinks" >Log</button>
              <button className="tablinks" >Solved</button>
          </div>

          <div id="search_space" className="tabcontent">
            <div className = "searchBar"> {/*float top and bottom*/}
              <input type="text" placeholder = "Search ..."/>
              <button type="button" >
                Hello
                <i className="fa fa-search"></i>
              </button>
            </div>
            <div className = "bottom-content">
            {/*<Box/> Load component*/}
              <h1>hello world</h1>
              <h2>hello world</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Complaints;
