
/// create page for users to see all the complaints and since only one page
// left aligned items 
//with search bar of room numbers


import React, {Component} from 'react';
import Nav_user from './Nav_user';
import axios from 'axios';
import LostItem_Box_user from './LostItem_Box_user.js'
import { thisExpression } from '@babel/types';

class UserLostItems extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            data:[],
        }
    }

    componentWillMount(){
      const token = window.localStorage.getItem("cclab-token")
        if((token=="")||(token==null)){
            this.props.history.push("/")
        }
        
        axios.get('http://localhost:4000/getItems').then((res)=>{ 
        //default database sends Collected = false items    
        this.setState({data : res.data },()=>{
                console.log(this.state.data)
            })
            // console.log(res)
        })
    }

    render(){
        return (
            <div>
              <Nav_user/>
              <div className="parent"> 
                <div id="search_space" className="tabcontent">
                    <div className = "searchBar"> {/*float top and bottom*/}   
                    </div>
                  <div id = "user_complaint_form">
                      {
                          (this.state.data.length==0)?(<div><h1>NO ITEMS FOUND</h1></div>):
                          (this.state.data.map(data=>(
                            <LostItem_Box_user props={data} key={data._id}/>
                           )))
                      }
                  </div>
                </div>
              </div>
            </div>
          );
    }

}

export default UserLostItems