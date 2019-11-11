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
    }
    render(){
        console.log("LostItem_Box_user called")
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
                                    <div className="mdl-cell mdl-cell--6-col data">{this.state.Date}</div>
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