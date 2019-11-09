import React, {Component} from 'react'
import {Row,Col,Container, ToggleButton} from 'react-bootstrap'
import './../cssfiles/Home.css'
import Login from './Login';
import NavBar from './NavBar'
import Nav_user from "./Nav_user"
import Axios from 'axios'
import { string } from 'prop-types';
var jwt = require("jsonwebtoken");

class Home extends Component{
    constructor(props){
        super(props)
        this.state = { Nav_bar : <Nav_user/>,
            isAdmin : false,
            EC_keys : ["Course No","Course Title","Class Rooms","Date","Time"],
            P_keys : [],
            W_keys : ["Name of Workshop","Name of Faculty/Student","Class Rooms","Date","Time"],
            M_keys : ["Faculty Name","Course No","Course Title","Class Rooms","Date of Exam","Time"],
            C_keys : ["Faculty Name","Course No","Course Title","Class Rooms","Date of Exam","Time"]
        }   
        this.token = {}
    }
    
    componentWillMount(){
        // console.log("IN home component")
        const token = window.localStorage.getItem("cclab-token")
        this.token = jwt.decode(token)
        if((token=="")||(token==null)){
            this.props.history.push("/")
        }
        else{
            const decode_token = jwt.decode(token)
            // console.log("in resources page")
            // console.log(decode_token)
            if(decode_token.email == "f20170225@hyderabad.bits-pilani.ac.in"){
                this.setState({Nav_bar : <NavBar/>, isAdmin : true})
            }
        }
    }

    extraClasses= (e) => {
        e.preventDefault()
        console.log("Extra Classes Clicked")
        var request = {}
        request["Course No"] = e.target[0].value
        request["Course Title"] = e.target[1].value
        request["Date"] = e.target[8].value
        request["Time Start"] = e.target[9].value
        request["Time End"] = e.target[10].value
        request["Class Rooms"] = []
        var class_rooms = ["D201A","D201B","D201C","D311","D312","D313"]
        for(let i =1;i<=6;i++){
            if(document.getElementById(("defaultInline"+(i.toString()))).checked===true){
                request["Class Rooms"].push(class_rooms[i-1])
            }
        }
        request["user_email"] = this.token.email
        request["username"] = this.token.username
        document.getElementById('ECform').reset()
        //reload window
        Axios.post('http://localhost:4000/requests/extraClasses/insert',request).then((res)=>{
            console.log(res)
            // this.setState({Data:res.data})
        })
    }

    placements= (e) => {
        console.log("placements Clicked")
        Axios.get('http://localhost:4000/requests/placements/insert').then((res)=>{
            console.log(res)
            // this.setState({Data:res.data})
        })
    }

    workshops= (e) => {
        console.log("workshops Clicked")
        e.preventDefault()
        var request = {}
        request["Name of Workshop"] = e.target[0].value
        request["Name of Faculty/Student"] = e.target[1].value
        request["Date"] = e.target[8].value
        request["Time Start"] = e.target[9].value
        request["Time End"] = e.target[10].value
        request["Class Rooms"] = []
        var class_rooms = ["D201A","D201B","D201C","D311","D312","D313"]
        for(let i =1;i<=6;i++){
            if(document.getElementById(("defaultInline"+((i+18).toString()))).checked===true){
                request["Class Rooms"].push(class_rooms[i-1])
            }
        }
        request["user_email"] = this.token.email
        request["username"] = this.token.username
        
        document.getElementById('Wform').reset()
        Axios.post('http://localhost:4000/requests/workshops/insert',request).then((res)=>{
            console.log(res)
            // this.setState({Data:res.data})
        })
    }

    midsems= (e) => {
        console.log("midsems Clicked")
        e.preventDefault()
        var request = {}
        request["Course No"] = e.target[0].value
        request["Course Title"] = e.target[1].value
        request["Date"] = e.target[8].value
        request["Time Start"] = e.target[9].value
        request["Time End"] = e.target[10].value
        request["Class Rooms"] = []
        var class_rooms = ["D201A","D201B","D201C","D311","D312","D313"]
        for(let i =1;i<=6;i++){
            if(document.getElementById(("defaultInline"+((i+6).toString()))).checked===true){
                request["Class Rooms"].push(class_rooms[i-1])
            }
        }
        request["user_email"] = this.token.email
        request["Faculty Name"] = this.token.username
        document.getElementById('Mform').reset()
        Axios.post('http://localhost:4000/requests/midsem/insert',request).then((res)=>{
            console.log(res)
            // this.setState({Data:res.data})
        })
    }

    compre= (e) => {
        console.log("compre Clicked")
        e.preventDefault()
        var request = {}
        request["Course No"] = e.target[0].value
        request["Course Title"] = e.target[1].value
        request["Date"] = e.target[8].value
        request["Time Start"] = e.target[9].value
        request["Time End"] = e.target[10].value
        request["Class Rooms"] = []
        var class_rooms = ["D201A","D201B","D201C","D311","D312","D313"]
        for(let i =1;i<=6;i++){
            if(document.getElementById(("defaultInline"+((i+12).toString()))).checked===true){
                request["Class Rooms"].push(class_rooms[i-1])
            }
        }
        request["user_email"] = this.token.email
        request["Faculty Name"] = this.token.username
        document.getElementById('Cform').reset()
        Axios.post('http://localhost:4000/requests/compre/insert',request).then((res)=>{
            console.log(res)
            // this.setState({Data:res.data})
        })
    }

    render(){
        return (
            <div>
                {this.state.Nav_bar}
                <ul className="flex-container">
                    <li className="flex-item grow">D208</li>
                    <li className="flex-item grow">D208</li>
                    <li className="flex-item grow">D208</li>
                    <li className="flex-item grow">D208</li>
                    <li className="flex-item grow">D208</li>
                    <li className="flex-item grow">D208</li>
                </ul>
                {
                    (this.state.isAdmin === true)? "":
                        <div class="dropdown">
                            <button class="dropbtn">Request</button>
                            <div class="dropdown-content">
                                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#ECmodal" style={{"width":"100%","backgroundColor":"#ccc"}} >Extra Classes</button>
                                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#Pmodal" style={{"width":"100%","backgroundColor":"#ccc"}}>Placements</button>
                                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#Wmodal" style={{"width":"100%","backgroundColor":"#ccc"}}>Workshops</button>
                                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#Mmodal" style={{"width":"100%","backgroundColor":"#ccc"}}>Midsem</button>
                                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#Cmodal" style={{"width":"100%","backgroundColor":"#ccc"}}>Compre</button>
                            </div>
                            <div className="modal fade" id="ECmodal" role="dialog">
                                <div className="modal-dialog ">
                                    <div className="modal-content">
                                        <div className="modal-header" style={{"padding":"35px 50px"}}>
                                            <h1 style={{"color":"rgb(52, 177, 235)"}}>EDIT FORM</h1>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body" style={{"padding":"40px 50px"}}>
                                            <form role="form" onSubmit ={this.extraClasses} id="ECform">
                                                {
                                                    (this.state.EC_keys.map((item,i)=>{
                                                        console.log(item)
                                                        if((item=="Course No")||(item=="Course Title")){
                                                            return (
                                                                <div className="form-group" key={i}>
                                                                    <label for={item} className = "label_class" >{item}</label>
                                                                    <input type="text" className="form-control" id={item} placeholder={"Enter "+item} ></input>
                                                                </div>
                                                            )
                                                        }
                                                        else if (item == "Class Rooms"){
                                                            return (
                                                                <div>
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline1"></input>
                                                                        <label className="custom-control-label 1" for="defaultInline1">D201A</label>
                                                                    </div>
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline2"></input>
                                                                        <label className="custom-control-label 2" for="defaultInline2">D201B</label>
                                                                    </div>                                                    
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline3"></input>
                                                                        <label className="custom-control-label 3" for="defaultInline3">D201C</label>
                                                                    </div>
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline4"></input>
                                                                        <label className="custom-control-label 4" for="defaultInline4">D311</label>
                                                                    </div>
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline5"></input>
                                                                        <label className="custom-control-label 5" for="defaultInline5">D312</label>
                                                                    </div>                                                    
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline6"></input>
                                                                        <label className="custom-control-label 6" for="defaultInline6">D313</label>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        else if(item=="Date"){
                                                            return (
                                                                <div className="form-group" key={i}>
                                                                    <label for={item} className = "label_class" >{item}</label>
                                                                    <div >
                                                                        <input type="date" className="form-control" id={item} style = {{"width":"200px","textAlign":"center","marginLeft":"100px"}}></input>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        else if(item=="Time"){
                                                            return (
                                                                <div className="form-group" key={i}>
                                                                    <label for={item} className = "label_class" >{item}</label><br></br>
                                                                    <span style = {{"display":"inline"}}>
                                                                        <input type="time" id={item}  style = {{"width":"100px","marginRight":"50px"}}></input>
                                                                        <input type="time" id={item}  style = {{"width":"100px","marginLeft":"50px"}}></input>
                                                                    </span>
                                                                </div>
                                                            )
                                                        }
                                                    }))
                                                }

                                                <button type="submit" className="btn btn-primary ">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="modal fade" id="Wmodal" role="dialog">
                                <div className="modal-dialog ">
                                    <div className="modal-content">
                                        <div className="modal-header" style={{"padding":"35px 50px"}}>
                                            <h1 style={{"color":"rgb(52, 177, 235)"}}>EDIT FORM</h1>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body" style={{"padding":"40px 50px"}}>
                                            <form role="form" onSubmit ={this.workshops} id="Wform">
                                                {
                                                    (this.state.W_keys.map((item,i)=>{
                                                        console.log(item)
                                                        if((item=="Name of Workshop")||(item=="Name of Faculty/Student")){
                                                            return (
                                                                <div className="form-group" key={i}>
                                                                    <label for={item} className = "label_class" >{item}</label>
                                                                    <input type="text" className="form-control" id={item} placeholder={"Enter "+item} ></input>
                                                                </div>
                                                            )
                                                        }
                                                        else if (item == "Class Rooms"){
                                                            return (
                                                                <div>
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline19"></input>
                                                                        <label className="custom-control-label 1" for="defaultInline19">D201A</label>
                                                                    </div>
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline20"></input>
                                                                        <label className="custom-control-label 2" for="defaultInline20">D201B</label>
                                                                    </div>                                                    
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline21"></input>
                                                                        <label className="custom-control-label 3" for="defaultInline21">D201C</label>
                                                                    </div>
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline22"></input>
                                                                        <label className="custom-control-label 4" for="defaultInline22">D311</label>
                                                                    </div>
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline23"></input>
                                                                        <label className="custom-control-label 5" for="defaultInline23">D312</label>
                                                                    </div>                                                    
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline24"></input>
                                                                        <label className="custom-control-label 6" for="defaultInline24">D313</label>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        else if(item=="Date"){
                                                            return (
                                                                <div className="form-group" key={i}>
                                                                    <label for={item} className = "label_class" >{item}</label>
                                                                    <div >
                                                                        <input type="date" className="form-control" id={item} style = {{"width":"200px","textAlign":"center","marginLeft":"100px"}}></input>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        else if(item=="Time"){
                                                            return (
                                                                <div className="form-group" key={i}>
                                                                    <label for={item} className = "label_class" >{item}</label><br></br>
                                                                    <span style = {{"display":"inline"}}>
                                                                        <input type="time" id={item}  style = {{"width":"100px","marginRight":"50px"}}></input>
                                                                        <input type="time" id={item}  style = {{"width":"100px","marginLeft":"50px"}}></input>
                                                                    </span>
                                                                </div>
                                                            )
                                                        }
                                                    }))
                                                }
                                                <button type="submit" className="btn btn-primary ">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="modal fade" id="Mmodal" role="dialog">
                                <div className="modal-dialog ">
                                    <div className="modal-content">
                                        <div className="modal-header" style={{"padding":"35px 50px"}}>
                                            <h1 style={{"color":"rgb(52, 177, 235)"}}>EDIT FORM</h1>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body" style={{"padding":"40px 50px"}}>
                                            <form role="form" onSubmit ={this.midsems} id="Mform">
                                                {
                                                    (this.state.M_keys.map((item,i)=>{
                                                        console.log(item)
                                                        if((item=="Course No")||(item=="Course Title")){
                                                            return (
                                                                <div className="form-group" key={i}>
                                                                    <label for={item} className = "label_class" >{item}</label>
                                                                    <input type="text" className="form-control" id={item} placeholder={"Enter "+item} ></input>
                                                                </div>
                                                            )
                                                        }
                                                        else if (item == "Class Rooms"){
                                                            return (
                                                                <div>
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline7"></input>
                                                                        <label className="custom-control-label 1" for="defaultInline7">D201A</label>
                                                                    </div>
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline8"></input>
                                                                        <label className="custom-control-label 2" for="defaultInline8">D201B</label>
                                                                    </div>                                                    
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline9"></input>
                                                                        <label className="custom-control-label 3" for="defaultInline9">D201C</label>
                                                                    </div>
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline10"></input>
                                                                        <label className="custom-control-label 4" for="defaultInline10">D311</label>
                                                                    </div>
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline11"></input>
                                                                        <label className="custom-control-label 5" for="defaultInline11">D312</label>
                                                                    </div>                                                    
                                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                                        <input type="checkbox" className="custom-control-input" id="defaultInline12"></input>
                                                                        <label className="custom-control-label 6" for="defaultInline12">D313</label>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        else if(item=="Date of Exam"){
                                                            return (
                                                                <div className="form-group" key={i}>
                                                                    <label for={item} className = "label_class" >{item}</label>
                                                                    <div >
                                                                        <input type="date" className="form-control" id={item} style = {{"width":"200px","textAlign":"center","marginLeft":"100px"}}></input>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        else if(item=="Time"){
                                                            return (
                                                                <div className="form-group" key={i}>
                                                                    <label for={item} className = "label_class" >{item}</label><br></br>
                                                                    <span style = {{"display":"inline"}}>
                                                                        <input type="time" id={item}  style = {{"width":"100px","marginRight":"50px"}}></input>
                                                                        <input type="time" id={item}  style = {{"width":"100px","marginLeft":"50px"}}></input>
                                                                    </span>
                                                                </div>
                                                            )
                                                        }
                                                    }))
                                                }
                                                <button type="submit" className="btn btn-primary ">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="modal fade" id="Cmodal" role="dialog">
                            <div className="modal-dialog ">
                                <div className="modal-content">
                                    <div className="modal-header" style={{"padding":"35px 50px"}}>
                                        <h1 style={{"color":"rgb(52, 177, 235)"}}>EDIT FORM</h1>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body" style={{"padding":"40px 50px"}}>
                                        <form role="form" onSubmit ={this.compre} id="Cform">
                                            {
                                                (this.state.C_keys.map((item,i)=>{
                                                    console.log(item)
                                                    if((item=="Course No")||(item=="Course Title")){
                                                        return (
                                                            <div className="form-group" key={i}>
                                                                <label for={item} className = "label_class" >{item}</label>
                                                                <input type="text" className="form-control" id={item} placeholder={"Enter "+item} ></input>
                                                            </div>
                                                        )
                                                    }
                                                    else if (item == "Class Rooms"){
                                                        return (
                                                            <div>
                                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                                    <input type="checkbox" className="custom-control-input" id="defaultInline13"></input>
                                                                    <label className="custom-control-label 1" for="defaultInline13">D201A</label>
                                                                </div>
                                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                                    <input type="checkbox" className="custom-control-input" id="defaultInline14"></input>
                                                                    <label className="custom-control-label 2" for="defaultInline14">D201B</label>
                                                                </div>                                                    
                                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                                    <input type="checkbox" className="custom-control-input" id="defaultInline15"></input>
                                                                    <label className="custom-control-label 3" for="defaultInline15">D201C</label>
                                                                </div>
                                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                                    <input type="checkbox" className="custom-control-input" id="defaultInline16"></input>
                                                                    <label className="custom-control-label 4" for="defaultInline16">D311</label>
                                                                </div>
                                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                                    <input type="checkbox" className="custom-control-input" id="defaultInline17"></input>
                                                                    <label className="custom-control-label 5" for="defaultInline17">D312</label>
                                                                </div>                                                    
                                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                                    <input type="checkbox" className="custom-control-input" id="defaultInline18"></input>
                                                                    <label className="custom-control-label 6" for="defaultInline18">D313</label>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                    else if(item=="Date of Exam"){
                                                        return (
                                                            <div className="form-group" key={i}>
                                                                <label for={item} className = "label_class" >{item}</label>
                                                                <div >
                                                                    <input type="date" className="form-control" id={item} style = {{"width":"200px","textAlign":"center","marginLeft":"100px"}}></input>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                    else if(item=="Time"){
                                                        return (
                                                            <div className="form-group" key={i}>
                                                                <label for={item} className = "label_class" >{item}</label><br></br>
                                                                <span style = {{"display":"inline"}}>
                                                                    <input type="time" id={item}  style = {{"width":"100px","marginRight":"50px"}}></input>
                                                                    <input type="time" id={item}  style = {{"width":"100px","marginLeft":"50px"}}></input>
                                                                </span>
                                                            </div>
                                                        )
                                                    }
                                                }))
                                            }
                                            <button type="submit" className="btn btn-primary ">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        </div>
                }
            </div>
        );
    }
}

export default Home;



    
    
    