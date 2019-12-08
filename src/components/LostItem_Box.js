import React,{ Component } from "react";
import Axios from 'axios'
class LostItem_Box extends Component{
    constructor(props){
        super(props)
        // console.log(this.props.props)
        this.state = {
            _id : this.props.props._id,
            Room_no : this.props.props.Room_no,
            Date : this.props.props.Date,
            Item : this.props.props.Item,
            Collected : this.props.props.Collected
        }
        this.submit_time = new Date()
        this.date_string = ""
    }
    Collected = ()=>{
        // console.log("Clicked Solved")
        Axios.post('http://localhost:4000/returnedItem',{...this.state}).then((res)=>{
            window.location.reload()
        })
    }
    render(){
        if(this.state.Date!==undefined){
            this.submit_time = new Date(this.state.Date)
            this.date_string = this.submit_time.getDate()+"-"+(this.submit_time.getMonth()+1)+"-"+this.submit_time.getFullYear()
        }
        return(
            <div className="container">
                <div className="row Complaints_Box">
                    <div className="mdl-cell mdl-cell--12-col ">
                            <div className="mdl-grid">
                            <div className="mdl-cell mdl-cell--6-col field">Room.No</div>
                            <div className="mdl-cell mdl-cell--6-col data">{this.state.Room_no}</div>
                            <div className="mdl-cell mdl-cell--6-col field">Date</div>
                            <div className="mdl-cell mdl-cell--6-col data">{this.date_string}</div>
                            <div className="mdl-cell mdl-cell--6-col field">Item</div>
                            <div className="mdl-cell mdl-cell--6-col data">{this.state.Item}</div>
                            {
                                (this.state.Collected) ?  "" :<button onClick = {this.Collected} >Collected</button>
                            } 
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default LostItem_Box;