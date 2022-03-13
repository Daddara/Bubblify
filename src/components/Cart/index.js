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
        if(this.state.cart !== null){
        return(
            // Render all items from the "cart" section in localstorage
            // TODO: Implement single bubble differently
            <div>
                <div className="cartDiv">
                {this.state.cart &&
                this.state.cart.map((item, index) => {
                // console.log(item.bundle.bubbleLis)
                if(item.hasOwnProperty("bundle")){
                return (
                    <div className="bundlebubble" key={"bundle" + item.bundle.id}>
                    <div className="textbox">
                    <h2>{item.bundle.counter} x {item.bundle.name}</h2>
                    <p>{item.bundle.price} kr</p>
                    </div>
                    </div>
                );
                }
                else if(item.hasOwnProperty("bubble")){
                    return (
                    <div className="bundlebubble" key={"bubble" + item.bubble.id}>
                    <div className="textbox">
                    <h2>{item.bubble.counter} x {item.bubble.name}</h2>
                    <p>{item.bubble.price} kr</p>
                    </div>
                    </div>
                );
                }
                })}
                
                
                    
                </div>
                <NavLink
                    className="checkoutbtn"
                    // activeClassName="is-active"
                    to="/cart/checkout"
                    exact>
                Checkout
                </NavLink>
            </div>
            // Some Navlink here to checkout
            
        )
    }
    else{
        return (
            <div>No items in cart</div>
        )
    }
}
    
}

export default Cart;