import React, {Component} from 'react';
import Nav_user from './../Nav_user';
import axios from 'axios';
import './../../cssfiles/History.css'
import History_Box_User from './History_box_user'
var jwt = require("jsonwebtoken");

class UserHistory extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            data:[],
        }
        this.user = {}
    }

    componentWillMount(){
      const token = window.localStorage.getItem("cclab-token")
        if((token=="")||(token==null)){
            this.props.history.push("/")
        }
        else{
            const decoded_token  = jwt.decode(token)
            this.user["email"] = decoded_token.email
            this.user["name"] = decoded_token.username
            console.log(this.user)
        }
        console.log(this.user)
        axios.post('http://localhost:4000/requests/mybookings',this.user).then((res)=>{ 
        this.setState({data : res.data },()=>{
            console.log(this.state.data)
        })
        console.log(res)
        })
    }

    render(){
          return (
            <div style={{"height":"100vh"}}>
              <Nav_user/>
                  <div className="bottom-content-LostFound">
                      {
                          (this.state.data.length==0)?(<div><h1>NO BOOKINGS FOUND</h1></div>):
                          (this.state.data.map((data,index)=>(
                                <div className="histBoxOuter" key={index}>
                                    <History_Box_User histData={data} key={index}/>
                                </div>    
                           )))
                      }
                  </div>
            </div>
          );
    }

}

export default UserHistory




