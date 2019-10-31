import  React,{ Component } from "react";
import NavBar from './NavBar'
// import Search from '../Assets/search.png'
// import {Nav, Tab,Row,Col} from 'react-bootstrap'


class History extends Component{
    constructor(props){
        super(props)
        
    }
    
    componentWillMount(){
        console.log("IN home component")
        const token = window.localStorage.getItem("cclab-token")
        if((token=="")||(token==null)){
            this.props.history.push("/")
        }
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default History;
