import React, { Component } from 'react';
import '../../cssfiles/History_Box.css';

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
    }

    render(){
        return(
            <div>
                <div className="card">
                    <div className="card-body" >
                        <h1 className="card-title">{this.state.data[this.state.keys[0]]}</h1>
                        <div >
                        {console.log("History box called")}
                        {
                        this.state.keys.map((item,index)=>
                                 {   //console.log(item,index)
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
                                })
                        }
                        </div>
                        {
                            (this.state.data["date"]<Date()) ? (<button type = "button">Cancel</button>)
                            :
                            ("")
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default History_Box;
