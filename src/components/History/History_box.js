import React, { Component } from 'react';
import '../../cssfiles/History_Box.css';
import Axios from 'axios';
import { copyFileSync } from 'fs';

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

    handleReject = ()=>{
        console.log("reject clicked")
        console.log(this.state.data["Belongs_to"])
        Axios.delete("http://localhost:4000/requests/"+this.state.data["Belongs_to"]+"/reject",this.state.data).then((res)=>{
            console.log(res)
        })
        this.render()
    }

    handleAccept = ()=>{
        console.log("accept clicked")
        console.log(this.state.data["Belongs_to"])
        Axios.put("http://localhost:4000/requests/"+this.state.data["Belongs_to"]+"/update",this.state.data).then((res)=>{
            console.log(res)
        })
        this.render()
    }

    render(){
        if(this.state.data.length!=0){
            this.submit_time = new Date(this.state.data["Date"])
            this.string_date = this.submit_time.getDate()+"-"+(this.submit_time.getMonth()+1)+"-"+this.submit_time.getFullYear()
            console.log(this.submit_time.getTime())
            if(this.state.data["Granted"]==true){
                if(this.today.getTime() < this.submit_time.getTime()){
                    this.reject = <button onClick={this.handleReject}>Reject</button>
                }
            }
            else{
                this.accept = <button onClick={this.handleAccept}>Accept</button>
                this.reject = <button onClick={this.handleReject}>Reject</button>
            }
            // console.log(this.today.getTime())
            // console.log(this.today.getTime() < this.submit_time.getTime())
        }
        return(
            <div>
                <div className="card">
                    <div className="card-body" >
                        <div >
                        {console.log("History box called")}
                        {   
                            this.state.keys.map((item,index)=>
                                    {   //console.log(item,index)
                                        if((item!="_id")&&(item!="__v")&&(item!="Granted"&&(item!="Class_Rooms")&&(item!="Date")&&(item!="Belongs_to"))){
                                            return(
                                                <div className="container-History" key={index}>
                                                        <div className="mdl-cell mdl-cell--12-col ">
                                                            <div className="mdl-grid">
                                                                <div className="mdl-cell mdl-cell--6-col field">{item}</div>
                                                                <div className="mdl-cell mdl-cell--6-col data">{this.state.data[item]}</div>
                                                            </div>
                                                        </div>
                                                </div> 
                                            )
                                        }
                                        else if (item=="Class_Rooms"){
                                            return(
                                                <div className="container-History" key={index}>
                                                        <div className="mdl-cell mdl-cell--12-col ">
                                                            <div className="mdl-grid">
                                                                <div className="mdl-cell mdl-cell--6-col field">{item}</div>
                                                                <div className="mdl-cell mdl-cell--6-col data">{this.state.data[item].map((room,index)=>{return room+" "})}</div>
                                                            </div>
                                                        </div>
                                                </div> 
                                            )
                                        }
                                        else if(item=="Date"){
                                            return(
                                                <div className="container-History" key={index}>
                                                        <div className="mdl-cell mdl-cell--12-col ">
                                                            <div className="mdl-grid">
                                                                <div className="mdl-cell mdl-cell--6-col field">{item}</div>
                                                                <div className="mdl-cell mdl-cell--6-col data">{this.string_date}</div>
                                                            </div>
                                                        </div>
                                                </div> 
                                            )
                                        }
                                    })
                            }
                        </div>
                        {
                            // (this.state.data["Date"].getTime() < this.today.getTime())? (console.log(true)):(console.log(false))
                            console.log(this.submit_time)
                        }
                        {
                            console.log(this.today)
                        }
                        {
                            this.accept
                        }
                        {
                            this.reject
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default History_Box;
