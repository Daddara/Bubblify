import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return(
          
    <ul className="nav-links">
        <li><h1 className="wiki">Bubblify</h1></li>
        <li>
            <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/bubbles"
                exact>
            Products
            </NavLink>
            {/* <a href="#">Home</a> */}
        </li>
        <li>
            <NavLink
                className="navbar-item"
                // activeClassName="is-active"
                to="/"
                exact>
                Bundles
            </NavLink>
        </li>
        <li>
            <NavLink
                className="createboss"
                // activeClassName="is-active"
                to="/"
                exact>
                About Us
            </NavLink>
        </li>
        <li>
            <NavLink
                className="createboss"
                // activeClassName="is-active"
                to="/"
                exact>
                Cart
            </NavLink>
        </li>
    </ul>
    )
}

export default NavLinks;