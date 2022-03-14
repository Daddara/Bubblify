import React from "react";
import { NavLink } from "react-router-dom";
import cart from "./../../whitecart.png";
import logo from "./../../logo.PNG";
import {connect} from "react-redux";
import { getCounter } from '../../actions/getCartAction'
import "./styles.css";



class NavLinks extends React.Component{
    state ={
        
    }
    render(){
        return(
          
    <ul className="nav-links">
        <NavLink className="navbar-item" to ="/">
        <li className="logoContainer"><img className="logo" src={logo}></img><h1 className="title">Bubblify</h1></li>
        </NavLink>
        <li>
            <NavLink
                className="products navbar-item"
                // activeClassName="is-active"
                to="/bubbles"
                exact>
            Products
            </NavLink>
            {/* <a href="#">Home</a> */}
        </li>
        <li>
            <NavLink
                className="bundles navbar-item"
                // activeClassName="is-active"
                to="/bundles"
                exact>
                Bundles
            </NavLink>
        </li>
        <li>
            <NavLink
                className="about navbar-item"
                // activeClassName="is-active"
                to="/about"
                exact>
                About Us
            </NavLink>
        </li>
        <li>
            <NavLink
                className="cart navbar-item"
                // activeClassName="is-active"
                to="/cart"
                exact>
                <img className="cart" src={cart}></img>
                <i className="Num">{this.props.counter}</i>
               
            </NavLink>
        </li>
    </ul>
    )}
}

const mapStateToProps = (state) => {
    return {counter: state.counter}
  }
  
  const mapDispatchToProps = {
      getCounter
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (NavLinks);