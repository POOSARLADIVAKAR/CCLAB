import React, { Component} from 'react'
import NavBar from './NavBar'
import Nav_user from './Nav_user'
import './../cssfiles/Resource.css'

var jwt = require("jsonwebtoken");

class Resources extends Component{
    constructor(props){
        super(props)
        this.state = { Nav_bar : <Nav_user/>,
            data: [  {"ldata":"Systems","rdata":"40"},
                    {"ldata":"Projector","rdata":"2"},
                    {"ldata":"Seats","rdata":"40"},
                    {"ldata":"Linux","rdata":"20"}
                ],
            editing:[false,false,false,false],
            admin:false

        }   
    }
    componentWillMount(){
        console.log("IN home component")
        const token = window.localStorage.getItem("cclab-token")
        if((token=="")||(token==null)){
            this.props.history.push("/")
        }
        else{
            const decode_token = jwt.decode(token)
            console.log("in resources page")
            console.log(decode_token)
            if(decode_token.email == "f20170209@hyderabad.bits-pilani.ac.in"){
                this.setState({Nav_bar : <NavBar/>})
                this.setState({admin:true})
            }
        }
    }

    edit = (e)=>{
        e.preventDefault()
        console.log(e.target.id)

        let buton=document.getElementById(e.target.id)
        // let n=parseInt(e.target.id.substring(-3,-1),10)
        // console.log(n)
        let n=999
        let rsrc
        let qtity
        let index=999-n
        let newEditingArr=this.state.editing
        newEditingArr[index]?(rsrc=document.getElementById("isome-0-"+n)):(rsrc=0)
        newEditingArr[index]?(qtity=document.getElementById("isome-1-"+n)):(qtity=0)

        let newDataArr=this.state.data
        newEditingArr[index]?(newDataArr[index].ldata=rsrc.value):(newDataArr[index].ldata=newDataArr[index].ldata)
        newEditingArr[index]?(newDataArr[index].rdata=qtity.value):(newDataArr[index].rdata=newDataArr[index].rdata)

        newEditingArr[index]?(buton.innerHTML="edit" ): (buton.innerHTML="save" )
        newEditingArr[index]?newEditingArr[index]=false : newEditingArr[index]=true
        
        this.setState({data:newDataArr})
        this.setState({editing:newEditingArr})        
    }

    render(){
        return(
            <div>
                {this.state.Nav_bar}
                <ul className="flex-container">
                    <li className="flex-item ">D208</li>
                    <li className="flex-item ">D202</li>
                    <li className="flex-item ">D203</li>
                    <li className="flex-item ">D2019</li>
                    <li className="flex-item ">D205</li>
                    <li className="flex-item ">D206</li>
                </ul>
                <div className="table">
                    <div className="thead">
                        <div className="tr">
                            <div className="td">Resource</div>
                            <div className="td">Quantity</div>
                            {
                                this.state.admin?(<div className="td"></div>):("")
                            }
                        </div>
                    </div>
                        <form className="tr"  >
                            {/* ids should be like some-0-999 some -1-999 some-2-999 for the 3 cells of the 1st row */}
                            {
                                this.state.editing[0]?<div className="td"><input type="text" id="isome-0-999" defaultValue={this.state.data[0].ldata}></input></div>
                                                        :
                                                        <div className="td" id="some-0-999">{this.state.data[0].ldata}</div>
                            }
                            {
                                this.state.editing[0]?<div className="td"><input type="text" id="isome-1-999" defaultValue={this.state.data[0].rdata}></input></div>
                                                        :
                                                        <div className="td" id="some-1-999">{this.state.data[0].rdata}</div>
                            }
                            {                            
                                this.state.admin?this(<div className="td action"><button id="some-2-999" onClick={this.edit} type="button" >edit</button></div>)
                                                    :
                                                    ("")
                            }
                        </form>
                        {/* <form className="tr">
                            <div className="td">Projector</div>
                            <div className="td">2</div>
                            <div className="td action"><button id="projector" type="button" onClick={this.edit}>edit</button></div>
                        </form>

                        <form className="tr">
                            <div className="td">Seats</div>
                            <div className="td">40</div>
                            <div className="td action"><button type="button" id="seats" onClick={this.edit}>edit</button></div>
                        </form>
                        <form className="tr">
                            <div className="td">Linux</div>
                            <div className="td">20</div>
                            <div className="td action"><button type="button" id="linux" onClick={this.edit}>edit</button></div>
                        </form> */}
                    </div>
            </div>
        );
    }
}

export default Resources;
