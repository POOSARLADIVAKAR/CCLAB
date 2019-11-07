import React, {Component} from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import Complaints_Box_user from './Complaints_Box_user.js'
import { thisExpression } from '@babel/types';
import LostItemForm from './LostItemsForm';
import LostItem_Box from './LostItem_Box';
import LostItem_Box_user from './LostItem_Box_user'
var jwt = require("jsonwebtoken");

class LostItems extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            data:[ ],
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
        axios.get('http://localhost:4000/getItems').then((res)=>{ //senf user email and search by that
            this.setState({data : res.data },()=>{
                console.log(this.state.data)
            })
            // console.log(res)
        })
        // console.log("All items Clicked")
        this.setState({lodgeClick:false})
    }


    render(){
        return (
            <div>
              <NavBar/>
              <div className="parent"> 
                <div className="tab">
                    <button id = "Lodge"  onClick={this.lodgeClicked} className="tablinks" >Item Post</button>
                    <button id = "MyComplaints"  onClick={this.myComplClicked} className="tablinks" >All Items</button>
                </div>
      
                <div id="search_space" className="tabcontent">
      
                    <div className = "searchBar"> {/*float top and bottom*/}
                          
                    </div>
      
                  <div id = "user_complaint_form">
                      
                      {
                          (this.state.lodgeClick==true)?(<LostItemForm />):
                          (this.state.data.map((data,i)=>(
                            <LostItem_Box props={data} key={i}/>
                           )))
                      }
                      {/*<LostItem_Box_user props={data} key={i}/>*/}
                      {/*generally if ur own jsx then return inside map is needed*/}
                      {/*For calling another component in map return not needed*/}
                  </div>
                </div>
              </div>
            </div>
          );
    }

}

export default LostItems