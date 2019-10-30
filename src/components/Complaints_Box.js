import React,{ Component } from "react";
import Complaints from "./Complaints";

class Complaints_Box extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            Room_No : props.prop1,
            description : props.prop2,
            Lodged_by : props.prop3
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row Complaints_Box">
                    <div className="mdl-cell mdl-cell--12-col ">
                        <div className="mdl-grid">
                            <div className="mdl-cell mdl-cell--6-col field">Email</div>
                            <div className="mdl-cell mdl-cell--6-col data">R Gururaj (gururaj@hyderabad.bits-pilani.ac.in)</div>
                            <br/><br/><br/>
                            <div className="mdl-cell mdl-cell--6-col field">Room.No</div>
                            <div className="mdl-cell mdl-cell--6-col data">{this.state.Room_No}</div>
                            <br/><br/><br/>
                            <div className="mdl-cell mdl-cell--6-col field">Issue</div>
                            <div className="mdl-cell mdl-cell--6-col data">{this.state.description}</div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Complaints_Box;