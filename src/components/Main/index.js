import React from "react";
// import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import "./styles.css";
import logo from "./../../logo.PNG";
// import { Redirect } from 'react-router-dom';


class Main extends React.Component{


render() {
  return(
<div className="mainPage">
    <img className="mainLogo" src={ logo }></img>
</div>



  )}
}
export default Main;