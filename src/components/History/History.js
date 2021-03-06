import  React,{ Component } from "react";
import NavBar from '../NavBar'
import HistoryBox from './History_box'
import './../../cssfiles/History.css'
import Axios from "axios";


class History extends Component{
    constructor(props){
        super(props)
        this.state={
            histData:[],
            Data : [],
            tab: "extraClasses"
        }
    }
    
    UNSAFE_componentWillMount(){
        const token = window.localStorage.getItem("cclab-token")
        if((token==="")||(token===null)){
            this.props.history.push("/")
        }
    }

    extraClasses= (e)=> {
        // console.log("Extra Classes Clicked")
        // Axios.get('http://localhost:4000/requests/extraClasses/getitems').then((res)=>{
        Axios.get('/requests/extraClasses/getitems').then((res)=>{
            // console.log(res)
            this.setState({histData:[]})
            this.setState({histData:res.data})
            this.setState({tab:"extraClasses"})
        })
    }

    placements= (e)=>{
        // console.log("placements Clicked")
        // Axios.get("http://localhost:4000/requests/placements/getitems").then((res)=>{
        Axios.get("/requests/placements/getitems").then((res)=>{
            // console.log(res)
            this.setState({histData:[]})
            // this.setState({histData:res.data})
            this.setState({tab:"placements"})
        })
    }

    workshops= (e)=>{
        // console.log("workshops Clicked")
        // Axios.get('http://localhost:4000/requests/workshops/getitems').then((res)=>{
        Axios.get('/requests/workshops/getitems').then((res)=>{
            // console.log(res)
            this.setState({histData:[]})
            this.setState({histData:res.data})
            this.setState({tab:"workshops"})
        })
    }
    midsems= (e)=>{
        // console.log("midsems Clicked")
        // Axios.get('http://localhost:4000/requests/midsem/getitems').then((res)=>{
        Axios.get('/requests/midsem/getitems').then((res)=>{
            // console.log(res)
            this.setState({histData:[]})
            this.setState({histData:res.data})
            this.setState({tab:"midsems"})
        })
    }

    compre= (e)=>{
        // console.log("compre Clicked")
        // Axios.get('http://localhost:4000/requests/compre/getitems').then((res)=>{
        Axios.get('/requests/compre/getitems').then((res)=>{
            // console.log(res)
            this.setState({histData:[]})
            this.setState({histData:res.data})
            this.setState({tab:"compre"})
        })
    }

    requests = (e) =>{
        // console.log("requests clicked")
        // Axios.get('http://localhost:4000/requests/all').then((res)=>{
        Axios.get('/requests/all').then((res)=>{
            // console.log(res)
            this.setState({histData:[]})
            this.setState({histData:res.data})
            this.setState({tab:"newRequests"})
        })
    }

    searchClicked = ()=>{
        // console.log("search clicked")
        var search_string = {}
        search_string["Room_no"] = document.getElementById("searchInput").value
        document.getElementById("searchInput").value = ""
        // Axios.post('http://localhost:4000/requests/'+this.state.tab+'/search',search_string).then((res)=>{
        Axios.post('/requests/'+this.state.tab+'/search',search_string).then((res)=>{
            this.setState({histData:[]})
            this.setState({histData : res.data })
        //   console.log(res.data)
        })
      }


    render(){
        return(
             <div>
                <NavBar/>
                <div className="parent"> 
                    <div className="tab">
                        <button id="extraClasses" className="tablinks" onClick = {this.extraClasses}>Extra Classes</button>
                        <button id="placements" className="tablinks" onClick = {this.placements}>Placements</button>
                        <button id="workshops" className="tablinks" onClick = {this.workshops}>Workshops</button>
                        <button id="events" className="tablinks" onClick = {this.midsems}>Midsems</button>
                        <button id="compre" className="tablinks" onClick = {this.compre}>Compre</button>
                        <button id="requests" className="tablinks" onClick = {this.requests}>Requests</button>
                    </div>

                    <div id="search_space" className="tabcontent">
                        <div className = "searchBar"> {/*float top and bottom*/}
                            <input type="text" id="searchInput" placeholder = "Enter Room No to search"/>
                            <button type="submit" onClick={this.searchClicked}>
                                <i className="fa fa-search fa-2x"></i>
                            </button>
                        </div>
                        <div className = "bottom-content">
                            {
                                this.state.histData.map((item,index)=>{
                                    return(
                                        <div className="histBoxOuter" key={index}>
                                            <HistoryBox histData={item}/>
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





