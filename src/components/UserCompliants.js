import React, {Component} from 'react';
import Nav_user from './Nav_user';
import CompliantForm from './CompliantForm';
import axios from 'axios';
import Complaints_Box from './Complaints_Box'
import ComplaintForm from './CompliantForm';
import { thisExpression } from '@babel/types';

class UserCompliants extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            data:[],
            lodgeClick:true
        }
    }

    lodgeClicked = ()=>{
        this.setState({lodgeClick:true})
        this.setState({data : []})
      }
    
    myComplClicked = ()=>{
    //   change this 
    axios.get('http://localhost:4000/Complaints/solved').then((res)=>{
        this.setState({data : res.data })
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
                    <button id = "MyCompliants"  onClick={this.myComplClicked} className="tablinks" >My Compliants</button>
                </div>
      
                <div id="search_space" className="tabcontent">
      
                    <div className = "searchBar"> {/*float top and bottom*/}
                          <input id = "search_bar" type="text" placeholder = "Search ..."/>
                          <button type="submit" onClick = {this.searchClicked}>
                            <i className="fa fa-search fa-2x"></i>
                          </button>
                    </div>
      
                  <div className = "bottom-content">
                      
                      {
                          (this.state.lodgeClick==true)?(<ComplaintForm/>):
                          (this.state.data.map(data=>(
                            <Complaints_Box prop1={data.Logged_user} prop2={data.Room_no} prop3={data.Issue} key={data._id}/>
                           )))
                      }
                  </div>
                </div>
              </div>
            </div>
          );
    }

}

export default UserCompliants
