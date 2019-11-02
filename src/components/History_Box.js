import React, { Component } from 'react';
import './../cssfiles/History_Box.css';

class History_Box extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            club: props.club,
            room: props.room,
            date: props.date
        }
    }

    render(){
        return(
            <div class id="histBox">
                Hello
                <div>{this.state.club}</div>
                <div>{this.state.room}</div>
                <div>{this.state.date}</div>
            </div>
        )
    }

}

export default History_Box;