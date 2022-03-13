import React from "react";
import { NavLink } from "react-router-dom";


class OrderReview extends React.Component{
    state = {
        order: JSON.parse(localStorage.getItem('cart'))
    }

    render(){
        return(
            // Render here a sort of list of the cart
            <div><NavLink
            className="checkoutbtn"
            // activeClassName="is-active"
            to="/order/success"
            exact>
        Confirm
        </NavLink></div>
        )
    }
}

export default OrderReview;