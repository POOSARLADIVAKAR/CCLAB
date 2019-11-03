import React, { Component} from 'react'
import NavBar from './NavBar'
import Nav_user from './Nav_user'
import './../cssfiles/Resource.css'

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
                <ul className="flex-container">
                    <li className="flex-item ">D201</li>
                    <li className="flex-item ">D202</li>
                    <li className="flex-item ">D203</li>
                    <li className="flex-item ">D204</li>
                    <li className="flex-item ">D205</li>
                    <li className="flex-item ">D206</li>
                </ul>
                {/*<!-- Trigger the modal with a button -->*/}
                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

                {/*<!-- Modal -->*/}
                <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">

                    {/*<!-- Modal content-->*/}
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Modal Header</h4>
                    </div>
                    <div className="modal-body">
                        <p>Some text in the modal.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                    </div>

                </div>
                </div>
            </div>
        );
    }
}

export default Resources;