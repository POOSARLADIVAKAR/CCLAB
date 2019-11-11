import React,{ Component } from "react";
import Complaints from "./Complaints";
import './../cssfiles/Complaints.css'
import Axios from 'axios'
class Complaints_Box extends Component{
    constructor(props){
        super(props)
        // console.log(this.props.props)
        this.state = {
            Lodged_by : this.props.props.Logged_user,
            Room_no : this.props.props.Room_no,
            Date : this.props.props.Date_time,
            System_no : this.props.props.System_no,
            Issue : this.props.props.Issue,
            id : this.props.props._id,
            Solved : this.props.props.Solved
        }
        this.submit_time = new Date()
        this.date_string = ""
    }
    solved = ()=>{
        Axios.post('http://localhost:4000/Complaints/update',this.state).then((res)=>{
            window.location.reload()
        })
    }
    render(){
        if(this.state.Date!=undefined){
            this.submit_time = new Date(this.state.Date)
            this.date_string = this.submit_time.getDate()+"-"+(this.submit_time.getMonth()+1)+"-"+this.submit_time.getFullYear()
        }
        return(
            <div className="container">
                <div className="row Complaints_Box" >
                    <div className="mdl-cell mdl-cell--12-col " >
                        <div className="mdl-grid">
                            <div className="mdl-cell mdl-cell--6-col field">Email</div>
                            <div className="mdl-cell mdl-cell--6-col data">{this.state.Lodged_by}</div>
                            <div className="mdl-cell mdl-cell--6-col field">Room.No</div>
                            <div className="mdl-cell mdl-cell--6-col data">{this.state.Room_no}</div>
                            <div className="mdl-cell mdl-cell--6-col field">IssueDate</div>
                            <div className="mdl-cell mdl-cell--6-col data">{this.date_string}</div>
                            <div className="mdl-cell mdl-cell--6-col field">Issue</div>
                            <div className="mdl-cell mdl-cell--6-col data">{this.state.Issue}</div>
                            <div className="mdl-cell mdl-cell--6-col field">System.No</div>
                            <div className="mdl-cell mdl-cell--6-col data">{this.state.System_no}</div>
                            {
                                (this.state.Solved) ?  "" :<button onClick = {this.solved} >Resolved</button>
                            } 
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Complaints_Box;