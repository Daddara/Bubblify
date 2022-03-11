import React from "react";
import { NavLink } from "react-router-dom";
import Bundles from "../Bundles";
import styles from "./styles.css";


class Cart extends React.Component{
    state ={
        cart: JSON.parse(localStorage.getItem('cart'))
    }
    render(){
        console.log(this.state.cart);
        return(
            // Render all items from the "cart" section in localstorage
            // TODO: Implement single bubble differently
            <div>
                <div className="cartDiv">
                {this.state.cart &&
                this.state.cart.map((item, index) => {
                console.log(item.bundle.bubbleLis)
                return (
                    <div className="bundlebubble" key={item.bundle.id}>
                    <div className="textbox">
                    <h2>{item.bundle.name}</h2>
                    <p>{item.bundle.price} kr</p>
                    </div>
                    </div>
                );
                
                })}
                    
                </div>
                <NavLink
                    className="checkoutbtn"
                    // activeClassName="is-active"
                    to="/cart/checkout"
                    exact="true">
                Checkout
                </NavLink>
            </div>
            // Some Navlink here to checkout
            
        )
    }
    
}

export default Cart;