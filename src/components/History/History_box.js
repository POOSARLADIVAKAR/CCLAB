import React, { Component } from 'react';
import '../../cssfiles/History_Box.css';

class History_Box extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            data:props.histData,
            keys:Object.keys(props.histData)
        }
    }

    render(){
        return(
            <div>
                <div class="card">
                    <div class="card-body" >
                        <h4 class="card-title"><h1>{this.state.data[this.state.keys[0]]}</h1></h4>
                        {/* <div className="table">
                            {
                                this.state.keys.map((item,index)=>
                                {   console.log(item,index)
                                    return(
                                        <div className="tableRow" key={index}>
                                            <div className="tableCell">{item}</div>
                                            <div className="tableCell">{this.state.data[item]}</div>
                                        </div>
                                    )
                                })
                            }
                        </div> */}
                        <div >
                        {
                        this.state.keys.map((item,index)=>
                                {   console.log(item,index)
                                    return(
                                        <div className="container-History">
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
                        
                    </div>
                </div>
            </div>
        )
    }

}

export default History_Box;
