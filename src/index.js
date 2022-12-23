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
import Card from './Cards';
import Sdata from './Sdata';
console.log(Sdata[0].sname);

ReactDOM.render( <> <App/> <h1>{reactlearning}</h1><h2>My Name is {myname()}</h2> </>, document.getElementById('component'));
ReactDOM.render(<><ul><li>Sum of two nbr is {add(40, 50)}</li><li>{sub(100, 30)}</li><li>{mult(40, 4)}</li><li>{div(50, 5)}</li></ul></>, document.getElementById('calculator'));
// ReactDOM.render( <> <ques.default/> <h1>{ques.reactlearning}</h1><h2>My Name is {ques.myname()}</h2> </>, document.getElementById('component'));

ReactDOM.render(<> 
                    <h1 className="heading">List of top 5 netflix Series in 2023</h1>
                    <div className="netflex-box">
                   <Card 
                    imgsrc={Sdata[0].imgscr}
                    title={Sdata[0].title}
                    sname={Sdata[0].sname}
                    link={Sdata[0].links}
                     /> 
                     <Card 
                    imgsrc={Sdata[1].imgscr}
                    title={Sdata[1].title}
                    sname={Sdata[1].sname}
                    link={Sdata[1].links}
                     /> 
                     <Card 
                    imgsrc={Sdata[2].imgscr}
                    title={Sdata[2].title}
                    sname={Sdata[2].sname}
                    link={Sdata[2].links}
                     /> 
                     <Card 
                    imgsrc={Sdata[3].imgscr}
                    title={Sdata[3].title}
                    sname={Sdata[3].sname}
                    link={Sdata[3].links}
                     /> 
                     <Card 
                    imgsrc={Sdata[4].imgscr}
                    title={Sdata[4].title}
                    sname={Sdata[4].sname}
                    link={Sdata[4].links}
                     /> 

                    </div></>, document.getElementById('netflix'));