import React, { Component } from 'react';
import '../../cssfiles/History_Box.css';
import Axios from 'axios';

class History_Box extends Component
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
        this.accept = ""
        this.reject = <button>Finished</button>
    }

    ///handleReject not working properly
    handleReject = ()=>{
        // console.log("reject clicked")
        // console.log(this.state.data["Belongs_to"])
        if(this.today.getTime() < this.submit_time.getTime()){
            let dataNew = this.state.data
            dataNew["Comment"] = document.getElementById("Comment").value
            this.setstate({data:dataNew})
            // console.log(document.getElementById("Comment").value)
        }
        // console.log(this.state.data)
        Axios.put("http://localhost:4000/requests/"+this.state.data["Belongs_to"]+"/reject",this.state.data).then((res)=>{
            // console.log(res)
            window.location.reload()
        })
    }

    handleAccept = ()=>{
        // console.log("accept clicked")
        // console.log(this.state.data["Belongs_to"])
        Axios.put("http://localhost:4000/requests/"+this.state.data["Belongs_to"]+"/update",this.state.data).then((res)=>{
            // console.log(res)
            window.location.reload()
        })
    }

    render(){
        if(this.state.data.length!==0){
            this.submit_time = new Date(this.state.data["Date"])
            this.string_date = this.submit_time.getDate()+"-"+(this.submit_time.getMonth()+1)+"-"+this.submit_time.getFullYear()
            // console.log(this.submit_time.getTime())
            if(this.state.data["Granted"]===true){
                if(this.today.getTime() < this.submit_time.getTime()){
                    this.reject = <button onClick={this.handleReject}>Reject</button>
                }
            }
            else{
                this.accept = <button onClick={this.handleAccept} >Accept</button>
                this.reject = <button onClick={this.handleReject} >Reject</button>
            }
        }
        // console.log("checking the data")
        // console.log(this.state.data)
        return(
            <div>
                <div className="card">
                    <div className="card-body" >
                        <h2>{this.state.data["Belongs_to"].toUpperCase()}</h2>
                        <div >
                        {   
                            this.state.keys.map((item,index)=>
                                    {   //console.log(item,index)
                                        if((item!=="_id")&&(item!=="__v")&&(item!=="Granted"&&(item!=="Class_Rooms")&&(item!=="Date")&&(item!=="Belongs_to")&&(item!=="Rejected")&&(item!=="Comment"))){
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
                            (this.today.getTime() < this.submit_time.getTime())?
                                (
                                    <div className="container-History">
                                            <div className="mdl-cell mdl-cell--12-col ">
                                                <div className="mdl-grid">
                                                    <div className="mdl-cell mdl-cell--6-col field">Comment</div>
                                                    <div className="mdl-cell mdl-cell--6-col data"><input type="text" id="Comment"></input></div>
                                                </div>
                                            </div>
                                    </div>
                                )
                            :("")

                        }
                        {   
                            <div className="mdl-grid">
                                <div className="mdl-cell mdl-cell--6-col field">{this.accept}</div>
                                <div className="mdl-cell mdl-cell--6-col data">{this.reject}</div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default History_Box;
