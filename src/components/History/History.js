import  React,{ Component } from "react";
import NavBar from '../NavBar'
import History_Box from './History_box'
import {Grid,Row,Col} from 'react-bootstrap'
import './../../cssfiles/History.css'
import Axios from "axios";


class History extends Component{
    constructor(props){
        super(props)
        this.state={
            histData:[],
            Data : []
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
        Axios.get('http://localhost:4000/requests/extraClasses/getitems').then((res)=>{
            console.log(res)
            this.setState({histData:[]})
            // this.setState({histData:res.data})
        })
    }

    placements= ()=>{
        console.log("placements Clicked")
        Axios.get("http://localhost:4000/requests/placements/getitems").then((res)=>{
            console.log(res)
            this.setState({histData:[]})
            // this.setState({histData:res.data})
        })
    }

    workshops= ()=>{
        console.log("workshops Clicked")
        Axios.get('http://localhost:4000/requests/workshops/getitems').then((res)=>{
            console.log(res)
            this.setState({histData:[]})
            // this.setState({histData:res.data})
        })
    }
    midsems= ()=>{
        console.log("midsems Clicked")
        Axios.get('http://localhost:4000/requests/midsem/getitems').then((res)=>{
            console.log(res)
            this.setState({histData:[]})
            // this.setState({histData:res.data})
        })
    }

    compre= ()=>{
        console.log("compre Clicked")
        Axios.get('http://localhost:4000/requests/compre/getitems').then((res)=>{
            console.log(res)
            this.setState({histData:[]})
            // this.setState({histData:res.data})
        })
    }

    render(){
        return(
             <div>
                <NavBar/>
                <div className="parent"> 
                    <div className="tab">
                        <button id="Classes" className="tablinks" onClick = {this.extraClasses}>Extra Classes</button>
                        <button id="Extra Classes" className="tablinks" onClick = {this.placements}>Placements</button>
                        <button id="Placements" className="tablinks" onClick = {this.workshops}>Workshops</button>
                        <button id="Events" className="tablinks" onClick = {this.midsems}>Midsems</button>
                        <button id="Non Campus" className="tablinks" onClick = {this.compre}>Compre</button>
                    </div>

                    <div id="search_space" className="tabcontent">
                        <div className = "searchBar"> {/*float top and bottom*/}
                            <input type="text" placeholder = "Search ..."/>
                            <button type="submit">
                                <i className="fa fa-search fa-2x"></i>
                            </button>
                        </div>
                        <div className = "bottom-content">
                            {
                                this.state.histData.map((item,index)=>{
                                    return(
                                        <div className="histBoxOuter" key={index}>
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





