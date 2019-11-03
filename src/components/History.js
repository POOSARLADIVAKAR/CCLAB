import  React,{ Component } from "react";
import NavBar from './NavBar'
import History_Box from './History_Box'
import {Grid,Row,Col} from 'react-bootstrap'
import '../cssfiles/History.css'


class History extends Component{
    constructor(props){
        super(props)
        this.state={
            // data: [club=["crux","ad astra","physics"],room=["D207","D208","D207B"],date=["11-10-19","12-10-19","13-10-19"]]
            data:[  {room:"D208",club:"crux",date:"12-10-19"},
                    {room:"D208",club:"crux",date:"12-10-19"},
                    {room:"D208",club:"crux",date:"12-10-19"}
                 ]
        }
        
    }
    
    componentWillMount(){
        // console.log("IN history component")
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
                        <div className = "bottom-content" id="histClubs">
                            {this.state.data.map((item)=>(
                                <History_Box club={item.club} date={item.date} room={item.room} />
                            ))}
                        </div>

                        {/* <Grid>
                            
                        </Grid> */}

                    </div>
                </div>
            </div>
        );
    }
}

export default History;
