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

                <div id="myModal" class="modal fade" role="dialog">
                    <div class="modal-dialog modal-lg modal-dialog-centered">

                        {/* <!-- Modal content--> */}
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" backdrop="static">&times;</button>
                                <h4 class="modal-title">Modal Header</h4>
                            </div>
                            <div class="modal-body">
                                <form class="form-horizontal">
                                    <div class="form-group">
                                        <label class="control-label col-sm-2" for="email">Email:</label>
                                        <div class="col-sm-10">
                                        <input type="email" class="form-control" id="email" placeholder="Enter email"></input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-sm-2" for="pwd">Password:</label>
                                        <div class="col-sm-10">
                                        <input type="password" class="form-control" id="pwd" placeholder="Enter password"></input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-offset-2 col-sm-10">
                                        <button type="submit" class="btn btn-default">Submit</button>
                                        </div>
                                    </div>
                                </form> 
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>

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
                    {/* <!-- Trigger the modal with a button --> */}
                    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

               </div>
        );
    }
}

export default Resources;
