import React, { Component} from 'react'
import NavBar from './NavBar'
import Nav_user from './Nav_user'
import './../cssfiles/Resource.css'
import Axios from 'axios'

var jwt = require("jsonwebtoken");

class Resources extends Component{
    constructor(props){
        super(props)
        this.state = { Nav_bar : <Nav_user/> , 
            keys : ["Systems","Seats","Projector","Linux","Windows","Matlab","AutoCad","QTspim"] ,
            data: [],
            room : 0,
            
        }
        this.edit = ""
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
            this.edit =  <button type="button" className="btn btn-info btn-md" data-toggle="modal" data-target="#myModal">Change</button>
        }
        // send request and get all rooms details
        Axios.get('http://localhost:4000/Resources/getData').then((res)=>{
            this.setState({data : res.data },()=>{
                console.log(this.state.data)
            })
        })

    }
    getRoom = (e)=>{
        console.log(e.target.id)
        this.setState({room: Number(e.target.id)})   
    }
// on click change room data [i]
    render(){
        if(this.state.data.length == 0){
            return(
                <div>
                    {this.state.Nav_bar}
                    <ul className="flex-container">
                        <li id ="0" className="flex-item " onClick = {this.getRoom}>D201</li>
                        <li id ="1" className="flex-item " onClick = {this.getRoom}>D202</li>
                        <li id ="2" className="flex-item " onClick = {this.getRoom}>D203</li>
                        <li id ="3" className="flex-item " onClick = {this.getRoom}>D204</li>
                        <li id ="4" className="flex-item " onClick = {this.getRoom}>D205</li>
                        <li id ="5" className="flex-item " onClick = {this.getRoom}>D206</li>
                    </ul>
                </div>
            )
        }
        return(
            <div>
                {this.state.Nav_bar}
                <ul className="flex-container">
                    <li id ="0" className="flex-item " onClick = {this.getRoom}>D201</li>
                    <li id ="1" className="flex-item " onClick = {this.getRoom}>D202</li>
                    <li id ="2" className="flex-item " onClick = {this.getRoom}>D203</li>
                    <li id ="3" className="flex-item " onClick = {this.getRoom}>D204</li>
                    <li id ="4" className="flex-item " onClick = {this.getRoom}>D205</li>
                    <li id ="5" className="flex-item " onClick = {this.getRoom}>D206</li>
                </ul>
                
                <div className="table">
                    <div className="thead">
                        <div className="tr">
                            <div className="td">Resource</div>
                            <div className="td">Quantity</div>
                        </div>
                    </div>
                    {   
                        this.state.keys.map((item,i)=>{
                            return(
                                <form className="tr" key ={i}>
                                    <div className="td" >{item}</div>
                                    <div className="td" >{this.state.data[this.state.room][item]}</div>                            
                                </form>
                            )
                        })
                    }
                </div> 
                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{"padding":"35px 50px"}}>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body" style={{"padding":"40px 50px"}}>
                        <form role="form">
                            <div className="form-group">
                            <label for="usrname" className = "label_class"><span className="glyphicon glyphicon-user"></span> Systems</label>
                            <input type="text" className="form-control" id="usrname" placeholder="Enter email"></input>
                            </div>
                            <div className="form-group">
                            <label for="psw"><span className="glyphicon glyphicon-eye-open"></span> Password</label>
                            <input type="text" className="form-control" id="psw" placeholder="Enter password"></input>
                            </div>
                            <button type="submit" className="btn btn-success btn-block"><span className="glyphicon glyphicon-off"></span> Login</button>
                        </form>
                        </div>
                        <div className="modal-footer">
                        <button type="submit" className="btn btn-danger btn-default pull-left" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span> Cancel</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resources;







