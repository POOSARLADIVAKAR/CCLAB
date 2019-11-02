import React,{Component} from 'react';
import '../cssfiles/CompliantForm.css';

class ComplaintForm extends Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <form >
                    <div className="row">
                        <div className="col-25">
                        <label for="fname">Room Number</label>
                        </div>
                        <div className="col-75">
                        <input type="text" id="rno" name="firstname" placeholder="Room Number.."></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label for="lname">System Number</label>
                        </div>
                        <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Sys no.."></input>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-25">
                        <label for="subject">Description</label>
                        </div>
                        <div className="col-75">
                        <textarea id="subject" name="subject" placeholder="..." style={{"height":"200px"}}></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <input type="submit" value="Submit"></input>
                    </div>
                </form> 
            </div>
        )
    }
}

export default ComplaintForm
