import React,{Component} from 'react';
import '../cssfiles/ComplaintForm.css';
import Axios from 'axios'
var jwt = require("jsonwebtoken");


class ComplaintForm extends Component
{
    constructor(props){
        super(props);
        this.state = {
            email : "",
            Room_no : "",
            System_no : 0,
            Issue : "Nothing"
        }
    }

    sendComplaint = (complaint) => {
        // console.log(complaint)
        Axios.post('/Complaints',complaint).then((res)=>{
            // console.log(complaint)
            console.log("Complaint successfully sent")
        })
        .catch((error)=>{
            console.log(error + "Occured in sending")
            console.log("Complaint unsuccessful")
        })
    }

    handleSubmit = (e)=>{
        console.log("Clicked form")
        e.preventDefault();
        // console.log(e)
        this.setState({Room_no:e.target[0].value,System_no:e.target[1].value,Issue:e.target[2].value},(e)=>{
            // console.log(this.state)
            this.sendComplaint({
                email:this.state.email,
                //get user email by decoding token .. cleared
                room:this.state.Room_no,
                date: Date(),
                system : this.state.System_no,
                desc: this.state.Issue
            }
            ) // complaint sent 
            document.getElementById("complaintForm").reset();
        })
    }
    
    UNSAFE_componentWillMount(){
        const token = window.localStorage.getItem("cclab-token")
        if((token!=="")&&(token!==null)){
            const decode_token = jwt.decode(token)
            this.setState({email:decode_token.email})
        }
    }

    render(){
        // const token = window.localStorage.getItem("cclab-token")

        return(
            <div className="container" id="form_container_id">
                <form onSubmit={this.handleSubmit} id="complaintForm" >
                    <div className="row">
                        <div className="col-25">
                        <label for="fname">Room Number</label>
                        </div>
                        <div className="col-75">
                        <input type="text" id="rno" name="firstname" placeholder="Room Number.." required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label for="lname">System Number</label>
                        </div>
                        <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Sys no.." required></input>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-25">
                        <label for="subject">Issue</label>
                        </div>
                        <div className="col-75">
                        <textarea id="subject" name="subject" placeholder="..." style={{"height":"200px"}} required></textarea>
                        </div>
                    </div>

                    <div className="row" style = {{"textAlign":"center"}}>
                        <button type="submit" className="btn btn-info btn-lg" >Submit</button>
                    </div>
                </form> 
            </div>
        )
    }
}

export default ComplaintForm
