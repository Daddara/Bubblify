import React from "react";
import { NavLink } from "react-router-dom";
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
                <h1 className="h1Bundles">Cart Items</h1>
                <div className="cartDiv">
                    {this.state.cart &&
                    this.state.cart.map((item, index) => {

                    if(item.hasOwnProperty("bundle")){
                return (
                        <div key={item.bundle.id}  className="CartItem">
                            <div>
                                <h2 className="Heading">{item.bundle.name}</h2>
                                <p className="BubblePrice">Price: {item.bundle.price} kr</p>
                            </div>
                        </div>
                    );
                    }
                    else{
                        return (
                        <div key={item.bubble.id} className="CartItem">
                            <div>
                                <h2 className="Heading">{item.bubble.name}</h2>
                                <p className="BubblePrice">Price: {item.bubble.price} kr</p>
                            </div>
                        </div>
                    );
                    }
                    })}
                    <NavLink className="checkoutbtn" to="/cart/checkout" exact>Proceed to Checkout</NavLink>  
                </div>
            </div>   
        )
    }
    else{
        return (
            <div>
                <h1 className="h1Bundles">No items in cart</h1>
            </div>
        )
    }
}}

export default Cart;