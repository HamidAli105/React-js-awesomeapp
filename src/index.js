// old method include file
// var React = require('react');
// var ReactDOM = require('react-dom');

// new method include file
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {add, sub, mult, div} from './Calc';
// method one import and called jsx function
import App, {reactlearning, myname} from './App';
// method two imort and called jsx function
// import * as ques from './App';

ReactDOM.render( <> <App/> <h1>{reactlearning}</h1><h2>My Name is {myname()}</h2> </>, document.getElementById('component'));
ReactDOM.render(<><ul><li>Sum of two nbr is {add(40, 50)}</li><li>{sub(100, 30)}</li><li>{mult(40, 4)}</li><li>{div(50, 5)}</li></ul></>, document.getElementById('calculator'));
// ReactDOM.render( <> <ques.default/> <h1>{ques.reactlearning}</h1><h2>My Name is {ques.myname()}</h2> </>, document.getElementById('component'));



ReactDOM.render(<> <Card 
                    imgsrc="https://picsum.photos/200/300"
                    title="A NetFlix Original Series"
                    sname="DARK One" /> 
                    <Card 
                    imgsrc="https://picsum.photos/id/7/4728/3168"
                    title="A NetFlix Original Series"
                    sname="DARK Two"
                    /> 
                    <Card 
                    imgsrc="https://picsum.photos/id/6/5000/3333"
                    title="A NetFlix Original Series"
                    sname="DARK Three"
                    /> </>, document.getElementById('netflix'));