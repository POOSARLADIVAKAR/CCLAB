import React, { Component} from 'react'
import NavBar from './NavBar'
class Resources extends Component{
    
    componentWillMount(){
        console.log("IN home component")
        const token = window.localStorage.getItem("cclab-token")
        if((token=="")||(token==null)){
            this.props.history.push("/")
        }
    }

    render(){
        // if((window.localStorage.getItem('cclab-token')=="")||(window.localStorage.getItem('cclab-token')==null)){
        //     this.props.history.push("/")
        // }
        return(
            <div>
                <NavBar/>
                <h1>Hello this is Resources</h1>
            </div>
        );
    }
}

export default Resources;