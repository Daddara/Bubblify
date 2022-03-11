import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.css";


class Checkout extends React.Component{
    render(){
        return(
            // Store Pickup or Delivered
            <div>Checkout
                <NavLink
                className="checkoutbtnopt"
                // activeClassName="is-active"
                to="/cart/checkout/deliver"
                exact="true">
            Delivered
            </NavLink>
            <NavLink
                className="checkoutbtnopt"
                // activeClassName="is-active"
                to="/cart/checkout/pickup"
                exact="true">
            Pickup
            </NavLink>
            </div>
        )
    }
}

export default Checkout;