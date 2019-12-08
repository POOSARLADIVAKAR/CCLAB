import React, { Component } from 'react';
import '../../cssfiles/History_Box.css';


class History_Box_User extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            data:props.histData,
            keys:Object.keys(props.histData),
        }
        this.cancel = ""
        this.today = new Date()
        this.submit_time = new Date()
        this.string_date = ""
    }


    render(){
        if(this.state.data.length!==0){
            this.submit_time = new Date(this.state.data["Date"])
            this.string_date = this.submit_time.getDate()+"-"+(this.submit_time.getMonth()+1)+"-"+this.submit_time.getFullYear()
            // console.log(this.submit_time.getTime())
        }
        return(
            <div>
                <div className="card">
                    <div className="card-body" >
                        <h2>{this.state.data["Belongs_to"].toUpperCase()}</h2>
                        <div >
                        {/* {console.log("History box called")} */}
                        {   
                            this.state.keys.map((item,index)=>
                                    {   //console.log(item,index)
                                        if((item!=="_id")&&(item!=="__v")&&(item!=="Granted"&&(item!=="Class_Rooms")&&(item!=="Date")&&(item!=="Belongs_to")&&(item!=="Rejected")&&(item!=="Comment")&&(item!=="User_email"))){
                                            return(
                                                <div className="container-History" key={index}>
                                                        <div className="mdl-cell mdl-cell--12-col ">
                                                            <div className="mdl-grid">
                                                                <div className="mdl-cell mdl-cell--6-col field">{item.replace(/[_]/g," ")}</div>
                                                                <div className="mdl-cell mdl-cell--6-col data">{this.state.data[item]}</div>
                                                            </div>
                                                        </div>
                                                </div> 
                                            )
                                        }
                                        else if (item==="Class_Rooms"){
                                            return(
                                                <div className="container-History" key={index}>
                                                        <div className="mdl-cell mdl-cell--12-col ">
                                                            <div className="mdl-grid">
                                                                <div className="mdl-cell mdl-cell--6-col field">{item.replace(/[_]/g," ")}</div>
                                                                <div className="mdl-cell mdl-cell--6-col data">{this.state.data[item].map((room,index)=>{return room+" "})}</div>
                                                            </div>
                                                        </div>
                                                </div> 
                                            )
                                        }
                                        else if(item==="Date"){
                                            return(
                                                <div className="container-History" key={index}>
                                                        <div className="mdl-cell mdl-cell--12-col ">
                                                            <div className="mdl-grid">
                                                                <div className="mdl-cell mdl-cell--6-col field">{item.replace(/[_]/g," ")}</div>
                                                                <div className="mdl-cell mdl-cell--6-col data">{this.string_date}</div>
                                                            </div>
                                                        </div>
                                                </div> 
                                            )
                                        }
                                        return ""
                                    })
                            }
                        </div>
                        {
                            (this.state.data["Rejected"]===true)?
                                (
                                    <div className="container-History">
                                            <div className="mdl-cell mdl-cell--12-col ">
                                                <div className="mdl-grid">
                                                    <div className="mdl-cell mdl-cell--6-col field">Comment</div>
                                                    <div className="mdl-cell mdl-cell--6-col data">{this.state.data["Comment"]}</div>
                                                </div>
                                            </div>
                                    </div>
                                )
                            :((this.state.data["Granted"]===true)?(<div className="container-History">
                            <div className="mdl-cell mdl-cell--12-col ">
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--6-col field">Comment</div>
                                    <div className="mdl-cell mdl-cell--6-col data">Accepted! Check in Time Table</div>
                                </div>
                            </div>
                    </div>):(
                        <div className="container-History">
                                            <div className="mdl-cell mdl-cell--12-col ">
                                                <div className="mdl-grid">
                                                    <div className="mdl-cell mdl-cell--6-col field">Comment</div>
                                                    <div className="mdl-cell mdl-cell--6-col data">Request is Pending</div>
                                                </div>
                                            </div>
                                    </div>
                    ))
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default History_Box_User;
