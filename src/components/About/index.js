import React from "react";
import propTypes from 'prop-types';
import "./styles.css";
import logo from "./../../logo.PNG"



class About extends React.Component{

  render() {
    return (
        <div className="aboutContainer">
            <div className="aboutHeader">
            <h1 className="aboutTitle" >About us</h1>
            <img className="aboutImg" src={ logo }></img>
            </div>
            <div className="aboutTextContainer">
            <p className="aboutText">A major catastrophe has just happened! All the key players in the bubble industry have been 
relying on the same manufacturer which just recently went through a really bad lawsuit which 
resulted in them going bankrupt! It is already May and the summer is almost here and kids want 
their bubbles! A new emerging company called Bubblify have decided to jump on this chance 
and become the new big player in the bubble industry. They want their business to go mainly 
through their website, which has need been made yet... That’s where you come in! You are going 
to build a website for them before the summer season begins. Please, do not disappoint them nor 
all the soon-to-be bubbleless children... </p>
</div>
        </div>
            )}
}



export default About;