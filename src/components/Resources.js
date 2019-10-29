import React, { Component} from 'react'
import NavBar from './NavBar'
import Nav_user from './Nav_user'
var jwt = require("jsonwebtoken");

class Resources extends Component{
    constructor(props){
        super(props)
        this.state = { Nav_bar : <Nav_user/> }   
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
            if(decode_token.email == "f20170225@hyderabad.bits-pilani.ac.in"){
                this.setState({Nav_bar : <NavBar/>})
            }
        }
    }

    render(){
        // if((window.localStorage.getItem('cclab-token')=="")||(window.localStorage.getItem('cclab-token')==null)){
        //     this.props.history.push("/")
        // }
        return(
            <div>
                {this.state.Nav_bar}
                <h1>Hello this is Resources</h1>
            </div>
        );
    }
}

export default Resources;