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
  }

  componentWillMount(){
      // console.log("IN home component")
      const token = window.localStorage.getItem("cclab-token")
      if((token=="")||(token==null)){
          this.props.history.push("/")
      }
  }
  componentDidMount(){
    axios.get('http://localhost:4000/Complaints/log').then((res) => {
      this.setState({log : res.data })
      // console.log(typeof(this.state.log[0]))
      // console.log(this.state.log[0].Logged_user)
      // console.log(this.state.log[0].Room_no)
      }
    )
    axios.get('http://localhost:4000/Complaints/solved').then((res)=>{
      this.setState({solved : res.data })
      // console.log(res)
    })
  }
  render(){
    if(this.state.log == ""){
      return (<div>
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
            </div>
          </div>
        </div>
      </div>)
    }
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
                  {
                    this.state.log.map(data=>(
                        <Complaints_Box prop1={data.Logged_user} prop2={data.Room_no} prop3={data.Issue}/>
                    ))
                  }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Complaints;
