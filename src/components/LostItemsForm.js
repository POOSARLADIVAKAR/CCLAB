import React,{Component} from 'react';
import '../cssfiles/ComplaintForm.css';
import Axios from 'axios'
var jwt = require("jsonwebtoken");


class LostItemForm extends Component
{
    constructor(props){
        super(props);
        this.state = {
            Room_no: "",
            Date: Date(),
            Item: ""
        }
    }

    sendComplaint = (item) => {
        // console.log(item)
        Axios.post('/LostItem',item).then((res)=>{
            console.log("item sent successfully")
            // console.log(res)
        })
        .catch((error)=>{
            console.log(error + "Occured in sending")
            console.log("item sent unsuccessful")
        })
        
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(e)
        this.setState({Room_no:e.target[0].value,Date:e.target[1].value,Item:e.target[2].value},(e)=>{
            // console.log(this.state)
            this.sendComplaint({
                Room_no:this.state.Room_no,
                Date: this.state.Date,
                Item: this.state.Item
            }
            ) // Item posted after this form is cleared so this page part is over
            document.getElementById("complaintForm").reset();
        })
    }
    
    render(){

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
                        <label for="lname">Date</label>
                        </div>
                        <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Date .." required></input>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-25">
                        <label for="subject">Item</label>
                        </div>
                        <div className="col-75">
                        <textarea id="subject" name="subject" placeholder="..." style={{"height":"200px"}} required></textarea>
                        </div>
                    </div>

                    <div className="row" style = {{"textAlign":"center"}}>
                        <button type="submit" className="btn btn-info btn-lg" >Post</button>
                    </div>
                </form> 
            </div>
        )
    }
}

export default LostItemForm
