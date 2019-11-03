import React, {Component} from 'react';
import Nav_user from './Nav_user';
import axios from 'axios';
import Complaints_Box_user from './Complaints_Box_user.js'
import ComplaintForm from './ComplaintForm';
import { thisExpression } from '@babel/types';
var jwt = require("jsonwebtoken");

class UserComplaints extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            data:[],
            lodgeClick:true,
            email : ""
        }
    }

    componentWillMount(){
        // console.log("IN home component")
        const token = window.localStorage.getItem("cclab-token")
        if((token=="")||(token==null)){
            this.props.history.push("/")
        }
        else{
            const decode_token = jwt.decode(token)
            this.setState({email:decode_token.email},()=>{
                console.log(this.state)
            })
        }
    }

    lodgeClicked = ()=>{
        this.setState({lodgeClick:true})
        this.setState({data : []})
      }
    
    myComplClicked = ()=>{
        //   change this 
        axios.post('http://localhost:4000/Complaints/mycomplaints',{"email":this.state.email}).then((res)=>{ //senf user email and search by that
            this.setState({data : res.data },()=>{
                console.log(this.state.data)
            })
            console.log(res)
        })

        this.setState({lodgeClick:false})
    }


    render(){
        return (
            <div>
              <Nav_user/>
              <div className="parent"> 
                <div className="tab">
                    <button id = "Lodge"  onClick={this.lodgeClicked} className="tablinks" >Lodge Compliant</button>
                    <button id = "MyComplaints"  onClick={this.myComplClicked} className="tablinks" >My Compliants</button>
                </div>
      
                <div id="search_space" className="tabcontent">
      
                    <div className = "searchBar"> {/*float top and bottom*/}
                          
                    </div>
      
                  <div id = "user_complaint_form">
                      
                      {
                          (this.state.lodgeClick==true)?(<ComplaintForm />):
                          (this.state.data.map(data=>(
                            <Complaints_Box_user props={data} key={data._id}/>
                           )))
                      }
                  </div>
                </div>
              </div>
            </div>
          );
    }

}

export default UserComplaints