import  React,{ Component } from "react"
import {Navbar} from './NavBar'
// import {Nav, Tab,Row,Col} from 'react-bootstrap'


class History extends Component{
    render(){
        return(
            <div>
            <ul class="nav nav-pills nav-stacked">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">Menu 1</a></li>
                <li><a href="#">Menu 2</a></li>
                <li><a href="#">Menu 3</a></li>
            </ul>
            </div>
        );
    }
}

export default History;
