import React, {Component} from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import './../cssfiles/Home.css'
import Login from './Login';
import NavBar from './NavBar'
import Nav_user from "./Nav_user"
import Axios from 'axios'
var jwt = require("jsonwebtoken");

class Home extends Component{
    constructor(props){
        super(props)
        this.state = { Nav_bar : <Nav_user/>,
            EC_keys : ["Course No","Course Title","Class Rooms","Date","Time"],
            P_keys : [],
            W_keys : ["Name of Workshop","Name of faculty/Student","Date","Time"],
            M_keys : [],
            C_keys : []
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
            // console.log("in resources page")
            // console.log(decode_token)
            if(decode_token.email == "f20170209@hyderabad.bits-pilani.ac.in"){
                this.setState({Nav_bar : <NavBar/>})
            }
        }
    }

    extraClasses= (e)=> {
        e.preventDefault()
        console.log("Extra Classes Clicked")
        var request = []
        this.state.EC_keys.map((item,i)=>{
            request[item] = e.target[i].value
        })
        request["Time start"] = request["Time"]
        request["Time end"] = e.target[5].value //dont know reason why array[5] but ot array[6]
        console.log(request)

        // Axios.get('http://localhost:4000/requests/extraClasses').then((res)=>{
        //     console.log(res)
        //     this.setState({Data:res.data})
        // })
    }

    placements= ()=>{
        console.log("placements Clicked")
        Axios.get('http://localhost:4000/requests/placements').then((res)=>{
            console.log(res)
            this.setState({Data:res.data})
        })
    }

    workshops= ()=>{
        console.log("workshops Clicked")
        Axios.get('http://localhost:4000/requests/workshops').then((res)=>{
            console.log(res)
            this.setState({Data:res.data})
        })
    }
    midsems= ()=>{
        console.log("midsems Clicked")
        Axios.get('http://localhost:4000/requests/midsems').then((res)=>{
            console.log(res)
            this.setState({Data:res.data})
        })
    }

    compre= ()=>{
        console.log("compre Clicked")
        Axios.get('http://localhost:4000/requests/compre').then((res)=>{
            console.log(res)
            this.setState({Data:res.data})
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
                <div class="dropdown">
                    <button class="dropbtn">Request</button>
                    <div class="dropdown-content">
                        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#ECmodal" style={{"width":"100%","backgroundColor":"#ccc"}} >Extra Classes</button>
                        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style={{"width":"100%","backgroundColor":"#ccc"}}>Placements</button>
                        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style={{"width":"100%","backgroundColor":"#ccc"}}>Workshops</button>
                        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style={{"width":"100%","backgroundColor":"#ccc"}}>Midsem</button>
                        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style={{"width":"100%","backgroundColor":"#ccc"}}>Compre</button>
                    </div>

                    <div className="modal fade" id="ECmodal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header" style={{"padding":"35px 50px"}}>
                                    <h1 style={{"color":"rgb(52, 177, 235)"}}>EDIT FORM</h1>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body" style={{"padding":"40px 50px"}}>
                                    <form role="form" onSubmit ={this.extraClasses} >
                                        {
                                            (this.state.EC_keys.map((item,i)=>{
                                                console.log(item)
                                                if((item!="Date")&&(item!="Time"))
                                                {
                                                    return (
                                                        <div className="form-group" key={i}>
                                                            <label for={item} className = "label_class" >{item}</label>
                                                            <input type="text" className="form-control" id={item} placeholder={"Enter"}></input>
                                                        </div>
                                                    )
                                                    {/*ADD multiple box for room boking in form */}
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

                </div>
            </div>
        );
    }
}

export default Home;



    
    
    