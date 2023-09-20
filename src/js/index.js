//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let counter = 0

setInterval (() => {

    let one = Math.floor(counter / 1 % 10)
    let two = Math.floor(counter / 10 % 10)
    let three = Math.floor(counter / 100 % 10)
    let four = Math.floor(counter / 1000 % 10)

    counter++

    //render your react application
ReactDOM.render(<Home one={one} two={two} three={three} four={four} />, document.querySelector("#app"));

    
}, 1000)
