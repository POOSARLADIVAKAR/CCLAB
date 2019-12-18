import React, { Component} from 'react'
import NavBar from './NavBar'
import NavUser from './Nav_user'
import './../cssfiles/Resource.css'
import Axios from 'axios'

var jwt = require("jsonwebtoken");

class Resources extends Component{
    constructor(props){
        super(props)
        this.state = { Nav_bar : <NavUser/> , 
            keys : ["Systems","Projector","Operating_systems","Softwares"],
            data: [],
            room : 0
            
        }
        this.edit = ""
        this.room_name = "D208A"
    }
    UNSAFE_componentWillMount(){
        const token = window.localStorage.getItem("cclab-token")
        if((token==="")||(token===null)){
            this.props.history.push("/")
        }
        else{
            const decode_token = jwt.decode(token)
            // console.log("in resources page")
            // console.log(decode_token)
            if(decode_token.email === "f20170209@hyderabad.bits-pilani.ac.in"){
                this.setState({Nav_bar : <NavBar/>})
                this.edit =  <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Edit</button>
            }
        }
        // Axios.get('http://localhost:4000/Resources/getData').then((res)=>{
        Axios.get('/Resources/getData').then((res)=>{
            this.setState({data : res.data },()=>{
            })
        })

    }
    getRoom = (e)=>{
        // console.log(document.getElementById(e.target.id).textContent)
        this.room_name = document.getElementById(e.target.id).textContent
        this.setState({room: Number(e.target.id)},()=>{
            this.render()
        })   
    }
    send_data = (e) =>{
        // console.log("Submit_data clicked")
        let update_data = this.state.data[this.state.room]
        // console.log(update_data)
        if(e.target[0].value !== "") update_data["Systems"] = e.target[0].value
        if(e.target[1].value !== "") update_data["Projector"] = e.target[1].value
        if(e.target[2].value !== "") update_data["Operating_systems"] = e.target[2].value
        if(e.target[3].value !== "") update_data["Softwares"] = e.target[3].value
        // Axios.post("http://localhost:4000/Resources/update",update_data).then((res)=>{
        Axios.post("/Resources/update",update_data).then((res)=>{
            // console.log(res)
        })
        this.render()
    }

    render(){
        if(this.state.data.length === 0){
            return(
                <div>
                    {this.state.Nav_bar}
                    <ul className="flex-container">
                        <li id ="0" className="flex-item grow" onClick = {this.getRoom}>D208A</li>
                        <li id ="1" className="flex-item grow" onClick = {this.getRoom}>D208B</li>
                        <li id ="2" className="flex-item grow" onClick = {this.getRoom}>D208C</li>
                        <li id ="3" className="flex-item grow" onClick = {this.getRoom}>D311</li>
                        <li id ="4" className="flex-item grow" onClick = {this.getRoom}>D312</li>
                        <li id ="5" className="flex-item grow" onClick = {this.getRoom}>D313</li>
                    </ul>
                </div>
            )
        }
        return(
            <div>
                {this.state.Nav_bar}
                <ul className="flex-container">
                    <li id ="0" className="flex-item grow" onClick = {this.getRoom}>D208A</li>
                    <li id ="1" className="flex-item grow" onClick = {this.getRoom}>D208B</li>
                    <li id ="2" className="flex-item grow" onClick = {this.getRoom}>D208C</li>
                    <li id ="3" className="flex-item grow" onClick = {this.getRoom}>D311</li>
                    <li id ="4" className="flex-item grow" onClick = {this.getRoom}>D312</li>
                    <li id ="5" className="flex-item grow" onClick = {this.getRoom}>D313</li>
                </ul>
                <h1 id="RoomSelected">{this.room_name}</h1>
                <div className="table">
                    <div className="thead">
                        <div className="tr">
                            <div className="td"><span className="textCell">Resource</span></div>
                            <div className="td"><span className="textCell">Quantity</span></div>
                        </div>
                    </div>
                    {   
                        this.state.keys.map((item,i)=>{
                            if(item==="Operating_systems")
                            {
                                return(
                                <div className="tr" key ={i}>
                                    <div className="td" ><span className="textCell">Operating Systems</span></div>
                                    <div className="td" ><span className="textCell">{this.state.data[this.state.room][item]}</span></div>
                                </div>
                            )    
                            }
                            return(
                                <form className="tr" key ={i}>
                                    <div className="td" ><span className="textCell">{item}</span></div>
                                    <div className="td" ><span className="textCell">{this.state.data[this.state.room][item]}</span></div>                            
                                </form>
                            )
                        })
                    }
                </div> 
                {this.edit}

                <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header" style={{"padding":"35px 50px"}}>
                    <h1 style={{"color":"rgb(52, 177, 235)"}}>{this.room_name}</h1>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body" style={{"padding":"40px 50px"}}>
                    <form onSubmit ={this.send_data} >
                        {
                            (this.state.keys.map((item,i)=>{
                                if(item==="Operating_systems")
                                {
                                    return (
                                    <div className="form-group" key={i}>
                                        <label className = "label_class" >Operating Systems</label>
                                        <input type="text" className="form-control" id={item} placeholder={this.state.data[this.state.room][item]}></input>
                                    </div>
                                )    
                                }
                                return (
                                    <div className="form-group" key={i}>
                                        <label htmlFor={item} className = "label_class" >{item}</label>
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









