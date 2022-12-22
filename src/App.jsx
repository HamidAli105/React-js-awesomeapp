import React from "react";
import Heading from './Heading';
import Para from './Para';
import OrderList from './OrderList';

function App () {

const name = "Hamid Ali";
const phn = "03471889764";

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

    return (
         <>
         <h1 style={heading}>Hello World!!</h1> <h2>Please Subscribe my channel </h2> <p>Plz Subscribe and like </p>
         <h1> My Name is {name} </h1> <h2>My Phone  Number {phn}</h2><span>Name Phone Number {name + " " + phn}</span><p>My lucky number { 786 + 105 }</p>
         <span>Name Phone Number {`${name} ${phn}`}</span>
         <h1 className="heading">My Name is {nme} </h1>
         <h1 contentEditable="true">My Name is Hamid Ali</h1>
         <img src={img1} alt='randonImg' /> <img src={img2} alt='randonImg' /><a href={link1} title="Coding Pixel" target="_"> <img src={img3} alt='randonImg' /> </a>
         <h1>Hello Sir, <span style={cssStyle}>{greething} </span></h1>
         <h2>Current Date: {currentDate}</h2>
         <h3>Current Time: {currTime}</h3>
           <Heading />
           <Para />
           <OrderList />
           <Para />
         </>
        );
   }

  const reactlearning = "React Learning";

  function myname (){
    let nme = "Hamid-Ali";
    return nme;
  }

   export default App;

   export {reactlearning, myname};
  