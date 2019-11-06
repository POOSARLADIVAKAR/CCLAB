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
            room : 0
            
        }
        this.edit = ""
        this.room_name = "D201"
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
                this.edit =  <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Edit</button>
            }
        }
        Axios.get('http://localhost:4000/Resources/getData').then((res)=>{
            this.setState({data : res.data },()=>{
            })
        })

    }
    getRoom = (e)=>{
        // console.log(e.target.id)
        // console.log(e.target.className)
        console.log(document.getElementById(e.target.id).textContent)
        this.room_name = document.getElementById(e.target.id).textContent
        // console.log(document.getElementById(e.target.id))
        // document.getElementById(e.target.id).style.background = "black"
        this.setState({room: Number(e.target.id)},()=>{
            this.render()
        })   
    }
    send_data = (e) =>{
        let update_data = this.state.data[this.state.room]
        console.log(update_data)
        if(e.target[0].value != "") update_data["Systems"] = e.target[0].value
        if(e.target[1].value != "") update_data["Seats"] = e.target[1].value
        if(e.target[2].value != "") update_data["Projector"] = e.target[2].value
        if(e.target[3].value != "") update_data["Linux"] = e.target[3].value
        if(e.target[4].value != "") update_data["Windows"] = e.target[4].value
        if(e.target[5].value != "") update_data["AutoCad"] = e.target[5].value
        if(e.target[6].value != "") update_data["Matlab"] = e.target[6].value
        if(e.target[7].value != "") update_data["QTspim"] = e.target[7].value
        Axios.post("http://localhost:4000/Resources/update",update_data).then((res)=>{
            console.log(res)
        })
        this.render()
    }

    render(){
        if(this.state.data.length == 0){
            return(
                <div>
                    {this.state.Nav_bar}
                    <ul className="flex-container">
                        <li id ="0" className="flex-item grow" onClick = {this.getRoom}>D201</li>
                        <li id ="1" className="flex-item grow" onClick = {this.getRoom}>D202</li>
                        <li id ="2" className="flex-item grow" onClick = {this.getRoom}>D203</li>
                        <li id ="3" className="flex-item grow" onClick = {this.getRoom}>D204</li>
                        <li id ="4" className="flex-item grow" onClick = {this.getRoom}>D205</li>
                        <li id ="5" className="flex-item grow" onClick = {this.getRoom}>D206</li>
                    </ul>
                </div>
            )
        }
        return(
            <div>
                {this.state.Nav_bar}
                <ul className="flex-container">
                    <li id ="0" className="flex-item grow" onClick = {this.getRoom}>D201</li>
                    <li id ="1" className="flex-item grow" onClick = {this.getRoom}>D202</li>
                    <li id ="2" className="flex-item grow" onClick = {this.getRoom}>D203</li>
                    <li id ="3" className="flex-item grow" onClick = {this.getRoom}>D204</li>
                    <li id ="4" className="flex-item grow" onClick = {this.getRoom}>D205</li>
                    <li id ="5" className="flex-item grow" onClick = {this.getRoom}>D206</li>
                </ul>
                <h1 id="RoomSelected">{this.room_name}</h1>
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
                                <div className="tr" key ={i}>
                                    <div className="td" >{item}</div>
                                    <div className="td" >{this.state.data[this.state.room][item]}</div>                            
                                </div>
                            )
                        })
                    }
                </div> 
                {this.edit}

                <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header" style={{"padding":"35px 50px"}}>
                    <h1 style={{"color":"rgb(52, 177, 235)"}}>EDIT FORM</h1>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body" style={{"padding":"40px 50px"}}>
                    <form role="form" onSubmit ={this.send_data} >
                        {
                            (this.state.keys.map((item,i)=>{
                                
                                return (
                                    <div className="form-group" key={i}>
                                        <label for={item} className = "label_class" >{item}</label>
                                        <input type="text" className="form-control" id={item} placeholder={this.state.data[this.state.room][this.state.keys[i]]}></input>
                                    </div>
                                )
                            }))
                        }

                        <button type="submit" className="btn btn-primary ">Submit</button>
                    </form>
                    </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Resources;







