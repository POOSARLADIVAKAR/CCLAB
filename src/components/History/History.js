import  React,{ Component } from "react";
import NavBar from '../NavBar'
import History_Box from './History_box'
import {Grid,Row,Col} from 'react-bootstrap'
import './../../cssfiles/History.css'


class History extends Component{
    constructor(props){
        super(props)
        this.state={
            // data: [club=["crux","ad astra","physics"],room=["D207","D208","D207B"],date=["11-10-19","12-10-19","13-10-19"]]
            histData:[  {workshop:"Crux",faculty:"Pranav Rajagopalan",date:"11th Nov 19",time:"5-8PM"},
            {workshop:"CSIO coding programming",faculty:"Ramakrishna Ganeshan ",date:"11th Nov 19",time:"5-8PM"},
            {workshop:"Atmos Events",faculty:"Pranav Rajagopalan",date:"11th Nov 19",time:"5-8PM"},
            {workshop:"Atmos Events",faculty:"Pranav Rajagopalan",date:"11th Nov 19",time:"5-8PM"},
            {workshop:"NSS",faculty:"Pranav Rajagopalan",date:"11th Nov 19",time:"5-8PM"},
            {workshop:"Evolve",faculty:"Pranav Rajagopalan",date:"16th Dec 19",time:"10AM-6PM"},
            {workshop:"NSS",faculty:"Pranav Rajagopalan",date:"11th Nov 19",time:"5-8PM"},
            {workshop:"NSS",faculty:"Pranav Rajagopalan",date:"11th Nov 19",time:"5-8PM"},
            {workshop:"NSS",faculty:"Pranav Rajagopalan",date:"11th Nov 19",time:"5-8PM"},
            {workshop:"NSS",faculty:"Pranav Rajagopalan",date:"11th Nov 19",time:"5-8PM"},
            {workshop:"NSS",faculty:"Pranav Rajagopalan",date:"11th Nov 19",time:"5-8PM"}
                 ]
        }
    }
    
    componentWillMount(){
        console.log("IN home component")
        const token = window.localStorage.getItem("cclab-token")
        if((token=="")||(token==null)){
            this.props.history.push("/")
        }
    }

    extraClasses= ()=> {
        console.log("Extra Classes Clicked")
    }

    placements= ()=>{
        console.log("placements Clicked")
    }

    workshops= ()=>{
        console.log("workshops Clicked")
    }

    midsems= ()=>{
        console.log("midsems Clicked")
    }

    compre= ()=>{
        console.log("compre Clicked")
    }

    render(){
        return(
             <div>
                <NavBar/>
                <div className="parent"> 
                    <div className="tab">
                        <button id="Classes" className="tablinks" >Classes</button>
                        <button id="Extra Classes"className="tablinks" >Extra Classes</button>
                        <button id="Placements" className="tablinks" >Placements</button>
                        <button id="Events" className="tablinks" >Events</button>
                        <button id="Non Campus" className="tablinks" >Non Campus</button>
                    </div>

                    <div id="search_space" className="tabcontent">
                        <div className = "searchBar"> {/*float top and bottom*/}
                            <input type="text" placeholder = "Search ..."/>
                            <button type="submit">
                                <i className="fa fa-search fa-2x"></i>
                            </button>
                        </div>
                        <div className = "bottom-content">
                            {/*<Box/> Load component*/}
                            {
                                this.state.histData.map((item,index)=>{
                                    return(
                                        <div className="histBoxOuter">
                                            <History_Box histData={item}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default History;





