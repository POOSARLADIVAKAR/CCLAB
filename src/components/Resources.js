import React, { Component} from 'react'
import NavBar from './NavBar'
import Nav_user from './Nav_user'
import '../cssfiles/Resource.css'

var jwt = require("jsonwebtoken");

class Resources extends Component{
    constructor(props){
        super(props)
        this.state = { Nav_bar : <Nav_user/>,
            data: [  {"rsrc":"Systems","qtity":"40"},
                    {"rsrc":"Projector","qtity":"2"},
                    {"rsrc":"Seats","qtity":"40"},
                    {"rsrc":"Linux","qtity":"20"}
                ],
            admin:false,

        }   
    }
    componentWillMount(){
        console.log("IN home component")
        const token = window.localStorage.getItem("cclab-token")
        if((token=="")||(token==null)){
            this.props.history.push("/")
        }
        else{
            const decode_token = jwt.decode(token)
            console.log("in resources page")
            console.log(decode_token)
            if(decode_token.email == "f20170209@hyderabad.bits-pilani.ac.in"){
                this.setState({Nav_bar : <NavBar/>})
                this.setState({admin:true})
            }
        }
    }

    render(){
        return(
            <div>
                {this.state.Nav_bar}
                <ul className="flex-container">
                    <li className="flex-item ">D208</li>
                    <li className="flex-item ">D202</li>
                    <li className="flex-item ">D203</li>
                    <li className="flex-item ">D2019</li>
                    <li className="flex-item ">D205</li>
                    <li className="flex-item ">D206</li>
                </ul>
                <div className="table">
                    <div className="thead">
                        <div className="tr">
                            <div className="td">Resource</div>
                            <div className="td">Quantity</div>
                        </div>
                    </div>
                            {
                            this.state.data.map((item,i)=>{
                                return(
                                    <form className="tr">
                                    <div className="td" >{this.state.data[i].rsrc}</div>
                                    <div className="td" >{this.state.data[i].qtity}</div>                            
                                    </form>
                                )
                            })
                            }
                    </div>
               </div>
        );
    }
}

export default Resources;
