import React,{ Component } from "react";
import Complaints from "./Complaints";
import Axios from 'axios'
import '../cssfiles/LostItem_Box_User.css'
//this page is for user views al un collected elements
class LostItem_Box_user extends Component{
    constructor(props){
        super(props)
        // console.log(this.props.props)
        this.state = {
            Room_no : this.props.props.Room_no,
            Date : this.props.props.Date,
            Item : this.props.props.Item,
        }
        this.submit_time = new Date()
        this.date_string = ""
    }
    render(){
        console.log("LostItem_Box_user called")
        if(this.state.Date!=undefined){
            this.submit_time = new Date(this.state.Date)
            this.date_string = this.submit_time.getDate()+"-"+(this.submit_time.getMonth()+1)+"-"+this.submit_time.getFullYear()
        }
        return(
                <div id="itemBox">
                        <div className="mdl-cell mdl-cell--12-col eachRow">
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--6-col field">Room.No</div>
                                    <div className="mdl-cell mdl-cell--6-col data">{this.state.Room_no}</div>
                            </div>
                        </div>
                        <div className="mdl-cell mdl-cell--12-col eachRow">
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--6-col field">Date</div>
                                    <div className="mdl-cell mdl-cell--6-col data">{this.date_string}</div>
                                </div>
                        </div>
                        <div className="mdl-cell mdl-cell--12-col eachRow">
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--6-col field">Item</div>
                                    <div className="mdl-cell mdl-cell--6-col data">{this.state.Item}</div>
                                </div>
                        </div>
                </div>            
        );
    }
}

export default LostItem_Box_user;



