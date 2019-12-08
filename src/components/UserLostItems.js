
/// create page for users to see all the complaints and since only one page
// left aligned items 
//with search bar of room numbers


import React, {Component} from 'react';
import NavUser from './Nav_user';
import axios from 'axios';
import LostItemBoxUser from './LostItem_Box_user.js'
import '../cssfiles/UserLostItems.css'

class UserLostItems extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            data:[],
        }
    }

    UNSAFE_componentWillMount(){
      const token = window.localStorage.getItem("cclab-token")
        if((token==="")||(token===null)){
            this.props.history.push("/")
        }
        
        axios.get('http://localhost:4000/getItems').then((res)=>{ 
        //default database sends Collected = false items    
        this.setState({data : res.data },()=>{
                // console.log(this.state.data)
            })
            // console.log(res)
        })
    }

    render(){
          return (
            <div style={{"height":"100vh"}}>
              <NavUser/>
                  <div className="bottom-content-LostFound">
                      {
                          (this.state.data.length===0)?(<div><h1>NO ITEMS FOUND</h1></div>):
                          (this.state.data.map(data=>(
                            <LostItemBoxUser props={data} key={data._id}/>
                           )))
                      }
                  </div>
            </div>
          );
    }

}

export default UserLostItems




