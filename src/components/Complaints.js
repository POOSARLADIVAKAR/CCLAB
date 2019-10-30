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
      this.state = { log : "" ,solved :"" } 
      this.arr= [1,2,3]
  }

  componentWillMount(){
      console.log("IN home component")
      const token = window.localStorage.getItem("cclab-token")
      if((token=="")||(token==null)){
          this.props.history.push("/")
      }
  }
  componentDidMount(){
    axios.get('http://localhost:4000/Complaints/log').then((res) => {
      this.setState({log : res.data })
      console.log(res)
      }
    )
    axios.get('http://localhost:4000/Complaints/solved').then((res)=>{
      this.setState({solved : res.data })
      console.log(res)
    })
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
                  <Complaints_Box prop1 = "D201" prop2="Hello world" prop3="Hello world" /> 
                  <Complaints_Box prop1 = "D202" prop2="Hello world" prop3="Hello world" /> 
                  <Complaints_Box prop1 = "D203" prop2="Hello world" prop3="Hello world" /> 
                  <Complaints_Box prop1 = "D204" prop2="Hello world" prop3="Hello world" /> 
                  <Complaints_Box prop1 = "D205" prop2="Hello world" prop3="Hello world" /> 
                  <Complaints_Box prop1 = "D206" prop2="Hello world" prop3="Hello world" /> 
                  <Complaints_Box prop1 = "D207" prop2="Hello world" prop3="Hello world" /> 
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
