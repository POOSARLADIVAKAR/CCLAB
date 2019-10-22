import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login.js'


ReactDOM.render(<Login prop1="hello" prop2="hello" />, document.getElementById('root'));

// function fun(){
//     ReactDOM.render(<App />, document.getElementById('root'));
// }
// setInterval(,5000);
// if(false){
    //here authenticate and pass information as props either admin or not based on load navbar
    
// }


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
