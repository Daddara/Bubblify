import React from "react";
import propTypes from 'prop-types';
import "./styles.css";
import logo from "./../../logo.PNG"


class About extends React.Component{

  render() {
    return (
        <div className="aboutContainer">
            <div className="aboutHeader">
            <h1 className="aboutTitle">About us</h1>
            <img className="aboutImg" src={ logo }></img>
            </div>
            <div className="aboutTextContainer">
            <p className="aboutText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
        </div>
        )}
}


export default About;