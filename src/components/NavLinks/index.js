import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import cart from "./../../whitecart.png";
import logo from "./../../logo.PNG"
const NavLinks = () => {
    return(
          
    <ul className="nav-links">
        <li><img className="logo" src={logo}></img></li>
        <li className="title"><h1 className="wiki"></h1></li>
        <li>
            <NavLink
                className="products navbar-item"
                // activeClassName="is-active"
                to="/bubbles"
                exact="true">
            Products
            </NavLink>
            {/* <a href="#">Home</a> */}
        </li>
        <li>
            <NavLink
                className="bundles navbar-item"
                // activeClassName="is-active"
                to="/bundles"
                exact="true">
                Bundles
            </NavLink>
        </li>
        <li>
            <NavLink
                className="about navbar-item"
                // activeClassName="is-active"
                to="/"
                exact="true">
                About Us
            </NavLink>
        </li>
        <li>
            <NavLink
                className="cart navbar-item"
                // activeClassName="is-active"
                to="/"
                exact="true">
                <img className="cart" src={cart}></img>
            </NavLink>
        </li>
    </ul>
    )
}

export default NavLinks;