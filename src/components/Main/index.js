import React from "react";
// import { NavLink } from 'react-router-dom';
import "./styles.css";
import logo from "./../../logo.PNG";
// import { Redirect } from 'react-router-dom';


class Main extends React.Component{


render() {
  return(
<div className="mainPage">
  <h1 className="mainH1">Welcome to Bubblify</h1>
    <img className="mainLogo" src={ logo }></img>
</div>



  )}
}
export default Main;