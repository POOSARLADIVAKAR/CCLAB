import React,{ Component } from "react";
import Complaints from "./Complaints";

class Complaints_Box extends Component{
    constructor(props){
        super(props)
        this.state = {
            Room_No : "",
            description : "",
            Lodged_by : ""
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row Complaints_Box">
                    
                </div>
            </div>
        );
    }
}

export default Complaints_Box;