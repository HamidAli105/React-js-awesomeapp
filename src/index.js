// old method include file
// var React = require('react');
// var ReactDOM = require('react-dom');

// new method include file
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<React.Fragment> 
                <h1>Hello World!!</h1> <h2>Please Subscribe my channel </h2> <p>Plz Subscribe and like </p>
                </React.Fragment>, document.getElementById("root"));

const name = "Hamid Ali";
const phn = "03471889764";

ReactDOM.render(<><h1> My Name is {name} </h1> <h2>My Phone  Number {phn}</h2><span>Name Phone Number {name + " " + phn}</span><p>My lucky number { 786 + 105 }</p></>,document.getElementById("myname"));

// template literal
ReactDOM.render(<><span>Name Phone Number {`${name} ${phn}`}</span></>,document.getElementById("myname"));

// Current Date Time
const nme = "Hamid Ali Jutt";
const currentDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link1 = "https://www.codingpixel.com/";
const heading = {
    color: "#fa9191",
    textTransform: "capitalize",
    textAlign: "center",
};
ReactDOM.render(<>
               <h1 className="heading">My Name is {nme} </h1>
               <h1 style={heading}>My Name is {nme} </h1>
                <h2>Current Date: {currentDate}</h2>
                <h3>Current Time: {currTime}</h3></>, document.getElementById('dateTime'));

ReactDOM.render(<h1 contentEditable="true">My Name is Hamid Ali</h1>, document.getElementById('editable'));

ReactDOM.render(<><img src={img1} alt='randonImg' /> <img src={img2} alt='randonImg' /><a href={link1} title="Coding Pixel" target="_"> <img src={img3} alt='randonImg' /> </a></> , document.getElementById('img'));

// first year second month third date last time 2022,11,17, 20
let curDate = new Date();
curDate = curDate.getHours();
let greething = "";
const cssStyle = {};
if (curDate >= 1 && curDate < 12){
    greething = "Good Morning";
    cssStyle.color = 'green';   
} else if (curDate >= 12 && curDate < 19){
    greething = "Good After Noon";
    cssStyle.color = 'orange'; 
} else {
    greething = "Good Night";
    cssStyle.color = 'black'; 
}

ReactDOM.render(<h1>Hello Sir, <span style={cssStyle}>{greething} </span></h1>, document.getElementById('gdmrng'));

ReactDOM.render( <>
                  <App/> 
                
                  </>, document.getElementById('component'));