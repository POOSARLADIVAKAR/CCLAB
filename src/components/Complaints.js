import React, {Component} from 'react'
import NavBar from './NavBar'
import {Nav} from 'react-bootstrap'
import axios from 'axios'
import M from 'materialize-css';
import './../cssfiles/Complaints.css'
import Complaints_Box from './Complaints_Box'

class Complaints extends Component{
  constructor(props){
      super(props) 
  }

  componentWillMount(){
      console.log("IN home component")
      const token = window.localStorage.getItem("cclab-token")
      if((token=="")||(token==null)){
          this.props.history.push("/")
      }
  }
  render(){
    return (
      <div>
        <NavBar/>
        <div className="parent"> 
          <div className="tab">
              <button id = "Log"  className="tablinks" >Log</button>
              <button id = "Solved"  className="tablinks" >Solved</button>
          </div>
          <div id="search_space" className="tabcontent">
              <div className = "searchBar"> {/*float top and bottom*/}
                    <input type="text" placeholder = "Search ..."/>
                    <button type="submit" >
                      <i className="fa fa-search fa-2x"></i>
                    </button>
              </div>
            <div className = "bottom-content">
                  {/*<Box/> Load component*/}
                  <Complaints_Box/>
                  {add_boxes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// var data = for(i=0;i<3;i++){
//     add_boxes()
// }
// dat is present in array map array elements to display elemets using array.map() function
function add_boxes(){
  return <h1>Hello</h1>;
}
export default Complaints;
