import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";



class Checkout extends React.Component{
    render(){
        return(
            <div>
            <h1 className="h1Bundles">Choose Checkout Option</h1>
            <div className="checkoutDiv">
            <div>
                <NavLink
                className="checkoutbtnopt"
                // activeClassName="is-active"
                to="/cart/checkout/deliver"
                exact>
            Delivered
            </NavLink>
            <NavLink
                className="checkoutbtnopt"
                // activeClassName="is-active"
                to="/cart/checkout/pickup"
                exact>
            Pickup
            </NavLink>
            </div>
            </div>
            </div>
        )
    }
}


export default Checkout;