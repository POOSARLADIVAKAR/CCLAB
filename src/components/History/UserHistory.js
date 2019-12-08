import React, {Component} from 'react';
import NavUser from './../Nav_user';
import axios from 'axios';
import './../../cssfiles/History.css'
import HistoryBoxUser from './History_box_user'
var jwt = require("jsonwebtoken");

class UserHistory extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            data:[],
            backUpData:[]
        }
        this.user = {}
    }

    UNSAFE_componentWillMount(){
        const token = window.localStorage.getItem("cclab-token")
        if((token==="")||(token===null)){
            this.props.history.push("/")
        }
        else{
            const decoded_token  = jwt.decode(token)
            this.user["email"] = decoded_token.email
            this.user["name"] = decoded_token.username
            // console.log(this.user)
        }
    }

    acceptClicked = ()=>{
        // console.log("accept clickeddd")
        // console.log(this.user)
        axios.post('http://localhost:4000/requests/mybookings/accepted',this.user).then((res)=>{ 
        this.setState({data:[]})
        this.setState({data : res.data },()=>{
            // console.log(this.state.data)
        })
        this.setState({backUpData:[]})
        this.setState({backUpData:res.data})
        // console.log(res)
        })
    }

    pendingClicked = ()=>{
        // console.log(this.user)
        axios.post('http://localhost:4000/requests/mybookings/pending',this.user).then((res)=>{ 
        this.setState({data:[]})        
        this.setState({data : res.data },()=>{
            // console.log(this.state.data)
        })
        this.setState({backUpData:[]})
        this.setState({backUpData:res.data})
        // console.log(res)
        })
    }

    rejectClicked = ()=>{
        // console.log(this.user)
        axios.post('http://localhost:4000/requests/mybookings/rejected',this.user).then((res)=>{ 
        this.setState({data:[]})        
        this.setState({data : res.data },()=>{
            // console.log(this.state.data)
        })
        this.setState({backUpData:[]})
        this.setState({backUpData:res.data})
        // console.log(res)
        })
    }

    searchClicked = ()=>{
        // console.log("in search Clicked function")
        let search_obj={}
        search_obj["search_string"]=document.getElementById("searchInput").value
        search_obj["data"]=this.state.backUpData
        // console.log(search_obj)
        axios.post('http://localhost:4000/requests/mybookings/search',search_obj).then((res)=>{
            this.setState({data:[]})        
            this.setState({data : res.data })
        })
        // document.getElementById("searchInput").value = ""
    }



    render(){
          return (
            <div style={{"height":"100vh"}}>
              <NavUser/>
                <div className="parent"> 
                    <div className="tab">
                        <button id = "accepted"  onClick={this.acceptClicked} className="tablinks" >Accepted</button>
                        <button id = "pending"  onClick={this.pendingClicked} className="tablinks" >Pending</button>
                        <button id = "rejected"  onClick={this.rejectClicked} className="tablinks" >Rejected</button>
                    </div>
                    <div id="search_space" className="tabcontent">

                        <div className = "searchBar"> {/*float top and bottom*/}
                            <input type="text" id="searchInput" onChange={this.searchClicked} placeholder = "Enter Course Title to search"/>
                            <button type="submit" onClick = {this.searchClicked} >
                            <i className="fa fa-search fa-2x"></i>
                            </button>
                        </div>

                        <div className = "bottom-content">
                            {
                                (this.state.data.length===0)?(<div><h1>NO BOOKINGS FOUND</h1></div>):
                                (this.state.data.map((data,index)=>(
                                        <div className="histBoxOuter" key={index}>
                                            <HistoryBoxUser histData={data} key={index}/>
                                        </div>    
                                )))
                            }
                        </div>
                    </div>
                </div>
            </div>
          );
    }

}

export default UserHistory




